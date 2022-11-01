import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'utils/getMovieReviews';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current === false) {
      return;
    }
    isFirstRender.current = false;
    getMovieReviews(movieId).then(reviews => {
      reviews.map(review => {
        return setReviews(prevState => [
          ...prevState,
          { id: review.id, author: review.author, content: review.content },
        ]);
      });
    });
  }, [movieId]);
  if (reviews.length >= 1) {
    return (
      <div>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </div>
    );
  } else {
    return <div>We don't have any reviews for this movie</div>;
  }
};

export default Reviews;
