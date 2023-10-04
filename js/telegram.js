"use strict";

const TELEGRAM_BOT_TOKEN = "6362848595:AAEaLsksHrQ1IZUHPN5OzfJoX8ZhTLSrMak";
const TELEGRAM_CHAT_ID = "@KarinaReuea";
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

async function sendEmailTelegrum(event) {
  event.preventDefault();

  const form = event.target;
  const formBtn = document.querySelector(".btn btn-send button");
  const formSendResult = document.querySelector(".form_send-result");
  formSendResult.textContent = "";

  const { name, tel, email } = Object.fromEntries(new FormData(form).entries());

  const text = `Заявка от ${name}!\nЕлектрона адреса: ${email}\nНомер телефону: ${tel}`;

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
      formSendResult.textContent =
        "Дякую за замовлення! Ми з вами з'єднаємся в найближчий час.";
      form.reset();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
    formSendResult.textContent = "Анкета не відправлена! Спробуйте пізніше.";
    formSendResult.style.color = "red";
  }
}
