import { BsSearch } from 'react-icons/bs';
import { Form, Field, Label, Input, Button } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const submitHandler = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value.trim().toLowerCase();
    if (!query) {
      alert('Search box cannot be empty. Please enter the word.');
      return;
    }
    onSubmit(query);
    e.target.reset();
  };

  return (
    <Form onSubmit={submitHandler}>
      <Field>
        <Input type="text" name="query" autoComplete="off" placeholder=" " />
        <Label>Search movies</Label>
      </Field>
      <Button type="submit">
        <BsSearch size={24} />
      </Button>
    </Form>
  );
};
