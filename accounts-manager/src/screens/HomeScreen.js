import React,{useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {AuthContext} from "../providers/AuthProvider";
import {Logout} from "../requests/LogoutRequest";

const HomeScreen = () => {

    const [status,setStatus] = useState(null);

    const userLogOut = async (token) => {
        const response = await Logout(token);
        console.log(response.data);
        if(response.ok && response.data.status==="success")
        {
            setStatus(response.data.status);
            console.log(status);
        }
        else
        {
            alert("Token Manipulated!");
        }
    };

    return (
        <AuthContext.Consumer>
            {
                (auth) => (
                    <View style={styles.container}>
                        <Text>Logged In</Text>
                        <Button
                            title={"Log Out"}
                            onPress={() => {
                                userLogOut(auth.token);
                                if(status==="success")
                                {
                                    auth.setCurrentAdmin(0);
                                    auth.setToken(null);
                                    auth.setIsLoggedIn(false);
                                }
                                else
                                {
                                    alert("Something Went Wrong!");
                                }
                            }}
                        />

                    </View>
                )
            }
        </AuthContext.Consumer>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

export default HomeScreen;

