import React, { Component } from 'react';

import {
  HomePage,
  HeaderWrapper,
  HomeHeader,
  HomeSentence,

} from './HomeStyled';

import {
  StyledButton,
} from '../Common/Buttons';

export default class Home extends Component {
  render() {
    return (
      <HomePage>
        <HeaderWrapper>
          <HomeHeader>Sweets To Go</HomeHeader>
          <HomeSentence>Because there's always <br /> room for dessert</HomeSentence>
        </HeaderWrapper>
        <StyledButton to="/login">Make An Order</StyledButton>
      </HomePage>
    )
  }

}

