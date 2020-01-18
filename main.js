let mediumAnimals = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple';
let easyAnimals = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple';
let hardAnimals = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=hard&type=multiple';
let mediumGeneralKnowledge = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
let easyGeneralKnowledge = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';
let hardGeneralKnowledge = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple';
let url = 'https://opentdb.com/api.php?amount=10';
let request = new XMLHttpRequest();
let triviaData;

function loadData() {
    
    request.open('GET', url, true);
    request.onload = loadComplete;
    request.send();
}

function loadComplete (){
    triviaData = JSON.parse(this.responseText);
    console.log(triviaData);
    document.getElementById("triviaQuestion").innerHTML = triviaData.results[0].question;
    document.getElementById("answer1").innerHTML = triviaData.results[0].correct_answer;
    document.getElementById("answer2").innerHTML = triviaData.results[0].incorrect_answers[0];
    document.getElementById("answer3").innerHTML = triviaData.results[0].incorrect_answers[1];
    document.getElementById("answer4").innerHTML = triviaData.results[0].incorrect_answers[2]; 
}

loadData();

function submitChoices() {
    event.preventDefault();
    console.log("Submit Test");
    let category = document.getElementById("category").value;
    let difficulty = document.getElementById("difficulty").value;
console.log("Difficulty, ",difficulty);
    console.log(category);

    if (category === "Animals" && difficulty === "Easy") {
        console.log("Animals Easy");
        url = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple';
        loadData();
    }

    else if (category === "Animals" && difficulty === "Medium") {
        console.log("Animals Medium");
        url = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple';
        loadData();
    }

    else if (category === "Animals" && difficulty === "Hard") {
        console.log("Animals Hard");
        url = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=hard&type=multiple';
        loadData();
    }

    else if (category === "Animals" && difficulty === "Surprise Me!") {
        console.log("General Knowledge Hard");
        url = 'https://opentdb.com/api.php?amount=10&category=27&type=multiple';
        loadData();
    }

    else if (category === "General Knowledge" && difficulty === "Easy") {
        console.log("General Knowledge Easy");
        url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';
        loadData();
    }

    else if (category === "General Knowledge" && difficulty === "Medium") {
        console.log("General Knowledge Medium");
        url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
        loadData();
    }

    else if (category === "General Knowledge" && difficulty === "Hard") {
        console.log("General Knowledge Hard");
        url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple';
        loadData();
    }

    else if (category === "General Knowledge" && difficulty === "Surprise Me!") {
        console.log("General Knowledge Hard");
        url = 'https://opentdb.com/api.php?amount=10&category=9&type=multiple';
        loadData();
    }

    else if (category === "Surprise Me!" && difficulty === "Easy") {
        console.log("Animals Medium");
        url = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';
        loadData();
    }

    else if (category === "Surprise Me!" && difficulty === "Medium") {
        console.log("Animals Medium");
        url = 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple';
        loadData();
    }

    else if (category === "Surprise Me!" && difficulty === "Hard") {
        console.log("Animals Medium");
        url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple';
        loadData();
    }

    else if (category === "Surprise Me!" && difficulty === "Surprise Me!") {
        console.log("All Random");
        url = 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple';
        loadData();
    }


}
