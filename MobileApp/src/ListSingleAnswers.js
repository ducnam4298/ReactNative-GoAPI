import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonAnswers from './ButtonAnswer';

export default function ListSingleAnswers(props) {
  const listAnswer = props.listAnswers
  const listAnswerSelected = props.listsSelectAnswers;

  function handleSingleSelect(id) {
    let arr = listAnswerSelected
    arr.shift()
    arr.push(id)
    props.HandlelistsSelectAnswers(arr)
  }
  const listItems = listAnswer.map((Answer) =>
    <ButtonAnswers key={Answer.answerId} answerId={Answer.answerId} AnswerSelected={listAnswerSelected[0]} value={Answer.answer} btnSelected={handleSingleSelect} />
  );
  return (
    <View style={styles.containerAnswers}>
      {listItems}
    </View>
  );
}
const styles = StyleSheet.create({
  containerAnswers: {
    margin: 25,
    height: 300,
    marginBottom: 50,
    display: 'flex',
    flexDirection: 'column',
  }
})