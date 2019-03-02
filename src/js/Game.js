import Character from './Domain';

export default class Game {
  start() {
    this.error = 'anti error';
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

export { GameSavingData, readGameSaving, writeGameSaving };
