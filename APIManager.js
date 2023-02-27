//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
  }
  getData() {
    return this.data;
  }
  buildNewUser(users) {
    return [...users.results];
  }

  getUser() {
    return $.get("https://randomuser.me/api/?results=7").then(
      this.buildNewUser
    );
  }
  buildNewPokemon(pokemon) {
    let newPokemon = {
      pokemonName: pokemon.forms[0].name,
      pokemonPicture: pokemon.sprites.front_default,
    };
    return newPokemon;
  }
  buildNewText(text) {
    let newText = text[0];
    return newText;
  }
  buildNewQuote(Quote) {
    let newQuote = Quote.quote;
    return newQuote;
  }
  getpokemon() {
    const number = parseInt(Math.random() * 819) + 1;
    return $.get(`https://pokeapi.co/api/v2/pokemon/${number}`).then(
      this.buildNewPokemon
    );
  }
  getText() {
    return $.get(`https://baconipsum.com/api/?type=meat-and-filler`).then(
      this.buildNewText
    );
  }
  getQoute() {
    return $.get("https://api.kanye.rest/").then(this.buildNewQuote);
  }
  loadData() {
    let userP = this.getUser();
    let pokemonP = this.getpokemon();
    let textP = this.getText();
    let quoteP = this.getQoute();
    /*  Promise.all([userP, pokemonP, textP]).then((result) => {
      this.data = {
        users: result[0],
        pokemon: result[1],
        text: result[2],
      };
    });*/
    Promise.all([userP, pokemonP, textP, quoteP]).then((result) => {
      this.data = {
        users: result[0],
        pokemon: result[1],
        text: result[2],
        quote: result[3],
      };
    });
  }
}
