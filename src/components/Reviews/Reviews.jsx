import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'utils/getFunctions';
import { List, Rewiev, Header, Text } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    getReviews(movieId, abortController)
      .then(({ data: { results } }) => {
        setReviews(results);
      })
      .catch();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    reviews && (
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
    )
  );
};

export default Reviews;
