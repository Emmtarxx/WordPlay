$(document).ready(function () {
  $("#group").submit(function (event) {
    event.preventDefault();
    let sentence = $("input#word").val();
    let arr = sentence.split(" ");

    $("input#word").val("");
    let result = [];

    arr.forEach(function (string) {
      if (string.length > 3) {
        result.push(string);

      }

    });

    let newArr = result.reverse()
    let newArr2 = newArr.join(" , ");
    $("#log").text(newArr2);

  });


});