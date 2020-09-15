import React, {Component} from 'react';
import {ScrollView} from "react-native";
import {View} from "native-base";

import {Props, State} from './search-page.types';
import style from './search-page.styles'
import SearchFrom from '../../Forms/SearchForm/SearchFrom';

class SearchPage extends Component<Props, State> {
    render() {
        return (
            <ScrollView style={style.container}>
                <View style={style.bg_rect}/>
                <View style={style.bg_triangle}/>
                <View style={{
                    paddingHorizontal: 15,
                    paddingVertical: 25,
                }}>
                    <SearchFrom/>
                </View>
                <View>
                    
                </View>
            </ScrollView>
        );
    }
}

export default SearchPage;
