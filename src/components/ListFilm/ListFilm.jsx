import { StyledLink } from '../Layout/Layout.styled';
import PropTypes from 'prop-types';

const ListFilm = ({ films }) => {
  console.log(films);
  return (
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`movies/${id}`}>{title}</StyledLink>
        </li>
      ))}
    </ul>
  );
};

export default ListFilm;

ListFilm.propTypes = {
  films: PropTypes.array.isRequired,
};
