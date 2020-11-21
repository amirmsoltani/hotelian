import React, {FunctionComponent} from 'react';
import {RoomType} from "../../Typescript/Types";
import {View} from "react-native";
import {AppText} from "../../Containers";
import {Style} from "../../Styles";
import {Badge} from "../../Components";
import AdultForm from "./adult-form/adult-form";
import ChildForm from "./child-form/child-form";

const GuestForm: FunctionComponent<{ data: RoomType[] }> = (props) => {
  return (
    <View>
      {props.data.map((item, index) =>
        (<View style={[Style.p__3, Style.bg__white, Style.mb__1]}>

          {/*room name*/}
          <View style={[Style.mb__1]}>
            <AppText firstLetter style={[Style.text__bold, Style.f__14]}>#{index + 1} {item.room_name}</AppText>
          </View>

          {/*room board type*/}
          <View style={[Style.flex__row]}>
            <Badge size={"sm"} text={'room type here'} type={'info'}/>
          </View>

          {/*room guests*/}
          <View>

            {/*adults input*/}
            {[...Array(item.adults).map(item_i => <AdultForm/>)]}

            {/*child input*/}
            {[...Array(item.adults).map(item_i => <ChildForm/>)]}

          </View>
        </View>))}
    </View>
  );
};

export default GuestForm;
