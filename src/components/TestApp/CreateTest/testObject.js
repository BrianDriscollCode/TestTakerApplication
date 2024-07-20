export default class TestObject {
  constructor(title, identifier) {
    this.title = title;
    this.identifier = identifier;
    this.questions = [];
  }

  createQuestion(
    question, // String
    correctAnswer, // Number
    answer1, // String
    answer2, // String
    answer3 = null, // String
    answer4 = null // String
  ) {
    const error = this.typeCheck(question, correctAnswer, answer1, answer2, answer3, answer4);

    if (error) {
      alert("Please enter fields correctly");
      return;
    }

    let newQuestion = {
      question: question,
      correctAnswer: correctAnswer,
      answer1: answer1,
      answer2: answer2,
      ...(answer3 && { answer3: answer3 }),
      ...(answer4 && { answer4: answer4 })
    };

    this.questions.push(newQuestion);
  }

  typeCheck(question, correctAnswer, answer1, answer2, answer3 = null, answer4 = null) {
    let errorStatus = false;

    // Type check
    if (typeof question !== "string") {
      console.log("Question is not string type");
      errorStatus = true;
    }

    if (typeof correctAnswer !== "number") {
      console.log("Correct answer is not of type number");
      errorStatus = true;
    }

    if (typeof answer1 !== "string") {
      console.log("Answer1 is not of string type");
      errorStatus = true;
    }

    if (typeof answer2 !== "string") {
      console.log("Answer2 is not of string type");
      errorStatus = true;
    }

    if (answer3 !== null && typeof answer3 !== "string") {
      console.log("Answer3 is not of string type");
      errorStatus = true;
    }

    if (answer4 !== null && typeof answer4 !== "string") {
      console.log("Answer4 is not of string type");
      errorStatus = true;
    }

    return errorStatus;
  }
}