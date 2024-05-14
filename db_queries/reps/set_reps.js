const setter = {
    add_rep(amount, set_id){return `INSERT INTO Repitition (reps, set_id) VALUES (${amount}, ${set_id})`}
};

module.exports = setter;