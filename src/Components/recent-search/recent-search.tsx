import React from 'react';
import {View} from "react-native";

import recentSearchStyles from './recent-search.styles';
import {AppRow, AppText} from "../../Containers";
import {Icon} from "native-base";
import {COLOR_PRIMARY, COLOR_WARNING} from "../../../native-base-theme/variables/config";

type propType = {
    dest: string,
    checkin: string,
    checkout: string,
    adult: number,
    room: number,
    children: number,
}

const RecentSearch = ({dest, checkin, checkout, adult, room, children}: propType) => {
    return (
        <View style={recentSearchStyles.container}>
            <View>
                <AppText style={recentSearchStyles.title}
                >{dest}</AppText>
            </View>
            <View>
                <AppText style={recentSearchStyles.checking}
                >{checkin} - {checkout}</AppText>
            </View>
            <View style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                justifyContent: 'center',
            }}>
                <AppRow style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 200,
                }}>
                    <Icon
                        style={recentSearchStyles.icon}
                        name={'bed'}
                        type={'FontAwesome5'}/>
                    <AppText style={recentSearchStyles.passenger}>x{room}</AppText>
                    <Icon
                        style={recentSearchStyles.icon}
                        name={'users'}
                        type={'Entypo'}/>
                    <AppText style={recentSearchStyles.passenger}>x{adult}</AppText>
                    {
                        children ?
                            <>
                                <Icon
                                    style={recentSearchStyles.icon}
                                    name={'child-friendly'}
                                    type={'MaterialIcons'}/>
                                <AppText style={recentSearchStyles.passenger}>x{children}</AppText>
                            </>
                            : null
                    }
                </AppRow>
            </View>
        </View>
    );
};

export default RecentSearch;
