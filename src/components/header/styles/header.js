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

export const Group = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 600;
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color: 0.5s ease;
  
  &:hover {
      background: #ff1e1e;
      color: white;
  }
`;

export const Link = styled.p`
  color: #fff;
  margin: 0 15px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  text-shadow: 0px 2px 2px #000;

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

export const Text = styled.p`
  color: white;
  margin-top: 20px;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;
export const Search = styled.div`
  color: white;
  margin-top: 20px;
  padding: 10px;
  ${'' /* font-size: 22px; */}
  ${'' /* line-height: normal; */}
  ${'' /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45); */}
`;

export const SearchIcon = styled.div``;