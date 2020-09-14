import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {Button, Col, Form, Grid, Icon} from 'native-base';

import {RootStateInterface} from 'src/Typescript';
import {AcceptSearchForm} from '../../Store/Actions';
import FormRow from "./form-row/form-row";
import searchFromStyles from './searchFormStyles'
import {COLOR_IMPORTANT, COLOR_PRIMARY, COLOR_WHITE, GRAY_LIGHT_XXX} from "../../../native-base-theme/variables/config";
import {AppRow, AppText} from "../../Containers/index";

declare var global: {};
const mapStateToProps = ({searchReducer: {form_data}}: RootStateInterface) => ({
    rooms: form_data.rooms,
    nationality: form_data.nationality,
    checkIn: form_data.checkIn?.formatted,
    checkOut: form_data.checkOut?.formatted,
    destination: form_data.destination,
    adultCounts: form_data.adultCounts,
    childCounts: form_data.childCounts,
});


const connector = connect(mapStateToProps, {AcceptSearchForm});
type Props = ConnectedProps<typeof connector>;
const SearchFrom = ({rooms, nationality, checkOut, checkIn, destination, adultCounts, childCounts, ...props}: Props) => {
    return (
        <Form style={searchFromStyles.container}>
            <View>
                <TouchableOpacity onPress={Actions.destination}>
                    <FormRow
                        text={destination ? destination.label : 'Where are you going?'}
                        isFilled={!!destination}
                        hasError={false}
                        type={'destination'}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.datepicker}>
                    <FormRow
                        text={checkIn ? checkIn : 'Check in - Check out'}
                        isFilled={!!checkIn}
                        hasError={false}
                        type={'checkin-out'}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.nationality}>
                    <FormRow
                        text={nationality ? nationality.name : 'Select Nationality'}
                        isFilled={!!nationality}
                        hasError={false}
                        type={'nationality'}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.rooms}>
                    <FormRow
                        text={`${rooms?.length} Rooms / ${adultCounts} Adults / ${childCounts} Children`}
                        isFilled={!!nationality}
                        hasError={false}
                        type={'passenger'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                {/*<TouchableOpacity onPress={props.AcceptSearchForm}>*/}
                {/*    <>*/}
                {/*        <Icon name='search1' type={'AntDesign'}*/}
                {/*              style={{color: 'white', marginRight: 10, fontSize: 18}}/>*/}
                {/*        <Text>Search</Text>*/}
                {/*    </>*/}
                {/*</TouchableOpacity>*/}
                <Grid>
                    <AppRow style={searchFromStyles.btnSection}>
                        <Col style={{paddingRight: 10, width: 120}}>
                            <Button rounded block
                                    style={{backgroundColor: GRAY_LIGHT_XXX}}>
                                <Icon
                                    style={{
                                        color: COLOR_PRIMARY,
                                        fontSize: 18,
                                        marginRight:10,
                                    }}
                                    name='my-location'
                                    type={'MaterialIcons'}/>
                                <AppText style={{
                                    color: COLOR_PRIMARY,
                                    textAlign: 'center'
                                }}>Map</AppText>
                            </Button>
                        </Col>
                        <Col style={{paddingLeft: 10}}>
                            <Button rounded block
                                    style={{backgroundColor: COLOR_IMPORTANT}}>
                                <AppText style={{
                                    color: COLOR_WHITE,
                                    width: '100%',
                                    textAlign: 'center'
                                }}>SEARCH</AppText>
                            </Button>
                        </Col>
                    </AppRow>
                </Grid>
            </View>
        </Form>
    );
};

export default connector(SearchFrom);
