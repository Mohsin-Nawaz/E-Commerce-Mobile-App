
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList
} from 'react-native';
import { FONTS,
    COLORS,
    icons,
    SIZES,
    dummyData

} from "../../constants";
//import {FilterModal} 
import {FilterModal} from './FilterModal';
import { HorizontalFoodCard } from '../../components/HorizontalFoodCard';
import { VerticalFoodCard } from '../../components/VerticalFoodCard';
const Section=({title,onPress,children,navigation}) =>{
    return(
        <View>
            {/* {header} */}

            <View
            style={{
                flexDirection:'row',
                marginHorizontal:SIZES.padding,
                marginTop:30,
                marginBottom:20
            }}
            >
                <Text style={{
                    flex:1,
                    ...FONTS.h3
                }}>
                    {title}
                </Text>
                <TouchableOpacity onPress={onPress}>
                    <Text
                    style={{
                        color: COLORS.primary,
                        ...FONTS.body3
                    }}
                    >
                        Show All

                    </Text>
                </TouchableOpacity>

            </View>
            {/* {content} */}
                    {children}

        </View>
    )
}

const Home = () => {

    const [selectedCategoryId,setSelectedCategoryId]=React.useState(1)
    const [selectedMenuType, setSelectedMenuType]=React.useState(1)
    
    const[recommends,setRecommends]=React.useState([])
    const[popular,setPopular]=React.useState([])
    const [menuList,setMenuList]=React.useState([])
     
    const [showFilterModal,setShowFilterModal]=React.useState(false)




    React.useEffect(() =>{
        handleChangeCategory(selectedCategoryId,selectedMenuType)

    }, [])

//handler
function handleChangeCategory(categoryId,menuTypeId){

    //retrieve the recommended menu
    let selectedRecommended=dummyData.menu.find(a => a.name =="Recommended")
//retrieve the popular menu
let selectedPopular=dummyData.menu.find(a => a.name=="Popular")


//find menu base on menutypeid
let selectedMenu=dummyData.menu.find(a => a.id==menuTypeId)

//set the recommenden menu base on the category id
setRecommends(selectedRecommended?.list.filter(a => a.categories.includes(categoryId)))
//set popular menu base on category id 
setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))
//set menu base on category id
setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))
}
//Render


    function renderSearch(){
        return(
            <View style={{
                flexDirection:'row',
                height:40,
                alignItems:'center',
                marginHorizontal:SIZES.padding,
                marginVertical:SIZES.base,
                paddingHorizontal:SIZES.radius,
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.lightGray2
            }}>
                {/* {icon} */}
                <Image
                source={icons.search}
                style={{
                    height:20,
                    width:20,
                    tintColor:COLORS.black
                }}
                />
                {/* {text input} */}
                    <TextInput
                    style={{
                        flex:1,
                        marginLeft:SIZES.radius,
                        ...FONTS.body4
                    }}
                    placeholder="Search Products..."
                    />
                {/* {filter} */}
                <TouchableOpacity 
                onPress={()=> setShowFilterModal(true)}
                 >

                    <Image
                    source={icons.filter}
                    style={{
                        height:20,
                    width:20,
                    tintColor:COLORS.black
                    }}
                    />
                </TouchableOpacity>
                

            </View>
        )
    }

    function renderMenuTypes(){
        return(
            <FlatList
            horizontal
            data={dummyData.menu}
            keyExtractor={(item,index) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                marginTop:30,
                marginBottom:20
            }}
            renderItem={({item,index}) =>(
                <TouchableOpacity 
                style={{
                    marginLeft:SIZES.radius,
                    marginRight:index ==dummyData.menu.length - 1 ? SIZES.padding:0
                }}
                onPress={() =>{

                    setSelectedMenuType(item.id)
                    handleChangeCategory
                    (selectedCategoryId,item.id)
                }}
                >
                    <Text style={{
                        color:selectedMenuType==item.id ? COLORS.primary:COLORS.black,...FONTS.h3
                    }}
                    
                    >
                        {item.name}
                    </Text>

                </TouchableOpacity>
            )}
            />
        )
    }

    function renderRecommendedSection(){
        return(
            <Section
            title="Recommended"
            onPress={() => console.log("Show All Recommended")}
            >
                <FlatList
                data={recommends}
                keyExtractor={(item,index) =>  item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index}) => (
                    <HorizontalFoodCard
                    
                    containerStyle={{
                        height:180,
                        width:SIZES.width *0.85,
                        marginLeft:index ==0 ? SIZES.padding:18,
                        marginRight:index ==recommends.length -1 ? SIZES.padding: 0,
                        paddingRight:SIZES.radius,
                        alignItems:'center'

                    }}
                    imageStyle={{
                        marginTop:35,
                        height:150,
                        width:150
                    }}
                    item={item}
                    onPress={() => console.log("HorizontalFoodCard")}
                    />
                )}
                />

            </Section>
        )
    }

    function renderPopularSection(){
        return(
            <Section   title="Popular Near You"
            onPress={() => console.log("Show All Popular items")}
            >
                <FlatList
                data={popular}
                keyExtractor={(item,index) =>  item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index}) => (
                    <VerticalFoodCard
                    containerStyle={{
                        
                        marginLeft:index ==0 ? SIZES.padding:18,
                        marginRight:index ==recommends.length -1 ? SIZES.padding: 0
                
                    }}
                    item={item}

                    onPress={()=>console.log("hello")}
                    />
                )
                }
                
                />
            </Section>
        )
    }

    function renderFoodCategories()
    {
        return(
            <FlatList
            data={dummyData.categories}
                keyExtractor={(item,index) =>  item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index}) => (
                    <TouchableOpacity
                    style={{
                        flexDirection:'row',
                        height:55,
                        marginTop:SIZES.padding,
                        marginLeft: index == 0 ? SIZES.padding:SIZES.radius,
                        marginRight: index== dummyData.categories.length - 1 ? SIZES.padding : 0,
                        paddingHorizontal: 8,
                        borderRadius:SIZES.radius,
                        backgroundColor:selectedCategoryId==item.id ? COLORS.primary:COLORS.lightGray2
                    }}
                    onPress={() =>{
                        setSelectedCategoryId(item.id)
                        handleChangeCategory(item.id,selectedMenuType)
                    }}
                    >
                        <Image
                        source={item.icon}
                        style={{
                            marginTop:5,
                            height:50,
                            width:50
                        }}
                        />
                        <Text
                        style={{
                            alignSelf:'center',
                            marginRight:SIZES.base,
                            color:selectedCategoryId==item.id ? COLORS.white :COLORS.darkGray,
                            ...FONTS.h3
                        }}
                        >
                            {item.name}
                        </Text>

                    </TouchableOpacity>

                )}
            
            />
        )
    }
    function renderDeliveryTo(){
        return(
            <View style={{
                marginTop:SIZES.padding,
                marginHorizontal:SIZES.padding
            }}>
                <Text style={{
                    color:COLORS.primary,
                    ...FONTS.body3
                }}>
                    Delivery To
                </Text>
                <TouchableOpacity style={{
                    flexDirection:'row',
                    marginTop:SIZES.base,
                    alignItems:'center'
                }}>
                    <Text style={{
                        ...FONTS.h3
                    }}>
                        {dummyData?.myProfile?.address}

                    </Text>
                    <Image
                    source={icons.down_arrow}
                    style={{
                        marginLeft:SIZES.base,
                        height:20,
                        width:20
                    }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                
            }}
        >
            {/* {Search} */}
            {renderSearch()}

            {/* {filter Section} */}
            {showFilterModal &&
            <FilterModal 
             
            isVisible={showFilterModal}
                onClose={() => setShowFilterModal(false)}
            />
            }

            {/* {list } */}
            <FlatList
            data={menuList}
            keyExtractor={(item,index) => item.id}
            showsVerticalScrollIndicator={false}

            ListHeaderComponent={
                <View>
                    {/* {delivery to} */}
                    {renderDeliveryTo()}
                    {/* {food categories} */}

                    {renderFoodCategories()}

                    {/* {popular} */}

                    {renderPopularSection()}

                    {/* {recommended} */}

                    {renderRecommendedSection()}
                    {/* {menu types} */}

                    {renderMenuTypes()}
                </View>
            }
            renderItem={({item,index}) =>{
                return(
                    // <Text>
                    //     {item.name}
                    // </Text>

                    <HorizontalFoodCard
                    containerStyle={{
                        height:130,
                        alignItems:'center',
                        marginHorizontal:SIZES.padding,
                        marginBottom:SIZES.radius
                    }}
                    imageStyle={{
                        marginTop:20,
                        width:110,
                        height:110
                    }}
                    item={item}
                    onPress={() => console.log
                    ("HorizontalFoodCard")
                    }
                    />
                )
            }}

            ListFooterComponent={
                <View
                style={{height:200}}/>
            }
            />

        </View>
    )
}

export default Home;