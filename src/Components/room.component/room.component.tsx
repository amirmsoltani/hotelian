import React from 'react';
import {CardItem, Icon, Picker, Text, View} from 'native-base';
import {TouchableHighlight} from 'react-native';
import {RoomType} from '../../Typescript';
import style from './room-component.style';
import {randInt} from '../../Lib/Random';

type Props = { title: string, onChange: (room: RoomType) => void, defaultValue?: RoomType, onDelete: () => void, removable: boolean }
export default (props: Props): React.FunctionComponentElement<CardItem> => {
    const [state, setState] = React.useState<RoomType>(props.defaultValue || {
        adults: 1,
        children: [],
        key: randInt(0xff),
    });
    const setStateWithProps = (state: RoomType) => {
        props.onChange(state);
        return setState(state);
    };
    const addChild = () => {
        if (state.children.length < 3)
            state.children.push(1);
        setStateWithProps({...state, children: state.children});
    };
    const minusChild = (index: number | Event) => {
        if (typeof index === 'number')
            state.children.splice(index, 1);
        else if (state.children.length > 0)
            state.children.pop();
        setStateWithProps({...state, children: state.children});
    };
    const changeChildAge = (value: number, index: number) => {
        state.children[index] = value;
        setStateWithProps({...state});
    };
    return (
        <CardItem style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
        }}>
            <View style={style.roomHeader}>
                <Text style={style.roomText}>{props.title}</Text>
                {
                    props.removable ?
                        <TouchableHighlight onPress={props.onDelete}>
                            <Icon type='FontAwesome5' name='trash' style={style.headerTrash}/>
                        </TouchableHighlight> : <></>
                }
            </View>
            <View style={style.body}>
                <View style={style.scope}>
                    <Text style={style.scopeText}>adults</Text>


                    <TouchableHighlight onPress={() => {
                        setStateWithProps({...state, adults: (state.adults > 1 && --state.adults) || state.adults});
                    }}>
                        <Icon type='SimpleLineIcons' name='minus' style={style.scopeIcon}/>
                    </TouchableHighlight>


                    <Text style={style.scopeNumber}>{state.adults}</Text>


                    <TouchableHighlight onPress={() => {
                        setStateWithProps({...state, adults: (state.adults < 4 && ++state.adults) || state.adults});
                    }} style={style.scopeIcon}>
                        <Icon type='SimpleLineIcons' name='plus' style={style.scopeIcon}/>
                    </TouchableHighlight>
                </View>


                <View style={style.scope}>
                    <Text style={style.scopeText}>children</Text>
                    <TouchableHighlight onPress={minusChild}>
                        <Icon type='SimpleLineIcons' name='minus' style={style.scopeIcon}/>
                    </TouchableHighlight>
                    <Text style={style.scopeNumber}>{state.children.length}</Text>

                    <TouchableHighlight onPress={addChild} style={style.scopeIcon}>
                        <Icon type='SimpleLineIcons' name="plus" style={style.scopeIcon}/>
                    </TouchableHighlight>
                </View>
            </View>
            {
                state.children.length > 0 ?
                    <View style={style.childrenAges}>
                        <Text style={style.childrenAgesText}>children ages:</Text>
                        {
                            state.children.map((child, index) => {
                                return (
                                    <Picker key={index} style={style.childrenAgesPicker} selectedValue={child}
                                            onValueChange={(value) => changeChildAge(value, index)}>
                                        {
                                            [...Array(11).keys()].map(item => <Picker.Item
                                                label={(item + 1) + ' years old'} key={item}
                                                value={item + 1}/>)
                                        }
                                    </Picker>
                                );
                            })
                        }
                    </View> : undefined
            }
        </CardItem>
    );
}
