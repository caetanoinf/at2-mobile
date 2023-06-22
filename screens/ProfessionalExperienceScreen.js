import React from 'react';
import { View, StyleSheet } from 'react-native';

import { InfoList } from '../components/InfoList'

export default function ProfessionalExperienceScreen() {
  const company1 = {
    empresa: 'ABC Tech',
    cargo: 'Desenvolvedor Full Stack',
    periodo: '2018 - Presente',
    descricao: 'Trabalhei no desenvolvimento de aplicativos web e mobile usando tecnologias como React, Node.js e MongoDB.',
  };

  const company2 = {
    empresa: 'XYZ Software',
    cargo: 'Engenheiro de Software',
    periodo: '2016 - 2018',
    descricao: 'Participei do desenvolvimento de um sistema de gerenciamento de projetos usando Java e Spring Framework.',
  };

  const data = [
    { label: 'Empresa', value: company1.empresa },
    { label: 'Cargo', value: company1.cargo },
    { label: 'Período', value: company1.periodo },
    { label: 'Descrição', value: company1.descricao },
    { divider: true },
    { label: 'Empresa', value: company2.empresa },
    { label: 'Cargo', value: company2.cargo },
    { label: 'Período', value: company2.periodo },
    { label: 'Descrição', value: company2.descricao },
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
