import React, {Component} from 'react';
import {Button, Content, Footer, Header, Icon} from "native-base";

import {Style} from "../../Styles";
import {AppText, AppTitle, BackNavigation} from "../../Containers";
import {ElIf, If} from "../../Components/conditional.component";
import {Conditional, ProgressiveImage, ScreenLoading} from "../../Components";
import {StyleSheet, View} from "react-native";
import {translate, translate as t} from "../../Lib/Languages";
import {BORDER_RADIUS} from "../../../native-base-theme/variables/config";


//status of receiving data
const status: 'ok' | 'loading' | 'error' = 'ok';

class TestPage extends Component {


  render() {
    const hotelImage = require('Assets/Images/no-image.png');
    const styles = StyleSheet.create({
      image: {
        height: 180,
        width: undefined,
        minWidth: 240,
        flex: 1,
        borderRadius: BORDER_RADIUS,
      },
    });
    return (
      <>
        {/*header*/}
        <Header style={[Style.flex__row, Style.bg__primary, Style.align__items_center, Style.px__0]}>
          <View>
            <BackNavigation/>
          </View>
          <View style={[Style.flex__grow__1]}>
            <AppTitle>Booking overview</AppTitle>
          </View>
        </Header>

        {/*content*/}
        <Content>
          <Conditional>
            <If condition={status === 'loading'}><ScreenLoading/></If>
            <ElIf condition={status === 'ok'}>

              {/*image*/}
              <View>
                <View><ProgressiveImage
                  source={hotelImage}
                  resizeMode="cover" style={styles.image}/></View>
              </View>
              {/*name*/}
              <View style={[]}>
                <AppText style={[Style.text__bold, Style.f__14]}>hotel name</AppText>
              </View>
              {/*star*/}
              <View style={[Style.flex__row, Style.mb__2]}>
                {[...(new Array(3).keys())].map(index =>
                  <Icon type={'AntDesign'} name="star" key={index} style={[Style.f__10, Style.text__warning]}/>)}
              </View>
              {/*location and address*/}
              <View style={[Style.mb__1]}>
                <View style={[Style.flex__row, Style.align__items_center]}>
                  <Icon type="SimpleLineIcons" name="location-pin"
                        style={[Style.text__black, Style.ml__0, Style.mr__1, Style.f__12]}/>
                  <AppText style={[Style.f__12]}>hotel location</AppText>
                </View>
                <View style={[Style.mb__1]}>
                  <AppText style={[Style.f__10, Style.text__wrap, Style.text__gray_d_X]}>hotel address</AppText>
                </View>
              </View>
              {/*checkin checkout*/}
              <View style={[Style.flex__row, Style.mb__3]}>
                <View style={[Style.col__6]}>
                  <View style={[Style.mb__1]}><AppText
                    style={[Style.text__bold]}>{translate('check-in')}</AppText></View>
                  <View><AppText style={[Style.text__light, Style.f__12]}>99 December 9999</AppText></View>
                </View>
                <View style={[Style.col__6]}>
                  <View style={[Style.mb__1]}><AppText
                    style={[Style.text__bold]}>{translate('check-out')}</AppText></View>
                  <View><AppText style={[Style.text__light, Style.f__12]}>99 December 9999</AppText></View>
                </View>
              </View>


              {/*guest details*/}


              {/*invoice*/}


            </ElIf>
            <ElIf condition={status === 'error'}>
              <AppText>Some thing went wrong</AppText>
            </ElIf>
          </Conditional>
        </Content>

        {/*footer*/}
        <Footer style={[Style.bg__white]}>
          <View style={[Style.w__100, Style.p__1, Style.flex__row]}>
            <View style={[Style.col__6]}>
              <AppText style={[Style.f__14,]}>{t('total')}:</AppText>
              <View style={[Style.flex__row]}>
                <AppText style={[Style.f__14, Style.text__bold]}>999,999,999,999</AppText>
                <AppText style={[Style.f__14, Style.text__bold]}> IRR</AppText>
              </View>
            </View>
            <View style={[Style.col__6, Style.pl__1
            ]}>
              <Button block style={[Style.bg__primary]}>
                <AppText firstLetter style={[Style.text__white, Style.text__bold]}>{t('final-step')}</AppText>
              </Button>
            </View>
          </View>
        </Footer>
      </>
    );
  }
}

export default TestPage;
