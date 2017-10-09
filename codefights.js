/*

Arrays - firstDuplicate (attempt 1)

function firstDuplicate(a) {

for (let i = 0; i < a.length; i++) {
  if (a.indexOf(a[i]) !== i) {
    return a[i];
  }
}
  return -1;
}


(attempt 2)

function firstDuplicate(a) {

var hash = {};

for (let i = 0; i < a.length; i++) {
  if(hash[a[i]]) {
    return a[i];
  }
    hash[a[i]] = true;
  }
  return -1;
}



Strings - Amend the Sentence

function amendTheSentence(s) {
  return s.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
}

*/