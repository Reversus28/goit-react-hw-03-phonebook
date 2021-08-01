import React from 'react';
import { Wrapper, Title, Item, Contact, Button } from './Contacts.style';

function Contacts({ contacts = [], children, onClick }) {
  return (
    <Wrapper>
      <Title>Contacts</Title>
      {children}
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Contact>
                {name}: {number}
              </Contact>
              <Button
                onClick={() => {
                  onClick(id);
                }}
              >
                Delete
              </Button>
            </Item>
          );
        })}
      </ul>
    </Wrapper>
  );
}

export default Contacts;
