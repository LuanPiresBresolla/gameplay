import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { View } from 'react-native';
import { Appointment } from '../../components/Appointment';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const [category, setCategory] = useState('');
  const { navigate } = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 as 20:40',
      description: 'E hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '222',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '23/06 as 20:40',
      description: 'E hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '24',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '23/06 as 20:40',
      description: 'E hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '23',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '23/06 as 20:40',
      description: 'E hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '22',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '23/06 as 20:40',
      description: 'E hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '21',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '23/06 as 20:40',
      description: 'E hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigate('AppointmentDetails');
  }

  function handleAppointmentCreate() {
    navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />

          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
          hasCheckBox
        />

        <ListHeader title="Partidas agendadas" subTitle="Total 6" />

        <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            style={styles.matchs}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ListDivider}
            contentContainerStyle={{ paddingBottom: 69 }}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={handleAppointmentDetails}
              />
            )}
          />
      </View>
    </Background>
  )
}
