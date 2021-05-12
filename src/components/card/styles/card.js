import styled from 'styled-components/macro'

export const Title = styled.h2`
  margin: 50px;
  ${'' /* margin: 0 0 30px; */}
  color: #fff;
  text-transform: capitalize;
  letter-spacing: 1px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* margin-bottom: 50px; */}
  
  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  ${'' /*? Dynamic Styles from Props */ }
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -100px;
    }
  }
`;



export const SubTitle = styled.h4`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 0;
  user-select: none;
  display: none;
  letter-spacing: .2px;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
  letter-spacing: .5px;
`;

export const Pagination = styled.div`
  ${'' /* position: relative; */}
  display: none;
  cursor: pointer;
  z-index: 1001;
`;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;

  &:hover ${Pagination} {
   display: block;
  }
`;

export const Arrow = styled.img`
  ${'' /* border: 2px solid red; */}
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0,-50%);
  height: 25px;
  width: 25px;
  filter: invert(1) brightness(1);
  z-index: 1001;

  &:hover, &.left-arrow:hover {
    filter: invert(1) drop-shadow(0 2px 1px #000);
    transform: translate(0,-50%) scale(1.3);  
  }

  &.left-arrow {
    transform: translate(0,-50%) rotate(180deg);
    left: 10px;

    &:hover {
      transform: translate(0,-50%) scale(1.3) rotate(180deg);
      filter: invert(1) drop-shadow(0 -2px 1px #000);
    }
  }
`;

export const Entities = styled.div`
  margin-left: 56px;
  display: flex;
  flex-direction: row;
  position: relative;
  width: fit-content;
  ${'' /* right: 300px; */}
  ${'' /* width:100vw; */}
`;

export const Meta = styled.div`
  width: 100%;
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: rgba(0,0,0,.7);
`;

export const Image = styled.img`
  width: fit-content;
  max-width: 300px;
  cursor: pointer;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, z-index 0.3s ease-in-out;
  z-index: 100;
  &:hover ${Pagination} {
    display: block;
  }
   &:first-of-type {
    margin-left: 56px;
  }

  &:hover {
    transform: scale(1.3);
    z-index: 1000;
  }

  &:hover ${Image} {
    border: 1px solid #000;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 56px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;

//* Feature =========================================

export const FeatureText = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;


export const FeatureClose = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  filter: drop-shadow(0px 0px 0.75px #000);

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
  border-radius: 15px;
  width: 28px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;





