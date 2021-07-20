import { getUser, saveUser } from '../data/storage-utils.js';

const test = QUnit.test;

test('saveUser should update localStorage with user info', (expect) => {
    const expected = {
        name: 'Marigold Sprout',
        lineage: 'rabbit folk',
        hp: 35,
        gold: 0,
        completed: {}
    };
    saveUser(expected);
    const actual = getUser();
    expect.deepEqual(actual, expected);
});