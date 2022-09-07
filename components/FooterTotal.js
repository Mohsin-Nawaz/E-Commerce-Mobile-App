import React from "react";

import {
    View,
    Text,
    Platform
} from 'react-native';
import { FONTS,COLORS,SIZES,icons } from "../constants";
import TextButton from "./TextButton";
import LineDivider from "./LineDivider";
import LinearGradient from "react-native-linear-gradient";
const FooterTotal=({subTotal,shippingFee,total,onPress,navigation}) =>{
    return(
        <View>

            {/* {shadow} */}
            <LinearGradient
            start={{x:0,y:0}}
            end={{x:0, y:1}}
            colors={[COLORS.transparent,COLORS.lightGray1]}
            style={{
                position:'absolute',
                top:-15,
                left:0,
                Right:0,
                height:Platform.OS ==='ios' ? 200:50,
                borderTopLeftRadius:15,
                borderTopRightRadius:15
            }}
            />
            {/* {order Details} */}
            <View style={{
                padding:SIZES.padding,
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
                backgroundColor:COLORS.white

            }}>
                {/* {subtotal} */}
                <View style={{flexDirection:'row'}}>
                    <Text style={{flex:1,...FONTS.body3}}>SubTotal</Text>
                    <Text style={{...FONTS.h3}}>Rs.{subTotal.toFixed(2)}</Text>

                </View>
                     
                {/* {shipping fee} */}
                <View
                style={{flexDirection:'row',
                    marginTop:SIZES.base,
                    marginBottom:SIZES.padding

            }}>
                <Text style={{flex:1,...FONTS.body3}}>Shipping Fee</Text>
                <Text style={{...FONTS.h3}}>Rs.{shippingFee.toFixed(2)}</Text>

                </View>
                
                {/* {line} */}
                <LineDivider 
                />


                {/* {total} */}
                <View style={{flexDirection:'row',
                        marginTop:SIZES.padding
            }}>
                <Text style={{flex:1,...FONTS.h2}}>Total:</Text>
                <Text style={{...FONTS.h2}}>Rs.{total.toFixed(2)}</Text>

                </View>

                {/* {order} */}
                <TextButton
                buttonContainerStyle={{
                    height:60,
                    marginTop:SIZES.padding,
                    borderRadius:SIZES.radius,
                    backgroundColor:COLORS.primary

                }}
                label="Place Your Order"
                //onPress={() => navigation.navigate("")}
                />




            </View>

        </View>
    )
}
export default FooterTotal;