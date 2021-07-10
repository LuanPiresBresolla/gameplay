import React from 'react';
import { View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://cdn.iconscout.com/icon/free/png-512/discord-2474808-2056094.png';

  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}
