import React from 'react';
import { View, StyleSheet } from 'react-native';

import { InfoList } from '../components/InfoList'

export default function PersonalInfoScreen() {
  const data = [
    { label: 'Nome', value: "Lúcio Caetano" },
    { label: 'Endereço', value: "Rua Juscelino Kubitschek" },
    { label: 'Estado', value: "PB" },
    { label: 'Cidade', value: "Campina Grande" },
    { label: 'Telefone', value: "83 3333 3333" },
    { label: 'E-mail', value: "lucio.caetano@al.infnet.edu.br" },
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
