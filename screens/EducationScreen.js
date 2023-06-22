import React from 'react';
import { View, StyleSheet } from 'react-native';

import { InfoList } from '../components/InfoList'

export default function EducationScreen() {
  const data = [
    { label: 'Curso', value: 'Engenharia de Software' },
    { label: 'Universidade', value: 'Instituto Infnet' },
    { label: 'Ano', value: '2023' },
  ];

  return (
    <View style={styles.container}>
      <InfoList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
})
