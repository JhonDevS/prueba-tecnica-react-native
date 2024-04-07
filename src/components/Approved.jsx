import { Button, View, StyleSheet } from 'react-native';
import Header from './Header';
import ItemCredit from './ItemCredit';

const Approved = () => {
  return (
    <View>
      <Header text="Acepta tu credito" title="Confirma que has seleccionado el credito deseado." />
      <ItemCredit credit={{id: 0, amount: 500}}/>
      <View style={styles.button}>
        <Button title="Confirmar" onPress={() => {}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 15,
  }
});

export default Approved;