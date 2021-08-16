// (task 2) --> color all h1 tags with light blue

var hColor = document.getElementsByTagName('h1');
// console.log(hColor);
// hColor.style.color = 'lightblue';
for (const h1 of hColor) {
    // console.log(h1);
    h1.style.color = 'lightblue'
}


// (task 3) --> background color adding in backpack section