import React, {FunctionComponent} from 'react';
import {View} from "react-native";

import {RoomType} from "../../Typescript/Types";
import {AppText} from "../../Containers";
import {Style} from "../../Styles";
import {Badge} from "../../Components";
import AdultForm from "./adult-form/adult-form";
import ChildForm from "./child-form/child-form";

const GuestForm: FunctionComponent<{ data: RoomType[] }> = (props) => {

  return (
    <View>
      {props.data.map((item, index) => (
        <View key={index} style={[Style.pt__3,]}>

          {/*room name*/}
          <View style={[Style.mb__1, Style.px__3]}>
            <AppText firstLetter style={[Style.text__bold, Style.f__14]}>#{index + 1} {item.room_name}</AppText>
          </View>

          {/*room board type*/}
          <View style={[Style.flex__row, Style.mb__3, Style.px__3]}>
            <Badge size={"sm"} text={'number of guests here'} type={'info'}/>
            <Badge size={"sm"} text={'room type here'} type={'info'}/>
          </View>

          {/*room guests*/}
          <View>

            {/*adults input*/}
            {[...Array(item.adults)].map((_, index) => <View key={index} style={[Style.mb__1]}><AdultForm
              data={{room_number: index}}/></View>)}

            {/*child input*/}
            {item.children.map((item, index) => <View key={index} style={[Style.mb__1]}><ChildForm
              data={{room_number: index, child_age: item}}/></View>)}

          </View>

        </View>))
      }
    </View>
  );
};

export default GuestForm;
