import React from 'react';
import styled from 'styled-components';
import { MdOutlineSearch, MdNotifications } from 'react-icons/md';
import Avatar from '../../assets/avatar.png';

const UpperWrapper = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  /* justify-content: end; */
  padding: 15px 0;
`;

const InnerWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: end;

  img {
    border-radius: 50%;
    height: 80%;
    margin: 0 20px;
  }

  .search-wrapper {
    background-color: #f6f6f8;
    border-radius: 7px;
    padding-left: 15px;
    margin-right: 20px;
    /* width: 30%; */
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
      <InnerWrapper>
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
      </InnerWrapper>
    </UpperWrapper>
  );
};

export default Navbar;
