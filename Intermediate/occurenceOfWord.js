const str = "Hare Krishna Hare Rama Rama Rama Hare Hare Satyam Tiwari";

const occur = {};

for (w of str) {
  occur[w] = occur[w] + 1 || +1;
}

console.log(occur);
