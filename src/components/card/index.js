import React, {useState, useContext, createContext} from 'react'
import { Container, Group, Title, SubTitle, Text, Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Content, Meta, Entities, Item, Image } from './styles/card'

export const FeatureContext = createContext();

export default function Card({children, ...restProps}) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
       <Container { ...restProps }>{ children }</Container>
    </FeatureContext.Provider>
  )
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group { ...restProps }>{ children }</Group>
}

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle { ...restProps }>{ children }</SubTitle>
}

Card.Text = function CardText({ children, ...restProps }) {
  return <Text { ...restProps }>{ children }</Text>
}

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities { ...restProps }>{ children }</Entities>
}

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta { ...restProps }>{ children }</Meta>
}

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item 
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      { ...restProps }
    >
      { children }
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image { ...restProps } />
}

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature} = useContext(FeatureContext);
  
  console.log("card showFeature", showFeature)
  console.log("card itemFeature", itemFeature)

  return showFeature ? (
    <Feature { ...restProps } src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close"/>
        </FeatureClose>

         <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            { console.log("Maturity Rating: ", itemFeature.maturity) }
            {/* { itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity } */}
          </Maturity>
          <FeatureText fontWeight="600">
            { console.log("genre", itemFeature.maturity) }
            {/* { itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1) } */}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
}

// Card.FeatureText = function CardFeatureText({ children, ...restProps }) {
//   return <FeatureText { ...restProps }>{ children }</FeatureText>
// }

// Card.FeatureClose = function CardFeatureClose({ children, ...restProps }) {
//   return <FeatureClose { ...restProps }>{ children }</FeatureClose>
// }

// Card.FeatureTitle = function CardFeatureTitle({ children, ...restProps }) {
//   return <FeatureTitle { ...restProps }>{ children }</FeatureTitle>
// }

// Card.Maturity = function CardMaturity({ children, rating, ...restProps }) {
//   return <Maturity rating={rating} { ...restProps }>{ children }</Maturity>
// }

// Card.Content = function CardContent({ children, ...restProps }) {
//   return <Content { ...restProps }>{ children }</Content>
// }

// Card.Entities = function CardEntities({ children, ...restProps }) {
//   return <Entities { ...restProps }>{ children }</Entities>
// }

// Card.Meta = function CardMeta({ children, ...restProps }) {
//   return <Meta { ...restProps }>{ children }</Meta>
// }

// Card.Item = function CardItem({ children, ...restProps }) {
//   const { setShowFeature, setItemFeature } = useContext(FeatureContext)

//   return (
//     <Item 
//       onClick={() => {
//         setItemFeature(Item);
//         setShowFeature(true);
//       }}
//       { ...restProps }>
//         { children }
//     </Item>)
// }

// Card.Image = function CardImage({ ...restProps }) {
//   return <Image { ...restProps } />
// }