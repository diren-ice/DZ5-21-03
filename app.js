var line = 'addiction'
var revline = '';
for (i = line.length-1; i >= 0; i--) {
    revline += line[i];
}
console.log(revline)


const getAverage = (arifNum) => {
    const num = arifNum.reduce((acc, number) => acc + number, 0);
    const arif = arifNum.length;
    return num / arif;
}
const arifNum = [28, 36, 19, 41];
    console.log(getAverage(arifNum));
