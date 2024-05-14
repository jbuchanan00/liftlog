const sets = {
    get_all_sets: `SELECT * FROM EXERCISE_SET`,
    get_set_by_id(id){return `SELECT * FROM EXERCISE_SET WHERE id = ${id}`},
    get_set_by_date(startDate, endDate){return `SELECT * FROM EXERCISE_SET WHERE set_date > ${startDate} and set_date < ${endDate}`}
}

module.exports = sets;