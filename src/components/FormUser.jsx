import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import ModalInfo from './ModalInfo';
import InputForm from './InputForm';

const FormUser = ({navigation}) => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonPress = () => {
    console.log('Valor del Input 1:', inputName);
    console.log('Valor del Input 2:', inputEmail);
    setModalVisible(true);
  };
  return (
    <View style={styles.containerForm}>
      <InputForm name="Nombre" inputValue={inputName} setInputValue={setInputName} />
      <InputForm name="Correo" inputValue={inputEmail} setInputValue={setInputEmail} />
      <Button
        onPress={handleButtonPress}
        title="Descrubrir creditos"
        accessibilityLabel="Descrubrir creditos"
        
      />
      <ModalInfo navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible}></ModalInfo>
    </View>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FormUser;