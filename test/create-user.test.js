import { createUser } from '../home/create-user.js';
const test = QUnit.test;

test('should create a nex user', (expect) => {
    const expected = {
        name: 'Marigold Sprout',
        lineage: 'rabbit folk',
        hp: 35,
        gold: 0,
        completed: {}  
    };

    const userData = new FormData();
    userData.set('name', 'Marigold Sprout');
    userData.set('lineage', 'rabbit folk');

    const actual = createUser(userData);
    expect.deepEqual(actual, expected);
});