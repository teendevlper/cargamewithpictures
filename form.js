class Form{
    constructor(){
        this.title = createElement('h1');
        this.inputBox = createInput("username");
        this.playerButton = createButton("Submit");
        this.greet = createElement("h3");
        this.resetbutton = createButton("reset");

    }
display(){
    
    this.title.html("Car Racing Game");
    this.title.position(200,130);

    
    this.inputBox.position(200,200);
   this.resetbutton.position(10,10);
    
    this.playerButton.position(displayWidth - 800 ,displayHeight - 250);

  this.resetbutton.mousePressed( () =>{
      game.updateGameState(0);
      player.updatePlayerCount(0);
      var delplayerREF = database.ref("players");
     delplayerREF.remove();
  })
    

   this.playerButton.mousePressed( () =>{
       this.inputBox.hide();
       this.playerButton.hide();
       player.name = this.inputBox.value();
       playercount = playercount + 1;
       player.index = playercount;
       player.updatePlayerInfo();   
       player.updatePlayerCount(playercount); 
       this.greet.html("Welcome " + player.name);
       this.greet.position(200,200);  

    })
   }
hide(){

    this.inputBox.hide();
    this.greet.hide();
    this.playerButton.hide();
}


}