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

const TopBarContainer{}

const TopBar = () => {
  return (
    <TopBarFull>
      <div className="container">
        <div className="container-left">
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        <div className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </div>
      </TopBarFull>
  )
}

export default TopBar;