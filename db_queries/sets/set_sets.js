const setter = {
    add_set(weight, set_date, ex_id)
    {return `INSERT INTO Exercise_Set (weight, set_date, exercise_id) VALUES (${weight}, ${set_date}, ${ex_id}) RETURNING ID`}
}

module.exports = setter;