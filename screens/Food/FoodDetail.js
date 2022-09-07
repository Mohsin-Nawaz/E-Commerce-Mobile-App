import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import { FONTS,
COLORS,
SIZES,
images,
icons,
dummyData,
constants
} from "../../constants";

import { Header, IconButton,CartQuantityButton,IconLabel,TextButton,LineDivider,Rating,StepperInput} from '../../components';
const FoodDetail = ({ navigation }) => {


    const [foodItem,setFoodItem]=React.useState(dummyData.vegBiryani)
    const [selectedSize,setSelectedSize]=React.useState("")
    const [qty,setQty]=React.useState(1)

    function renderHeader(){
        return(
            <Header
            title="DETAILS"
            containerStyle={{
                height:45,
                marginHorizontal:SIZES.padding,
                marginTop:25
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
                        onPress={() => navigation.navigate("Home")}
                />
            }
            rightComponent={
                <CartQuantityButton
                quantity={30}
                onPress={() => navigation.navigate("MyCart")}
                />
            }
            />

        )
    }
    function renderDetails(){
        return(
            <View
            style={{
                marginTop:SIZES.radius,
                marginBottom:SIZES.padding,
                marginHorizontal:SIZES.padding
            }}
            >
                {/* {food card section} */}

                <View 
                style={{
                    height:150,
                    borderRadius:15,
                    backgroundColor:COLORS.lightGray2
                }}
                >
                    {/* {calories and favourite} */}
                    <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginTop:SIZES.base,
                        paddingHorizontal:SIZES.radius
                    }}
                    >
                        {/* {calories} */}

                        <View
                        style={{
                            flexDirection:'row'
                        }}
                        >
                            <Image
                            source={icons.calories}
                            style={{
                                width:25,
                                height:25
                            }}
                            />
                            <Text style={{
                                color:COLORS.darkGray2,...FONTS.body4
                            }}>
                                {foodItem?.calories}calories

                            </Text>

                        </View>
                        {/* {favourite} */}
                        <Image
                        source={icons.love}
                        style={{
                            width:15,
                            height:15,
                            tintColor:foodItem?.isFavourite ? 
                            COLORS.primary : COLORS.gray
                        }}
                        />

                    </View>
                    {/* {Food image} */}
                    <Image
                    source={foodItem?.image}
                    resizeMode="contain"
                    style={{
                        height:150,
                        width:"100%"
                    }}
                    
                    />

                </View>

                {/* {food info} */}
                    <View
                    style={{
                        marginTop:SIZES.padding
                    }}

                    >
                        {/* {name and description} */}
                        <Text
                        style={{
                            ...FONTS.h2
                        }}
                        >
                            {foodItem?.name}

                        </Text>
                        <Text
                        style={{
                            marginTop:SIZES.base,
                            color:COLORS.darkGray,
                            textAlign:'justify',
                            ...FONTS.body3
                        }}
                        >
                            {foodItem?.description}

                        </Text>
                        {/* {rating , duration & Shipping } */}

                        <View
                        style={{
                            flexDirection:'row',
                            marginTop:SIZES.padding
                        }}
                        >
                            {/* {rating} */}
                            <IconLabel
                            containerStyle={{
                                backgroundColor:COLORS.primary
                            }}
                            icon={icons.star}
                            label="4.5"
                            labelStyle={{
                                color:COLORS.white
                            }}
                            />
                            
                            {/* {Duration} */}
                            <IconLabel
                            containerStyle={{
                              marginLeft:SIZES.radius,
                              paddingHorizontal:0
                            }}
                            icon={icons.clock}
                            
                            labelStyle={{
                                tintColor:COLORS.black
                            }}
                            label="30 Mins"
                            />


                            {/* {Shipping} */}

                            <IconLabel
                            containerStyle={{
                              marginLeft:SIZES.radius,
                              paddingHorizontal:0
                            }}
                            icon={icons.dollar}
                            
                            labelStyle={{
                                tintColor:COLORS.black
                            }}
                            label="Free Shipping"
                            />
                        </View>
                            {/* {sizes} */}
                            <View
                            style={{
                                flexDirection:'row',
                                marginTop:SIZES.padding,
                                alignItems:'center'
                            }}
                            >
                                <Text
                                style={{
                                    ...FONTS.h4
                                }}
                                >
                                    Sizes:

                                </Text>
                                <View
                                style={{
                                    flexDirection:'row',
                                    flexWrap:'wrap',
                                    marginLeft:SIZES.padding
                                }}
                                >
                                    {dummyData.sizes.map((item,index)=>{
                                        return(
                                            <TextButton
                                            key={'Sizes -${index}'}
                                            buttonContainerStyle={{
                                                width:40,
                                                height:40,
                                                margin:SIZES.base,
                                                borderWidth:1,
                                                borderRadius:SIZES.radius,
                                                backgroundColor: selectedSize== item.id ? COLORS.primary: null,
                                                borderColor: selectedSize== item.id ? COLORS.primary : COLORS.gray2
                                            }}
                                            label={item.label}
                                            labelStyle={{
                                                color: selectedSize== item.id ? COLORS.white: COLORS.gray2,
                                                ...FONTS.body2
                                            }}
                                            onPress={() => setSelectedSize(item.id)}
                                            />
                                        )
                                    })}

                                </View>

                            </View>
                    </View>
            </View>
        )
    }
    function renderRestaurant(){
        return(
            <View
            style={{
                flexDirection:'row',
                alignItems:'center',
                marginVertical:SIZES.padding,
                paddingHorizontal:SIZES.padding
            }}
            >
                <Image
                source={images.profile}
                style={{
                    width:40,
                    height:40,
                    borderRadius:SIZES.radius
                }}
                />
                {/* {info} */}
                <View
                 style={{
                    flex:1,
                    marginLeft:SIZES.radius,
                    justifyContent:'center'
                 }}>
                    <Text style={{...FONTS.h4}}>E-Shop</Text>
                    <Text style={{color:COLORS.gray,...FONTS.body4}}>1.2 Km away from you</Text>
                </View>
                {/* {rating} */}
                <Rating
                rating={4}
                iconStyle={{
                    marginLeft:1
                }}

                />

                


            </View>
        )
    }
    function renderFooter(){
        return(
            <View
            style={{
                flexDirection:'row',
                height:80,
                alignItems:'center',
                paddingHorizontal:SIZES.padding,
                paddingBottom:SIZES.radius
            }}>
                {/* {stepper input} */}
                <StepperInput
                value={qty}
                onAdd={() => setQty(qty + 1)}
                onMinus={() =>{
                    if(qty > 1)
                    {
                        setQty(qty - 1)
                    }

                }}
                />
                {/* {text button} */}
                <TextButton
                buttonContainerStyle={{
                    flex:1,
                    flexDirection:'row',
                    height:50,
                    marginLeft:SIZES.radius,
                    paddingHorizontal:SIZES.radius,
                    borderRadius:SIZES.radius,
                    backgroundColor:COLORS.primary
                }}
                label="Buy Now"
                label2="Rs.700"
                onPress={() => navigation.navigate("MyCart")}
                />
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
        backgroundColor:COLORS.white
            }}
        >
            {/* {header} */}
            {renderHeader()}

            {/* {body} */}
            <ScrollView>
                
                {/* {food Detail} */}
                {renderDetails()}

                <LineDivider/>


                {/* {restaurant} */}
                {renderRestaurant()}

            </ScrollView>

            {/* {footer} */}
            <LineDivider/>
            {renderFooter()}

        </View>
    )
}

export default FoodDetail;