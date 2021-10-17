
movie = ['The Conformist (1970)', 'Malcolm & Marie (2021)', 'Citizen Kane (1941)', 'La Dolce vita (1960)', 
'8 1/2 (1963)', 'Cold War (2018)', 'Birdman (2014)', 'Mulholland Drive (2001)', 'Stalker (1979)', 'Paris, Texas (1984)',
'La grande Belezza (2013)', 'Ya no estoy Aquí (2019)'];

song = ["Babe I'm Gonna Leave You by Led Zeppelin", 'White Ferrari by Frank Ocean', 'Hotel Room by Richard Hawley', 'Born Under a Bad Sign by Jimi Hendrix',
'The morning by The Weeknd', 'Getting Older by Billie Eillish', 'Praise God by Kanye West', 'Maybe, Maybe, Maybe by Bobby Oroza'];

book = ['Candide by Voltaire', 'Norwegian Wood by Haruki Murakami', 'The Invention of Morel by Adolfo Bioy Casares', 'Ficciones by Jorge Luis Borges', 
'Big Sur by Jack Kerouac', 'Ensayo sobre la Ceguera by José Saramago']

function getRandomElement(list) {
    let length = list.length();
    let randomNumber = Math.floor(Math.random()) * length;
    return list[randomNumber];
};

finalMessage = `Ok, so today your're going to watch ${getRandomElement(movie)}, I reccommend you reading ${getRandomElement(book)} and pairing 
it putting it all together by listening to ${getRandomElement(song)}. What do you think? let us know in the comments.`;

console.log(finalMessage);

