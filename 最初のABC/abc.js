const abc = "AAAACCCCCABAAA";

let A = false;
let B = false;
let C = false;

for (let i = 0; i < abc.length; i++) {
  if (abc[i] == "A") {
     A = true;
  }
  if (abc[i] == "B") {
     B = true;
  }
  if (abc[i] == "C") {
     C = true;
  }
  if (A && B && C) {
    console.log(i + 1 + "番目でABCがすべて含まれてます");
    break;
  }
}
