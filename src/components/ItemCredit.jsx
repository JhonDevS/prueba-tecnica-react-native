import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const ItemCredit = ({ credit, setSelectedItem }) => {
  
  const handleSelectItem = () => {
    setSelectedItem(credit);
  };

  return (
    <TouchableOpacity style={styles.item} onPress={() => handleSelectItem()}>
      <View style={styles.content}>
        <Text style={styles.text}>{`Credito ${credit.id}`}</Text>
        <Text style={styles.text}>{`$${credit.amount}`}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#A8E9',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    padding: 10,
  },
  content: {
    fontSize: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  }
});

export default ItemCredit;