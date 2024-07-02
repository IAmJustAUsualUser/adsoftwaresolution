function Calculate() {
  const P = document.getElementById("Principle").valueAsNumber;
  const T = document.getElementById("Time").valueAsNumber;
  const R = document.getElementById("Rate").valueAsNumber;
  return (document.getElementById("SI").innerHTML = (P * T * R) / 100);
}

const Heading2 = document.querySelector("h2");
Heading2.addEventListener("click", function () {
  Heading2.innerHTML = "Text Changed";
});

const Heading1 = document.querySelector("h1");
Heading1.addEventListener("click", function () {
  Heading1.style.fontSize = "49px";
  Heading1.style.color = "Green";
  Heading1.style.textAlign = "Center";
});

// Go to Top
const gotop = document.querySelector("#gototop");
gotop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
