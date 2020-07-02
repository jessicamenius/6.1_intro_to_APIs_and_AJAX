// using API Key from GIPHY to add a GIF to a page

$(document).ready(function () {
  console.log("hello");

  var api_key = UBMuMOoGDKWUkY4YRqXYYyNDZco4oTw1;

  $.ajax({
    type: "GET",
    url: "https://api.giphy.com/v1/gifs/trending?limit=5&api_key=${api_key}",
    dataType: "json",
  }).then(function (response) {
    // console.log(response);

    for (var i = 0; i < response.data.length; i++) {
      var still = response.data[i].images.original_still.url;
      var gif = response.data[i].images.original.url;
      $("body").prepend(
        `<img class="gif" data-still=${still} data-gif=${gif} src=${still}></img>`
      );
    }
  });

  $(document).on("click", ".gif", function () {
    console.log($(this).attr("src"));
    if ($(this).attr("src") === $(this).attr("data-still")) {
      $(this).attr("src", $(this).attr("data-gif"));
    } else {
      $(this).attr("src", $(this).attr("data-still"));
    }
  });
});
