const getter = {
    get_all_reps: `SELECT * FROM Repitition`,
    get_by_id(id){return `SELECT * FROM Repitition WHERE id = ${id}`}
};

module.exports = getter;