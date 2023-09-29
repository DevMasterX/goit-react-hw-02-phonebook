import React from 'react';

const Filter = () => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          placeholder="Search contacts..."
          // value={this.state.filter}
          // onChange={this.handleInputChange}
        />
      </label>
    </>
  );
};

export default Filter;
