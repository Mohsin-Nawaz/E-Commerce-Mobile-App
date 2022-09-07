import React from 'react';
import {
    View,
    Text,
    Image,
    BackHandler
} from 'react-native';
import { TextButton } from '../../components';
import {
    FONTS,
    SIZES,
    COLORS,
    images
} from '../../constants';
const Success = ({ navigation }) => {
    React.useEffect(() => {
        const backHandler=BackHandler.addEventListener(
            'hardwareBackPress',() => {return true})
            return() =>backHandler.remove();

    }, [])

    return (
        <View
            style={{
                flex: 1,
                backgroundColor:COLORS.white,
                paddingHorizontal:SIZES.padding
            }}
        >
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image
                source={images.success}
                resizeMode="contain"
                style={{width:120,
                height:120}}/>
                <Text style={{marginTop:SIZES.padding,...FONTS.h1}}>Congratulations!

                </Text>
                <Text 
                style={{
                    textAlign:'center',
                    marginTop:SIZES.base,
                    color:COLORS.darkGray,...FONTS.body3
                }}>Your Order has been placed Successfully</Text>

            </View>
            <TextButton
            label="Done"
            buttonContainerStyle={{
                height:55,
                marginBottom:SIZES.padding,
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.primary
            }}
            onPress={() => navigation.navigate("DeliveryStatus")}

            />
        </View>
    )
}

export default Success;