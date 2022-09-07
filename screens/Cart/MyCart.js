import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import { FONTS,
    COLORS,
    SIZES,
    images,
    icons,
    dummyData,
    constants
    } from "../../constants";
    import { SwipeListView } from 'react-native-swipe-list-view';
import { Header, IconButton,CartQuantityButton,IconLabel,TextButton,LineDivider,Rating,StepperInput,FooterTotal} from '../../components';


const MyCart = ({ navigation }) => {
    
const [myCartList,setMyCartList]=React.useState(dummyData.myCart)
    //handler
        function updateQuantityHandler(newQty,id){
            const newMyCartList=myCartList.map(cl =>(
                cl.id === id ? {...cl,qty:newQty}:cl
            ))
            setMyCartList(newMyCartList)
        }

        function removeMyCartHandler(id){
            let newMyCartList=[...myCartList]
            const index=newMyCartList.findIndex(cart =>cart.id===id)
            newMyCartList.splice(index,1)
            setMyCartList(newMyCartList)
        }
    //render

    function renderHeader(){
        return(
            <Header
            title="My Cart"
            containerStyle={{
                height:45,
                marginHorizontal:SIZES.padding,
                marginTop:30,


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
            rightComponent={
                <CartQuantityButton
                quantity={30}
               //onPress={() => navigation.navigate("Checkout")}
                />
            }
            
            />
        )
    }
    function renderCartList(){
        return(
            <SwipeListView
            data={myCartList}
            keyExtractor={(item,index) => {item.id}}
            contentContainerStyle={{
                marginTop:SIZES.radius,
                paddingHorizontal:SIZES.padding,
                paddingBottom:SIZES.padding *2
            }}
            disableRightSwipe={true}
            rightOpenValue={-75}

            renderItem={(data,rowMap) => (
                <View
                style={{
                    height:100,
                    backgroundColor:COLORS.lightGray2,
                    ...styles.cartItemContainer
                }}
                >
                    {/* {food image} */}

                    <View
                    style={{
                        width:90,
                        height:100,
                        marginLeft:-10
                    }}
                    >
                        <Image
                        source={data.item.image}
                        resizeMode="contain"
                        style={{
                            width:"100%",
                            height:"100%",
                            position:'absolute',
                            top:10
                        }}

                        />

                    </View>

                    {/* {food info} */}
                    <View
                    
                    style={{flex:1}}>
                        <Text style={{...FONTS.h3}}>{data.item.name}</Text>
                        <Text style={{color:COLORS.primary,...FONTS.h3}}>Rs.{data.item.price}</Text>

                    </View>
                    {/* {quantity} */}
                    <StepperInput
                    containerStyle={{
                        height:50,
                        width:110,
                        backgroundColor:COLORS.white


                    }}
                    value={data.item.qty}
                    onAdd={() => updateQuantityHandler(data.item.qty + 1 , data.item.id)}
                    onMinus={() => {
                        if(data.item.qty > 1)
                    {
                        updateQuantityHandler(data.item.qty - 1,data.item.id)
                    }
                    }}
                    />

                </View>
        )}
                    renderHiddenItem={(data,rowMap)=> (
                        <IconButton
                        containerStyle={{
                            flex:1,
                            justifyContent:'flex-end',
                            backgroundColor:COLORS.primary,
                            ...styles.cartItemContainer

                        }}
                        icon={icons.delete_icon}
                        iconStyle={{
                            marginRight:10
                        }}
                        onPress={()=> removeMyCartHandler(data.item.id)}
                        />
                    )}
               />
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
            {/* {Cart list } */}
            {renderCartList()}


            {/* {Footer} */}
            <FooterTotal
            
            subTotal={37.97}
            shippingFee={0.00}
            total={37.97}
            //onPress={() =>  }
            />
            
            
        </View>
    )
}

const styles=StyleSheet.create({
    cartItemContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:SIZES.radius,
        paddingHorizontal:SIZES.radius,
        borderRadius:SIZES.radius
    }
})


export default MyCart;