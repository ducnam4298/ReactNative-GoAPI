
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import { Text, View, Button, StyleSheet } from 'react-native';
import API from './getAPIQuizz';
import ListSingleAnswers from './ListSingleAnswers';
import ListMultiAnswers from './ListMultiAnswer';

function QuizzsScreen({ route, navigation }) {
  /* 2. Get the param */
  const [QuestId, setQuestionId] = useState(route.params.QuestId)
  const [Question, setQuestion] = useState("")
  const [QuestionType, setQuestionType] = useState("")
  const [Quizz, setQuizz] = useState({
    questionId: route.params.QuestId,
    ListSelectedAnswers: []
  })
  const [ListQuizz, setListQuizz] = useState(route.params.ListQuizz)
  const [Answers, setAnswers] = useState([])
  const [nextID, setNextID] = useState(1)
  useEffect(() => {

    API(QuestId).then((data) => {

      setQuestion(
        data.question
      );
      setAnswers(
        data.answers
      )
      setNextID(
        data.nextQuestionId
      )
      setQuestionType(
        data.type
      )
    })
    // axios.get('http://localhost:8080/Quizz')
    // .then(function(res) {
    //     const question = res.data[0]["question"]["question"];
    //     setQuestion(question);
    // })
    // .catch(function(error){console.log("something wrong 2: "+ error)});
  })

  function handleSelectAnswer(arr) {
    console.log(Quizz.questionId)
    setQuizz({
      questionId: QuestId,
      ListSelectedAnswers: arr
    })
    if (ListQuizz.length == 0) {
      let arr2 = ListQuizz
      arr2.push(Quizz)
      setListQuizz(arr2)
    }
    let check = null
    for (let i = 0; i < ListQuizz.length; i++) {
      console.log(ListQuizz.length + 'ok')
      console.log(ListQuizz)
      if (ListQuizz[i].questionId == Quizz.questionId) {

        ListQuizz[i] = Quizz
        check = 1
      }
    }
    if (check == null) {
      let arr2 = ListQuizz
      arr2.push(Quizz)
      setListQuizz(arr2)
    }
  }
  let JSXAnswers = QuestionType != "multi" ? <ListSingleAnswers listsSelectAnswers={Quizz.ListSelectedAnswers} listAnswers={Answers} HandlelistsSelectAnswers={handleSelectAnswer} /> : <ListMultiAnswers listsSelectAnswers={Quizz.ListSelectedAnswers} HandlelistsSelectAnswers={handleSelectAnswer} listAnswers={Answers} />

  let button = nextID != null ? <Button
    title="⟶"
    onPress={() =>
      navigation.push('Quizz', {
        QuestId: nextID,
        ListQuizz: ListQuizz
      })
    }
  /> : <Button
      title="⬆"
      onPress={() =>
        navigation.navigate('Result', {
          ListQuizz: ListQuizz
        })
      }
    />
  return (
    <View style={styles.Container}>
      <Text style={styles.Question}>Question {QuestId}: {Question}</Text>
      {JSXAnswers}
      <View style={styles.navBottom}>
        <View  ><Button style={{ height: 100 }} title="⟵" onPress={() => navigation.goBack()} /></View>
        <View ><Button title="🏠" onPress={() => navigation.navigate('Home')} /></View>
        <View >{button}</View>
      </View>
    </View>
  );
}
export default QuizzsScreen;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Question: {
    marginTop: 50,
    marginBottom: 30,
    margin: 25
  },
  navBottom: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",

    backgroundColor: 'white',
    height: 50,
    alignItems: 'center',
    padding: 10
  },

})