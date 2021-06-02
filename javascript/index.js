const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const form = document.querySelector("form");
const btn = document.querySelector("button");
const id__column = document.querySelector(".id");
const pw__column = document.querySelector(".pw");
const title = document.querySelector("h2");
const message = document.querySelector("#message");

const getValue = (e) => {
  const input__value = e.target.value;
  const key = e.target.id;
  console.log(key);
};

const btnSubmit = (e) => {
  e.preventDefault();
  console.log(id.value);
  console.log(pw.value);
};

const valid = (e) => {
  const text = e.target.value.trim();
  const beforeTrim = e.target.value;

  if (text.length === 0) {
    return;
  }

  if (beforeTrim.includes(" ")) {
    e.target.classList.add("redLine");
    message.innerText = "띄어쓰기는 금지 입니다.";
  } else if (text.length < 5) {
    e.target.classList.add("redLine");
    message.innerText = "5글자 이상 입력하세요.";
  }
};

const init = (e) => {
  e.target.classList.remove("redLine");
  message.innerText = "";
};

id.addEventListener("blur", valid);
id.addEventListener("focus", init);
pw.addEventListener("blur", valid);
pw.addEventListener("focus", init);
