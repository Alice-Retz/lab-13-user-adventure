import finalGold from '../results/finalGold.js';
import finalHP from '../results/finalHP.js';

const test = QUnit.test;

// QUnit.module('actual gold');
// QUnit.module('actual hp');

test('should return poor if gold = 0', (expect) => {
    const user = { gold: 0 };
    const actual = finalGold(user.gold);
    const expected = 'poor';
    expect.equal(actual, expected);
});

test('should return modest if gold < 50', (expect) => {
    const user = { gold: 49 };
    const actual = finalGold(user.gold);
    const expected = 'modest';
    expect.equal(actual, expected);
});

test('should return rich if gold >= 50', (expect) => {
    const user = { gold: 50 };
    const actual = finalGold(user.gold);
    const expected = 'rich';
    expect.equal(actual, expected);
});

test('should return dead if hp <= 0', (expect) => {
    const user = { hp: 0 };
    const actual = finalHP(user.hp);
    const expected = 'dead';
    expect.equal(actual, expected);
});

test('should return frail if hp < 35', (expect) => {
    const user = { hp: 34 };
    const actual = finalHP(user.hp);
    const expected = 'frail';
    expect.equal(actual, expected);
});

test('should return healthy if hp >= 35', (expect) => {
    const user = { hp: 35 };
    const actual = finalHP(user.hp);
    const expected = 'healthy';
    expect.equal(actual, expected);
});

