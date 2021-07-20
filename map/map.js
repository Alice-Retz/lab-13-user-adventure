import quests from '../data/quest-data.js';
import { getUser } from '../data/storage-utils.js';

// const user = getUser();

const questList = document.getElementById('quest-list');

for (let quest of quests) {
    const user = getUser();

    if (user.completed[quest.id]) {
        createQuestSpan(quest);
    } else {
        createQuestLink(quest);
    }
}

function createQuestSpan(quest){
    const span = document.createElement('span');
    span.innerText = `${quest.title} COMPLETED`;
    questList.appendChild(span);

}


function createQuestLink(quest){
    const questHref = `../quest/?questId=${quest.id}`;
    const questLink = document.createElement('a');
    questLink.href = questHref;
    questLink.textContent = quest.title;

    questList.appendChild(questLink);
}


