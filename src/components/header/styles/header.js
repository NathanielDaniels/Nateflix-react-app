import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  ${'' /* background: gray; */}
`;

export const Container = styled.div``;

export const Link = styled.p``;

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
  color: red;
  text-transform: uppercase;
  letter-spacing: .5px;
  font-size: 2rem;
  margin: 10px;
  
    ${'' /* height: 32px;
    width: 108px;
    margin-right: 40px;
    
    @media (min-width: 1449px) {
      height: 45px;
      width: 167px;
    } */}
`;

export const ButtonLink = styled(ReachRouterLink)``;


// export const Menu = styled.ul`
//   text-decoration: none;
//   color: #fff;
// `;
// export const Item = styled.li``;