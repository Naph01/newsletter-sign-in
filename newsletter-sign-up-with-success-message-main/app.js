const button = document.querySelector('.btn');
const mainCard = document.querySelector('.main-card');
const successCard = document.querySelector('.success');
const error = document.querySelector('.error');
const input = document.querySelector('input');
const dismissButton = document.querySelector('.btn-02');
const emailAddress = document.getElementById('email');

const toggleFunction = () => {
    const inputValue = input.value;

    if(!isEmail(inputValue)) {
        error.classList.remove('hidden');
        successCard.classList.add('hidden');
    }
    else{
        error.classList.add('hidden');
        successCard.classList.remove('hidden');
        mainCard.classList.add('hidden');
        emailAddress.innerHTML = inputValue;
    }
}

const removeFunction = () => {
    successCard.classList.add('hidden');
    mainCard.classList.remove('hidden');
}

button.addEventListener('click', toggleFunction);
dismissButton.addEventListener('click', removeFunction);

const isEmail = (input) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}