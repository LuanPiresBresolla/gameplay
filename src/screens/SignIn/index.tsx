import React from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';

import { Button } from '../../components/Button';
import { Background } from '../../components/Background';

import IllustrationImg from '../../assets/illustration.png'

import { styles } from './styles';
import { useAuth } from '../../context/auth';
import { theme } from '../../global/styles/theme';

export function SignIn () {
  const { signIn, loading } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert('Erro');
    }
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

          {!loading ? (
            <Button
              title="Entrar com Discord"
              onPress={handleSignIn}
            />
          ) : (
            <ActivityIndicator color={theme.colors.primary} size="large" />
          )}
        </View>
      </View>
    </Background>
  )
}
