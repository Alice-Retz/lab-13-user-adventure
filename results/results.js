import loadProfile from '../map/load-profile.js';
import { getUser } from '../data/storage-utils.js';
import finalHP from './finalHP.js';
import finalGold from './finalgold.js';
import { finalHpText, goldAndAliveText, goldAndDeadText } from './messages.js';

loadProfile();

const user = getUser();
const storyDisplay = document.getElementById('story-display');

const endHp = finalHP(user.hp);
const endGold = finalGold(user.gold);
const endHpText = finalHpText[endHp];

let goldMessages = null;
if (endHp === 'dead') {
    goldMessages = goldAndDeadText;
}
else {
    goldMessages = goldAndAliveText;
}

const goldMessage = goldMessages[endGold];

let story = 'After your adventures, ';
story += user.name + ' the ' + user.race + ', ';
story += endHpText + ' and ' + goldMessage + '.';

storyDisplay.textContent = story;