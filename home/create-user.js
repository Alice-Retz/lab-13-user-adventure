export function createUser(formData){
    const newUser = {
        gold: 0,
        hp: 35,
        name: formData.get('name'),
        lineage: formData.get('lineage'),
        completed: {}
    };
    // newUser['gold'] = 0;  <= Also viable ways
    // newUser['hp'] = 35;
    // newUser.gold = 0;
    // newUser.hp = 35;
    return newUser;
}