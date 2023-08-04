const Skill = require('../models/skill')


module.exports = {
    index,
    show
}

function show (req, res) {
res.render ('skills/show', {
    skill: Skill.getOne (req.params.id),
    title: 'Skills details'
}) 
}

function index (req, res) {
    res.render('skills/skillsindex', {
        skills: Skill.getAll(),
        title: 'All skills'
    })
}