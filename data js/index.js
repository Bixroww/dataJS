const array = ['Paris','Lyon', 'Bordeaux', 'Nigger']
const array1 = ['Paris', 33, ['Bordeaux', 'Nigger'], true]

for (i = 0; i < array.length; i++) {
    console.log(typeof array1[i]);
}

const numbers = [21, 45, 1, 22, 44, 7];

console.log(numbers.sort());

//************/

const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";

input.addEventListener("input", (e) => {
  link = e.target.value;

  if (link) {
    video.innerHTML = `<iframe width="600" height="300" src=${link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
});

const changeLink = (linkToChange) => {
    let embed = linkToChange.replace('watch?v=', "embed/");
    link = embed
}

// https://youtu.be/QB1DTl7HFnc <iframe width="1903" height="772" src="https://www.youtube.com/embed/QB1DTl7HFnc" title="[Tuto Javascript #0] Débuter Javascript de zéro, apprendre les bases" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
