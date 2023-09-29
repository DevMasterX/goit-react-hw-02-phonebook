import React from 'react';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          placeholder="Search contacts..."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
