import React, {Component} from 'react';
import {ScrollView} from "react-native";
import {H3, View} from "native-base";

import {Props, State} from './search-page.types';
import style from './search-page.styles'
import SearchFrom from '../../Forms/SearchForm/SearchFrom';
import {RecentSearch} from "../../Components";


class SearchPage extends Component<Props, State> {

    render() {
        //dummy data
        const data = [
            {
                dest: 'Rome, Italy',
                checkin: '02 Sep',
                checkout: '03 Aug',
                adult: 1,
                room: 2,
                children: 3,
            },
            {
                dest: 'London, United Kingdom',
                checkin: '02 Sep',
                checkout: '03 Aug',
                adult: 9,
                room: 9,
                children: 9,
            },
            {
                dest: 'Las Vegas, Under city, United State of America',
                checkin: '02 Sep',
                checkout: '03 Aug',
                adult: 2,
                room: 2,
                children: 0,
            },
        ];

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

                <View style={[style.wrapper]}>
                    <H3 style={style.header}>Recent Search</H3>
                    <View>
                        <ScrollView horizontal={true}>
                            {data.map(item =>
                                <RecentSearch
                                    dest={item.dest}
                                    checkin={item.checkin}
                                    checkout={item.checkout}
                                    adult={item.adult}
                                    room={item.room}
                                    children={item.children}
                                />
                            )}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default SearchPage;
