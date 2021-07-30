import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";

type HeaderProps = {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action }: HeaderProps) {
  const { goBack } = useNavigation();
  const { secondary100, secondary40, heading } = theme.colors;

  return (
    <LinearGradient
      colors={[secondary100, secondary40]}
      style={styles.container}
    >
      <BorderlessButton onPress={() => goBack()}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {action && (
        <View>{action}</View>
      )}
    </LinearGradient>
  )
}
