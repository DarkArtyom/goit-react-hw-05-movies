import { useState, useEffect } from 'react';
import { getFilmReviews } from 'components/Services/Fetches';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [filmReview, setfilmReview] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async function () {
      try {
        const fetchReviews = await getFilmReviews({ movieId }, signal);
        setfilmReview(p => [...p, ...fetchReviews.data.results]);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      controller.abort();
    };
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
