import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native';

export default function ListSingleAnswers(props) {
  const AnswerSelected = props.AnswerSelected
  const content = props.value
  const answerId = props.answerId
  let styleButton = AnswerSelected == answerId ? styles.buttonAnswersSelected : styles.buttonAnswers
  return (
    <TouchableOpacity
      style={styleButton}
      onPress={() => props.btnSelected(answerId)}
    >
      <Text style={styles.text}>{content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonAnswers: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 7,
    marginLeft: '15%'
  },
  buttonAnswersSelected: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkorange',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 7,
    marginLeft: '15%'
  },
  text: {
    color: 'white',
    padding: 5
  }
})