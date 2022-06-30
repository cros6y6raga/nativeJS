// lesson1
// const user = {
//     name: 'Alex',
//     age: 33,
//     isOnline: false
// } // #123
//
// const user2 = user // #123
// // {}, new Object
//
// console.log(user2 === user) //true
//
// user2.name = 'Bob'
// console.log(user)
//
// console.log({} === {})
//
// const arr = []
// const arr2 = arr
//
// const propName = 'friends'
//
//
// const copyUser = {
//     ...user,
//     isOnline: true,
//     isStudent: true,
//     [propName]: ['Alex', 'Donald', 'Max']
// } ///spread
//
// // const copyUser = {}
// // copyUser.name = user.name
// // copyUser.age = user.name
// // copyUser.isOnline = user.isOnline
// copyUser.isOnline = true
// console.log(copyUser)
//
// //deep copy
// const copyUser2 = {...copyUser, friends: [...copyUser.friends]}
//
// copyUser2.friends.push('Anna')
// console.log(copyUser2.friends === copyUser.friends)
// console.log(copyUser2)
// lesson2
// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ];
//
// // const names = ["Bob", "Alex", "Nick", "John"]
//
// const getNames = (arr) => {
//     const result = []
//     //
//     const getNewValue = (el) => el.name
//     //
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = getNewValue(arr[i])
//         result[i] = newValue
//     }
//     return  result
// }
//
// console.log(getNames(students))
//
// const addScores = (arr) => {
//     const result = []
//     //
//     const getNewValue = (el) => ({...el, scores: el.scores + 10})
//     //
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = getNewValue(arr[i])
//         result[i] = newValue
//     }
//     return result
// }
//
// console.log(addScores(students))
// const getNameOfStudent = (el) => el.name
// const addScoresToStudent = (el) => ({...el, scores: el.scores + 10})
//
// const getMappedArray = (arr, mapFn) => {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = mapFn(arr[i])
//         result[i] = newValue
//     }
//     return result
// }
//
// console.log(getMappedArray(students, getNameOfStudent))
// console.log(getMappedArray(students, addScoresToStudent))
//
// console.log(students.map(getNameOfStudent))
//
// const result = []
// const getFilteredArray = (arr, filterFn) => {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = filterFn(arr[i]) //true || false
//         if(newValue === true){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
//
// console.log(getFilteredArray(students, st => st.age > 20))
// console.log(students.filter(st => st.age > 20))
//
//
//
// const student = {
//     name: "Bob",
//     age: 22,
//     isMarried: true,
//     scores: 85,
// }
//
// const user = {
//     status: "online"
// }
//
// // const copyStudent = {}
// // const keys = Object.keys(student)
// // for (let i = 0; i < keys.length; i++) {
// //     copyStudent[keys[i]] = student[keys[i]]
// // }
// const copyStudent = {...student, isStudent: true, ...user}
//
//
// console.log(students.map(st => {
//     if(st.name === "Nick"){
//
//         return {...st, isMarried: true}
//     } else {
//         return st
//     }
// }))
//
//
// const getStudent = (arr, findFn) => {
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = findFn(arr[i]) //true || false
//         if(newValue === true){
//             return arr[i]
//         }
//     }
// }
//
// console.log(getStudent(students, st => st.name === "Nick"))