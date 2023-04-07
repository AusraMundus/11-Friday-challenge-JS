/*
2. Parašyti f-ją, kuriai būtų perduodamas vienas parametras skaičius(valandos) 
ir  konvertuotų valandos į sekundes, bei gražintų rezultatą

TEST:
howManySeconds(2) ➞ 7200
howManySeconds(10) ➞ 36000
howManySeconds(24) ➞ 86400

*/

function howManySeconds(hours) {
    const seconds = hours * 60 * 60;
    return seconds;
}
console.log(howManySeconds(2));
console.log(howManySeconds(10));
console.log(howManySeconds(24));
