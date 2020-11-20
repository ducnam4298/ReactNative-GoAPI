import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RadioButton } from 'react-native-paper';

const data = [
  {
      "question": {
          "questionId": 1,
          "question": "Chu vi hình tròn có đường kính d= 2,5 cm là ?",
          "type": "single"
      },
      "answers": [
          {
              "answerId": 1.1,
              "answer": "7.85 cm"
          },
          {
              "answerId": 1.2,
              "answer": "15.7 cm"
          },
          {
              "answerId": 1.3,
              "answer": "785 cm"
          },
          {
              "answerId": 1.4,
              "answer": "175 cm"
          }
      ]
  },
  {
      "question": {
          "questionId": 2,
          "question": "Cho số 4...9. Những số thích hợp viết vào chỗ chấm để được số chia hết cho 3 là:",
          "type": "multi"
      },
      "answers": [
          {
              "answerId": 2.1,
              "answer": "0"
          },
          {
              "answerId": 2.2,
              "answer": "5"
          },
          {
              "answerId": 2.3,
              "answer": "2"
          },
          {
              "answerId": 2.4,
              "answer": "7"
          },
          {
              "answerId": 2.5,
              "answer": "4"
          }
      ]
  },
  {
      "question": {
          "questionId": 3,
          "question": "Trong một mặt phẳng, hai đường thẳng không giao nhau thì hai đường thẳng đó song song.",
          "type": "y/n"
      },
      "answers": [
          {
              "answerId": 3.1,
              "answer": "Đúng"
          },
          {
              "answerId": 3.2,
              "answer": "Sai"
          }
      ]
  }
]

function HomeScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Quizz', {
            QuestId: 1,
          });
        }}
      />
    </View>
  );
}



function  QuizzsScreen({ route, navigation }) {

  
  /* 2. Get the param */
  const { QuestId } = route.params;
  let nextId, content = null;

  for(let i=0; i<data.length;i++)
  {
    if(QuestId == data[i].question.questionId)
    {
      content = data[i].question.question;

      if(data[i].question.type == "single" || data[i].question.type == "y/n"){
        const [answers, setAnswer] = React.useState("")
        let listAnswer = data[i].answers.map(answer=>{
          <RadioButton
            value={answer.answer}
            status={ answers === answer.answerId ? 'checked' : 'unchecked' }
            onPress={() => setAnswer(answer.answerId)}
          />
        })
      }

      if(data[i+1] != undefined){
        nextId = data[i+1].question.questionId;
      }
      else{
        nextId = null
      }
      
    }
  }

  let button = nextId != null?<Button
    title="Next question"
    onPress={() =>
      navigation.push('Quizz', {
        QuestId: nextId,
      })
    }
  /> : <Button
  title="Post"
  />

  

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Question {QuestId}: {content}</Text>
      <View>
        {listAnswer}
      </View>

      {button}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// function ResultScreen(){

// }

const Stack = createStackNavigator();

const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quizz" component={QuizzsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App();