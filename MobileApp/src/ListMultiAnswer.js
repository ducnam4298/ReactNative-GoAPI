import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonAnswers from './ButtonAnswer';

export default function ListMultiAnswers(props) {
  const listAnswer = props.listAnswers
  const listAnswerSelected = props.listsSelectAnswers;
  function handleMultiselect(id) {
    let arr = listAnswerSelected
    if (id == arr.find(e => e === id)) {
      arr = arr.filter(e => e !== id)
    } else {
      arr.push(id)
    }
    props.HandlelistsSelectAnswers(arr)
  }
  const listItems = listAnswer.map((Answer) =>
    <ButtonAnswers key={Answer.answerId} answerId={Answer.answerId} AnswerSelected={listAnswerSelected.find(e => e === Answer.answerId)} value={Answer.answer} btnSelected={handleMultiselect} />
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