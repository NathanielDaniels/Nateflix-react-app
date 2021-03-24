import React, {useState, useEffect, useContext, createContext, useRef} from 'react'
import { Container, Group, Title, SubTitle, Text, Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Content, Meta, Entities, Item, Image, Pagination, Arrow, Wrapper } from './styles/card'

export const FeatureContext = createContext();

export default function Card({children, ...restProps}) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  const [isClicked, setIsClicked] = useState(false)
  const ref = useRef(null)

  // useEffect(() => {
  //   console.log("top scroll width", ref.current.scrollWidth)
  // }, [ref])

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature, ref, isClicked, setIsClicked }}>
       <Container { ...restProps }>{ children }</Container>
    </FeatureContext.Provider>
  )
}

Card.Pagination = function CardPagination({src, children, ...restProps}) {

    return (
    <Pagination {...restProps}>
      {children}
    </Pagination>
  )
}

Card.Arrow = function CardArrow({...restProps}) {
  const {isClicked, setIsClicked} = useContext(FeatureContext)
  // console.log(isClicked);
  return <Arrow onClick={() => setIsClicked(true)} {...restProps}/>
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group { ...restProps }>{ children }</Group>
}

Card.Wrapper = function CardWrapper({ children, ...restProps }) {
  return <Wrapper { ...restProps }>{ children }</Wrapper>
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

Card.Entities = function CardEntities({children, ...restProps }) {
  const {ref, isClicked, setIsClicked} = useContext(FeatureContext)

  useEffect(() => {
    console.log(ref)
    // console.log('entities ref', `${ref.current['clientWidth']}0px`)
    // console.log('entities ref', ref.current['scrollWidth'].toString().split(''))
    console.log(ref.current['scrollWidth'])
    // console.log(ref.current['scrollWidth'].toString().split(''))
    // const firstArr = [...ref.current['scrollWidth'].toString().split('')]
    // console.log("arr", firstArr)

    // console.log(firstArr.split(1,2).unshift("1","6"))
    // const lastTwoArr = ref.current['scrollWidth'].toString().split('').splice(1,2)
    // console.log("lastTwoArr", lastTwoArr)
    
    // ref.current['clientWidth'] < 1345 ? console.log('under', ref.current['clientWidth']) : console.log('over')
  }, [ref])
  
  return <Entities ref={ref} { ...restProps }>{ children }</Entities>
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
  return <Image { ...restProps }/>
  // return <Image { ...restProps } onClick={() => window.scrollBy(0,200)}/>
}

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature} = useContext(FeatureContext);

  return showFeature ? (
    <Feature className="feature-section" { ...restProps } src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close"/>
        </FeatureClose>

         <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            { itemFeature.maturity < 12 ? 'PG' : `${itemFeature.maturity}+` }
          </Maturity>
          <FeatureText fontWeight="600">
            { itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1) }
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
}
