<<<<<<< HEAD
// alert("working");

// // exercise1

// let sentense=["my" , "favorite","color","is","blue"];




// // exercise2

// let str1="mix";
// let str2="pod";

// const slicestr1=str2.slice(0,2)+str1.slice(2);
// console.log(slicestr1);

// const slicestr2=str1.slice(0,2)+str2.slice(2);

// const concatenatedstr=`${slicestr1} ${slicestr2}`;
// console.log(concatenatedstr);

// console.log("doble quote");
// console.log("single quote");
// console.log(`backticks ${1+1}`);

// // exercise3

// const num1= Number(prompt("give me 1 number"));

// console.log(typeof num1);

// const num2= Number(prompt("give me another number"));


// exercise2

// const grades=[80,90,85,100];

// function findAvg(grades){
//     let sum=0;
//     for(let grade of grades){
//         sum+=grade;
//     }
//     const avg = sum/grades.length
//     console.log(avg);

// }
// findAvg();


// stars dailychaalenge

// let stars=""

// for(let i=1;i>=6; i++){
//     stars+=" * ";
//     console.log(stars);
// }



// for(let i=1;i>=6; i++){
//     let stars=" *";
//     console.log(stars.repeat(i));
// }


// for(let i=1;i<=6;i++){
//     let stars="";
//     for (let j=1; j<=i;j++){
//         stars+=" * ";
//     }
//     console.log(stars);
// }  
// for (let i = 1; i <= 6; i++) {
//     let stars = "";
//     for (let j = 1; j <= i; j++) {
//       stars += "* ";
//     }
//     console.log(stars);
//   }


// exercise xp gold 1
// function isBlank(str){
//     if(str===""){
//     return true;
// } else {
//     return false;
// }

// }

// console.log(isBlank(""));


// exrcise2 xpgold

// function abbrevName(fullName){
//     const words=fullName.split(" ")
//     return `${words[0]} ${words[1][0]}.`;
    
// }
// console.log(abbrevName("robin singh"));

// exercise3 xpgold

// function swap(sentense){
//     let newLatter='';
//     for (let i = 0; i < str.length; i++) {
//     if (sentense[i] == sentense[i].toUpperCase()) {
//         newLetters += sentense[i].toLowerCase();
//     } else {
//         newLatter+=(sentense[i].toUppercase());
//     }
//     console.log(newLatter);
//     return newLatter;
// }
// }
// swap();
// console.log(swap(`'The Quick Brown Fox'`));
// console.log(swap('So, today we have REALLY good day'));



function swapCase(str){
    let result="";
    for(let i=0;i<str.length;i++){
        const currenChar=str[i];
        if(currenChar===currenChar.toUpperCase()){
            result+=currenChar.toLowerCase()

        }else{
            result+=currenChar.toUpperCase()

        }
    }
    return result;
}

=======
// alert("working");

// // exercise1

// let sentense=["my" , "favorite","color","is","blue"];




// // exercise2

// let str1="mix";
// let str2="pod";

// const slicestr1=str2.slice(0,2)+str1.slice(2);
// console.log(slicestr1);

// const slicestr2=str1.slice(0,2)+str2.slice(2);

// const concatenatedstr=`${slicestr1} ${slicestr2}`;
// console.log(concatenatedstr);

// console.log("doble quote");
// console.log("single quote");
// console.log(`backticks ${1+1}`);

// // exercise3

// const num1= Number(prompt("give me 1 number"));

// console.log(typeof num1);

// const num2= Number(prompt("give me another number"));


// exercise2

// const grades=[80,90,85,100];

// function findAvg(grades){
//     let sum=0;
//     for(let grade of grades){
//         sum+=grade;
//     }
//     const avg = sum/grades.length
//     console.log(avg);

// }
// findAvg();


// stars dailychaalenge

// let stars=""

// for(let i=1;i>=6; i++){
//     stars+=" * ";
//     console.log(stars);
// }



// for(let i=1;i>=6; i++){
//     let stars=" *";
//     console.log(stars.repeat(i));
// }


// for(let i=1;i<=6;i++){
//     let stars="";
//     for (let j=1; j<=i;j++){
//         stars+=" * ";
//     }
//     console.log(stars);
// }  
// for (let i = 1; i <= 6; i++) {
//     let stars = "";
//     for (let j = 1; j <= i; j++) {
//       stars += "* ";
//     }
//     console.log(stars);
//   }


// exercise xp gold 1
// function isBlank(str){
//     if(str===""){
//     return true;
// } else {
//     return false;
// }

// }

// console.log(isBlank(""));


// exrcise2 xpgold

// function abbrevName(fullName){
//     const words=fullName.split(" ")
//     return `${words[0]} ${words[1][0]}.`;
    
// }
// console.log(abbrevName("robin singh"));

// exercise3 xpgold

// function swap(sentense){
//     let newLatter='';
//     for (let i = 0; i < str.length; i++) {
//     if (sentense[i] == sentense[i].toUpperCase()) {
//         newLetters += sentense[i].toLowerCase();
//     } else {
//         newLatter+=(sentense[i].toUppercase());
//     }
//     console.log(newLatter);
//     return newLatter;
// }
// }
// swap();
// console.log(swap(`'The Quick Brown Fox'`));
// console.log(swap('So, today we have REALLY good day'));



function swapCase(str){
    let result="";
    for(let i=0;i<str.length;i++){
        const currenChar=str[i];
        if(currenChar===currenChar.toUpperCase()){
            result+=currenChar.toLowerCase()

        }else{
            result+=currenChar.toUpperCase()

        }
    }
    return result;
}

>>>>>>> 379a1cdbe8378079caf73d6115b436c9795c6cc3
console.log(swapCase("The Quick Brown Fox"));