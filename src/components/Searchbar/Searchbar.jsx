import React from 'react';
import { Form, FormButton,Input } from './Searchbar.styled';


export const Searchbar = ({ onSubmit }) => {
  console.log('Form submitted');
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input
          className="input"
          name="query"
          type="text"
          // autoсomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />

        <FormButton type="submit">Search</FormButton>
      </Form>
    </div>
  );
};
