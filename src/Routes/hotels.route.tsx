import React from 'react';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {HotelsFilterPage, HotelListPage} from '../Pages';
import {match} from 'react-router-native';
import {Image, TouchableOpacity} from 'react-native';
import {Container, Footer, Icon} from 'native-base';

const HotelsRoute = (props: {match: match}) => {
  return (
    <Container>
      {/*<Header>*/}
      {/*  <Left/>*/}

      {/*  <Body>*/}
      {/*    <Title>search results</Title>*/}
      {/*  </Body>*/}
      {/*  <Right>*/}
      {/*    <Button transparent onPress={Actions.pop}>*/}
      {/*      <Icon type={'AntDesign'} name='arrowright'/>*/}
      {/*    </Button>*/}
      {/*  </Right>*/}
      {/*</Header>*/}
      <Router>
        <Stack key='root'>
          <Scene key='hotels' component={HotelListPage} hideNavBar initial/>
          <Scene key='filter' component={HotelsFilterPage} hideNavBar/>
        </Stack>
      </Router>
      <Footer style={{
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingHorizontal: 15,
      }}>
        <TouchableOpacity style={{
          marginTop: 'auto', marginBottom: 'auto',
        }}
                          onPress={() => Actions.jump('hotels')}
        >
          <Icon type="Foundation" name="results" style={{fontSize: 36, color: 'red'}}/>
          <Icon type="Foundation" name="results" style={{fontSize: 16, color: 'blue'}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: 'transparent',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          width: 30,
        }}
                          onPress={() => {
                            Actions.push('hotels');
                          }}
        >
          <Image source={require('../Assets/Icons/pin.png')}
                 style={{width: 30}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 'auto', marginBottom: 'auto', width: 30}}
                          onPress={() => Actions.jump('filter')}>
          <Icon type="FontAwesome" name="building"
                style={{color: '#124568', fontSize: 34, padding: 0, backgroundColor: 'black', width: 28}}/>
          <Icon type="FontAwesome" name="filter"
                style={{
                  color: '#efb300',
                  fontSize: 14,
                  marginTop: -16,
                  backgroundColor: 'black',
                  width: 16,
                  paddingHorizontal: 1,
                  paddingLeft: 2,
                  paddingTop: 2,
                  borderRadius: 20,
                }}/>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default HotelsRoute;
