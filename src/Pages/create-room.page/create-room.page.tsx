import React from 'react';
import {Body, Button, Container, Content, Footer, Header, Icon, Left, Right} from 'native-base';
import {TouchableOpacity, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';

import {RoomType, RootStateInterface} from 'Typescript';
import {RoomComponent} from 'Components';
import {ChangeSearchData} from 'Store/Actions';
import {randInt} from 'Lib/Random';
import {AppText, AppTitle, BackNavigation} from 'Containers';
import {Style} from 'Styles';
import {translate as t, translate} from 'Lib/Languages';

const connector = connect((state: RootStateInterface) => ({rooms: state.searchReducer.form_data.rooms}), {ChangeSearchData});
const CreateRoomPage = (props: ConnectedProps<typeof connector> & StackScreenProps<{}>) => {
  const [rooms, setRooms] = React.useState<RoomType[]>(props.rooms!);
  const done = () => {
    if (props.navigation.canGoBack()) {
      let adultCounts = 0, childCounts = 0;
      rooms.forEach(room => {
        adultCounts += room.adults;
        childCounts += room.children.length;
      });
      props.ChangeSearchData({rooms, adultCounts, childCounts});
      props.navigation.goBack();
    }
  };
  const deleteRoom = (index: number) => {
    const new_rooms = [...rooms];
    new_rooms.splice(index, 1);
    setRooms(new_rooms);
  };
  return (
    <Container>
      <Header style={[Style.bg__primary]}>
        <Left>
          <BackNavigation/>
        </Left>
        <Body>
          <AppTitle>{t('rooms')}</AppTitle>
        </Body>
        <Right/>
      </Header>
      <Content>
        <View>
          {
            rooms.map((room, index) => {
                return <RoomComponent
                  key={room.key}
                  title={translate('room') + (index + 1)}
                  onChange={(room) => {
                    rooms[index] = room;
                    setRooms([...rooms]);
                  }}
                  removable={rooms.length > 1}
                  onDelete={() => deleteRoom(index)}
                  defaultValue={room}
                />;
              },
            )
          }
          {
            rooms.length < 6 ?
              <TouchableOpacity
                onPress={() => setRooms([...rooms, {adults: 1, children: [], key: randInt(0xff)}])}
                style={{
                  backgroundColor: 'rgb(239,239,239)',
                  width: '40%',
                  height: 30,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 5,
                  borderRadius: 3,
                  marginBottom: 15,
                  marginLeft: 30,
                }}>
                <>
                  <Icon name='plus' type='FontAwesome5' style={{fontSize: 16, color: '#cf142b'}}/>
                  <AppText style={{
                    color: '#cf142b',
                  }}>
                    {translate('add-new-room')}
                  </AppText>
                </>
              </TouchableOpacity> : <></>
          }
        </View>
      </Content>
      <Footer style={[Style.bg__white]}>
        <View style={[Style.w__100, Style.p__1]}>
          <Button style={[Style.bg__primary]} block onPress={done}>
            <AppText style={[Style.text__white, Style.text__bold]}>{translate('done')}</AppText>
          </Button>
        </View>
      </Footer>
    </Container>);
};

export default connector(CreateRoomPage);
