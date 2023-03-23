import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'utils/getFunctions';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(({ data: { results } }) => {
        setReviews(results);
      })
      .catch();
  }, [movieId]);

  return (
    reviews && (
      <ul>
        {reviews.map(
          ({ id, content, author, author_details: { avatar_path } }) => {
            return (
              <li key={id}>
                <div>
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
                </div>
                <p>{content}</p>
              </li>
            );
          }
        )}
      </ul>
    )
  );
};

export default Reviews;
