class Player {
    constructor(playerName) {
      this.name = playerName;
      this.prize = 0;
      
    }
  }

  export const player = (playerName) =>{
      return new Player(playerName);
  }