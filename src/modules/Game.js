import Answer from "./Answer.js";
class Game {
  constructor(tentatives, container) {
    const tabTentatives = [];

    for (let index = 0; index < tentatives; index++) {
      let ligne = new Answer(container);
      console.log(tentatives);
      tabTentatives.push(ligne);
    }
  }
}
export default Game;
