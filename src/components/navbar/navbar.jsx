import React from 'react';
import styled from 'styled-components';
import { MdOutlineSearch } from 'react-icons/md';

const UpperWrapper = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  justify-content: end;
  padding: 15px 0;

  .search-wrapper {
    background-color: #f6f6f8;
    border-radius: 7px;
    padding-left: 15px;
  }

  .search {
    padding: 10px;
    border: none;
    background-color: #f6f6f8;
    border-radius: 7px;
  }
`;

const Navbar = () => {
  return (
    <UpperWrapper>
      <div className="search-wrapper">
        <MdOutlineSearch style={{ paddingTop: '10px' }} size={20} />
        <input
          className="search"
          id="outlined-basic"
          //   variant="outlined"
          label="Search"
        />
      </div>
    </UpperWrapper>
  );
};

export default Navbar;
