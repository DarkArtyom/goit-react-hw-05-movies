import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  CastList,
  CastItems,
  CardContainer,
  Section,
  CastImg,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [filmCast, setFilmCast] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    (async function () {
      try {
        if (isFirstRender.current) {
          isFirstRender.current = false;
          return;
        }
        const fetchFilmCast = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US`
        );
        setFilmCast(p => [...p, ...fetchFilmCast.data.cast]);
      } catch (error) {
        console.log(error);
      }
    })();
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
