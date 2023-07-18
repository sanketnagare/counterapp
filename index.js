const count = document.querySelector('#counter');

const increment = () => {
    let value = parseInt(count.innerText);
    value = value + 1;
    count.innerText = value;

}

const decrement = () => {

    let value = parseInt(count.innerText);
    value = value - 1;
    count.innerText = value;

}