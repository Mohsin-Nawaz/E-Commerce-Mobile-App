import React from "react";
import {FONTS,SIZES,COLORS}from "../constants";
import {  Text,View,
StyleSheet,
TouchableWithoutFeedback
} from "react-native";

const CustomSwitch=({value,onchange}) => {
return(
    <TouchableWithoutFeedback
    onPress={() => onchange(!value) }
    >
        <View
        style={{
            flexDirection:'row',

        }}
        >
            {/* {switch } */}
            <View
            style={value ? styles.switchOnContainer :
            styles.switchOffContainer
            }
             >
                <View
                 style={{
                    ...styles.dot,
                    backgroundColor:value ? COLORS.white :COLORS.gray
                 }}
                 />
            </View>

            {/* {Text} */}
            <Text 
            style={{
                color: value ?  COLORS.primary :COLORS.gray,
                 marginLeft:SIZES.base,
                 ...FONTS.body4
            }}
            >
                save Me

            </Text>
        </View>
    </TouchableWithoutFeedback>
)
}

const styles=StyleSheet.create({
    switchOnContainer :{
        width:40,
        height:20,
        paddingRight:2,
        justifyContent:'center',
        alignItems:'flex-end',
        borderRadius:10,
        backgroundColor:COLORS.primary
    },
    switchOffContainer:{
        width:40,
        height:20,
        paddingRight:2,
        justifyContent:'center',
        borderWidth:1,
        borderColor:COLORS.gray,
        borderRadius:10

    },
    dot:{
         width:12,
         height:12,
         borderRadius:6
    }
})
export default CustomSwitch;