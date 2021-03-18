import styled from 'styled-components/macro'

export const Container = styled.div`
  width: 100%;
  ${'' /* display: flex; */}
  ${'' /* background: #222; */}
`;

export const Group = styled.div`

`;

export const Title = styled.h2`
  margin: 50px;
  color: #fff;
  text-transform: capitalize;
`;

export const SubTitle = styled.h4`

`;

export const Text = styled.p`

`;

export const Feature = styled.div`

`;

export const FeatureTitle = styled(Title)`

`;

export const FeatureText = styled.p`

`;
export const FeatureClose = styled.button`

`;
export const Maturity = styled.div`

`;
export const Content = styled.div`

`;
export const Meta = styled.div`
  width: 100%;
  cursor: default;
  ${'' /* z-index: 1000; */}
  ${'' /* background: #fff; */}
`;
export const Entities = styled.div`
  ${'' /* background: #fff; */}
  display: flex;

  ${'' /* overflow-x: scroll; */}
  ${'' /* overflow-y: hidden; */}
  ${'' /* -ms-overflow-style: none;}
  ${'' /* scrollbar-width: none; */}

  
`;
export const Item = styled.div`
  margin: 0 5px;
  border: 2px solid black;
  z-index: 100;
  transition: transform .3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    z-index: 1000;
  }
  &:first-child {
    margin-left: 15px;
  }
`;

export const Image = styled.img`
  cursor: pointer;
  ${'' /* height: 100%; */}
  width: fit-content;
`;