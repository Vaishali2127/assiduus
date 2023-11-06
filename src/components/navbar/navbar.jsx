import React from 'react';
import styled from 'styled-components';
import { MdOutlineSearch, MdNotifications } from 'react-icons/md';
import Avatar from '../../assets/avatar.png';

const UpperWrapper = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  justify-content: end;
  padding: 15px 0;
  align-items: center;

  img {
    border-radius: 50%;
    margin: 0 20px;
  }

  .search-wrapper {
    background-color: #f6f6f8;
    border-radius: 7px;
    padding-left: 15px;
    margin-right: 20px;
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
      <MdNotifications size={20} />
      <img src={Avatar} alt="" width={35} />
    </UpperWrapper>
  );
};

export default Navbar;
