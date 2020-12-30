async function delay(d) {
  return new Promise((r) => setTimeout(r, d));
}

(async () => {
  while (grecaptcha === undefined) {
    console.log("here");
    delay(5000);
  }

  let form = document.createElement("form");
  form.setAttribute("id", "captchaForm");
  console.log({ window: window.grecaptcha });
})();

// grecaptcha.render("captchaForm", {
//   sitekey: "6LeoeSkTAAAAAA9rkZs5oS82l69OEYjKRZAiKdaF",
//   callback: "submit",
// });
// form.appendChild(captchaNode);

// document.body.appendChild(form);

// (function () {
//   function renderReCaptcha(sitekey) {
//     let form = document.createElement("form");
//     form.setAttribute("id", "captchaForm");

//     document.body.appendChild(form);

//     grecaptcha.render("captchaForm", {
//       sitekey,
//       callback: "submit",
//     });
//   }

//   function submit() {
//     console.log(grecaptcha.getResponse());
//   }

//   browser.runtime.onMessage.addListener((message) => {
//     if (message.command === "Render_Captcha") {
//       renderReCaptcha();
//     }
//   });
// })();

undefined;
