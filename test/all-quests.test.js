import { hasCompletedAllQuests } from '../map/has-completed-all-quests.js';
const test = QUnit.test;

test('should return true if user has completed all tests', (expect) => {
    const user = {
        completed: {
            dungeon: true,
            bear: true,
            forest: true

        }
    };
    const expected = true;
    const actual = hasCompletedAllQuests(user);
    expect.equal(actual, expected);
});

test('should return false if all quests not completed', expect => {
    const user = {
        completed: {
            dragon: true
        }
    };
    const expected = false;
    const actual = hasCompletedAllQuests(user);
    expect.equal(actual, expected); 
});