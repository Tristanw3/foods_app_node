import React, { Component } from 'react';

import {
  HomeStyling,
  HeaderWrapper,
  HomeHeader,
  HomeSentence,

} from './HomeStyled';

import {
  StyledButton,
} from '../Button';

export default class Home extends Component {
  render() {
    return (
      <HomeStyling>
        <HeaderWrapper>
          <HomeHeader>Sweets To Go</HomeHeader>
          <HomeSentence>Because there's always <br /> room for dessert</HomeSentence>
        </HeaderWrapper>
        <StyledButton to="/login">Make An Order</StyledButton>
      </HomeStyling>
    )
  }

}

