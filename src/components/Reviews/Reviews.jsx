import { useState, useEffect, useRef } from 'react';
import { getFilmReviews } from 'components/Services/Fetches';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [filmReview, setfilmReview] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    (async function () {
      try {
        if (isFirstRender.current) {
          isFirstRender.current = false;
          return;
        }
        const fetchReviews = await getFilmReviews({ movieId });
        setfilmReview(p => [...p, ...fetchReviews.data.results]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  if (!movieId) {
    return;
  }

  return (
    <section>
      {filmReview.length > 0 ? (
        <ul>
          {filmReview.map(review => (
            <li key={review.id}>
              <p>
                <b>Author:</b> {review.author}
              </p>
              <p>
                <b>Review:</b> {review.content}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no reviews yet</p>
      )}
    </section>
  );
};

export default Reviews;
