
const forest = {
    id: 'forest',
    title: 'Enter the Scary Forest',
    map: {
        top: '89%',
        left: '44%'
    },
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
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'bear.png',
    description: `
        You hear tell in the market about a bear that has been digging up folx' 
        larders and eating whatever is inside, including the owners! This is 
        your chance to make a name for yourself as a brave adventurer. You 
        narrow down a likely area to find the bear from the rumors you collect,
         
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        gold: 15
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const dungeon = {
    id: 'dungeon',
    title: 'Explore a spooky dungeon',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'dungeon.png',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    forest, 
    dungeon,
    bear,
];

export default quests;