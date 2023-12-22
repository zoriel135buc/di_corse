const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let  acronym=""

for(const name of names.sort()){
    console.log(name)
    acronym=acronym+name[0]
}
console.log(acronym)