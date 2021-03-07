// let t = document.getElementById('h')

// t.addEventListener('click', function(){
//     t.style.color = 'green';
//     let di = document.createElement('div')
//         di.innerHTML = "MrAnderson"
// document.body.appendChild(di)
// });


colours = ['white', 'black']
row = 0
column = 0
colourflag = 0
for (i = 1; i< 65; i++){
    let square = document.createElement('div');
    square.style.backgroundColor = colours[colourflag % 2];
    square.className = 'Square'
    if (column == 8){
        column = 0
        row ++
    }
    if (column == 7){
        colourflag ++
    }
    square.style.left = `${column * 80}px`
    square.style.top = `${row * 80}px`
    square.innerHTML = `${row}, ${column}`
    document.getElementById('Chess Board').appendChild(square)
    column ++
    colourflag ++
}

// let square = document.createElement('div');
// square.style.backgroundColor = 'white';
// square.className = 'Square'
// // if ( i % 8 == 0){
// //     row ++
// //     column = 0
// // }
// square.style.left = `${0 * 50}px`
// square.style.top = `${0 * 50}px`
// document.getElementById('Chess Board').appendChild(square)
// let square = document.createElement('div')
// square.className = "Square";
// square.style.backgroundColor = 'white'
// square.style.left = '10px'
// square.style.top = '30px'
// document.getElementById('Chess Board').appendChild(square);
// let square1 = document.createElement('div')
// square1.className = "Square";
// square1.style.backgroundColor = "red";
// square1.style.top = '20px';
// square1.style.left = '500px';
// document.getElementById('Chess Board').appendChild(square1);