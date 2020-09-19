import React, {PureComponent} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {LinkProps} from 'react-router-native';
import {Actions} from 'react-native-router-flux';
import {Icon, List, ListItem} from 'native-base';

import style from './select-destination-page.style';
import {ChangeSearchData, GetDestination} from '../../Store/Actions';
import {DestinationType, RootStateInterface} from '../../Typescript';
import {COLOR_BLACK} from '../../../native-base-theme/variables/config';
import {AppRow, AppText} from '../../Containers';
import {SearchPageSkeletonLoader} from "../../Components";

const mapStateToProps = (state: RootStateInterface) => ({
    destinations: state.searchReducer.destination.list,
    status: state.searchReducer.destination.GET,
});

const mapDispatchToProps = {
    ChangeSearchData,
    GetDestination,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & LinkProps;

class SelectDestinationPage extends PureComponent<Props> {

    selectDestination(destination: DestinationType) {
        this.props.ChangeSearchData({destination});
        Actions.pop();
    }

    render() {
        const {destinations, GetDestination} = this.props;
        return (
            <ScrollView style={style.container}>
                <TextInput style={style.input} placeholder="e.g London, Paris, Madrid"
                           onChangeText={(text) => GetDestination(text)}
                />
                <View>
                    {
                        this.props.status === 'loading' ?
                            <View>
                                <SearchPageSkeletonLoader/>
                                <SearchPageSkeletonLoader/>
                                <SearchPageSkeletonLoader/>
                                <SearchPageSkeletonLoader/>
                            </View>
                            :
                            <List>
                                {destinations?.map((des, index) => (
                                    <ListItem style={{marginLeft: 0, paddingTop: 0, paddingBottom: 0}}
                                              key={des.dest_code}>
                                        <TouchableOpacity style={{flex: 1, paddingVertical: 10, marginVertical: 5}}
                                                          onPress={() => this.selectDestination(des)} key={index}>
                                            <AppRow>
                                                <Icon
                                                    style={{
                                                        color: COLOR_BLACK,
                                                        fontSize: 30,
                                                        marginRight: 15,
                                                        marginLeft: 0,
                                                        alignSelf: 'center',
                                                    }}
                                                    name={des.dest_type === 'hotel' ? 'hotel' : 'city'}
                                                    type={des.dest_type === 'hotel' ? 'Fontisto' : 'FontAwesome5'}
                                                />
                                                <View>
                                                    <AppText
                                                        style={{fontWeight: 'bold', letterSpacing: 1}}
                                                    >{des.label}</AppText>
                                                    <Text>{des.text}</Text>
                                                </View>
                                            </AppRow>
                                        </TouchableOpacity>
                                    </ListItem>
                                ))}
                            </List>
                    }
                </View>
            </ScrollView>
        );
    }
}

export default connector(SelectDestinationPage);
