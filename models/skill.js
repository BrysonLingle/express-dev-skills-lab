const skills = [
    {id: 12345, skill: 'JavaScript', done: true},
    {id: 54321, skill: 'CSS', done: false},
    {id: 45231, skill: 'HTML', done: false}
]

module.exports = {
    getAll,
    getOne
}

function getOne(id) {
id = parseInt (id)
return skills.find(skill => skill.id === id)
}

function getAll() {
    return skills;
}