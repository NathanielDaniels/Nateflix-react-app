import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
  padding-bottom: 10px;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    ${'' /* height: 64px; */}
    height: 80px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;  
    
    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Link = styled.p`
  color: #fff;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

// export const Logo = styled.img`
//     height: 32px;
//     width: 108px;
//     margin-right: 40px;
    
//     @media (min-width: 1449px) {
//       height: 45px;
//       width: 167px;
//     }
// `;

export const Logo = styled.p`
  text-shadow: 2px 2px 2px black;
  font-weight: 600;
  color: #E50914;
  ${'' /* letter-spacing: .5px; */}
  text-transform: uppercase;
  font-size: 2.2rem;
  transform: scaleY(1.6);
`;

export const ButtonLink = styled(ReachRouterLink)`

    color: #fff;
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    
    &:hover {
        background: #f40612;
    }
`;


// export const Menu = styled.ul`
//   text-decoration: none;
//   color: #fff;
// `;
// export const Item = styled.li``;