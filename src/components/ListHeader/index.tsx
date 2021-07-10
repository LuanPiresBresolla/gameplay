import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

type ListHeaderProps = {
  title: string;
  subTitle: string;
}

export function ListHeader({ subTitle, title }: ListHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subTitle}>
        {subTitle}
      </Text>
    </View>
  )
}
