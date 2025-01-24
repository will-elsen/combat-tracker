import { StyleSheet, View } from 'react-native';
import EntityBar from '../components/EntityBar';

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <EntityBar />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
  }
});
