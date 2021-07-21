import { getUser } from '../data/storage-utils.js';
import finalHP from './finalHP.js';
import finalGold from './finalGold.js';
import { finalHpText, goldAndAliveText, goldAndDeadText } from './resultText.js';
import loadProfile from '../map/load-profile.js';

loadProfile();

const user = getUser();
const endText = document.getElementById('lived-or-died');
const storyDisplay = document.getElementById('story-display');

const endHp = finalHP(user.hp);
const endGold = finalGold(user.gold);
const endHpText = finalHpText[endHp];


let endTitle = null;
if (endHp === 'dead') {
    endTitle = `Your adventure has come to an early end.`;
} else {
    endTitle = `Your first adventure has come to an end!`;
}


let endGoldText = null;
if (endHp === 'dead') {
    endGoldText = goldAndDeadText;
}
else {
    endGoldText = goldAndAliveText;
}

const goldText = endGoldText[endGold];

let story = 'After your adventures, ';
story += user.name + ' the ' + user.lineage + ', ';
story += endHpText + ' and ' + goldText + '.';

endText.textContent = endTitle;
storyDisplay.textContent = story;