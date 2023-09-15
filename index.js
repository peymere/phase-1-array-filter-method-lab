// Code your solution here 

// function findMatching(drivers, name) {
//     for (const driver of drivers) {
//         if (driver[name] === name){
//             console.log(name.toLowerCase())
//         }
//     }
// }
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name) {
    return drivers.filter(driver =>
      driver.toLowerCase() === name.toLowerCase()
    )
    }

function fuzzyMatch(drivers, letters) {
  const firstLetters = letters.charAt(0, 1)
  return drivers.filter(name => {
    if (name.charAt(0,1) === firstLetters){
      return name
    } else{}
  }) 
}
// console.log(fuzzyMatch(drivers, "Sa"))
const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(drivers, name){
  return drivers.filter(driver => driver['name'] === name)
}
console.log(matchName(drivers, 'Bobby'))