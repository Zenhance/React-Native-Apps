import React from "react";
import {Text, Button, Image} from "react-native-elements";
import {View, StyleSheet, StatusBar, TouchableOpacity, TextInput} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import {LinearGradient} from "expo-linear-gradient";
import {AuthContext} from "../providers/AuthProvider";

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        checkTextInputChange: false,
        secureTextEntry: true
    });

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                checkTextInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                checkTextInputChange: false
            })
        }
    };

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    };

    const updatePasswordVisibility = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    };

    return (
        <AuthContext.Consumer>
            {
                (auth) => (
                    <View style={styles.container}>
                        <StatusBar backgroundColor={"#009387"} barStyle={"light-content"}/>
                        <View style={styles.header}>
                            <Text style={styles.text_header}>Welcome!</Text>
                        </View>
                        <Animatable.View
                            animation={"fadeInUpBig"}
                            style={styles.footer}
                        >
                            <Text style={styles.text_footer}>Email</Text>
                            <View style={styles.action}>
                                <FontAwesomeIcon name={"user"}
                                                 color={"#05375a"}
                                                 size={20}
                                />
                                <TextInput
                                    placeholder={"Your Email"}
                                    style={styles.textInput}
                                    autoCapitalize={"none"}
                                    onChangeText={(val) => {
                                        textInputChange(val)
                                    }}
                                />

                                {
                                    data.checkTextInputChange ?
                                        <Animatable.View animation={"bounceIn"}>
                                            <Feather
                                                name={"check-circle"}
                                                color={"green"}
                                                size={20}
                                            />
                                        </Animatable.View> : null
                                }

                            </View>
                            <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                            <View style={styles.action}>
                                <Feather name={"lock"}
                                         color={"#05375a"}
                                         size={20}
                                />
                                <TextInput
                                    placeholder={"Your Password"}
                                    secureTextEntry={data.secureTextEntry ? true : false}
                                    style={styles.textInput}
                                    autoCapitalize={"none"}
                                    onChangeText={(val) => handlePasswordChange(val)}
                                />
                                <TouchableOpacity onPress={updatePasswordVisibility}>
                                    {
                                        data.secureTextEntry ?
                                            <Feather
                                                name={"eye-off"}
                                                color={"grey"}
                                                size={20}
                                            /> : <Feather
                                                name={"eye"}
                                                color={"black"}
                                                size={20}
                                            />
                                    }
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity onPress={()=> {auth.setIsLoggedIn(true)}} style={styles.button}>
                                    <LinearGradient colors={["#08D4C4", "#01AB9D"]}
                                                    style={styles.signIn}>
                                        <Text style={styles.textSign}>Sign In</Text>
                                    </LinearGradient>
                                </TouchableOpacity>

                            </View>

                        </Animatable.View>
                    </View>
                )
            }
        </AuthContext.Consumer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        paddingTop: 15
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "white"
    }
});

export default SignInScreen;
