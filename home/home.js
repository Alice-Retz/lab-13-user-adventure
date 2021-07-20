import { saveUser } from '../data/storage-utils.js';
import { createUser } from './create-user.js';

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(userForm);
    console.log(formData.get('name'));
    const newUser = createUser(formData);
    console.log(newUser);
    saveUser(newUser);
    window.location = 'map';
});

