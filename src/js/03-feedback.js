
// обмежує частоту виконання функції яка передасться у неї
import throttle from 'lodash.throttle';

//  ключ який використовується для збереження даних у локальному сховищі
const FEEDBACK_FORM_KEY = 'feedback-form-state';

// оголосимо об'єкт який містить посилання на елементи DOM(зворотній зв'язок)
const refs = {
form: document.querySelector('.feedback-form'),
textarea: document.querySelector('.feedback-form textarea'),
email: document.querySelector('.feedback-form input[name="email"]'),
};

// буде використовуватись для зворотніх форм
const formData = {};

// додамо слухача подій 
refs.form.addEventListener('input', throttle(addInputDataToLocalStorage, 500));
refs.form.addEventListener('submit', onFormSubmit);

// отримуємо дані з локального сховища (localStorage) 

onTextAreaInput();

function addInputDataToLocalStorage(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
}

function onTextAreaInput() {
  
  const localStorageData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));

  if (localStorageData.message) {
    refs.textarea.value = localStorageData.message;
  }

  if (localStorageData.email) {
    refs.email.value = localStorageData.email;
  }
}

// Функція onFormSubmit обробляє подію відправки форми. 
// Вона перевіряє, чи всі обов'язкові поля заповнені

function onFormSubmit(e) {
  e.preventDefault();

  const userEmail = e.target.email.value;
  const userMessage = e.target.message.value;

  if (userEmail === '' || userMessage === '') {
    return false;
  }

//    цей рядок скидає значення полів форми до їх початкового стану, очищуючи їх. 
// для зручності введення нового

  e.target.reset();
  const localStorageData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));

  if (localStorageData) {
    console.log(localStorageData);
  }

  localStorage.removeItem(FEEDBACK_FORM_KEY);
}


