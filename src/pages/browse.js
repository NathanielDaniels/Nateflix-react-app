import React from 'react';
import { BrowseContainer } from '../containers/browse'
import selectionFilter from '../utils/selection-filter'
import { useContent } from '../hooks'
 

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({series, films})
  console.log("pages browse slides",slides)

  return <BrowseContainer slides={slides}/>
}