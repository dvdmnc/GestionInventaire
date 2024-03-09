import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, SafeAreaView, Text, TextInput, StatusBar, Image, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { auth } from '../../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async () => {
        try{
            const response = await signInWithEmailAndPassword(auth, email,password);
        }
        catch (error){
            console.log('Sign In Failed', error)
            Alert.alert("Adresse mail ou mot de passe incorrect(s)")
        }
    }

  return (
    <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['pink', 'white']}
         style={styles.View}>
            <Image source={require('../Images/infirmière.png')} style={styles.img}/>
            <Text style={styles.title}>IDEL Stock</Text>
            <Text style={styles.text}>E-Mail</Text>
            <TextInput
            style={styles.textInput}
            placeholder="Adresse mail"
            value={email}
            onChangeText={setEmail} />
            <Text style={styles.text}>Mot de passe</Text>
            <TextInput 
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={signIn}>
                <Text style={{color: 'white', fontSize: 14,}}>S'identifier</Text>
            </TouchableOpacity>
        </LinearGradient>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    View:{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        alignItems: "center",
        justifyContent: 'center',
    },
    img:{
        width: 300,
        height: 300,
      },
    title:{
        fontSize: 35,
        marginBottom: 70,
        color: '#3ad6cf'
    },
    text:{
        color: '#3ad6cf',
        fontSize: 18
    },
    textInput:{
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderWidth: 1,
        borderColor: '#3ad6cf',
        borderRadius: 15,
        padding: 7,
        width: '50%',
        marginTop: 5,
        marginBottom: 5
    },
    button:{
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'white',
        padding: 7,
        backgroundColor: '#3ad6cf',
        borderRadius: 10,
    }
})
