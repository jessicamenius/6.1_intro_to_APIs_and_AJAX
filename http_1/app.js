$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "http://quotes.rest/qod.json",
  }).then(function (response) {
    // console.log(response.contents.quotes[0].quote);
    // console.log(response);
    console.log(response.contents.quotes[0].quote);
    $("body").prepend("<p>").text(`${response.contents.quotes[0].quote}`);
  });

  $.ajax({
    type: "GET",
    url: "https://icanhazdadjoke.com/",
    dataType: "json",
  }).then(function (response) {
    // console.log(response);
    console.log(response.joke);
    $("body").prepend(`<p>${response.joke}</p>`);
  });
});

// ajax is a function

// http://quotes.rest/qod.json
// https://icanhazdadjoke.com/
