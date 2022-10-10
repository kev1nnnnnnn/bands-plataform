import React, { useState, useEffect } from 'react';

import {View,
    TextInput,
    Text,
   TouchableOpacity,
   KeyboardAvoidingView,
   Vibration
} from 'react-native';
import styles from './style';
import Icon from "react-native-vector-icons/Ionicons";
import IconFont from "react-native-vector-icons/FontAwesome";
import firebase from '../../config/firebase.js';
import * as AuthSession from 'expo-auth-session';
require('firebase/auth');

export function LoginComponent({ navigation }) {

    
    const [email, setEMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    /* Etapas de login com firebase */
    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            navigation.navigate('', {idUser: user.id})
        })
        .catch((error) => {
            setErrorLogin(true);
            console.log(error);
        });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                navigation.navigate('', {idUser: id.user})
            }
        })
    }, []); 

    // verifica se os campos estão vazios
    function verifyLogin() {

        if(email == null && password == null) {
            Vibration.vibrate() 
            setErrorMsg("Campo obrigatório*");
        }
    }

    // verifica se o email já está sendo utilizado.
    function validateEmail() {

        if(email === email) {
            setErrorMsg("Este email já está sendo utilizado");
        }
    }

    async function handleSignInGoogle() {

        try {
  
        
          const RESPONSE_TYPE = 'token';
          const SCOPE = encodeURI('profile email');
          const CLIENT_ID = '701411180270-rf6s37ojfb5pepfqqk8vlvpn93lutmc1.apps.googleusercontent.com'
          const REDIRECT_URI = 'https://auth.expo.io/@developernbn/mobcusto'
          const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
        
          const {type, params} = await AuthSession.startAsync({ authUrl });
  
        if(type === 'success') {
          navigation.navigate('SearchProducts', {token: params.access_token});
        }
        } catch (error) {
          console.log(error);
          
        }
      
      }

      return(
        /* O componente -KeyboardAvoidingView- ajustar automaticamente sua altura, 
        posição ou preenchimento inferior com base na altura do teclado. */
        <KeyboardAvoidingView
        //Especifique como reagir à presença do teclado.
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
        <Text style={styles.msgTop}>Bem vindo usuário</Text>
        <Text style={styles.textTopo} >Bem vindo ao</Text>
        <Text  style={styles.textTopo2}>Mobcusto</Text>

        <View style={styles.searchSection}>
            <IconFont style={styles.searchIcon} name="envelope" size={23} color="#00e1a7"/>
            <TextInput
            style={styles.input}
            placeholder="User"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            />
        </View>

        <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="key" size={23} color="#00e1a7"/>
            <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            />
        </View>

        <Text style={styles.forgot}>Esqueceu a senha?</Text>

    

        {/* Validação de erro */}
        {errorLogin === true
        
        ?   
        
            <View style={styles.contentAlert}>
                
                <Icon style={styles.iconAlert} name="alert-circle-outline" ></Icon>
                <Text style={styles.warningAlert}>Email ou senha inválida! </Text>
            </View>
        :
            <View/>
        }
        {/* Faz a verificação dos campos, se for vazio, 
        o botão ficará desabilitado através da propriedade disabled={true}  */}
        { email === "" || password === "" 
        ?
        <TouchableOpacity
        onPress={() => {
            Vibration.vibrate()
        }}

        style={styles.buttonLogin}
        
        >
        <Text style={styles.textButtonLogin}>Sign up</Text>
        </TouchableOpacity>
        :
        /* Faz a verificação se os campos foram preenchidos corretamente
        ** registrará o usuario através do onPress={register}
        ** passando a funcao register no parametro
        */
        <TouchableOpacity
        style={styles.buttonLogin}
        
        onPress={loginFirebase}
        >
        <Text style={styles.textButtonLogin}>Sign up</Text>
        </TouchableOpacity>

        }

        

        <View style={styles.autentica}>
            <TouchableOpacity style={styles.btnIcon}
            
            >
                <IconFont style={styles.autenticaIcon} name="facebook" size={23} color="#00e1a7"/>
                <Text style={styles.btnText}>Facebook</Text>
            
            </TouchableOpacity>   

            <TouchableOpacity style={styles.btnIcon}
            onPress={handleSignIn}
            >
                <IconFont style={styles.autenticaIcon} name="google" size={23} color="#00e1a7"/>
                <Text style={styles.btnText}>Google</Text>
        
            </TouchableOpacity>    

        </View>
    


        <Text style={styles.registration}>
        Não é registrado?
            <Text
                style={styles.linkSubscribe}
                onPress={() => navigation.navigate("CreateColaboration")}
            >
            Inscreva-se agora como colaborador!
            </Text>
        </Text>

        <View style={{height: 100}} />

        
        <StatusBar
        backgroundColor="#00e1a7"
        barStyle="content-light"
        />

        </KeyboardAvoidingView>
        

    );
}