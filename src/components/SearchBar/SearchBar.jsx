import {
  SearchForm,
  SearchFormButton,
  SpanButtonLabel,
  SearchInput,
  SearchFormWrap,
} from './SearchBar.styled';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ onInputSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleFilmName = event => {
    setSearchParams({ query: event.currentTarget.value.toLowerCase() });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      return alert('Enter image for search');
    }
    onInputSubmit(query);
  };

  return (
    <SearchFormWrap>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <FcSearch />
          <SpanButtonLabel>Search</SpanButtonLabel>
        </SearchFormButton>
        <SearchInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search films by name"
          value={query}
          onChange={handleFilmName}
        />
      </SearchForm>
    </SearchFormWrap>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onInputSubmit: PropTypes.func.isRequired,
};
