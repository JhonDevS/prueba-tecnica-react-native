import { Modal, FlatList, View, StyleSheet, Text, Button } from 'react-native';
import Header from './Header';
import { useEffect, useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import ItemCredit from './ItemCredit';

const ModalInfo = (props) => {
  const [selectedItem, setSelectedItem] = useState({});
  const url = 'https://mock.apidog.com/m1/499449-0-default/credits';
  const { data } = useFetchData(url);

  const handleButtonPress = () => {
    props.setModalVisible(false);
    props.navigation.navigate('Approved');
  };

  useEffect(() => {
    console.log(data.credits);
  }, [data]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Header text="Encontramos estos créditos perfectos para ti:" title="¡Felicidades!" />
          <FlatList
            data={data.credits}
            renderItem={({ item }) => <ItemCredit credit={item} setSelectedItem={setSelectedItem}/>}
            keyExtractor={item => item.id.toString()}
            numColumns={1}
          />
          <View style={styles.button}>
            <Button
              title="Seleccionar crédito"
              onPress={handleButtonPress}
              accessibilityLabel="Descubrir créditos"
              disabled={Object.keys(selectedItem).length === 0}
            />
          </View>

        </View>
      </View>
    </Modal>

  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 20,
    maxHeight: 450,
    minWidth: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: { 
    margin: 20, marginBottom: 50 
  }
});

export default ModalInfo;