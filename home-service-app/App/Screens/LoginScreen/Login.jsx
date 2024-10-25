import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();
export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View>
      <Image source={require('./../../../assets/images/login.png')} style={{ height: 300, width: 400, marginTop: 150 }} />
      <View style={styles.logincontanier}>
        <Text style={{ fontSize: 27, color: 'white', textAlign: 'center', fontWeight: 'normal' }}>Let's Find<Text style={{ fontWeight: 'bold' }}> Professional Cleaning and repair</Text> Service</Text>
        <Text style={{ fontSize: 16, color: 'white', textAlign: 'center', marginTop: 20 }}>Best App to find services near you which deliver you a professional service</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{ textAlign: 'center', fontSize: 17, color: '#501594' }}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logincontanier: {
    width: '250px',
    backgroundColor: "#501594",
    height: '70px',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 60,
    paddingBottom: 200,
    marginTop:70
  },
  headingtext: {
    color: 'white',
    fontSize: 27,
  },
  button: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 99,
    marginTop: 40,
    margin: 10
  }
})