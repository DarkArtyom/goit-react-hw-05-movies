import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastList,
  CastItems,
  CardContainer,
  Section,
  CastImg,
} from './Cast.styled';
import { getFilmCast } from 'components/Services/Fetches';

const Cast = () => {
  const { movieId } = useParams();
  const [filmCast, setFilmCast] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async function () {
      try {
        const fetchFilmCast = await getFilmCast({ movieId }, signal);
        setFilmCast(p => [...p, ...fetchFilmCast.data.cast]);
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
    <Section>
      <CastList>
        {filmCast.map(cast => (
          <CastItems key={cast.id}>
            <CardContainer>
              <CastImg
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt=""
                width="100"
                height="150"
              />
              <p>
                <b>Name:</b> {cast.name}
              </p>
              <p>
                <b>Character:</b> {cast.character}
              </p>
            </CardContainer>
          </CastItems>
        ))}
      </CastList>
    </Section>
  );
};

export default Cast;
