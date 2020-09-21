import React from 'react';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {CreateRoomPage, SearchPage, SelectDatePage, SelectDestinationPage, SelectNationalityPage} from '../Pages';
import {match} from 'react-router-native';
import {StatusBar} from 'react-native';
import {Body, Button, Container, Header, Icon, Left, Right, Title} from 'native-base';
import {COLOR_PRIMARY} from "../../native-base-theme/variables/config";


const SearchRoute = (props: { match: match }) => {
    return (
        <Container>
            <StatusBar hidden={true}/>
            <Header style={{backgroundColor: COLOR_PRIMARY}}>
                <Left>
                    <Button transparent onPress={Actions.pop}>
                        <Icon type={'AntDesign'} name='arrowleft'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Coming Soon</Title>
                </Body>
                <Right/>
            </Header>
            <Router>
                <Stack key='root'>
                    {props.match.path === '/' ? <Scene key='from' component={SearchPage} hideNavBar initial/> : ''}
                    <Scene key='destination' component={SelectDestinationPage} hideNavBar back/>
                    <Scene key='datepicker' component={SelectDatePage} hideNavBar back/>
                    <Scene key='nationality' component={SelectNationalityPage} hideNavBar back/>
                    <Scene key='rooms' component={CreateRoomPage} hideNavBar back/>
                </Stack>
            </Router>
        </Container>
    );
};

export default SearchRoute;
