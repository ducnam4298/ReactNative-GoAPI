export default function (questionID) {

  // "http://localhost:8080/Quizz"
  return fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=CNDJO9WP98PVJP38&symbol=VG').then(function (response) {
    return response.json()
  })
    // .then(function(data){
    //     let dt = data["Global Quote"];
    //     return {
    //         Question : dt["01. symbol"]
    //     }
    // })
    .then(function (data) {

      data = [
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
      for (let i = 0; i < data.length; i++) {
        if (questionID == data[i]["question"]["questionId"]) {
          let nextQuestID = null
          if (data[i + 1] != undefined) {
            nextQuestID = data[i + 1]["question"]["questionId"]
          }
          return {
            question: data[i]["question"]["question"],
            type: data[i]["question"]["type"],
            answers: data[i]["answers"],
            nextQuestionId: nextQuestID
          }

        }
      }

    })
    .catch((err) => {
      console.log("network err" + err);
    })
}
