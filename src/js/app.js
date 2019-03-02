import Game, {
  GameSavingData, readGameSaving as loadGame,
  writeGameSaving as saveGame
} from './Game';

console.log('Test');

const game = new Game();
game.start();
