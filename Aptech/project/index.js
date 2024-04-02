// document.querySelector("button").addEventListener('click', handleClick);

let noofButtons = document.querySelectorAll(".drum").length;
for (let index = 0; index < noofButtons; index++) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      let buttonInnerHTML = this.innerHTML;
      // console.log(buttonInnerHTML);

      switch (buttonInnerHTML) {
        case "w":
          let tom1 = new Audio("./sounds/tom-1.mp3");
          tom1.play();

          break;
        case "a":
          let tom2 = new Audio("./sounds/tom-2.mp3");
          tom2.play();

          break;
        case "s":
          let tom3 = new Audio("./sounds/tom-3.mp3");
          tom3.play();

          break;
        case "d":
          let tom4 = new Audio("./sounds/tom-4.mp3");
          tom4.play();

          break;
        case "j":
          let tom5 = new Audio("./sounds/snare.mp3");
          tom5.play();

          break;
        case "k":
          let tom6 = new Audio("./sounds/kick-bass.mp3");
          tom6.play();

          break;

        default:
          break;
      }
    });
}
