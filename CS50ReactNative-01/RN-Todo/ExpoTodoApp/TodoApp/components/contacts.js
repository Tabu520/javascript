const NUM_CONTACTS = 100;

const firstName = ['Emma', 'Noah', 'Olivia', 'Liam', 'Ava', 'William', 'Sophia', 'Mason', 'Issabela', 'James',
'Mia', 'Benjamin', 'Charlotte', 'Jacob', 'Abigail', 'Michael', 'Emily', 'Elijah', 'Harper', 'Ethan', 'Amelia', 'Alexander',
'Evelyn', 'Oliver', 'Elizabeth', 'Daniel', 'Sofia', 'Lucas', 'Madison', 'Matthew', 'Avery', 'Aiden', 'Ella', 'Jackson', 'Scarllet',
'Logan', 'Grace', 'David', 'Chloe', 'Joseph', 'Victoria', 'Samuel', 'Riley', 'Henry', 'Aria', 'Owen', 'Lily', 'Sebastian', 'Aubrey',
'Gabriel', 'Zoey', 'Carter', 'Penelope', 'Jayden', 'Lillian', 'John', 'Addison', 'Luke', 'Layla', 'Anthony', 'Natalie', 'Issac',
'Camila', 'Dylan', 'Hannah', 'Wyatt', 'Brooklyn', 'Andrew', 'Zoe', 'Joshua', 'Nora', 'Christopher', 'Leah', 'Grayson', 'Savannah',
'Jack', 'Andrey', 'Julian', 'Claire', 'Ryan', 'Eleanor', 'Jaxon', 'Skylar', 'Levi', 'Ellie', 'Nathan', 'Samantha', 'Caleb', 'Stella',
'Hunter', 'Paisley', 'Christian', 'Violet', 'Isaniah', 'Mila', 'Thomas', 'Allison', 'Aaron', 'Alexa', 'Lincoln'];

const lastName = ['Smith', 'Jones', 'Brown', 'Johnson', 'Williams', 'Miller', 'Taylor', 'Wilson', 'Davis', 'White', 'Clark', 'Hall',
'Thomas', 'Thompson', 'Moore', 'Hill', 'Walker', 'Anderson', 'Wright', 'Martin', 'Wood', 'Allen', 'Robinson', 'Lewis', 'Scott', 'Young',
'Jackson', 'Adams', 'Trynisky', 'Green', 'Evans', 'King', 'Baker', 'John', 'Harris', 'Roberts', 'Campbell', 'James', 'Stewatt', 'Lee',
'County', 'Turner', 'Parker', 'Cook', 'Mc', 'Edward', 'Morris', 'Mitchell', 'Bell', 'Ward', 'Watson', 'Morgan', 'Davies', 'Cooper', 'Phillipes', 'Rogers', 'Gray', 'Hughes', 'Harrison', 'Carter', 'Murphy'];

// Generate a random number between min and max
const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

// generate a name
const generateName = () => `${firstName[rand(firstName.length - 1)]} ${lastName[rand(lastName.length - 1)]}`;

// generate a phone number
const generatePhoneNumber = () => `${rand(999-110)}-${rand(999-110)}-${rand(9999-1020)}`;

// generate a person
const createContact = () => ({
    name: generateName(),
    phone: generatePhoneNumber()
});

// compare two contacts to alphabetizing
export const compareName = (contact1, contact2) => contact1.name > contact2.name;

// add key to based on index
const addKeyToContact = (contact, key) => ({
    key: key,
    ...contact
});
const addKeys = (val, key) => ({key: key, ...val})

// create an array of length NUM_CONTACTS and alphabetizing name
export default Array.from(
    {length: NUM_CONTACTS},
    createContact).map(addKeys);
