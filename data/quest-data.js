
const forest = {
    id: 'forest',
    title: 'Enter the Scary Forest',
    image: 'forest.png',
    description: `
        You decide yo prove your bravery by entering the scary forest. You've 
        been told all of your life how dangerous it is, but you also know there's
        valuable resources to be found within. You walk for about half an hour 
        and think that, so far, it doesn't live up to its name when you hear a 
        hawk screech over head. What do you do?
    `,
    choices: [{
        id: 'hide',
        description: 'Hide!',
        result: `
            You dive inside of a hollow, moss covered log just as the hawk's 
            talons scrape the ground where you stood. You hear the hawk's wings 
            beat as it flies away, but you wait in the log for an hour just to 
            be sure it's gone before running home. Inside of the log you find
            some common mushrooms you know Auntie Mole loves, and put a 
            couple in your bag. When you return home, she gives 10 gold for 
            the lot.
        `,
        hp: 0,
        gold: 10
    }, {
        id: 'fight',
        description: 'Fight!',
        result: `
            From your back you pull the spear you made by tying a found arrow 
            head between blue stained popsicle sticks. You hold your ground and
            as the hawk descends you stab your spear upwards as hard as you can
            in to the hawk's foot. With a scream and wild flapping, the hawk
            takes off for the sky, catching you in the shoulder with a talon and
            dealing 20 damage. It also leaves behind several feathers, which you
            sell in the market for 30 gold.
        `,
        hp: -20,
        gold: 30
    }, {
        id: 'run',
        description: 'Make a break for hom!',
        result: `
            You attempt to dash back the way you came, hoping to exit the woods
            and return to your burrow. The hawk already has you in his sights,
            however, and dives for you. Why did you think you could out speed a
            diving hawk? He grabs you with his talons, and it's all over.
        `,
        hp: -50,
        gold: 0
    }]
};

const bear = {
    id: 'bear',
    title: 'Find the Dangerous Bear',
    image: 'bear.png',
    description: `
        You hear tell in the market about a bear that has been digging up folks' 
        larders and eating whatever is inside, including the owners! This is 
        your chance to make a name for yourself as a brave adventurer. You 
        narrow down a likely area to find the bear from the rumors you collect, 
        and head out. You expected the bear to be a hulking behemoth, but you
        weren't expecting it to be so quiet. You don't notice it's behind you
        until you hear it snort loudly. As you swing around to face it, what 
        do you do?
         
    `,
    choices: [{
        id: 'run',
        description: 'Nope out of there as fast as you can.',
        result: `
           Nope, you changed your mind. Renown isn't worth this. As fast as your 
           little legs can carry you, which is surprisingly fast, you flee home.
           You don't look back to see if you're being pursued, for fear of 
           slowing down. You manage to make it home safely by evening, but 
           since you spent the whole day traipsing around instead of doing 
           something productive, you didn't earn any money and can't buy dinner.
           You loose 5hp to hunger. 
        `,
        hp: -5,
        gold: 0
    }, {
        id: 'fight',
        description: 'Fight!',
        result: `
            With as big of a cry as you can muster, you draw the string of your 
            matchstick crossbow, letting loose a sharp wooden pick into the 
            bear's neck. It hits it's mark! Unfortunately, bears have thick fur 
            and loose skin at their necks specifically for combat purposes. The
            bear registers your intent, even if it doesn't register that hit.
            With a single swipe of it's massive paw it's all over for you.
        `,
        hp: -50,
        gold: 0
    }, {
        id: 'bargain',
        description: 'Try to bargain?',
        result: `
            You feel the fight drain out of you as you face the massive bear. 
            With your feet suddenly feeling like lead, your only option is to 
            stutter out a "H-hey you!" The bear leans down close, but much to 
            your surprise, he doesn't proceed to eat you. Instead he asks, 
            "Yes?" Huh. Not what you expected, but gaining some courage you 
            proceed to tell the bear in no uncertain terms that he can't keep 
            eating folks. The bear, who you learn is actually a juvenile new 
            to the area, reveals that he didn't realize he was digging up 
            folks' homes, he just smelled food under the ground and dug it up.
            He sheepishly apologizes for eating your neighbors, and accepts 
            your directions to an unsettled part of the forest where he can 
            forage in peace. When you return to town and tell them of what 
            transpired, with only minimal embellishment, they celebrate and 
            reward you with 50 gold, a small fortune!

        `,
        hp: 0,
        gold: 50
    }]
};

