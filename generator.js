celebrities = [
    "Johnny Depp",
    "Arnold Schwarzenegger",
    "Emma Watson",
    "Robert Downey Jr.",
    "Chris Evans",
    "Leonardo DiCaprio",
    "Tom Cruise",
    "Brad Pitt",
    "Tom Hanks",
    "Will Smith",
    "Cameron Diaz",
    "Robert De Niro",
    "Al Pacino",
    "Natalie Portman",
    "Danny DeVito",
    "Orlando Bloom",
    "Angelina Jolie",
    "Adam Sandler",
    "Scarlett Johansson",
    "Anne Hathaway",
    "Keria Knightley",
    "Bradley Cooper",
    "Will Ferrell",
    "Nicolas Cage",
    "Keanu Reeves",
    "Samuel L. Jackson",
    "Steve Carell",
    "Bruce Willis",
    "Megan Fox",
    "Shia LaBeouf",
    "Vin Diesel",
    "Robin Williams"
]

characters = [
    "Sly Fox",
    "Kirby",
    "Cartman",
    "Link",
    "Geralt",
    "Master Chief",
    "Mr. Garrison",
    "Gandalf",
    "Frodo",
    "Aragorn",
    "Legolas",
    "Gimli",
    "Samus",
    "Yennefer",
    "Ciri",
    "Gollum",
    "Princess Peach",
    "Mario",
    "Luigi",
    "Sauron"
]

verbs = [
    "Met",
    "Fought",
    "Loved",
    "Killed",
    "Smacked",
    "Kissed",
    "Drove Over",
    "Licked",
    "Beat Up",
    "Smooched",
    "Embraced",
    "Destroyed"
]

places = [
    "Chili's",
    "Home Depot",
    "Narnia",
    "Middle Earth",
    "McDonald's",
    "Gas Station",
    "Parking Lot",
    "Top of the World",
    "Mt. Everest",
    "Azeroth",
    "IHOP",
    "Gielinor",
    "My House",
    "The Jersey Shore",
    "Beverly Hills",
    "The White House"
]

adjectives = [
    "Yellow",
    "Happy",
    "Sad",
    "Angry",
    "Sexy",
    "Hot",
    "Annoying",
    "Stupid",
    "Dumb",
    "Arrogant",
    "Beautiful",
    "Ugly",
    "Crazy",
    "Terrible",
    "Tortured",
    "Weird",
    "Orange",
    "Sick"
]


function get_word(array) {
    length = array.length
    index = Math.floor(Math.random() * length)
    return array[index]
}

function get_adlib() {
    string = `${get_word(celebrities)} ${get_word(verbs)} a ${get_word(adjectives)} ${get_word(characters)} at ${get_word(places)}.`
    document.getElementById("adlib").innerHTML = string
    // return string
}


console.log(get_adlib())
