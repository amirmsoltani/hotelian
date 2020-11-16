import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from "react-native";
import {Style} from "../../../../Styles";
import {AppText} from "../../../../Containers";
import {Conditional, Else, If} from "../../../../Components";
import {Icon} from "native-base";
import {CommentModel} from "../../../../Typescript/Interfaces";

const ReviewCard: FunctionComponent<{ data: CommentModel }> = (props) => {
  return (
    <View style={[Style.p__3,Style.bg__white]}>

      {/*header*/}
      <View style={[Style.mb__2]}>
        <View style={[Style.flex__row]}>

          {/*title*/}
          <View style={[Style.flex__grow__1, Style.flex__shrink__1, Style.mr__1,]}>
            <AppText firstLetter style={[Style.text__bold, Style.text__info, Style.f__16]}>{props.data.title}</AppText>
          </View>

          {/*score*/}
          <View style={[Style.flex__shrink__0, Style.ml__1, Style.flex__row]}>
            {/*<View style={[Style.mr__1]}>*/}
            {/*  <AppText*/}
            {/*    style={[Style.text__bold, Style.text__info, Style.f__16]}>{props.data.score_description}</AppText>*/}
            {/*</View>*/}
            <View style={[Style.ml__1]}>
              <AppText style={[Style.text__bold, Style.text__info, Style.f__16, Style.text__center, {width: 40}]}>
                {props.data.score_average}</AppText>
            </View>
          </View>
        </View>

        <View>
          <AppText style={[Style.text__gray_d_XXX, Style.text__light, Style.f__12]}>{props.data.submit_date}</AppText>
        </View>
      </View>

      {/*content*/}
      <View style={[Style.mb__2]}>
        <AppText firstLetter
                 style={[Style.text__justify, Style.f__14, Style.text__gray_d_XXX, styles.comment]}>{props.data.comment}</AppText>
      </View>

      {/*footer*/}
      <View style={[Style.mb__2]}>

        {/*user info*/}
        <AppText>
          <AppText style={[Style.text__bold, Style.f__12]}>{props.data.user_name}</AppText>
          <Conditional>
            <If condition={!!props.data.country}>
              <AppText style={[Style.f__12, Style.text__gray_d_XXX]}> | {props.data.country}</AppText>
            </If>
          </Conditional>
        </AppText>

        {/*reserve info*/}
        <Conditional>
          <If condition={props.data.booked}>
            <AppText style={[Style.text__gray_d_XXX, Style.text__light, Style.f__12]}>
              Stays {props.data.nights_count} in {props.data.stay_time}</AppText>
          </If>
          <Else>
            <View style={[Style.flex__row, Style.align__items_center]}>
              <Icon style={[Style.f__12, Style.mr__1, Style.text__gray_d_XXX]}
                    name={'md-alert-circle-outline'}
                    type={'Ionicons'}/>
              <AppText style={[Style.text__gray_d_XXX, Style.text__light, Style.f__12,]}>
                this user doesnt reserve this property!!!</AppText>
            </View>
          </Else>
        </Conditional>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    lineHeight: 18,
  }
});

export default ReviewCard;
