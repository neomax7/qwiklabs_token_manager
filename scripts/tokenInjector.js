const uuid1 = document.querySelector("#uuid_1");
const uuid2 = document.querySelector("#uuid_2");
const uuid3 = document.querySelector("#uuid_3");
const uuid4 = document.querySelector("#uuid_4");

(async () => {
  const response = await chrome.storage.sync.get("tokens");
  console.log(response);

  var firstToken = response.tokens.split("\n")[0];
  console.log(firstToken);

  // `document.querySelector` may return null if the selector doesn't match anything.
  if (uuid1 && uuid2 && uuid3 && uuid4 && firstToken) {
    uuid1.value = firstToken.slice(0, 4);
    uuid2.value = firstToken.slice(4, 8);
    uuid3.value = firstToken.slice(8, 12);
    uuid4.value = firstToken.slice(12, 16);
    uuid1.dispatchEvent(new Event("input"));
  }
})();
