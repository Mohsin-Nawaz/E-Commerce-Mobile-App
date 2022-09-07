import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import { Header, TextIconButton } from '../../components';
import {LineDivider} from '../../components';
import { TextButton }from '../../components';
import {
    FONTS
    ,SIZES,
    COLORS,icons,constants
}from '../../constants';
import { IconButton,CartQuantityButton,IconLabel,Rating,StepperInput,FooterTotal} from '../../components';

const DeliveryStatus = ({ navigation ,lineStyle}) => {
    const [currentStep,setCurrentStep]=React.useState(2)

    function renderHeader(){
        return(
            <Header
            title="Delivery Status"
            containerStyle={{
                height:50,
                marginTop:20,
                marginHorizontal:SIZES.padding

            }}
            leftComponent={
                <IconButton
                icon={icons.back}
                containerStyle={{
                            width:35,
                            height:35,
                            alignItems:'center',
                            justifyContent:'center',
                            borderWidth:1,
                            borderRadius:SIZES.radius,
                            boderColor:COLORS.gray2
                        }}
                        iconStyle={{
                            width:15,
                            height:15,
                            tintColor:COLORS.gray2
                        }}
                        onPress={() => navigation.navigate("FoodDetail")}
                />
            }
            />
        )
    }
    function renderInfo(){
        return(
            <View
             style={{marginTop:SIZES.radius,paddingHorizontal:SIZES.padding}}>
                <Text style={{textAlign:'center',color:COLORS.gray,...FONTS.body4}}>Estimated Delivery</Text>
                <Text style={{alignItems:'center',...FONTS.h2}}>15 June 2022 / 12:30pm</Text>

            </View>
        )
    }
    function renderTrackOrder(){
        return(
            <View style={{marginTop:SIZES.padding,
            paddingVertical:SIZES.padding,
            borderRadius:SIZES.radius,
            borderWidth:2,
            borderColor:COLORS.lightGray2,
            backgroundColor:COLORS.white2
            }}>

            {/* {track order} */}
            <View
            style={{flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            marginBottom:20,
            paddingHorizontal:SIZES.padding}}>
            <Text style={{...FONTS.h3}}>Track Order</Text>
            <Text style={{color:COLORS.gray,...FONTS.body3}}>NYO12345</Text>

        </View>

            <LineDivider
            lineStyle={{
                backgroundColor:COLORS.lightGray2
            }}
            />
            {/* {status} */}
            <View style={{marginTop:SIZES.padding,paddingHorizontal:SIZES.padding}}>
                {constants.track_order_status.map((item,index) =>{
                    return(
                        <View key={'StatusList-${index}'}>
                            <View
                             style={{flexDirection:'row',
                             alignItems:'center',
                             marginVertical:-7
                             }}>
                                <Image
                                source={icons.check_circle}
                                style={{
                                    width:40,
                                    height:40,
                                    tintColor: index <= currentStep ? COLORS.primary :COLORS.lightGray1
                                }}/>
                                <View
                                style={{marginLeft:SIZES.radius}}>
                                    <Text style={{...FONTS.h3}}>{item.title}</Text>
                                    <Text style={{
                                        color:COLORS.gray,
                                        ...FONTS.body4
                                    }}>{item.sub_title}</Text>

                                </View>

                            </View>
                            {index < constants.track_order_status.length - 1 &&  
                            <View >
                                {index < currentStep && 
                                <View
                                style={{
                                    height:45,
                                    width:3,
                                    marginLeft:18,
                                    backgroundColor:COLORS.primary,
                                    zIndex:-1
                                }}
                                />
                                }
                                {index >= currentStep &&
                                <Image
                                source={icons.dotted_line}
                                resizeMode="cover"
                                style={{
                                    width:4,
                                    height:45,
                                    marginLeft:17
                                }}
                                />
                                
                                }

                            </View>
                            }

                        </View>
                    )
                })}

            </View>
           
            </View>
            
        )
    }
    function renderFooter(){
        return(
            <View style={{marginTop:SIZES.radius,marginBottom:SIZES.padding}}>
                {currentStep < constants.track_order_status.length - 1 && 
                    <View style={{flexDirection:'row',height:55}}>
                        {/* {cancel}  */}

                        <TextButton
                        buttonContainerStyle={{
                            width:"40%",
                            borderRadius:SIZES.base,
                            backgroundColor:COLORS.lightGray2


                        }}
                        label="Cancel"
                        labelStyle={{

                            color:COLORS.primary
                        }}
                        onPress={() => navigation.navigate("MyCart")}
                        />
                        {/* {map view} */}
                        <TextIconButton
                        containerStyle={{
                            flex:1,
                            marginLeft:SIZES.radius,
                            borderRadius:SIZES.base,
                            backgroundColor:COLORS.primary
                        }}
                        label="Done"
                        labelStyle={{
                            color:COLORS.white,...FONTS.h3
                        }}
                        icon={icons.map}
                        iconPosition="LEFT"
                        iconStyle={{
                            width:25,
                            height:25,
                            marginRight:SIZES.base,
                            tintColor:COLORS.white
                        }}
                        onPress={() => navigation.navigate("Success")}
                        />
                    </View>
                }
                {currentStep == constants.track_order_status.length - 1 &&
                <TextButton
                buttonContainerStyle={{
                    height:55,
                    borderRadius:SIZES.base
                }}
                label="DONE"
                onPress={() =>  navigation.navigate("FoodDetail")}

                />
                }

            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal:SIZES.padding,
                backgroundColor:COLORS.white
            }}
        >
            {/* {header} */}

            {renderHeader()}
            {/* {info} */}
            {renderInfo()}
          
            {/* {track order} */}
            <ScrollView
            showsVerticalScrollIndicator={false}>
                {renderTrackOrder()}

            </ScrollView>
          
            {/* {footer} */}
            {renderFooter()}


            </View>
    )
}

export default DeliveryStatus;