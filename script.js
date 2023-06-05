const btnEl = document.getElementById("btn");
const jokeEL = document.getElementById("joke");
const apiKey = "GshCRRBfHJ3G0087tLKKaQ==ZGRj9UPlfnhApVha";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

btnEl.addEventListener("click", async () => {
  try {
    jokeEL.innerText = "Loading...";
    btnEl.disabled = true;
    const response = await fetch(apiURL, options);
    const data = await response.json();
    jokeEL.innerText = data[0].joke;
    btnEl.disabled = false;
  } catch (error) {
    jokeEL.innerText = "An error occurred, try again later...";
    btnEl.disabled = false;
  }
});
