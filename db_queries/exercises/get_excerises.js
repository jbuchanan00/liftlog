const workouts = {
    get_all: `SELECT * FROM EXERCISE`,
    get_by_id(id){return `SELECT * FROM EXERCISE WHERE ID=${id}`}
}

module.exports = workouts;