import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {AuthProvider, AuthContext} from "./src/providers/AuthProvider";
import AuthStackScreen from "./src/navigation/AuthStack";
import AppDrawerScreen from "./src/navigation/AppDrawer";
import * as firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyB4WtFmuMRaA9GsRWwFKxZvikxmfE-qgYI",
    authDomain: "blog-5a560.firebaseapp.com",
    databaseURL: "https://blog-5a560.firebaseio.com",
    projectId: "blog-5a560",
    storageBucket: "blog-5a560.appspot.com",
    messagingSenderId: "17705869231",
    appId: "1:17705869231:web:24ec177fa409a6e8b3d95a"
};

if(!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);


function App() {
    return (
        <AuthProvider>
            <AuthContext.Consumer>
                {
                    (auth) => (
                        <NavigationContainer>
                            {auth.isLoggedIn ? <AppDrawerScreen/>:<AuthStackScreen/>}
                        </NavigationContainer>
                    )
                }
            </AuthContext.Consumer>
        </AuthProvider>
    );
}

export default App;
