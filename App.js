import { StatusBar } from 'expo-status-bar';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [age, setValue] = useState('');
  const [lower, setLower] = useState(0);
  const [upper, setUpper] = useState(0);

  const calculate = () => {
    const ageNum = parseInt(age, 10); // Convert age to a number
    if (!isNaN(ageNum)) {
      const lowerLimit = (220 - ageNum) * 0.65;
      const upperLimit = (220 - ageNum) * 0.85;
      setLower(lowerLimit.toFixed(0));
      setUpper(upperLimit.toFixed(0));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={text => setValue(text)}
        keyboardType="decimal-pad"
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>
        {lower && upper ? `Lower: ${lower} Upper: ${upper}` : ''}
      </Text>
      <Button title="Calculate" onPress={calculate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    margin: 10,
    fontSize: 16,
  },
});
