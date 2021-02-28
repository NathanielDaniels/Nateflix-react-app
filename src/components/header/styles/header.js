import styled from 'styled-components/macro'
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
  
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
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

export const Logo = styled.p`
  text-shadow: 2px 2px 2px black;
  font-weight: 600;
  color: #E50914;
  text-transform: uppercase;
  font-size: 1.9rem;
  transform: scaleY(1.6);
`;

export const ButtonLink = styled(ReachRouterLink)`
  font-weight: 600;
  color: #fff;
  display: block;
  background-color: #e50914;
  width: 85px;
  height: fit-content;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  letter-spacing: .1px;
  &:hover {
    background: #f40612;
  }
`;