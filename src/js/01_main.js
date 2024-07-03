"use strict";

const TELEGRAM_BOT_TOKEN = "7346201764:AAEHwMHDxpz1HrbBhuGS1gtQ47ACv9Q_31c";
const TELEGRAM_CHAT_ID = "@testerRGBBotGROUPE";
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

const sendTelegram = async (name, phone, email) => {
  // testerRGBBot
  const text = `Заявка от ${name}!\nEmail: ${email}\nТелефон: ${phone}`;
  try {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    });

    if (response.ok) {
      alert("Ваша заявка успешно отправлена");
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
    alert("Анкета не отправлена! Попробуйте позже.");
  }
};
const validateEmail = (email) => {
  var re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
};
const validatePhone = (phone) => {
  var re = /^(\+3|)[0-9]{10,11}$/;
  return re.test(String(phone).toLowerCase());
};

const formValidate = () => {
  const userName = document.querySelector(".user-name");
  const userPhone = document.querySelector(".user-phone");
  const userEmail = document.querySelector(".user-email");
  const regexpPhone = /^(\+3|)[0-9]{10,11}$/;

  if (userName.value !== "") {
    if (validatePhone(userPhone.value)) {
      if (validateEmail(userEmail.value)) {
        sendTelegram(userName.value, userPhone.value, userEmail.value);
        return;
      }
    }
  }
  alert("Заполните форму");
};
