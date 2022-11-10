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

const SearchBar = ({ onHandleSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleFilmName = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      return alert('Enter film for search');
    }
    onHandleSubmit(query);
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
          // value={query}
          onChange={e => {
            handleFilmName(e.target.value);
          }}
        />
      </SearchForm>
    </SearchFormWrap>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