const dungeon = {
    id: 'dungeon',
    title: 'Explore a spooky dungeon',
    image: 'dungeon.png',
    description: `
        In order to prove your bravery, you decide to take part in a
        local right of passage: bring home a treasure from the giant's 
        dungeon. The passage there makes for an easy trek, being too small 
        for a giant to even fit their hand in. Once you arrive, though, 
        you're overwhelmed by the size and amount of treasure you find.
        Great casks, tall as a tree by your reckoning, are filled with a
        rotten smelling liquid, but they make for easy passage to the 
        massive shelves that hold lifetimes worth of food and supplies. 
        What do you do?
    `,
    choices: [{
        id: 'caution',
        description: 'Be cautious.',
        result: `You begin stuffing your bag with as much as you can grab 
        of the food from end of the shelf. On the shelf above, out of your 
        reach, you see valuable supplies that can be used for construction 
        and medicine. As you're considering going further, though, you 
        hear monstrous footfalls coming from behind a giant's door. You 
        close your bag and hurry back to the tunnel. It's a respectable 
        haul, earning you 15 gold and, more importantly, the respect of 
        your peers.`,
        hp: 0,
        gold: 15
    }, {
        id: 'greedy',
        description: 'Be greedy.',
        result: `You didn't know so much food existed in the world, let 
        alone in one place. Of course, you need to sample it. Make sure 
        the giants didn't poison it. They're so crafty. You dive head 
        first into the nearest pile of grapes and proceed to eat your 
        way across the shelf, sampling everything you can find. Your 
        bag lays forgotten on the edge. You hear neither the giant's 
        footsteps, nor the door opening as you contentedly lounge on a 
        soft loaf of bread. It's not until you hear a thunderous "What 
        the-" that you open your eyes to see a giant staring at you, 
        his face mere inches away. As you yelp in surprise he also 
        screams, temporarily stunning you with it's force. You start to 
        run for the far end of the shelf, hoping to make it back to the
        tunnel. But as you reach the ledge, your escape slowed by your 
        distended belly, a shadow falls over you. You glance up just 
        before the massive shoe comes down on you, and it's all over.`,
        hp: -50,
        gold: 0
    }, {
        id: 'reckless',
        description: 'Be reckless!',
        result: `You didn't know so much food existed in the world, let 
        alone in one place. As you stuff your bag, and to a lesser extent 
        your face, you glance upwards to see more than a lifetime's worth
        of construction and medical supplies. In your excitement, you 
        don't hear the approaching footsteps coming from behind the giant's 
        door. You find a bag much larger than yourself and swiftly begin
        filling it with the most valuable of the supplies. When the giant's
        door opens you freeze instinctively, but it's not enough to stop
        him from seeing you frozen mid-grab. With a bone shaking scream 
        he reaches blindly to find a weapon. You snap out of your fear and,
        grabbing the bag, take a running leap off the shelf and to the floor.
        You're to the mouth of the cave when you are struck from behind with
        incredible force. Dazed and in pain, you scurry as fast as you can 
        down the tunnel, dragging your spoils behind you. You make it back 
        to the edge of town before collapsing from your wounds. You've 
        obtained 100 gold in supplies, but taken 30 damage.`,
        hp: -30,
        gold: 100
    }]
};

const quests = [
    forest, 
    dungeon,
    bear,
];

export default quests;