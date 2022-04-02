const instructors = [
    {name: 'Quincy', specialty:'Quantum Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty:'Kung Fu'},
    {name: 'Paul', specialty: "Entomology"}
]
let instructor_names = []
instructors.forEach(instructor =>{
    instructor_names.push(instructor.name)
})
//console.log(instructor_names)

const instructorNames = instructors.map(instructor => instructor.name)
const instructorSpecialty = instructors.map(s => s.specialty)

//console.log(instructorNames, instructorSpecialty)

const instructorInfo = instructors.map(i => i)
//console.log(instructorInfo)

let kvArray = [
    {key: 1, value: 12},
    {key: 2, value: 20},
    {key: 3, value: 30}
]
console.log(kvArray)

let reformattedArray = kvArray.map(obj => {
    let rObj = {}
    rObj[obj.key] = obj.value;
    console.log(rObj)
})