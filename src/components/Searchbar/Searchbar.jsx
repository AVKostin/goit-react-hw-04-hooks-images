import { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Form, Input, Button } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { Notify } from 'notiflix';

Notify.init({
  position: 'center-top',
  width: '400px',
  fontSize: '18px',
});

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      Notify.failure('please enter any query');
      return;
    }

    onSubmit(query.trim());
    setQuery('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} id="search-form">
        <Input
          type="text"
          name="searchQuery"
          autoComplete="off"
          placeholder="Free Search Images By Name..."
          value={query}
          onChange={handleQueryChange}
        />
        <Button type="submit">
          <BsSearch size={27} />
        </Button>
      </Form>
    </Wrapper>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
