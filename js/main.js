

const question = document.querySelector("#qnText");
const choices = Array.from(docuemnt.querySelectorAll(".choiceText");
const progress = document.querySelector("#counterText");
const image = document.querySelector (".qnImage");
const scoreText = document.querySelector ("#scorePoints");
const homer = document.querySelector ("#homerImg");
const background = document.querySelector ("body");

const SCORE_POINTS = 1;
const MAX_QUESTIONS = 10;

const nextBtn = document.querySelector("#nextBtnCont");

let currentQuestion = {}
let acceptinAnswers =true
let score = 0
let questionCounter = 0
let availableQuestion = []
let homer = "hidden"
let backgound = "lightyellow"
let image = []


let questions = [
	{
		question: "1) In what year did the first episode of The Simpsons air?",
		choice1: "a) 1986",
		choice2: "b) 1989",
		choice3: "c) 2000",
		choice4: "d) 1990",
		answer: 2,
	},

	{
		question: "2) Which cartoon inspired The Itchy & Scratchy Show?",
		choice1: "a) Danger Mouse",
		choice2: "b) Sylvester and Tweety",
		choice3: "c) Tom and Jerry",
		choice4: "d) Chip n Dale",
		answer: 3,
	},

	{
		question: "3) What’s Marge’s natural hair colour?",
		choice1: "a) Grey ",
		choice2: "b) Light brown",
		choice3: "c) Blue",
		choice4: "d) Black",
		answer: 1,
	},

	{
		question: "4) Who composed The Simpsons’ theme tune?",
		choice1: "a) Hans Zimmer",
		choice2: "b) Carl W. Stalling",
		choice3: "c) Randy Newman",
		choice4: "d) Danny Elfman",
		answer: 4,
	},

	{
		question: "5) What’s Homer’s real job?",
		choice1: "a) Account Executive",
		choice2: "b) Railroad Engineer",
		choice3: "c) Nuclear Safety Inspector",
		choice4: "d) Duffman Model",
		answer: 3,
	},

	{
		question: "6) Who was Lisa’s First Boyfriend?",
		choice1: "a) Milhouse Van Houten",
		choice2: "b) Nelson Muntz",
		choice3: "c) Martin Prince, Jr",
		choice4: "d) Ralph Wiggum",
		answer: 2,
	},

	{
		question: "7) What was Maggie's first word?",
		choice1: "a) Daddy",
		choice2: "b) Mommy",
		choice3: "c) Bart",
		choice4: "d) Homer",
		answer: 1,
	},
	
	{
		question: "8) What’s Mr Burns’ catchphrase?",
		choice1: "a) Excellent!",
		choice2: "b) Boring!",
		choice3: "c) Ay Caramba!",
		choice4: "d) Okily Dokily!",
		answer: 1,
	},

	{
		question: "9) What’s Bart’s full name?",
		choice1: "a) Bartholomew Jay Jr, Simpson",
		choice2: "b) Bartholomew JoJo Simpson",
		choice3: "c) Bart Simpson",
		choice4: "d) Bart Jay Jr, Simpson",
		answer: 2,
	},
	
	{
		question: "10) What are Marge’s twin sisters called?",
		choice1: "a) Patty and Sylvia",
		choice2: "b) Pearl and Ruth",
		choice3: "c) Beatrice and Selma",
		choice4: "d) Patty and Selma",
		answer: 4,
	}
]

let image = ["images/jpg/simpson_trivia_qn_01.jpg","images/jpg/simpson_trivia_qn_02.jpg","images/jpg/simpson_trivia_qn_03.jpg","images/jpg/simpson_trivia_qn_04.jpg","images/jpg/simpson_trivia_qn_05.jpg","images/jpg/simpson_trivia_qn_06.jpg","images/jpg/simpson_trivia_qn_07.jpg","images/jpg/simpson_trivia_qn_08.jpg","images/jpg/simpson_trivia_qn_09.jpg","images/jpg/simpson_trivia_qn_10.jpg",]

startGame = () => {
	questionCounter = 0;
	score = 0;
	availableQuestion = [...questions];
	homer = "hidden";
	image =  ;
	getNewQuestion() ;
}

getNewQuestion = () => {
	if(answer == question[i].answer){
		score = ++ SCORE_POINTS;
		background.style.backgroundColor = "#50a7ff";
		homer.src = "images/svg/simpson_homer_good.svg";
	}
	else{
		score == ;
		background.style.backgroundColor = "#ff9700";
		homer = ;
		homer.src = "images/svg/simpson_homer_bad.svg";
	}
}


nextBtn.addEventListener('click',getNewQuestion,false);