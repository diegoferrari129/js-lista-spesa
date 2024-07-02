const food = ['patatine', 'gelato', 'uova', 'macinato', 'insalata', 'pomodoro', 'vino'];

let foodList = document.getElementById('foodList');

let i = 0;
while (i < food.length) {

    let listItem = document.createElement('li');
    listItem.innerText = food[i];

    foodList.append(listItem);
    i++
} 


