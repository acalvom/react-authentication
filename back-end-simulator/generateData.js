const faker = require('faker');

var database = {users: []};
const ROLES = ['admin', 'user'];

for (let i = 1; i <= 100; i++) {
    database.users.push({
        id: i,
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: ROLES[Math.round(Math.random())],
    });
}

console.log(JSON.stringify(database));

