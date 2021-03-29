import React from 'react';
import styled from 'styled-components';
import headerBg from '../../assets/header-bg.png';
import SearchField from '../Form/SearchField';

const Header = styled.header`
  background: #62c7b6 url(${headerBg}) top left no-repeat;
  border-radius: 5px;
  padding: 50px 0;
  min-height: 178px;
  text-align: center;
`;

const HeaderContainer: React.FC = () => {
  return (
    <Header>
      <div className="header__container">
        <SearchField />
      </div>
    </Header>
  );
};

export default HeaderContainer;
