import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList
} from 'react-native';


import Animated,{
    useSharedValue,
    useAnimatedStyle,
    withTiming
} from 'react-native-reanimated';
import LinearGradient from "react-native-linear-gradient";
import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';
import {
    Home,
    Search,
    
    Favourite,
    Notification,
    MyCart
} from "../screens";
import { 
    COLORS,
    FONTS,
    SIZES,
    icons,
    constants,
    dummyData
 } from "../constants";
import { Header } from "../components";

const TabButton=({label,icon,isFocused,onPress,outerContainerstyle,innerContainerStyle}) =>{
    return(
        <TouchableWithoutFeedback
        onPress={onPress}
        >
            <Animated.View style={[
                {
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            },
            outerContainerstyle
        ]}>
                <Animated.View style={[
                    {
                     flexDirection:'row',
                     width:"80%",
                     height:50,
                     alignItems:'center',
                     justifyContent:'center',
                     borderRadius:25
                },
                innerContainerStyle
            
            ]}>
                    <Image
                    source={icon}
                    style={{
                        width:20,
                        height:20,
                        tintColor: isFocused ?COLORS.white :COLORS.gray
                    }}
                    />
                    {isFocused &&
                    <Text numberOfLines={1}
                    style={{
                        marginLeft:SIZES.base,
                        color:COLORS.white,
                        ...FONTS.h4
                    }}
                    >
                        {label}

                    </Text>
                    }
                </Animated.View>
            </Animated.View>

        </TouchableWithoutFeedback>

    )
}
const MainLayout = ({drawerAnimationStyle,navigation,setSelectedTab,selectedTab}) => {
const flatListRef=React.useRef()
    //Reanimated shared value

    const homeTabFlex=useSharedValue(1)
    const homeTabColor=useSharedValue(COLORS.white)

    const searchTabFlex=useSharedValue(1)
    const searchTabColor=useSharedValue(COLORS.white)
    
    const MyCartFlex=useSharedValue(1)
    const MyCartColor=useSharedValue(COLORS.white)
    const favouriteTabFlex=useSharedValue(1)
    const favouriteTabColor=useSharedValue(COLORS.white)
    const notificationTabFlex=useSharedValue(1)
    const notificationTabColor=useSharedValue(COLORS.white)
    
//Reanimated style

const homeFlexStyle=useAnimatedStyle(() =>{
    return{
        flex:homeTabFlex.value
    }
})
    const homeColorStyle=useAnimatedStyle(() =>
    {
        return{ 
            backgroundColor:homeTabColor.value
        }
    })



    const searchFlexStyle=useAnimatedStyle(() =>{
        return{
            flex:searchTabFlex.value
        }
    })
        const searchColorStyle=useAnimatedStyle(() =>
        {
            return{ 
                backgroundColor:searchTabColor.value
            }
        })
    

        const cartFlexStyle=useAnimatedStyle(() =>{
            return{
                flex:MyCartFlex.value
            }
        })
            const cartColorStyle=useAnimatedStyle(() =>
            {
                return{ 
                    backgroundColor:MyCartColor.value
                }
            })


            const favouriteFlexStyle=useAnimatedStyle(() =>{
                return{
                    flex:favouriteTabFlex.value
                }
            })
                const favouriteColorStyle=useAnimatedStyle(() =>
                {
                    return{ 
                        backgroundColor:favouriteTabColor.value
                    }
                })

                const notificationFlexStyle=useAnimatedStyle(() =>{
                    return{
                        flex:notificationTabFlex.value
                    }
                })
                    const notificationColorStyle=useAnimatedStyle(() =>
                    {
                        return{ 
                            backgroundColor:notificationTabColor.value
                        }
                    })



    React.useEffect(() =>
    {
        setSelectedTab(constants.screens.home)
    },[])

    React.useEffect(() =>{
if(selectedTab == constants.screens.home) {
    flatListRef?.current?.scrollToIndex({
        index: 0,
        animated:false
    })
    homeTabFlex.value=withTiming(4,{duration: 500})
    homeTabColor.value=withTiming(COLORS.primary,{duration: 500})
}
else{
    homeTabFlex.value=withTiming(1,{duration: 500})
    homeTabColor.value=withTiming(COLORS.white,{duration: 500})

}



if(selectedTab == constants.screens.search) {
    flatListRef?.current?.scrollToIndex({
        index: 1,
        animated:false
    })
    searchTabFlex.value=withTiming(4,{duration: 500})
    searchTabColor.value=withTiming(COLORS.primary,{duration: 500})
}
else{
    searchTabFlex.value=withTiming(1,{duration: 500})
    searchTabColor.value=withTiming(COLORS.white,{duration: 500})

}

if(selectedTab == constants.screens.cart) {
    flatListRef?.current?.scrollToIndex({
        index: 2,
        animated:false
    })
    MyCartFlex.value=withTiming(4,{duration: 500})
    MyCartColor.value=withTiming(COLORS.primary,{duration: 500})
}
else{
    MyCartFlex.value=withTiming(1,{duration: 500})
    MyCartColor.value=withTiming(COLORS.white,{duration: 500})

}


if(selectedTab == constants.screens.favourite) {
    flatListRef?.current?.scrollToIndex({
        index: 3,
        animated:false
    })
    favouriteTabFlex.value=withTiming(4,{duration: 500})
    favouriteTabColor.value=withTiming(COLORS.primary,{duration: 500})
}
else{
    favouriteTabFlex.value=withTiming(1,{duration: 500})
    favouriteTabColor.value=withTiming(COLORS.white,{duration: 500})

}


if(selectedTab == constants.screens.notification) {
    flatListRef?.current?.scrollToIndex({
        index: 4,
        animated:false
    })
    notificationTabFlex.value=withTiming(4,{duration: 500})
    notificationTabColor.value=withTiming(COLORS.primary,{duration: 500})
}
else{
    notificationTabFlex.value=withTiming(1,{duration: 500})
    notificationTabColor.value=withTiming(COLORS.white,{duration: 500})

}
    } ,[selectedTab])
    return (
        <Animated.View
            style={{
                flex: 1,
                // alignItems: 'center',
                // justifyContent: 'center',
                backgroundColor:COLORS.white,
                ...drawerAnimationStyle
            }}
        >
            {/* Header */}

            <Header 
            containerStyle={{
                height:50,
                paddingHorizontal:SIZES.padding,
                marginTop:20,
                alignItems:'center'
            }}

            title={selectedTab.toUpperCase()}
            leftComponent={
                <TouchableOpacity
                style={{
                    width:40,
                    height:40,
                    alignItems:'center',
                    justifyContent:'center',
                    borderWidth:1,
                    borderColor:COLORS.gray2,
                    borderRadius:SIZES.radius
                }}
                onPress={() => navigation.openDrawer()}
                >
                    <Image
                    source={icons.menu}
                    />
                </TouchableOpacity>
            } 

            rightComponent={
                <TouchableOpacity style={{
                    borderRadius:SIZES.radius,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Image
                    source={dummyData?.myProfile?.profile_image}
                    style={{
                        width:40,
                        height:40,
                        borderRadius:SIZES.radius
                    }}
                    />

                </TouchableOpacity>
            }
            />

            {/* Content */}

            <View 
            style={{
                flex:1
            }}
            >
            <FlatList
            ref={flatListRef}
            horizontal
            scrollEnabled={false}
            pagingEnabled
            snapToAlignment="center"
            snapToInterval={SIZES.width}
            showsHorizontalScrollIndicator={false}
            data={constants.bottom_tabs}
            keyExtractor={(item,index) =>  item.id }
            renderItem={({item, index }) => 
        {
            return(
                <View
                style={{
                    height:SIZES.height,
                    width:SIZES.width
                }}
                >
                    {item.label==constants.screens.home && <Home/>}
                    {item.label==constants.screens.search && <Search/>}

                    {item.label==constants.screens.cart && <MyCart/>}
                    {item.label==constants.screens.favourite && <Favourite/>}
                    {item.label==constants.screens.notification && <Notification/>}
                </View>
            )
        }}
            />
            </View>
            

            {/* Footer */}
            
            <View style={{
                height:100,
                justifyContent:'flex-end'
            }}> 
            {/* Shadow */}
            <LinearGradient
            
            start={{x:0,  y:0}}
            end={{x:0, y:4}}
            colors={[
                COLORS.transparent,
                COLORS.lightGray1

            ]}
            style={{
                position:'absolute',
                top: -20,
                left: 0,
                right: 0,
                height: 100,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
                
            }}
            
            />

            {/* Tabs  */}
            <View style={{ 
                flex:1,
                flexDirection:'row',
                paddingHorizontal:SIZES.radius,
                paddingBottom:10,
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
                backgroundColor:COLORS.white
            }}>
                <TabButton
                label={constants.screens.home}
                icon={icons.home}
                isFocused={selectedTab == constants.screens.home}

                outerContainerstyle={homeFlexStyle}
                innerContainerStyle={homeColorStyle}
                onPress={() => setSelectedTab(constants.screens.home)}
                />
                <TabButton
                label={constants.screens.search}
                icon={icons.search}
                isFocused={selectedTab == constants.screens.search}
                outerContainerstyle={searchFlexStyle}
                innerContainerStyle={searchColorStyle}
                onPress={() => setSelectedTab(constants.screens.search)}
                />
                <TabButton
                label={constants.screens.cart}
                icon={icons.cart}
                isFocused={selectedTab == constants.screens.cart}
                outerContainerstyle={cartFlexStyle}
                innerContainerStyle={cartColorStyle}
                onPress={() => {
                setSelectedTab(constants.screens.cart)
                //navigation.navigate("MyCart")
                }}
                />
                <TabButton
                label={constants.screens.favourite}
                icon={icons.favourite}
                isFocused={selectedTab == constants.screens.favourite}

                outerContainerstyle={favouriteFlexStyle}
                innerContainerStyle={favouriteColorStyle}
                onPress={() => setSelectedTab(constants.screens.favourite)}
                />
                <TabButton
                label={constants.screens.notification}
                icon={icons.notification}
                isFocused={selectedTab == constants.screens.notification}

                outerContainerstyle={notificationFlexStyle}
                innerContainerStyle={notificationColorStyle}
                onPress={() => setSelectedTab(constants.screens.notification)}
                />
                
            </View>
            </View>
        </Animated.View> 
    )
}

//export default MainLayout;

function mapStateToProps(state)
{
   return{
       selectedTab: state.tabReducer.selectedTab
   }
}

function mapDispatchToProps(dispatch)
{
   return{
       setSelectedTab:(selectedTab) => { 
           return dispatch
           (setSelectedTab(selectedTab))}
   }
}
export default connect(mapStateToProps, mapDispatchToProps)
(MainLayout)

