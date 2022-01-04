document.addEventListener("keydown", function (event) {

  if (event.key === "A" || event.key === "a") {
      let audio = new Audio("audios/white_keys/A.mp3");
      return audio.play();
  } else if (event.key === "W" || event.key === "w") {
      let audio = new Audio("audios/black_keys/W.mp3");
      return audio.play();
  } else if (event.key === "S" || event.key === "s") {
      let audio = new Audio("audios/white_keys/S.mp3");
      return audio.play();
  } else if (event.key === "E" || event.key === "e") {
      let audio = new Audio("audios/black_keys/E.mp3");
      return audio.play();
  } else if (event.key === "D" || event.key === "d") {
      let audio = new Audio("audios/white_keys/D.mp3");
      return audio.play();
  } else if (event.key === "F" || event.key === "f") {
      let audio = new Audio("audios/white_keys/F.mp3");
      return audio.play();
  } else if (event.key === "T" || event.key === "t") {
      let audio = new Audio("audios/black_keys/T.mp3");
      return audio.play();
  } else if (event.key === "G" || event.key === "g") {
      let audio = new Audio("audios/white_keys/G.mp3");
      return audio.play();
  } else if (event.key === "Y" || event.key === "y") {
      let audio = new Audio("audios/black_keys/Y.mp3");
      return audio.play();
  } else if (event.key === "H" || event.key === "h") {
      let audio = new Audio("audios/white_keys/H.mp3");
      return audio.play();
  } else if (event.key === "U" || event.key === "u") {
      let audio = new Audio("audios/black_keys/U.mp3");
      return audio.play();
  } else if (event.key === "J" || event.key === "j") {
      let audio = new Audio("audios/white_keys/J.mp3");
      return audio.play();
  } else (console.log("WARNING: The key '" + event.key + "' is not on the list."))
});