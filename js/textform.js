const knopka = document.getElementById("showbtn");
const textk = document.getElementById("textform");

knopka.addEventListener("click", () => {
  textk.style.opacity = "1";
  textk.style.visibility = "visible";

  setTimeout(() => {
    textk.style.opacity = "0";
    textk.style.visibility = "hidden";
  }, 5000);
});
