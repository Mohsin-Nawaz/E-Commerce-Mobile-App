import React from "react";

import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { FONTS,COLORS,SIZES,icons } from "../constants";
const LineDivider=({lineStyle}) =>{
    return(
        <View
        style={{
            height:2.5,
            width:"100%",
            backgroundColor:COLORS.lightGray2,...lineStyle
        }}
        >

        </View>
    )
}
export default LineDivider;