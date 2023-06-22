import React from 'react';
import { View, StyleSheet } from 'react-native';

import { InfoList } from '../components/InfoList'

export default function PublicationsScreen() {
  const publication1 = {
    titulo: 'Como usar hooks no React',
    local: 'Blog pessoal',
    ano: '2023'
  };

  const data = [
    { label: 'Título', value: publication1.titulo },
    { label: 'Local', value: publication1.local },
    { label: 'Ano', value: publication1.ano },
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
