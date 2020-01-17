import React, { Component } from 'react';

import {
  HomeStyling,
  HeaderWrapper,
  HomeHeader,
  HomeSentence,
  StyledLink
} from './HomeStyled';

import {
  Button,
} from '../Button';

export default class Home extends Component {
  render() {
    return (
      <HomeStyling>
        <HeaderWrapper>
          <HomeHeader>Sweets To Go</HomeHeader>
          <HomeSentence>Because there's always <br /> room for dessert</HomeSentence>
        </HeaderWrapper>
        <StyledLink to="/login"><Button>Make An Order</Button></StyledLink>
      </HomeStyling>
    )
  }

}

