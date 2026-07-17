document.querySelector('form').addEventListener('submit', function (event) {
    alert('hello, ' + document.querySelector('#name').value);
    event.preventDefault();
})
document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('input');
    input.addEventListener('keyup', function(event) {
        let name = document.querySelector('p');
        if (input.value) {
            name.innerHTML = `hello ${input.value}`;
        } else {
            name.innerHTML = `hello what ever you are!`
        }
    })
})
let body = document.querySelector('body');
document.querySelector('#red').addEventListener('click', function() {
    body.style.backgroundColor = 'red';
})
document.querySelector('#green').addEventListener('click', function() {
    body.style.backgroundColor = 'green';
})
document.querySelector('#blue').addEventListener('click', function() {
    body.style.backgroundColor = 'blue';
})
document.querySelector('#white').addEventListener('click', function() {
    body.style.backgroundColor = 'white';
})
function blink() {
    let body = document.querySelector('body');
    if (body.style.visibility == 'visible') {
        body.style.visibility === 'visible';
    } else {
        body.style.visibility === 'hidden';
    }
}
navigator.geolocation.getCurrentPosition(function(position) {
    document.write(position.coords.accuracy.latitude + " , " + position.coords.longitude)
})