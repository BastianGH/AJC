export type Film = {
  titre: string;
  year: number;
  genre: string[];
  img: string;
  recap: string;
  realisateur: { nom: string; prenom: string };
  duree: number;
};

export const movies: Film[] = [
  {
    titre: 'The Shawshank Redemption',
    year: 1994,
    realisateur: {
      nom: 'Darabont',
      prenom: 'Frank',
    },
    genre: ['Drama'],
    img: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_UX45_CR0,0,45,67_AL_.jpg',
    recap:
      'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
    duree: 122,
  },
  {
    titre: 'The Godfather',
    year: 1972,
    realisateur: {
      nom: 'Coppola',
      prenom: 'Francis Ford',
    },
    genre: ['Crime', 'Drama'],
    img: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg',
    recap:
      'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger',
    duree: 175,
  },
  {
    titre: 'The Dark Knight',
    year: 2008,
    realisateur: {
      nom: 'Nolan',
      prenom: 'Christopher',
    },
    genre: ['Action', 'Crime', 'Drama'],
    img: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg',
    recap:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    duree: 152,
  },
  {
    titre: 'The Godfather Part II',
    year: 1974,
    realisateur: {
      nom: 'Coppola',
      prenom: 'Francis Ford',
    },
    genre: ['Crime', 'Drama'],
    img: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg',
    recap:
      'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    duree: 202,
  },
  {
    titre: '12 Angry Men',
    year: 1957,
    realisateur: {
      nom: 'Lumet',
      prenom: 'Sidney',
    },
    genre: ['Crime', 'Drama'],
    img: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg',
    recap:
      'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.',
    duree: 96,
  },
  {
    titre: "Schindler's List",
    year: 1993,
    realisateur: {
      nom: 'Spielberg',
      prenom: 'Steven',
    },
    genre: ['Biography', 'Drama', 'History'],
    img: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg',
    recap:
      'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    duree: 195,
  },
  {
    titre: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    realisateur: {
      nom: 'Jackson',
      prenom: 'Peter',
    },
    genre: ['Action', 'Adventure', 'Drama'],
    img: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg',
    recap:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    duree: 201,
  },
  {
    titre: 'Pulp Fiction',
    year: 1994,
    realisateur: {
      nom: 'Tarantino',
      prenom: 'Quentin',
    },
    genre: ['Crime', 'Drama'],
    img: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg',
    recap:
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    duree: 154,
  },
  {
    titre: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    realisateur: {
      nom: 'Jackson',
      prenom: 'Peter',
    },
    genre: ['Action', 'Adventure', 'Drama'],
    img: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY67_CR0,0,45,67_AL_.jpg',
    recap:
      'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    duree: 178,
  },
  {
    titre: 'The Good, the Bad and the Ugly',
    year: 1966,
    realisateur: {
      nom: 'Leone',
      prenom: 'Sergio',
    },
    genre: ['Adventure', 'Western'],
    img: 'https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg',
    recap:
      'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
    duree: 178,
  },
  {
    titre: 'Forrest Gump',
    year: 1994,
    realisateur: {
      nom: 'Zemeckis',
      prenom: 'Robert',
    },
    genre: ['Drama', 'Romance'],
    img: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg',
    recap:
      'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
    duree: 142,
  },
  {
    titre: 'Fight Club',
    year: 1999,
    realisateur: {
      nom: 'Fincher',
      prenom: 'David',
    },
    genre: ['Drama'],
    img: 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UY67_CR0,0,45,67_AL_.jpg',
    recap:
      'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    duree: 139,
  },
  {
    titre: 'The Lord of the Rings: The Two Towers',
    year: 2002,
    realisateur: {
      nom: 'Jackson',
      prenom: 'Peter',
    },
    genre: ['Action', 'Adventure', 'Drama'],
    img: 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg',
    recap:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    duree: 179,
  },
  {
    titre: 'Inception',
    year: 2010,
    realisateur: {
      nom: 'Nolan',
      prenom: 'Christopher',
    },
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg',
    recap:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    duree: 148,
  },
  {
    titre: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
    realisateur: {
      nom: 'Kershner',
      prenom: 'Irvin',
    },
    img: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg',
    genre: ['Action', 'Adventure', 'Fantasy'],
    recap:
      'After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.',
    duree: 124,
  },
  {
    titre: 'The Matrix',
    year: 1999,
    realisateur: {
      nom: 'Wachowski',
      prenom: 'Lana',
    },
    img: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg',

    genre: ['Action', 'Sci-Fi'],
    recap:
      'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
    duree: 136,
  },
  {
    titre: 'Goodfellas',
    year: 1990,
    realisateur: {
      nom: 'Scorsese',
      prenom: 'Martin',
    },
    img: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg',

    genre: ['Biography', 'Crime', 'Drama'],
    recap:
      'The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.',
    duree: 145,
  },
  {
    titre: "One Flew Over the Cuckoo's Nest",
    year: 1975,
    realisateur: {
      nom: 'Forman',
      prenom: 'Milos',
    },
    img: 'https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg',

    genre: ['Drama'],
    recap:
      'In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.',
    duree: 133,
  },
  {
    titre: 'Se7en',
    year: 1995,
    realisateur: {
      nom: 'Fincher',
      prenom: 'David',
    },
    img: 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg',

    genre: ['Crime', 'Drama', 'Mystery'],
    recap:
      'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
    duree: 127,
  },
  {
    titre: "It's a Wonderful Life",
    year: 1946,
    realisateur: {
      nom: 'Capra',
      prenom: 'Frank',
    },
    img: 'https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UY67_CR0,0,45,67_AL_.jpg',

    genre: ['Drama', 'Family', 'Fantasy'],
    recap:
      'An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.',
    duree: 130,
  },
  {
    titre: 'Seven Samurai',
    year: 1954,
    realisateur: {
      nom: 'Kurosawa',
      prenom: 'Akira',
    },
    img: 'https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UY67_CR1,0,45,67_AL_.jpg',

    genre: ['Action', 'Drama'],
    recap:
      'Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him.',
    duree: 207,
  },
  {
    titre: 'The Silence of the Lambs',
    year: 1991,
    realisateur: {
      nom: 'Demme',
      prenom: 'Jonathan',
    },
    img: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg',

    genre: ['Crime', 'Drama', 'Thriller'],
    recap:
      'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
    duree: 118,
  },
  {
    titre: 'Saving Private Ryan',
    year: 1998,
    realisateur: {
      nom: 'Spielberg',
      prenom: 'Steven',
    },
    img: 'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY67_CR0,0,45,67_AL_.jpg',

    genre: ['Drama', 'War'],
    recap:
      'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
    duree: 169,
  },
  {
    titre: 'City of God',
    year: 2002,
    realisateur: {
      nom: 'Meirelles',
      prenom: 'Fernando',
    },
    img: 'https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg',

    genre: ['Crime', 'Drama'],
    recap:
      "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
    duree: 130,
  },
  {
    titre: 'Interstellar',
    year: 2014,
    realisateur: {
      nom: 'Nolan',
      prenom: 'Christopher',
    },
    img: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',

    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    recap:
      'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    duree: 169,
  },
];
