var page = $("#trivia");

var trivia = [
    {
        question: "What film was said to have invented the summer blockbuster?",
        answer: ["Jaws", "Star Wars", "E.T.", "The Godfather"],
        right: "Jaws"
    },
    {
        question: "What film does the line 'go ahead, make my day' come from?",
        answer: ["Dirty Harry", "Magnum Force", "Lethal Weapon", "Sudden Impact"],
        right: "Sudden Impact"

    },
    {
        question: "This independent film from 1994 cost only $27,000 and was shot entierly in New Jersey",
        answer: ["Reservoir Dogs", "Mean Streets", "Clerks", "Chasing Amy"],
        right: "Clerks"

    },
    {
        question: "What film from 1984 was released along side a number 1 album of the same name?",
        answer: ["Greese", "Purple Rain", "Graffiti Bridge", "This is Spinal Tap"],
        right: "Purple Rain"
    },
    {
        question: "This 1982 sci-fi film has been shown in 7 different versions over the years",
        answer: ["Close Encounters of the Third Kind", "Star Trek The Motion Picture", "Alien", "Blade Runner"],
        right: "Blade Runner"
    },
    {
        question: "What was the first film to feature actors Robert DeNiro and Al Pacino in scenes together",
        answer: ["Righteous Kill", "The Godfather Part II", "Dog Day Afternoon", "Heat"],
        right: "Heat"
    },
    {
        question:"What film was the first to be released with a PG-13 rating?",
        answer:["Raiders of the lost ark", "The Empire Strikes Back", "Red Dawn", "Jurassic Park"],
        right: "Red Dawn"
    },
    {
        question: "What team of brother directors directed Fargo?",
        answer: ["The Coen Brothers", "The Farrelly Brothers", "The Marx Brothers", "The Scott Brothers"],
        right: "The Coen Brothers"
    }
];
var clock;
var quiz = {
    right: 0,
    wrong: 0,
    timer: 90,

    counter: function() {
        quiz.timer--;
        $("#timer-number").html(quiz.timer);
        if (quiz.timer === 0) {
            console.log("Game Over");
            quiz.done();
        }
    },
    start: function() {
        clock = setInterval(quiz.countdown, 100);

        $("#view").prepend(
         "<h2>Time Left: <span id='timer-number'>90</span> Seconds</h2>"   
        );
        $("#action").remove();
        for (var i = 0; i < trivia.length; i++) {
            page.append("<h2>" + trivia[i].question + "</h2>");
            for (var j = 0; j < trivia[i].answer.length; j++) {
                page.append("<input type ='radio' name='question-" + i +
                "'value='" + trivia[i].answer[j] + "''>" + trivia[i].answer[j]);
            }
        }
        page.append("<button id='finished'>Finished</button>");
    },
    finished: function() {
        var entered = page.children("entered:checked");
        for (var i = 0; i < entered.length; i++) {
            if ($(entered[i]).val() === trivia[i].right) {
                quiz.right++;
            } else {
                quiz.wrong++;
            }
        }
        this.result();
    },
    result: function() {
        clearInterval(this.clock);
        $("#view h2").remove();
        page.html("<h2>Finished</h2>");
        page.append("<h3>Right Answers: " + this.right + "</h3>");
        page.append("<h3>Wrong Answers: " + this.wrong + "</h3>");
    }
};

$(document).on("click", "#action", function() {
    quiz.start();
});
$(document).on("click", "#done", function() {
    quiz.start();
});