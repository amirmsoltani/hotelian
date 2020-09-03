import React from 'react';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {Search, SearchNationality, SearchDestination, SearchDate} from '../Routes/search';
import {match, Route} from 'react-router-native';
import {StatusBar} from 'react-native';
import {Body, Button, Container, Header, Icon, Left, Right, Title} from 'native-base';


export const SearchLayout = (props: {match: match}) => {
  return (
    <Container>
      <StatusBar hidden={true}/>
      <Header>
        <Left>
          <Button transparent onPress={Actions.pop}>
            <Icon type={'AntDesign'} name='arrowright'/>
          </Button>
        </Left>
        <Body>
          <Title> Select Nationality</Title>
        </Body>
        <Right/>
      </Header>
      <Router>
        <Stack key='root'>
          {
            props.match.path === '/search' ? <Scene key='from' component={Search} hideNavBar initial/> : ''
          }
          <Scene key='destination' component={SearchDestination} hideNavBar back/>
          <Scene key='datepicker' component={SearchDate} hideNavBar back/>
          <Scene key='nationality' component={SearchNationality} hideNavBar back/>
        </Stack>
      </Router>
    </Container>
  );
};
