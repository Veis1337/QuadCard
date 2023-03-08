const Card = require('../models/Card');

const data = [
    {
        id: 1,
        cardName: 'Blue Slime',
        cardType: 'Slime',
        frontNum: 3,
        rightNum: 3,
        backNum: 3,
        leftNum: 3,
        fileName: '01-blueSlime.png',
        backGround: 'slimeBG.png',
    },
    {
        id: 2,
        cardName: 'Green Slime',
        cardType: 'Slime',
        frontNum: 2,
        rightNum: 4,
        backNum: 2,
        leftNum: 4,
        fileName: '01-blueSlime.png',
        backGround: 'slimeBG.png',
    },
    {
        id: 3,
        cardName: 'Red Slime',
        cardType: 'Slime',
        frontNum: 5,
        rightNum: 2,
        backNum: 3,
        leftNum: 2,
        fileName: '01-blueSlime.png',
        backGround: 'slimeBG.png',
    },
    {
        id: 4,
        cardName: 'Yellow Slime',
        cardType: 'Slime',
        frontNum: 4,
        rightNum: 2,
        backNum: 4,
        leftNum: 2,
        fileName: '01-blueSlime.png',
        backGround: 'slimeBG.png',
    },
    {
        id: 5,
        cardName: 'Purple Slime',
        cardType: 'Slime',
        frontNum: 3,
        rightNum: 2,
        backNum: 5,
        leftNum: 2,
        fileName: '01-blueSlime.png',
        backGround: 'slimeBG.png',
    },
];

const seedSlimes = () => Card.bulkCreate(data);

module.exports = seedSlimes;