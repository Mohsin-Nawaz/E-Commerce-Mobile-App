import React from "react";

import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { FONTS,COLORS,SIZES,icons } from "../constants";

const CartQuantityButton=({ containerStyle, iconStyle,quantity,onPress,navigation}) =>{
    return(
          <TouchableOpacity
          style={{
            width:40,
            height:40,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.lightOrange2,
            ...containerStyle
          }}
          onPress={onPress}
          >
            <Image
            source={icons.cart}
            style={{
                width:24,
                height:24,
                tintColor:COLORS.black,
                ...iconStyle
            }}
            />
            <View
            style={{
                position:'absolute',
                top:5,
                right:5,
                height:18,
                width:18,
                alignItems:'center',
                justifyContent:'center',
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.primary
            }}
            //onPress={() =>navigation.navigate("Checkout")}
            >
                <Text
                style={{
                    color:COLORS.white,
                    ...FONTS.body3,
                    lineHeight:15,
                    fontSize:10
                }}
                >
                    {quantity}
                </Text>

            </View>

          </TouchableOpacity>
    )
}

export default CartQuantityButton;