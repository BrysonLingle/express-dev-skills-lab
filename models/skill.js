const skills = [
    {id: 12345, skill: 'JavaScript', done: true},
    {id: 54321, skill: 'CSS', done: false},
    {id: 45231, skill: 'HTML', done: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}
 function deleteOne(id) {
    id= parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id) 
    skills.splice(idx, 1)
 }



function create(skill) {
skill.id = Date.now() % 100000
skill.done = false
skills.push(skill)
}

function getOne(id) {
id = parseInt (id)
return skills.find(skill => skill.id === id)
}

function getAll() {
    return skills;
}