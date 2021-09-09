import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';

import { Button } from '../../components/Button';
import { Background } from '../../components/Background';

import IllustrationImg from '../../assets/illustration.png'

import { styles } from './styles';
import { useAuth } from '../../context/auth';

export function SignIn () {
  const { navigate } = useNavigation();
  const { user } = useAuth();

  function handleSignIn() {
    navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          resizeMode="stretch"
          source={IllustrationImg}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{`\n`}e organize suas{`\n`}jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{`\n`}favoritos com seus amigos
          </Text>

          <Button
            title="Entrar com Discord"
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  )
}
