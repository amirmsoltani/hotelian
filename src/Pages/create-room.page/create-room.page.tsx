import React from 'react';
import {Body, Button, Container, Content, Footer, Header, Icon, Left, Right} from 'native-base';
import {TouchableOpacity, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';

import {RoomType, RootStateInterface} from 'Typescript';
import {RoomComponent} from 'Components';
import {ChangeSearchData} from 'Store/Actions';
import {randInt} from 'Lib/Random';
import {AppText} from 'Containers';
import {Style} from 'Styles';
import {translate} from 'Lib/Languages';

const connector = connect((state: RootStateInterface) => ({rooms: state.searchReducer.form_data.rooms}), {ChangeSearchData});
const CreateRoomPage = (props: ConnectedProps<typeof connector> & StackScreenProps<{}>) => {
  const [rooms, setRooms] = React.useState<RoomType[]>(props.rooms!);
  const done = () => {
    let adultCounts = 0, childCounts = 0;
    rooms.forEach(room => {
      adultCounts += room.adults;
      childCounts += room.children.length;
    });
    props.ChangeSearchData({rooms, adultCounts, childCounts});
    props.navigation.pop();
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
          <Button onPress={() => props.navigation.pop()} transparent>
            <Icon
              type={'SimpleLineIcons'}
              name='arrow-left'
              style={[Style.f__18, Style.text__white,]}/>
          </Button>
        </Left>
        <Body>
          <AppText style={[Style.f__18, Style.text__white, Style.text__capitalize]}>
            {translate('rooms')}</AppText>
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
      <Footer style={{paddingHorizontal: 15, backgroundColor: 'white'}}>
        <TouchableOpacity
          onPress={done}
          style={{width: '100%', height: 50, backgroundColor: '#00247d', borderRadius: 3}}>
          <AppText style={{textAlign: 'center', color: 'white', height: '100%', textAlignVertical: 'center'}}>
            {translate('done')}
          </AppText>
        </TouchableOpacity>
      </Footer>
    </Container>);
};

export default connector(CreateRoomPage);
