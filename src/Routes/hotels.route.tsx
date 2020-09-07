import React from 'react';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {HotelListPage} from '../Pages';
import {match} from 'react-router-native';
import {StatusBar} from 'react-native';
import {Body, Button, Container, Header, Icon, Left, Right, Title} from 'native-base';


const HotelsRoute = (props: {match: match}) => {
  return (
    <Container>
      <StatusBar hidden={true}/>
      <Header>
        <Left/>

        <Body>
          <Title>search results</Title>
        </Body>
        <Right>
          <Button transparent onPress={Actions.pop}>
            <Icon type={'AntDesign'} name='arrowright'/>
          </Button>
        </Right>
      </Header>
      <Router>
        <Stack key='root'>
          <Scene key='hotels' component={HotelListPage} hideNavBar initial/>
        </Stack>
      </Router>
    </Container>
  );
};

export default HotelsRoute;
