
export default function () {
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
      return (
        data = [
          {
            "questionId": 2,
            "correctAnswer": [1.1],
            "yourAnswer": [1.2],
            "score": 0
          },
          {
            "questionId": 2,
            "correctAnswer": [2.2, 2.3],
            "yourAnswer": [2.2, 2.4],
            "score": 0.5
          },
          {
            "questionId": 3,
            "correctAnswer": [1.1],
            "yourAnswer": [3.1],
            "score": 1
          }

        ]
      )
    })
    .catch((err) => {
      console.log("network err" + err);
    })
}