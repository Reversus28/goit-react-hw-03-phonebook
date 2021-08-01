import React from 'react';
import { Label, Input } from './Filter.style';

function Filter({ inputSearch, onChange }) {
  return (
    <form>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={inputSearch}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
    </form>
  );
}

export default Filter;
