import React from 'react';
import {Content, Card, Text, Footer, Icon} from 'native-base';
import {RoomType, RootStateInterface} from '../../Typescript';
import {RoomComponent} from '../../Components';
import {TouchableHighlight, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {ChangeSearchData} from '../../Store/Actions';
import {Actions} from 'react-native-router-flux';
import {randInt} from '../../Lib/Random';

const connector = connect((state: RootStateInterface) => ({rooms: state.searchReducer.form_data.rooms}), {ChangeSearchData});
const CreateRoomPage = (props: ConnectedProps<typeof connector>) => {
  const [rooms, setRooms] = React.useState<RoomType[]>(props.rooms!);
  const done = () => {
    let adultCounts = 0, childCounts = 0;
    rooms.forEach(room => {
      adultCounts += room.adults;
      childCounts += room.children.length;
    });
    props.ChangeSearchData({rooms, adultCounts, childCounts});
    Actions.pop();
  };
  const deleteRoom = (index: number) => {
    console.log(index, rooms[0]);
    const new_rooms = [...rooms];
    new_rooms.splice(index, 1);
    setRooms(new_rooms);
  };
  return (
    <>
      <Content>
        <View>
          {
            rooms.map((room, index) => {
                return <RoomComponent key={room.key}
                                      title={'room ' + (index + 1)}
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
              <TouchableHighlight onPress={() => setRooms([...rooms, {adults: 1, children: [], key: randInt(0xff)}])}
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
                  <Text style={{
                    color: '#cf142b',
                  }}>

                    Add new Room
                  </Text>
                </>
              </TouchableHighlight> : <></>
          }
        </View>
      </Content>
      <Footer style={{paddingHorizontal: 15, backgroundColor: 'white'}}>
        <TouchableHighlight
          onPress={done}
          style={{width: '100%', height: 50, backgroundColor: '#00247d', borderRadius: 3}}>
          <Text style={{textAlign: 'center', color: 'white', height: '100%', textAlignVertical: 'center'}}>
            Done
          </Text>
        </TouchableHighlight>
      </Footer>
    </>);
};

export default connector(CreateRoomPage);
