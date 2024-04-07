import { TextInput, Text, StyleSheet, View } from 'react-native';

const InputForm = ({name, placeholder, inputValue, setInputValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder && placeholder}
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#999',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  text: {
    color: '#666',
    fontSize: 16,
    marginBottom: 10,
  }
});

export default InputForm;