// document.querySelector("#grandparent").addEventListener("click",()=>{
//     console.log("grandparent clicked");
// },true)

// document.querySelector("#parent").addEventListener("click",()=>{
//     console.log("parent clicked");
// },true)

// document.querySelector("#child").addEventListener("click",()=>{
//     console.log("child clicked");
// },true)

// var x=1;

// const arr=[5,3,1,7,9,6];

// function findMax(arr){
// let max=0;
// for(let i=0;i<arr.length;i++){

// if(arr[i]>max){
// max=arr[i];
// }
// }
// return max;
// }

// console.log(findMax(arr)); 

// const output=arr.reduce(function(max,curr){
// if(curr>max){
//     max=curr;
// }
// return max;
// },0)

// console.log(output);

const users=[
    {firstName:"vaibhav",lastName:"wadhavane",age:31},
    {firstName:"rahul",lastName:"wadhavane",age:30},
    {firstName:"sonalee",lastName:"wadhavane",age:27},
    {firstName:"sonu",lastName:"wadhavane",age:25},
];

const output=users.map(function(x){
return x.firstName+" "+x.lastName;
})
console.log(output);

