// (task 2) --> color all h1 tags with light blue

var hColor = document.getElementsByTagName('h1');
// console.log(hColor);
// hColor.style.color = 'lightblue';
for (const h1 of hColor) {
    // console.log(h1);
    h1.style.color = 'lightblue'
}


// (task 3) --> background color adding in backpack section

const backpackClass = document.getElementById('backpack');

backpackClass.style.backgroundColor = 'tomato';


// (task 4) --> adding border-redius to card

const cards = document.getElementsByClassName('card');

for (const card of cards) {
    // console.log(card);
    card.style.borderRadius = '30px';
}

// (task 5) --> adding eventhandler with button

document.getElementById('button-addon2').addEventListener('click', function () {
    console.log('Event Handler');
})


// (task 6) --> adding eventhandler with all button


const test = document.getElementsByClassName('buyNow');

for (const buyButton of test) {
    buyButton.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

// (task 7) --> disabling and abling send button for specific word

document.getElementById('emailKey').addEventListener('keyup', function (event) {
    if (event.target.value == "email") {
        document.getElementById('button-addon2').removeAttribute('disabled');
    }

    else {
        document.getElementById('button-addon2').setAttribute('disabled', true);
    }
})