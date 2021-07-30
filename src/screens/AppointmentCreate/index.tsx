import React, { useState } from 'react';
import { FlatList, ImageBackground, Text, View } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import { styles } from "./styles";
import { CategorySelect } from '../../components/CategorySelect';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <Background>
      <Header title="Agendar Partida"/>

      <Text style={styles.label}>Categoria</Text>

      <CategorySelect
        hasCheckBox
        setCategory={handleCategorySelect}
        categorySelected={category}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>

            <View style={styles.image}/>

            <View style={styles.selectBody}>
              <Text style={styles.label}>Selecione um Servidor</Text>
            </View>

            <Feather name="chevron-right" size={18} color={theme.colors.heading} />

          </View>
        </RectButton>
      </View>
    </Background>
  )
}
