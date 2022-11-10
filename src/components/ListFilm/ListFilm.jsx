import { StyledLink } from '../Layout/Layout.styled';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const ListFilm = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </li>
      ))}
    </ul>
  );
};

export default ListFilm;

ListFilm.propTypes = {
  films: PropTypes.array.isRequired,
};
