/*

Arrays - firstDuplicate

function firstDuplicate(a) {

for (var i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) !== i) {
      return a[i];
    }
  }
  return -1;
}

Strings - Amend the Sentence

function amendTheSentence(s) {
  return s.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
}

*/