
let masive = [
    {
        id: 1,
        question: 'world',
        answers: {
        1: 'Мир',
        2: 'Еда',
        3: 'Город'
    }
    },
    {
        id: 2,
        question: 'village',
        answers: {
        1: 'Дом',
        2: 'Стол',
        3: 'Деревня'
    }
    },
    {
        id: 3,
        question: 'bed',
        answers: {
        1: 'Компьютер',
        2: 'Кровать',
        3: 'Телефон'
    }
    },
]

let main = document.querySelector('.main')
let cards = document.querySelectorAll('.card')
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
