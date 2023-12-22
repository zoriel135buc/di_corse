const sentense="this dinner is bad";

const wordnot=sentense.search("not");
const wordbad=sentense.search("bad");

if(wordnot===-1){
    console.log(sentense)
}else if(wordnot>wordbad){
    console.log(`wordbad:`,wordbad)
    console.log(`wordnot:`.wordnot)

const firstPart= sentence.slice(0,wordnot);
const secondpart=sentense.slice(wordbad+3);
console.log(firstPart+"good" +secondpart);
}else{
    console.log(sentense)
}
