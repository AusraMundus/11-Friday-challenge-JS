/*
7. Parašyti f-ją, kuri atspausdintų paduodamo skaičiaus daugybos lentelę 

TEST:
Multiplication(3) ➞

1 * 3 = 3
2 * 3 = 6
3 * 3 = 9
Ir t.t.iki
10 * 3 = 30
*/


/*
const skaicius = 3;

for (let i = 1; i <= 10; i = i + 1) {
    console.log(i * skaicius);
}
*/

console.log('-------------------');

function Multiplications (skaicius) {
    let rezultatas = '';
    for (let i = 1; i <= 10; i++) {
        rezultatas = rezultatas + `${i} * ${skaicius} = ${i*skaicius} \n\r`;
    }
    return rezultatas;
}

console.log(Multiplications(3));
