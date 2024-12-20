const Array = ["Saro", "Farzamnia"];
console.log(Array);

const arraySport = ["swim", "cycling", "mountaineering"];
console.log(arraySport);

const newArray =Array.toString();
const newSport =arraySport.toString();

let Text = "Hello I am ";
let finalText=Text.concat(" ", newArray);

let Text2 = "My favorite sport are ";
let finalText2=Text2.concat(" ", arraySport);
console.log(finalText, finalText2);

const arraySport2 = ["swim", "cycling", "mountaineering"];
arraySport2.pop();
console.log(arraySport2);


const Array2 = ["Saro", "Farzamnia"];

const arraySport3 = ["swim", "cycling", "mountaineering"];
console.log(arraySport3);

const Array3 = ["Sina", "Ahmadi"];
const arraySport4 = ["football", "basketball", "ping pong"];

Array2[0]="Sina";
Array2[1]="Ahmadi";
console.log(Array2);
arraySport2[0]="football";
arraySport2[1]="basketball";
arraySport2[2]="ping pong";
console.log(arraySport2);