import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Header from './Header.jsx';
import FormUser from './FormUser.jsx';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header text="Llena el siguiente formulario para conocer los creditos que tenemos disposibles para ti." title="Descubre tu credito" />
      <FormUser navigation={navigation}></FormUser>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});
export default Main;