import React from 'react';
import styled, {css} from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const TopBarFull = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:none;
flex-direction:row;
position:fixed;
height:44px;
background-color: #333;
`;

const TopBarContainer= styled.div`
 width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
@media(min-width: 1280px){
  width:1280px;
}`;

const ContainerLeft = styled.div`
display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  span{
    cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
  }
`;

const TopBar = () => {
  return (
    <TopBarFull>
      <TopBarContainer>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <div className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div className="container-right">
          <span>LOG IN</span>
        </ContainerLeft>
        </TopBarContainer>
      </TopBarFull>
  )
}

export default TopBar;