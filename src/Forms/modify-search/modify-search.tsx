import React from 'react';
import {Body, Container, Header, Left, Right} from "native-base";

import {Style} from "Styles";
import {translate} from "Lib/Languages";
import {AppText, BackNavigation} from "Containers";
import ModifySearchFrom from "./modify-search.from";
import {MUTED_LIGHT_XXX} from "../../../native-base-theme/variables/config";


const ModifySearch = () => {
  return (
    <Container style={[{backgroundColor: MUTED_LIGHT_XXX}]}>
      <Header style={[Style.bg__primary]}>
        <Left><BackNavigation/></Left>
        <Body><AppText style={[Style.text__white]}>{translate('modify-search')}</AppText></Body>
        <Right/>
      </Header>
      <Body><ModifySearchFrom/></Body>
    </Container>
  );
};

export default ModifySearch;
