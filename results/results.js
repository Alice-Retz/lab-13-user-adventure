import { getUser } from '../data/storage-utils.js';
import finalHP from './finalHP.js';
import finalGold from './finalGold.js';
import { finalHpText, goldAndAliveText, goldAndDeadText } from './resultText.js';
import loadProfile from '../map/load-profile.js';

loadProfile();

const user = getUser();
const storyDisplay = document.getElementById('story-display');

const endHp = finalHP(user.hp);
const endGold = finalGold(user.gold);
const endHpText = finalHpText[endHp];

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

storyDisplay.textContent = story;