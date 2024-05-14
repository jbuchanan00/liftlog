const setter = {
    add_exercise(name){return `INSERT INTO exercise (workout_name) VALUES (${name})`}
};

module.exports = setter;