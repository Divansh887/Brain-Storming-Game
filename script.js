let cardsArray = [
    {
        'name': 'Teacup',
        'img': 'https://cdn.pixabay.com/photo/2017/05/31/11/28/the-cup-2360104_1280.png',
    },
    {
        'name': 'Lemon',
        'img': 'https://cdn.pixabay.com/photo/2016/02/25/16/21/fruit-1222428_1280.png',
    },
    {
        'name': 'Car',
        'img': 'https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_1280.png',
    },
    {
        'name': 'Girl',
        'img': 'https://cdn.pixabay.com/photo/2015/07/14/18/14/school-845196_640.png',
    },
    {
        'name': 'Lotus',
        'img': 'https://cdn.pixabay.com/photo/2018/03/02/09/04/lotus-3192656_1280.png',
    },
    {
        'name': 'Cat',
        'img': 'https://cdn.pixabay.com/photo/2017/09/01/00/16/png-2702697_1280.png',
    },

    {
        'name': 'Stone',
        'img': 'https://cdn.pixabay.com/photo/2017/07/27/09/56/sphere-stone-2544690_1280.png',
    },

    {
        'name': 'Women',
        'img': 'https://cdn.pixabay.com/photo/2018/11/09/14/25/female-3804683_1280.png',
    }
    ,

    {
        'name': 'Teddy',
        'img': 'https://cdn.pixabay.com/photo/2017/08/10/23/55/png-2629072_1280.png',
    }

    ,

    {
        'name': 'Santaclaus',
        'img': 'https://cdn.pixabay.com/photo/2015/11/30/17/52/christmas-1070830_1280.png',
    }

    ,

    {
        'name': 'Moon',
        'img': 'https://cdn.pixabay.com/photo/2019/07/08/01/40/moon-4323627_1280.png',
    }

    ,

    {
        'name': 'Hourglass',
        'img': 'https://cdn.pixabay.com/photo/2016/10/11/19/17/hourglass-1732516_1280.png',
    }


    ,

    {
        'name': 'Tree',
        'img': 'https://cdn.pixabay.com/photo/2016/08/21/01/12/tree-1608890_1280.png',
    }
    ,

    {
        'name': 'Boy',
        'img': 'https://cdn.pixabay.com/photo/2016/04/09/22/43/boy-1319082_1280.png',
    }
    ,

    {
        'name': 'Tiger',
        'img': 'https://cdn.pixabay.com/photo/2018/04/04/12/31/tiger-3289665_1280.png',
    }

];


const parentDiv = document.querySelector('#card-section');

// step 2 to duplicate each card
const gameCard = cardsArray.concat(cardsArray)
console.log(gameCard)

// steps 3
// Note that this method creates a new shuffled array instead of modifying the original one.
// const myNumbers = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1))
//         // console.log(i, j)
//         let temp = array[i]
//         array[i] = array[j]
//         array[j] = temp
//     }
//     return array
// }
//
// const shuffledChild = myNumbers(gameCard)
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());


let clickCount = 0;
let firstCard = "";
let secondCard = "";


// styling the match card
const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.add('card_match')
    })
}


// step 7

const resetGame = () => {
    firstCard = "";
    secondCard = "";
    clickCount = 0;

    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.remove('card_selected')
    })

}

// step 4
parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;

    if(curCard.id === "card-section"){return false }

    clickCount ++;

    if(clickCount < 3){

        if(clickCount === 1){
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }else{
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }

        if(firstCard !== "" && secondCard !== ""){
            if(firstCard === secondCard){
                // curCard.classList.add('card_match')
                setTimeout(() => {
                    card_matches()
                    resetGame()
                }, 1000)

            }else{
                setTimeout(() => {
                    resetGame()
                }, 1000)
            }
        }

    }

})


// step 1 to add the card
for(let i=0; i<shuffledChild.length; i++){

    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')

    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}