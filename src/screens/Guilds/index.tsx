import React from 'react';
import { View,  FlatList } from 'react-native';

import { styles } from './styles';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds ({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'null',
      owner: true,
    },
    {
      id: '2',
      name: 'Noobs',
      icon: 'null',
      owner: true,
    },
    {
      id: '23',
      name: 'Noobs',
      icon: 'null',
      owner: true,
    },
    {
      id: '24',
      name: 'Noobs',
      icon: 'null',
      owner: true,
    },
    {
      id: '25',
      name: 'Noobs',
      icon: 'null',
      owner: true,
    },
    {
      id: '26',
      name: 'Noobs',
      icon: 'null',
      owner: true,
    },
    {
      id: '261',
      name: 'Noobs',
      icon: 'null',
      owner: true,
    },
    {
      id: '263',
      name: 'Noobs',
      icon: 'null',
      owner: true,
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  )
}
