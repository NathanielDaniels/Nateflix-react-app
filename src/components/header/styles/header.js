import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom';

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
  height: 64px;
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
  font-weight: 600;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color .2s ease-in-out, color .2s ease-in-out;
  
  &:hover {
    background-color: #ff1e1e;
    color: #fff;
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

  &:first-of-type {
    margin-left: 30px;
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

export const ButtonLink = styled(ReactRouterLink)`
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
  margin-top: 10px;
  font-size: 22px;
  line-height: normal;
  ${'' /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45); */}
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  background: rgba(0,0,0,.2);
  border-radius: 10px;
  padding: 10px 0;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: #fff;
    cursor: pointer;
  }
  
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  &:focus {
    border-bottom: 1px solid #fff;
  }
  
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: #fff;
  border: 1px solid #fff;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => (active ? '10px' : '0')};
  padding: ${({ active }) => (active ? '0 10px' : '0')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  width: ${({ active }) => (active ? '200px' : '0px')};
`;

export const Picture = styled.button` 
  background: url(${({src}) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #000;
  padding: 10px;
  width: -moz-fit-content;
  width: 120px;
  top: 32px;
  right: 0px;
  border-radius: 5px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }
  
  ${Group} {
    margin-bottom: 10px;
    
    &:last-of-type {
        margin-bottom: 0;
    }
    
    ${Picture} {
      cursor: default;
    }
  }
  
  button {
    height: 25px;
  }
  
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  
  button {
    cursor: pointer;
  }
  
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

