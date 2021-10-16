const transform = document.querySelector("#transform");
const square = document.createElement("div");
square.className = "rounded bg-light myshadow mysquare1";
transform.appendChild(square);
square.addEventListener(
  "click",
  (goToLeft = () => {
    square.className = "rounded bg-primary myshadow mysquare2";
  })
);
square.addEventListener(
  "mouseout",
  (goToLeft = () => {
    square.className = "rounded bg-light myshadow mysquare1";
  })
);
// square.addEventListener(
//   "click",
//   (goToLeft = () => {
//     square.className = "rounded bg-primary myshadow mysquare2";
//   })
// );
console.log(transform);
console.log(square);