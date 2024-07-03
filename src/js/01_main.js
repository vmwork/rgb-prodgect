"use strict";

const TELEGRAM_BOT_TOKEN = "7346201764:AAEHwMHDxpz1HrbBhuGS1gtQ47ACv9Q_31c";
const TELEGRAM_CHAT_ID = "@testerRGBBotGROUPE";
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

const sendTelegram = async (name, phone, email) => {
  // testerRGBBot
  console.log(name, phone, email);
  const text = `Заявка от ${name}!\nEmail: ${email}\nТелефон: ${phone}`;
  console.log(text);
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
    console.log(error);
  } catch (error) {
    console.error(error);
    alert("Анкета не отправлена! Попробуйте позже.");
  } finally {
    formBtn.textContent = "Отправить";
  }
};

const formValidate = () => {
  const userName = document.querySelector(".user-name");
  const userPhone = document.querySelector(".user-phone");
  const userEmail = document.querySelector(".user-email");
  const regexpPhone = /^(\+3|)[0-9]{10,11}$/;
  const regexpEmail = /[^|\w](\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/gm;
  sendTelegram(userName.value, userPhone.value, userEmail.value);

  if (userName.value !== "" && userPhone.value !== "" && userEmail.value) {
    regexpEmail.test(userEmail.value);
    if (!regexpPhone.test(userPhone.value)) {
      if (!regexpEmail.test(userEmail.value)) {
        sendTelegram(userName.value, userPhone.value, userEmail.value);
      }
    }
  } else {
    alert("Заполните форму");
  }
};
