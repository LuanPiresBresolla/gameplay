import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { Avatar } from '../Avatar';

import { styles } from './styles';

export type Member = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type MemberProps ={
  member: Member;
}

export function Member({ member }: MemberProps) {
  const isOnline = member.status === 'online';
  const { on, primary } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar urlImage={member.avatar_url} />

      <View>
        <Text style={styles.title}>{member.username}</Text>

        <View style={styles.status}>
          <View style={[styles.bulletStatus, { backgroundColor: isOnline ? on : primary }]} />
          <Text style={styles.nameStatus}>{isOnline ? 'Disponível' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  )
}
