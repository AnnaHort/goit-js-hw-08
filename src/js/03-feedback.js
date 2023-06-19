
import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const FEEDBACK_FORM_STATE = 'feedback-form-state';
const emailValue = document.querySelector('[name = "email"]');
const messageValue = document.querySelector('[name = "message"]');

const handleInput = () => {
  
const previousState = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));

const email = emailValue.value;
const message = messageValue.value;

const updateState = {
  ...previousState,
  email,
  message
};

localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(updateState))
};
const throttleEL = throttle(handleInput, 500);
formEl.addEventListener('input', throttleEL);



const handleContentLoaded = () => {
  if (localStorage.getItem(FEEDBACK_FORM_STATE)) {
    const previousState = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));
    formEl.email.value = previousState.email || "";
    formEl.message.value = previousState.message || "";
  } else {
    formEl.email.value = "";
    formEl.message.value = "";
  }
}
document.addEventListener('DOMContentLoaded', handleContentLoaded);



const handleSubmit = (e) => {
  e.preventDefault();

  const localStorageData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));
  if(localStorageData) {
    console.log(localStorageData);
    emailValue.value = "";
    messageValue.value = "";
  }
  localStorage.removeItem(FEEDBACK_FORM_STATE);
};
formEl.addEventListener('submit', handleSubmit);