import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {style} from './style';
import {Color} from '../../color';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const LoginScreen: React.FC = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '303129796790-8vbsnh8r09btvreiojjumcuko89qgbkl.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
    isSignedIn();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('USERINFO', userInfo);
      setUser(userInfo);
    } catch (error: any) {
      console.log('ERROR MESSAGE', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User CAnceled the login');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play service not Available');
      } else {
        console.log('other error');
      }
    }
  };

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('please Login');
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('EDIT', user);
      setUser(userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log('User has not signed in yet');
      } else {
        console.log('Something wrong');
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <View>
        <Text style={style.text}>{'Login'}</Text>
        <TextInput
          style={style.input}
          selectionColor={Color.black}
          placeholder="Enter login"
          keyboardType="default"
        />
        <Text style={style.text}>{'Password'}</Text>
        <TextInput
          selectionColor={Color.black}
          style={style.input}
          placeholder="Enter password"
          keyboardType="default"
        />
      </View>
      <View>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
        <TouchableOpacity onPress={signOut}>
          <Text>{'Signout'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.registr}>
          <Text style={style.registr}>{'registration'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.loginText}>{'Sig in'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
