import React from "react";

import {
    View,
    Text,
    TouchableHighlightComponent
} from 'react-native';
import { FONTS } from "../constants";
import { IconButton } from "./IconButton";

const Header =({  containerStyle, title,titleStyle,leftComponent,rightComponent}) =>
{
    return(
        <View 
        style={{
            height:60,
            flexDirection:'row',
            ...containerStyle
        }}
        >
            {/* Left */}

            {leftComponent}
            
            {/* {Ttile} */}
            <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}
            >
                <Text 
                style={{...FONTS.h3,...titleStyle}}>
                    {title}

                </Text>
            </View>
            
            {/* {Right} */}
            {rightComponent}

        </View>
    )
}


export default Header;