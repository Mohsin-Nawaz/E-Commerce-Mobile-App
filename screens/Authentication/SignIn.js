import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
    
} from 'react-native';

import AuthLayout from './AuthLayout';
import{FONTS,SIZES,COLORS,icons  }from "../../constants";

import {FormInput,
    
    CustomSwitch,
    TextButton,
    TextIconButton
} from '../../components';

import utils from '../../utils/Utils';

const SignIn = ({ navigation }) => {

    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    const [emailError,setEmailError]=React.useState("")
    const [showPass ,setShowPass]=React.useState(false)
    const [saveMe,setSaveMe]=React.useState(false)
    function isEnabledSignIn(){
        return email != "" && password != "" && emailError ==""
    }

    return (
        <AuthLayout
        title={"Lets Sign You In"}
        subtitle={"Welcome back, you 've been missed"}
        >
            <View
             style={{
                flex:1,
                marginTop:SIZES.padding * 2
             }}
             >
                {/* {form input} */}
                <FormInput
                label="Email"
                keyboardType="email-address"
                autoCompleteType="email"
                onChange={(value) => {
                    // validate email
                    utils.validateEmail(value,setEmailError)
                    setEmail(value) 
                }}
                errorMsg={emailError}
                appendComponent={
                    <View
                    style={{
                        justifyContent:'center'
                    }}
                    >
                        <Image
                        source= { email == "" ||( email != "" && emailError == "") ? icons.correct : icons.cross}
                        style={{
                            height:20,
                            width:20,
                            tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                        }}
                        />

                    </View>
                }
            />
            <FormInput 
            
            label="Password"
            secureTextEntry={!showPass}
            autoCompleteType="password"
            containerStyle={{
                marginTop:SIZES.radius
            }}
            onChange={(value) => setPassword(value)}
            appendComponent={
                <TouchableOpacity
                style={{
                    width:40,
                    alignItems:'flex-end',
                    justifyContent:'center'
                }}
                onPress={() =>setShowPass(!showPass)}
                >
                    <Image
                    source={showPass ? icons.eye_close : icons.eye}
                    style={{
                        height:20,
                        width:20,
                        tintColor:COLORS.gray
                    }}
                    />

                </TouchableOpacity>
            }

            />

                {/* {save me and forget password } */}
                <View  
                style={{
                    flexDirection:'row',
                    marginTop:SIZES.radius,
                    justifyContent:'space-between'
                }}
                >
                    <CustomSwitch
                    value={saveMe}
                    onchange={(value) => setSaveMe(value)}
                    />

                    <TextButton
                    label="Forgot Password?"
                    buttonContainerStyle={{
                        backgroundColor: null
                    }}
                    labelStyle={{
                        color:COLORS.gray,
                        ...FONTS.body4
                    }}
                        onPress={() => navigation.navigate("ForgotPassword")}
                    />
                </View>



                {/* {signin} */}
                <TextButton
                label="Sign In"
                disabled={isEnabledSignIn() ?  false: true }
                buttonContainerStyle={{
                    height:55,
                    alignItems:'center',
                    marginTop:SIZES.padding,
                    borderRadius:SIZES.radius,
                    backgroundColor: isEnabledSignIn() ? COLORS.primary : COLORS.transparentPrimray

                }}
                onPress={() => navigation.replace('Home')}
                />

                {/* {signup} */}
                <View
                style={{
                    flexDirection:'row',
                    marginTop:SIZES.radius,
                    justifyContent:'center'
                }}
                >
                    <Text  style={{
                        color:COLORS.darkGray,
                        ...FONTS.body3
                    }}>
                        Don't Have An Account?

                    </Text>
                    <TextButton
                    label="Sign Up"
                    buttonContainerStyle={{
                        marginLeft:3,
                        backgroundColor: null
                    }}
                    labelStyle={{
                        color:COLORS.primary, ...FONTS.h3
                    }}
                    onPress={() => navigation.navigate("SignUp")}
                    />

                </View>
                <View>
                {/* {facebook} */}
                    <TextIconButton
                    containerStyle={{
                        height:50,
                        alignItems:'center',
                        borderRadius:SIZES.radius,
                        backgroundColor:COLORS.blue
                    }}
                    icon={icons.fb}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor:COLORS.white
                    }}
                    label="Continue With Facebook"
                    labelStyle={{
                        marginLeft:SIZES.radius,
                        color:COLORS.white
                    }}
                    onPress={() => console.log("FB")}
                    />
                {/* {google} */}

                <TextIconButton
                    containerStyle={{
                        height:50,
                        alignItems:'center',
                        borderRadius:SIZES.radius,
                        backgroundColor:COLORS.lightGray2
                    }}
                    icon={icons.google}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor:null
                    }}
                    label="Continue With Google"
                    labelStyle={{
                        marginLeft:SIZES.radius
                        
                    }}
                    onPress={() => console.log("GOOGLE")}
                    />

            </View>

            </View>
            {/* {Footer} */}
             

        </AuthLayout>
        
    )
}

export default SignIn;