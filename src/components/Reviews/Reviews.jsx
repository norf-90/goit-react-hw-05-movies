import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'utils/getFunctions';
import { lazy } from 'react';
const List = lazy(() =>
  import('./Reviews.styled').then(module => ({
    ...module,
    default: module.List,
  }))
);
const Rewiev = lazy(() =>
  import('./Reviews.styled').then(module => ({
    ...module,
    default: module.Rewiev,
  }))
);
const Header = lazy(() =>
  import('./Reviews.styled').then(module => ({
    ...module,
    default: module.Header,
  }))
);
const Text = lazy(() =>
  import('./Reviews.styled').then(module => ({
    ...module,
    default: module.Text,
  }))
);

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    const abortController = new AbortController();
    getReviews(movieId, abortController)
      .then(({ data: { results } }) => {
        setReviews(results);
        if (!results.length) throw new Error();
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'rejected' && <p>Nothing to show</p>}
      {status === 'resolved' && reviews.length && (
        <List>
          {reviews.map(
            ({ id, content, author, author_details: { avatar_path } }) => {
              return (
                <Rewiev key={id}>
                  <Header>
                    {avatar_path && (
                      <img
                        src={
                          avatar_path.includes('http')
                            ? avatar_path.slice(1)
                            : `https://image.tmdb.org/t/p/w500${avatar_path}`
                        }
                        alt={`${author} avatar`}
                        width="50"
                      />
                    )}
                    <p>{author}</p>
                  </Header>
                  <Text>{content}</Text>
                </Rewiev>
              );
            }
          )}
        </List>
      )}
    </>
  );
};

export default Reviews;
