import React, {PureComponent} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {LinkProps} from 'react-router-native';
import {Actions} from 'react-native-router-flux';

import style from './select-destination-page.style';
import {ChangeSearchData, GetDestination} from '../../Store/Actions';
import {DestinationType, RootStateInterface} from '../../Typescript';
import {Conditional, ElIf, If, SearchFormError, SearchFormIdle, SearchPageSkeletonLoader} from "../../Components";
import {Icon, List, ListItem} from "native-base";
import {AppRow, AppText} from "../../Containers";

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

    state = {
        inputStyle: style.blurredInput,
    };

    selectDestination(destination: DestinationType) {
        this.props.ChangeSearchData({destination});
        Actions.pop();
    }

    render() {
        const {destinations, GetDestination} = this.props;
        return (
            <ScrollView style={style.container}>
                <View style={style.inputContainer}>
                    <TextInput
                        style={[style.input, this.state.inputStyle]}
                        placeholder="e.g London, Paris, Madrid"
                        onChangeText={(text) => GetDestination(text)}
                        onFocus={() => this.setState({inputStyle: {...style.focusedInput}})}
                        onBlur={() => this.setState({inputStyle: {...style.blurredInput}})}
                    />
                </View>
                <View>
                    <Conditional>
                        <If condition={this.props.status === 'loading'}>
                            <View style={style.contentContainer}>
                                <SearchPageSkeletonLoader/>
                                <SearchPageSkeletonLoader/>
                                <SearchPageSkeletonLoader/>
                                <SearchPageSkeletonLoader/>
                            </View>
                        </If>
                        <ElIf condition={this.props.status === 'ok'}>
                            {
                                destinations?.length === 0 ?
                                    <View style={style.idleContainer}>
                                        <SearchFormIdle
                                            mode={'destination'}
                                        />
                                    </View>
                                    :
                                    <View style={style.contentContainer}>
                                        <List>
                                            {destinations?.map((des, index) => (
                                                <ListItem style={style.listItem}
                                                          key={des.dest_code}>
                                                    <TouchableOpacity style={style.touchableOp}
                                                                      onPress={() => this.selectDestination(des)}
                                                                      key={index}>
                                                        <AppRow>
                                                            <Icon
                                                                style={style.icon}
                                                                name={des.dest_type === 'hotel' ? 'hotel' : 'city'}
                                                                type={des.dest_type === 'hotel' ? 'Fontisto' : 'FontAwesome5'}
                                                            />
                                                            <View>
                                                                <AppText
                                                                    style={style.appText}
                                                                >{des.label}</AppText>
                                                                <Text>{des.text}</Text>
                                                            </View>
                                                        </AppRow>
                                                    </TouchableOpacity>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </View>
                            }
                        </ElIf>
                        <ElIf condition={this.props.status === 'error'}>
                            <View style={style.idleContainer}>
                                <SearchFormError/>
                            </View>
                        </ElIf>
                        <ElIf condition={this.props.status === 'idle'}>
                            <Text>Idle goes here !!!</Text>
                        </ElIf>
                    </Conditional>
                </View>
            </ScrollView>
        );
    }
}

export default connector(SelectDestinationPage);
