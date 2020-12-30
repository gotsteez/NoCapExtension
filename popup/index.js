function listeners() {
  function loadCaptcha(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
      command: "Render_Captcha",
    });
  }

  // Listen for button click
  // let loadCaptchaBtn = document.querySelector(".load-captcha");
  // loadCaptchaBtn.addEventListener("click", () => {
  //   console.log("here");
  //   browser.tabs.query({ active: true, currentWindow: true }).then(loadCaptcha);
  // });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  // document.querySelector("#popup-content").classList.add("hidden");
  // document.querySelector("#error-content").classList.remove("hidden");
  console.log("Failed here");
  console.error(`Failed to execute content script: ${error.message}`);
}

browser.tabs.executeScript({ file: "/content_scripts/showCaptcha.js" });
// .then(listeners)
// .catch(reportExecuteScriptError);
