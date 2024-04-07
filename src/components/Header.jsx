import { View, Text, StyleSheet } from 'react-native';

const Header = ({text, title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    padding: 20,
    gap: 20,
    width: '85%',
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    color: '#666',
    fontSize: 16,
  }
});

export default Header;