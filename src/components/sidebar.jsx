import React from 'react';
import styled from 'styled-components';

import {
  MdDashboard,
  MdAccountBalanceWallet,
  MdOutlineAttachMoney,
  MdContacts,
} from 'react-icons/md';
import { IoDocumentText } from 'react-icons/io5';
import { RiUser3Fill } from 'react-icons/ri';

import Logo from '../assets/Assiduus-Logo.png';
import Navbar from './navbar/navbar';
import Chart from './chart/chart';

const Wrapper = styled.div`
  display: flex;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  /* width: fit-content; */
  height: 100vh;
  background-color: #fff;
`;
const LogoWrapper = styled.div`
  padding: 20px;
`;
const ListGroup = styled.ul`
  list-style: none;
  padding: 0;

  .hover {
    :hover {
      background-color: #47b747;
      color: #fff;
    }
  }
`;
const ListItem = styled.li`
  display: flex;
  padding: 10px;
  padding-left: 30px;
`;

const ListIcon = styled.div``;

const ListTitle = styled.p`
  margin: 0;
  padding-left: 20px;
`;

const RightWrapper = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const navbar = [
    { id: 1, title: 'Dashboard', iconImg: <MdDashboard size={20} /> },
    { id: 2, title: 'Account', iconImg: <MdAccountBalanceWallet size={20} /> },
    { id: 3, title: 'Payroll', iconImg: <MdOutlineAttachMoney size={20} /> },
    { id: 4, title: 'Reports', iconImg: <IoDocumentText size={20} /> },
    { id: 5, title: 'Advisor', iconImg: <RiUser3Fill size={20} /> },
    { id: 6, title: 'Contacts', iconImg: <MdContacts size={20} /> },
  ];

  return (
    <Wrapper>
      <LeftWrapper>
        <LogoWrapper>
          <img src={Logo} alt="" width={140} />
        </LogoWrapper>
        <ListGroup>
          {navbar.map((item) => {
            return (
              <div className="hover" key={item.id}>
                <ListItem>
                  <ListIcon>{item.iconImg}</ListIcon>
                  <ListTitle>{item.title}</ListTitle>
                </ListItem>
              </div>
            );
          })}
        </ListGroup>
      </LeftWrapper>
      <RightWrapper>
        <Navbar />
        <Chart />
      </RightWrapper>
    </Wrapper>
  );
};

export default Sidebar;
