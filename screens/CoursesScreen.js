import React from 'react';
import { View, StyleSheet } from 'react-native';

import { InfoList } from '../components/InfoList'

export default function CoursesScreen() {
  const course1 = {
    curso: 'React Native',
    local: 'Coursera',
    ano: '2023',
  };

  const course2 = {
    curso: 'React',
    local: 'Alura',
    ano: '2022',
  };

  const data = [
    { label: 'Curso', value: course1.curso },
    { label: 'Local', value: course1.local },
    { label: 'Ano', value: course1.ano },
    { divider: true },
    { label: 'Curso', value: course2.curso },
    { label: 'Local', value: course2.local },
    { label: 'Ano', value: course2.ano },
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
