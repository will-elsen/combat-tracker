import React, { useState } from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';
import EntityBar from '../components/EntityBar';

export default function HomeScreen() {
  const [entityBars, setEntityBars] = useState([{ id: 0 }]);

  const addEntityBar = () => {
    setEntityBars([...entityBars, { id: entityBars.length }]);
  };

  const deleteEntityBar = (id: number) => {
    setEntityBars(entityBars.filter((bar) => bar.id !== id));
  };

  return (
    <View style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {entityBars.map((bar) => (
          <EntityBar key={bar.id} onDelete={() => deleteEntityBar(bar.id)} />
        ))}
      </ScrollView>
      <Button title="Add Entity" onPress={addEntityBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
  },
  scrollView: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
});
