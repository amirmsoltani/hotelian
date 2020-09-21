import React, {useState} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {LinkProps} from 'react-router-native';
import {Actions} from 'react-native-router-flux';
import {Icon, List, ListItem} from 'native-base';

import {ChangeSearchData, GetNationality} from '../../Store/Actions';
import {NationalityType, RootStateInterface} from '../../Typescript';
import style from './../select-destination.page/select-destination-page.style';
import {AppRow, AppText} from '../../Containers';
import {
    Conditional,
    ElIf,
    If,
    SearchFormError,
    SearchFormIdle,
    SearchFormInit,
    SearchPageSkeletonLoader
} from "../../Components";


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
    const [inputStyle, setStyle] = useState(style.blurredInput);

    return (
        <ScrollView
            keyboardShouldPersistTaps={"always"}
            style={style.container}>
            <View style={style.inputContainer}>
                <TextInput
                    style={[style.input, inputStyle]}
                    placeholder="e.g United Kingdom, Japan"
                    onChangeText={(text) => GetNationality(text)}
                    onFocus={() => setStyle(style.focusedInput)}
                    onBlur={() => setStyle(style.blurredInput)}
                />
            </View>
            <View>
                <Conditional>
                    <If condition={status === 'loading'}>
                        <View style={style.contentContainer}>
                            <SearchPageSkeletonLoader/>
                            <SearchPageSkeletonLoader/>
                            <SearchPageSkeletonLoader/>
                            <SearchPageSkeletonLoader/>
                        </View>
                    </If>
                    <ElIf condition={status === 'ok'}>
                        <View style={style.contentContainer}>
                            <List>
                                {nationalities?.map((nation, index) => (
                                    <ListItem
                                        style={style.listItem}
                                        key={nation.code}>
                                        <TouchableOpacity
                                            style={style.touchableOp}
                                            onPress={() => selectNationality(nation)}
                                            key={index}>
                                            <AppRow>
                                                <Icon
                                                    style={style.icon}
                                                    name={'flag'}
                                                    type={'FontAwesome'}
                                                />
                                                <View>
                                                    <AppText
                                                        style={style.appText}
                                                    >{nation.code}</AppText>
                                                    <Text>{nation.name}</Text>
                                                </View>
                                            </AppRow>
                                        </TouchableOpacity>
                                    </ListItem>
                                ))}
                            </List>
                        </View>
                    </ElIf>
                    <ElIf condition={status === 'notFound'}>
                        <View style={style.idleContainer}>
                            <SearchFormIdle
                                mode={'nationality'}
                            />
                        </View>
                    </ElIf>
                    <ElIf condition={status === 'error'}>
                        <View style={style.idleContainer}>
                            <SearchFormError/>
                        </View>
                    </ElIf>
                    <ElIf condition={status === 'idle'}>
                        <View style={style.idleContainer}>
                            <SearchFormInit
                                mode={'nationality'}
                            />
                        </View>
                    </ElIf>
                </Conditional>
            </View>
        </ScrollView>
    );
};

export default connector(SelectNationalityPage);
