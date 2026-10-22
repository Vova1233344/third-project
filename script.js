
let masive = [
    {
        id: 1,
        correct: 1,
        question: 'world',
        answers: {
        1: 'Мир',
        2: 'Еда',
        3: 'Город'
    }
    },
    {
        id: 2,
        correct: 3,
        question: 'village',
        answers: {
        1: 'Дом',
        2: 'Стол',
        3: 'Деревня'
    }
    },
    {
        id: 3,
        correct: 2,
        question: 'bed',
        answers: {
        1: 'Компьютер',
        2: 'Кровать',
        3: 'Телефон'
    }
    },
    {
        id: 4,
        correct: 1,
        question: 'nigth',
        answers: {
        1: 'ночь',
        2: 'день',
        3: 'месяц'
    }
    },
    {
        id: 5,
        correct: 3,
        question: 'dog',
        answers: {
        1: 'кот',
        2: 'хомяк',
        3: 'собака'
    }
    },
]

let counter = 0
let main = document.querySelector('.main')
let cards = document.querySelectorAll('.card')
let button = document.querySelector('.next-button')
cards.forEach(item => {item.addEventListener('click', function(){
    console.log(item)
    let correct = this.dataset.correct === 'true';
    if (correct) {
        item.style.backgroundColor = 'green'
    }
    else {
        item.style.backgroundColor = 'red'
    }
})})

function update(word){
    main.innerHTML = word.question
    cards.forEach((item, index) => {
        item.innerHTML = word.answers[index + 1]
        item.dataset.correct = (index + 1) === word.correct
        item.style.backgroundColor = ''
    })
}

button.addEventListener('click', function() {
    if (counter < masive.length){
    update(masive[counter])
    counter ++}
})
