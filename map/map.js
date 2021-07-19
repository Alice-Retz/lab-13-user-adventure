import quests from '../data/quest-data.js';

const questList = document.getElementById('quest-list');

for (let quest of quests) {
    const href = `../quest/?questId=${quest.id}`;
    const questLink = document.createElement('a');
    questLink.href = href;
    questLink.textContent = quest.title;

    questList.appendChild(questLink);
}