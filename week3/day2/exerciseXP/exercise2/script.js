// part|
const myWatchedSeries= ["black mirrir", "money heist", "the big bang thory"];
console.log(myWatchedSeries.length);
const myWatchedSerieslengh=myWatchedSeries.length;

const myWatchedSeriesSentence =myWatchedSeries[0] +" " + myWatchedSeries[1] + " " + "and" + " " + myWatchedSeries[2];
console.log(myWatchedSeriesSentence);



// const myWatchedSeriesSentence ='{$myWatchedSeries[0]} ,  {$myWatchedSeries[1]} , and ,   {$myWatchedSeries[2]}'
// console.log(myWatchedSeriesSentence);
console.log("I watch" , myWatchedSeries.length , myWatchedSeriesSentence  );

// part||

myWatchedSeries[2]= "friends";

myWatchedSeries.push("prison break")

myWatchedSeries.splice(0,0,"asphor");

myWatchedSeries.splice(1,1);

myWatchedSeries.splice(0,2);

console.log(myWatchedSeries);






