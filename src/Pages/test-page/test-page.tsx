import React, {Component} from 'react';
import {Content, Header} from "native-base";
import {RoomHotelCard, RoomsAction} from "../index";

class TestPage extends Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <Header/>
        <Content>

          {/*actions*/}
          <RoomsAction/>

          {/*hotel details*/}
          <RoomHotelCard/>

          {/*search details*/}

          {/*hotel list*/}


        </Content>
      </>
    );
  }
}

export default TestPage;
