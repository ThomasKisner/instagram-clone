import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';
import styled from "styled-components";

const SearchBarDiv = styled.div`
border-bottom: 1px solid #3333;
height: 80px;
line-height: 70px;
display: flex;
justify-content: space-between;
background: #ffffff;
`;

const ImageWrapper = styled.div`
height: 50px;
`;

const SocialWrapper = styled.div`
display: flex
`;

const Social = styled.div`
width: 20px;
height: 20px;
`;

const LogoImage = styled.img`
height: 100%
`;

const SearchBar = (props) => {
  return (
    <SearchBarDiv>
      <ImageWrapper>
        <LogoImage alt="instagram logo" src={IGLogo}  />
      </ImageWrapper>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts}/>
      </div>
      <SocialWrapper>
        <Social>
          <i className="fa fa-compass" />
        </Social>
        <Social>
          <i className="fa fa-heart" />
        </Social>
        <Social>
          <i className="fa fa-user-circle" />
        </Social>
      </SocialWrapper>
    </SearchBarDiv>
  );
};

export default SearchBar;
