//45

let btnGoogle = document.querySelector('#btnGoogle');
let btnYahoo = document.querySelector('#btnYahoo');

function googleLink() {
  location.href = 'https://www.google.com.tw/';
}

function yahooLink() {
  location.href = 'https://tw.yahoo.com/';
}
btnGoogle.addEventListener('click', googleLink);
btnYahoo.addEventListener('click', yahooLink);


//46-1
let jqGoogle = document.querySelector('.jq-google');
let jqYahoo = document.querySelector('.jq-yahoo');

let hexSchoolUrl = 'https://www.hexschool.com/';

let googleId = jqGoogle.getAttribute('data-id');
let yahooId = jqYahoo.getAttribute('data-id');

function tomLink() {
  location.href = `${hexSchoolUrl}?recommend=${googleId}`;
}
jqGoogle.addEventListener('click', tomLink);

function johnLink() {
  location.href = `${hexSchoolUrl}?recommend=${yahooId}`;
}
jqYahoo.addEventListener('click', johnLink);

//46-2
let setSingleParamUrl = document.querySelector('#singleParams');
let setMultiParamUrl = document.querySelector('#multiParams');

function singleParams() {
  location.href = location.pathname + '?recommend=userName';
}
setSingleParamUrl.addEventListener('click', singleParams);

function multiParams() {
  location.href = location.pathname + '?recommend=userName&param2=88&param3=abc';
}
setMultiParamUrl.addEventListener('click', multiParams);