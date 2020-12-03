import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import API from './getAPIResult';

export default function ResultScreen({ route, navigation }) {
  const [Result, setResult] = useState([])
  useEffect(() => {
    API().then((data) => {
      setResult(data)
    })
  })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Result Screen</Text>
      <Text>{JSON.stringify(Result)}</Text>
      <Button title="🏠" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}