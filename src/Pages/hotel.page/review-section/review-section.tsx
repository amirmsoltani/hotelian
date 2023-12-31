import React from 'react';
import {Content, Icon} from 'native-base';
import {TouchableNativeFeedback, View} from 'react-native';
import {Style} from '../../../Styles';
import {ScoreBar, ScoreSummary} from '../../index';
import {CommentModel} from '../../../Typescript/Interfaces';
import ReviewCard from './review-card/review-card';
import {AppText} from '../../../Containers';
import {Conditional, If} from '../../../Components';

const ReviewSection = () => {

  //dummy data
  const scores = [
    {label: 'room cleanliness', score: 6.3},
    {label: 'service & staff', score: 1.5},
    {label: 'room comfort', score: 5},
    {label: 'hotel condition', score: 3.7},
    {label: 'free wifi', score: 10},
    {label: 'location', score: 0},
    {label: 'value for money', score: 8.7},
  ];
  const comments: CommentModel[] = [
    {
      submit_date: '04 November 2020',
      title: 'Staff and service sucks indeed',
      score_description: 'Disaster',
      score_average: 3.5,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user_name: 'Elon Mask',
      country: 'Iran',
      booked: true,
      stay_time: 'July 2020',
      nights_count: 3,
    },
    {
      submit_date: '25 January 2020',
      title: 'src-pages-test-page-tsx src-pages-test-page-tsx src-pages-test-page-tsx',
      score_description: 'Excellent',
      score_average: 9,
      comment: 'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ',
      user_name: 'Haj safdar bozorge mashhad be hamrahe manzel va doostan va ahaliye torqooz abad',
      country: 'United State of America',
      booked: false,
    },
    {
      submit_date: '99 January January January 9999',
      title: 'no country for old mans :((',
      score_description: 'Very very very very weak',
      score_average: 1,
      comment: 'Can you hear me dude ?!!!',
      user_name: 'Jynx',
      country: 'UAE',
      booked: false,
    },
    {
      submit_date: '04 November 2020',
      title: 'Staff and service sucks indeed',
      score_description: 'Disaster',
      score_average: 3.5,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user_name: 'Elon Mask',
      country: 'Iran',
      booked: true,
      stay_time: 'July 2020',
      nights_count: 3,
    },
    {
      submit_date: '25 January 2020',
      title: 'src-pages-test-page-tsx src-pages-test-page-tsx src-pages-test-page-tsx',
      score_description: 'Excellent',
      score_average: 9,
      comment: 'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ',
      user_name: 'Haj safdar bozorge mashhad be hamrahe manzel va doostan va ahaliye torqooz abad',
      country: 'United State of America',
      booked: false,
    },
    {
      submit_date: '99 January January January 9999',
      title: 'no country for old mans :((',
      score_description: 'Very very very very weak',
      score_average: 1,
      comment: 'Can you hear me dude ?!!!',
      user_name: 'Jynx',
      country: 'UAE',
      booked: false,
    },
  ];
  const scoreSummary = {
    scoreAverage: 4,
    scoreAverageDescription: 'wonderful',
    reviewNumber: 999,
  };

  return (
    <>
      <Content>

        {/*score*/}
        <View style={[Style.bg__white, Style.mb__1]}>
          <View style={[Style.p__3]}>
            <ScoreSummary scoreAverage={scoreSummary.scoreAverage}
                          scoreDescription={scoreSummary.scoreAverageDescription}
                          reviewNumber={scoreSummary.reviewNumber}/>
          </View>
          <View style={[Style.px__2, Style.flex__row, Style.flex__wrap, Style.pb__2]}>
            {scores.map((item, index) =>
              <View key={index + 'review'} style={[Style.w__50]}>
                <ScoreBar label={item.label} score={item.score}/>
              </View>)}
          </View>
        </View>

        {/*comments*/}
        <View>
          {comments.map((comment, index) => index < 3 ?
            <View style={[Style.mb__1]} key={'review_card_' + index}>
              <ReviewCard data={comment}/>
              <Conditional>
                <If condition={index + 1 === 3}>
                  <TouchableNativeFeedback>
                    <View
                      style={[Style.flex__row, Style.align__items_center, Style.bg__white, Style.py__2, Style.justify__content_center]}>
                      <Icon style={[Style.f__14, Style.text__info]} name={'chevron-down'} type={'Feather'}/>
                      <AppText
                        style={[Style.text__center, Style.text__info, Style.text__capitalize, Style.f__12, {lineHeight: 16}]}>show
                        more</AppText>
                    </View>
                  </TouchableNativeFeedback>
                </If>
              </Conditional>
            </View> : null)}
        </View>
      </Content>
    </>
  );
};

export default ReviewSection;
