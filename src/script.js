'use strict';

// Elements
const monthInput = document.getElementById('month');
const dayInput = document.getElementById('day');
const yearInput = document.getElementById('year');
const buttonEl = document.querySelector('button');
const modalEl = document.querySelector('.modal');
const closeButtn = document.querySelector('.close');
const modalText = document.querySelector('.modal-text');
const calcAgeBox = document.querySelector('.calc-age-box');

// Functions
const birthDate = new Date(2002, 2, 18);

const EngToPer = function (n) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return n.toString().replace(/\d/g, x => farsiDigits[x]);
};

const PerToEng = s => +s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));

const calcAge = () => {
  const date = new Date();
  const nowDatePerArr = date.toLocaleDateString('fa-IR').split('/');

  const perToEngArr = nowDatePerArr.map(dates => PerToEng(dates));

  // nowDate
  let nowYear = perToEngArr[0];
  let nowMonth = perToEngArr[1];
  let nowDay = perToEngArr[2];

  // birthDate
  let birthYear = +yearInput.value;
  let birthMonth = +monthInput.value;
  let birthDay = +dayInput.value;

  // condition
  if (nowMonth < birthMonth && nowDay < birthDay) {
    nowYear--;
    nowMonth += 11;
    nowDay += 29;
  } else if (nowDay < birthDay) {
    nowDay += 29;
  } else if (nowMonth < birthMonth) {
    nowYear--;
    nowMonth += 11;
  }

  // Result
  const RTL = '\u200F';

  let result = `${RTL}${nowYear - birthYear} سال و ${
    nowMonth - birthMonth
  } ماه و ${nowDay - birthDay} روز`;

  const condition =
    nowMonth === birthMonth
      ? (result = `${RTL}${nowYear - birthYear} سال و ${nowDay - birthDay} روز`)
      : result;

  addModal();
  modalText.textContent = EngToPer(condition);
};

const removeModal = function () {
  modalEl.style.display = 'none';
  calcAgeBox.classList.remove('blur-[2px]');
  dayInput.value = '';
  yearInput.value = '';
  monthInput.value = 1;
};

const addModal = function () {
  modalEl.style.display = 'block';
  calcAgeBox.classList.add('blur-[2px]');
};

// Event
removeModal();
closeButtn.addEventListener('click', removeModal);
buttonEl.addEventListener('click', calcAge);
