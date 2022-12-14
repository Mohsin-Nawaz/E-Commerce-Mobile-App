import React from "react";

import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { FONTS,COLORS,SIZES,icons } from "../constants";

const IconButton=({containerStyle,icon,iconStyle,onPress}) =>{
    return(
    <TouchableOpacity
        style={{
            ...containerStyle
        }}
        onPress={onPress}
    >
        <Image
        source={icon}
        style={{
            width:30,
            height:30,
            tintColor:COLORS.white,
            ...iconStyle
        }}
        />

    </TouchableOpacity>
    )
}

export default IconButton;