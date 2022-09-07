import React from "react";

import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { FONTS,COLORS,SIZES,icons } from "../constants";
import IconButton from "./IconButton";
const StepperInput=({
    containerStyle,
    value = 1,
    onAdd,
    onMinus
}) =>{
    return(
        <View
        style={{
            flexDirection:'row',
            height:50,
            width:100,
            backgroundColor:COLORS.lightGray2,
            borderRadius:SIZES.radius,
            ...containerStyle
        }}
        >
        
            <IconButton
            containerStyle={{
                width:40,
                alignItems:'center',
                justifyContent:'center'
            }}
            icon={icons.minus}
            iconStyle={{
                height:20,
                width:20,
                tintColor: value > 1 ? COLORS.primary : COLORS.gray
            }}
            onPress={onMinus}
            />

            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}
            >
                <Text
                style={{
                    ...FONTS.h2
                }}>
                    {value}

                </Text>

            </View>

            <IconButton
            containerStyle={{
                width:40,
                alignItems:'center',
                justifyContent:'center'
            }}
            icon={icons.plus}
            iconStyle={{
                height:20,
                width:20,
                tintColor:COLORS.primary
            }}
            onPress={onAdd}
            />

        </View>
    )
}
export default StepperInput;