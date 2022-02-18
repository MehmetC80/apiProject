// Daten von der NASA abfragen
// Webseitendaten aus dem Internet auslesen: axios
axios
  .get(
    "https://api.nasa.gov/planetary/apod?api_key=Kk7jBgOS93Z8bFhHqTcbVLPGtTdy0p2PoCiV4Xx5"
  )
  .then(function (response) {
    console.log(response);

    // Titel
    document.getElementById("title").innerHTML = response.data.title;

    // Explanation
    document.getElementById("explanation").innerHTML =
      response.data.explanation;

    // Astronomiebild
    document.getElementById("astro-image").src = response.data.hdurl;

    document.getElementById("date").innerHTML = response.data.date;
  });
