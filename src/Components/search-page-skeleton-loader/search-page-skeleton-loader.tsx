import React from 'react';
import {View} from "react-native";

import {SkeletonLoader} from "../../Components";
import {MUTED_LIGHT_XXX} from "../../../native-base-theme/variables/config";

const SearchPageSkeletonLoader = () =>
    <View style={{
        marginVertical: 15,
    }}>
        <View style={{
            flexDirection: 'row',
        }}>
            <SkeletonLoader
                type={'rect'}
                width={60}
                height={60}
                backgroundColor={MUTED_LIGHT_XXX}
                style={{
                    marginRight: 15,
                }}
            />
            <View>
                <SkeletonLoader
                    type={'rect'}
                    width={120}
                    height={30}
                    backgroundColor={MUTED_LIGHT_XXX}
                    style={{
                        marginBottom: 10,
                    }}
                />
                <SkeletonLoader
                    type={'rect'}
                    width={240}
                    height={20}
                    backgroundColor={MUTED_LIGHT_XXX}
                />
            </View>
        </View>
    </View>

export default SearchPageSkeletonLoader;
