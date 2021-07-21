import { getUser } from '../data/storage-utils.js';

function loadProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    avatar.src = '../assets/avatars/' + user.lineage + '.png';
    gold.textContent = user.gold;
    hp.textContent = user.hp;
}

export default loadProfile;