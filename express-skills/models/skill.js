const skills = [
    {id: 12345, skill: 'Javascript', level: 'Beginner'}, 
    {id: 12344, skill: 'Swift', level: 'Mid'},
    {id: 12346, skill: 'HTML', level: 'Beginner'}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
	// URL params are strings - convert to a number
	id = parseInt(id);
	return skills.find(skill => skill.id === id);
}