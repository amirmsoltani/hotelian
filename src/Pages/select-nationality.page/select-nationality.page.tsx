import React from 'react';
import {ScrollView, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {LinkProps} from 'react-router-native';
import {Actions} from 'react-native-router-flux';
import {Icon, List, ListItem} from 'native-base';

import {ChangeSearchData, GetNationality} from '../../Store/Actions';
import {NationalityType, RootStateInterface} from '../../Typescript';
import style from './../select-destination.page/select-destination-page.style';
import {AppRow, AppText} from '../../Containers';
import {COLOR_BLACK} from '../../../native-base-theme/variables/config';
import {SearchPageSkeletonLoader} from "../../Components";


const mapStateToProps = (state: RootStateInterface) => ({
    nationalities: state.searchReducer.nationality.list,
    status: state.searchReducer.nationality.GET,
});

const mapDispatchToProps = {
    GetNationality,
    ChangeSearchData,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & LinkProps;

const SelectNationalityPage = ({nationalities, ChangeSearchData, GetNationality, status}: Props) => {

    const selectNationality = (nationality: NationalityType) => {
        ChangeSearchData({nationality});
        Actions.pop();
    };


    return (
        <View style={style.container}>
            <ScrollView>
                <TextInput style={style.input} placeholder="e.g United Kingdom, Japan"
                           onChangeText={(text) => GetNationality(text)}
                />
                <View>
                    {
                        status === 'loading' ?
                            <View>
                                <SearchPageSkeletonLoader/>
                                <SearchPageSkeletonLoader/>
                                <SearchPageSkeletonLoader/>
                                <SearchPageSkeletonLoader/>
                            </View>
                            :
                            <List>
                                {nationalities?.map((nation, index) => (
                                    <ListItem style={{marginLeft: 0, paddingTop: 0, paddingBottom: 0}}
                                              key={nation.code}>
                                        <TouchableHighlight
                                            style={{
                                                flex: 1,
                                                paddingVertical: 10,
                                                marginVertical: 5
                                            }}
                                            onPress={() => selectNationality(nation)} key={index}>
                                            <AppRow>
                                                <Icon
                                                    style={{
                                                        color: COLOR_BLACK,
                                                        fontSize: 30,
                                                        marginRight: 15,
                                                        marginLeft: 0,
                                                        alignSelf: 'center',
                                                    }}
                                                    name={'flag'}
                                                    type={'FontAwesome'}
                                                />
                                                <View>
                                                    <AppText
                                                        style={{fontWeight: 'bold', letterSpacing: 1}}
                                                    >{nation.code}</AppText>
                                                    <Text>{nation.name}</Text>
                                                </View>
                                            </AppRow>
                                        </TouchableHighlight>
                                    </ListItem>
                                ))}
                            </List>
                    }
                </View>
            </ScrollView>
        </View>
    );
};

export default connector(SelectNationalityPage);
