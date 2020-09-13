import React, {PureComponent} from 'react';
import {ScrollView, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {LinkProps} from 'react-router-native';
import {Actions} from 'react-native-router-flux';

import style from './select-destination-page.style';
import {ChangeSearchData, GetDestination} from '../../Store/Actions';
import {DestinationType, RootStateInterface} from '../../Typescript';

const mapStateToProps = (state: RootStateInterface) => ({
    destinations: state.searchReducer.destination.list,
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
            <View style={style.container}>
                <TextInput style={style.input} placeholder="enter destination"
                           onChangeText={(text) => GetDestination(text)}
                />
                <ScrollView>
                    {
                        destinations?.map((des, index) => (
                            <TouchableHighlight onPress={() => this.selectDestination(des)} key={index}>
                                <Text>{des.text}</Text>
                            </TouchableHighlight>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

export default connector(SelectDestinationPage);
