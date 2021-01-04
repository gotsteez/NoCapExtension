function listeners() {
  function loadCaptcha(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
      command: "Render_Captcha",
    });
  }

  // Listen for button  and attempts to load captcha
  let loadCaptchaBtn = document.querySelector(".load-captcha");
  loadCaptchaBtn.addEventListener("click", () => {
    console.log("here");
    browser.tabs.query({ active: true, currentWindow: true }).then(loadCaptcha);
  });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  console.log("Failed here");
  console.error(`Failed to execute content script: ${error.message}`);
}

// executes the script, any errors gets reported
browser.tabs
  .executeScript({ file: "/content_scripts/showCaptcha.js" })
  .then(listeners)
  .catch(reportExecuteScriptError);
