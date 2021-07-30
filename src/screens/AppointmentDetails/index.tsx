import React from 'react';
import { FlatList, ImageBackground, Text, View } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import banner from '../../assets/banner.png';

import { styles } from "./styles";
import { theme } from '../../global/styles/theme';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { Button } from '../../components/Button';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Rodrigo',
      avatar_url: 'https://cdn.discordapp.com/avatars/376138446395408384/b98cfa696dd23ee41306009e19d955e1.png?size=512',
      status: 'online',
    },
    {
      id: '2',
      username: 'Rodrigo',
      avatar_url: 'https://cdn.discordapp.com/avatars/376138446395408384/b98cfa696dd23ee41306009e19d955e1.png?size=512',
      status: 'online',
    },
    {
      id: '3',
      username: 'Rodrigo',
      avatar_url: 'https://cdn.discordapp.com/avatars/376138446395408384/b98cfa696dd23ee41306009e19d955e1.png?size=512',
      status: 'offline',
    },
    {
      id: '4',
      username: 'Rodrigo',
      avatar_url: 'https://cdn.discordapp.com/avatars/376138446395408384/b98cfa696dd23ee41306009e19d955e1.png?size=512',
      status: 'offline',
    },
    {
      id: '5',
      username: 'Rodrigo',
      avatar_url: 'https://cdn.discordapp.com/avatars/376138446395408384/b98cfa696dd23ee41306009e19d955e1.png?size=512',
      status: 'offline',
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={banner}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subTitle}>
            É hoje que vamos chegar ao challenger sem perder nenhuma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subTitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Member member={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <Button title="Entrar na partida" />
      </View>

    </Background>
  )
}
