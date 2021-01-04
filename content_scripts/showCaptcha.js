async function delay(d) {
  return new Promise((r) => setTimeout(r, d));
}

// Onload it waits for grecaptcha script to load, then renders the captcha to the element
(async () => {
  while (grecaptcha === undefined) {
    console.log("recaptcha is undefined");
    await delay(5000);
  }

  let form = document.createElement("form");
  form.setAttribute("id", "captchaForm");
  document.body.appendChild(form);
  console.log({ window: window.grecaptcha });

  grecaptcha.render("captchaForm", {
    sitekey: "6LeoeSkTAAAAAA9rkZs5oS82l69OEYjKRZAiKdaF",
    callback: "submit", // Not sure how to define the callback function, maybe add it into the script
  });
})();

// Prevent error from occurring
undefined;
