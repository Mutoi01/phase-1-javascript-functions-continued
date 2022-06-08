// code your solution here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}
console.log (`This Saturday, I want to bathe my dog!`)

function mondayWork(work = "go to the office"){
   return `This Monday, I will ${work}.`
}
console.log (`This Monday, I will work from home.`)

const wrapAdjective = function (tree="*"){
  return function(groot="special"){
    return `You are ${tree}${groot}${tree}!`
  }
}
