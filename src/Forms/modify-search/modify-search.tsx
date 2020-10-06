import React from 'react';
import {Body, Container, Header, Left, Right} from "native-base";

import {Style} from "Styles";
import {translate} from "Lib/Languages";
import {AppTitle, BackNavigation} from "Containers";
import ModifySearchFrom from "./modify-search.from";
import {MUTED_LIGHT_XXX} from "../../../native-base-theme/variables/config";


const ModifySearch = () => {
  return (
    <Container style={[{backgroundColor: MUTED_LIGHT_XXX}]}>
      <Header style={[Style.bg__primary]}>
        <Left><BackNavigation/></Left>
        <Body><AppTitle style={[Style.text__white]}>{translate('modify-search')}</AppTitle></Body>
        <Right/>
      </Header>
      <Body style={[Style.w__100]}><ModifySearchFrom/></Body>
    </Container>
  );
};

export default ModifySearch;
