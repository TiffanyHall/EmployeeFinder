const employees = require('../data/employees');

module.exports = function (app) {

    app.get('/api/employees', function (req, res) {
        res.json(employees);
    });

    app.post("/api/employees", function (req, res) {
        let employeeMatch = {
            name: '',
            photo: '',
            employeeDiff: 100
        };

        const newUser = req.body;
        const newUserScores = newUser.scores;

        for (i = 0; i < employees.length; i++) {
            const currentEmployee = employees[i];
            let totalDiff = 0;
            for (j = 0; j < currentEmployee.scores.length; j++) {
                const currentEmployeeScore = currentEmployee.scores[j];
                const currentUserScore = newUserScores[j];

                totalDiff += Math.abs(parseInt(currentEmployeeScore) - parseInt(currentUserScore))
            };

            if (totalDiff <= employeeMatch.employeeDiff) {
                employeeMatch.name = currentEmployee.name;
                employeeMatch.photo = currentEmployee.photo;
                employeeMatch.employeeDiff = totalDiff;
            };
        }
         employees.push(newUser);
        res.json(employeeMatch);
    });
}

