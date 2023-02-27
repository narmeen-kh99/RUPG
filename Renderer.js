class Renderer {
  mainUserRender = function (data) {
    let source = $("#user-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({
      pictureUser: data.users[0].picture.medium,
      userFirstName: data.users[0].name.first,
      userlastName: data.users[0].name.last,
      city: data.users[0].location.country,
      country: data.users[0].location.city,
    });

    $(".user-container").append(newHTML);
  };
  frindsRender = function (data) {
    let source = $("#friends-template").html();
    const template = Handlebars.compile(source);
    const friendUSER = {
      dataUs: [...data.users],
    };
    let newHTML = template(friendUSER);
    $(".friends-container").append(newHTML);
  };
  pokemonRender = function (data) {
    const source = $("#pokemon-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({
      pokemonPicture: data.pokemon.pokemonPicture,
      pokemonName: data.pokemon.pokemonName,
    });
    $(".pokemon-container").append(newHTML);
  };

  textRender = function (data) {
    const source = $("#text-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({ about: data.text });
    $(".meat-container").append(newHTML);
  };
  qouteRender = function (data) {
    const source = $("#qoute-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({ userQoute: data.quote });
    $(".quote-container").append(newHTML);
  };
}
