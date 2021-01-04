chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // ----------------------------------------------------------
      // Trigger after init and log
      console.log("injected");
      // ----------------------------------------------------------

    }
  }, 10);
});
const isDocReady = () => {
if (document.readyState === 'complete') {
}}
chrome.runtime.addEventListener(function listeners() {
  function loadCaptcha(tabs) {
    browser.tabs.sendMessage (tabs[0].id, {
      command: "Render_Captcha",
    });
  }

  // Listen for button and attempts to load captcha
  let loadCaptchaBtn = document.querySelector (".load-captcha");
  loadCaptchaBtn.addEventListener ("click", () => {
    console.log ("here");
    browser.tabs.query ({active: true, currentWindow: true}).then (loadCaptcha);
  });
  return isDocReady ();


  /**
   * There was an error executing the script.
   * Display the popup's error message, and hide the normal UI.
   */
  function reportExecuteScriptError(error) {
    console.log ("Failed here");
    console.error (`Failed to execute content script: ${error.message}`);
  };
// executes the script, any errors gets reported
  browser.tabs
      .executeScript ({file: "/content_scripts/showCaptcha.js"})
      .then (listeners)
      .catch (reportExecuteScriptError);
})
