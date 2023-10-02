const saveButton = document.querySelector("#saveButton");
const text = document.querySelector("#tokens");

chrome.storage.sync.get(["tokens"]).then((result) => {
  if (result) {
    text.value = result.tokens;
    console.log("snyc value is \n" + result.tokens);
  } else {
    chrome.storage.sync.get(["tokens"]).then((result) => {
      text.value = result.tokens;
      console.log("local value is \n" + result.tokens);
    });
  }
});

if (saveButton && text) {
  saveButton.addEventListener("click", async () => {
    chrome.storage.local.set({ tokens: text.value }).then(() => {
      console.log("saved:local");
    });
    chrome.storage.sync.set({ tokens: text.value }).then(() => {
      console.log("saved:sync");
    });
  });
}
