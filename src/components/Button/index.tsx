import React from 'react';
import { TouchableOpacity, View, Image, Text, TouchableOpacityProps } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
}

export function Button ({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
