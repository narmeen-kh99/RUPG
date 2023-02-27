const apiManager = new APIManager();
const render = new Renderer();

$("#load-data").on("click", () => {
  apiManager.loadData();
});

$("#display").on("click", () => {
  //let dataUser=apiManager.loadData().then;
  empttyData();
  const data = apiManager.getData();
  render.mainUserRender(data);
  render.pokemonRender(data);
  render.textRender(data);
  render.frindsRender(data);
  render.qouteRender(data);
});
empttyData = function () {
  $(".user-container").empty();
  $(".quote-container").empty();
  $(".pokemon-container").empty();
  $(".meat-container").empty();
  $(".friends-container").empty();
};
