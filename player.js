class Player{
    constructor(){
      this.name = null;
      this.rank = 0;
      this.index = null;
      this.distance = 0;
    }
getPlayerCount(){
  var plrcntref = database.ref("playerCount");
  plrcntref.on("value", function(data){
    playercount = data.val();
  })
 }
 updatePlayerCount(count){
  var playercountref = database.ref("/");
  playercountref.update({
      playerCount : count
  });
 }
 updatePlayerInfo(){
 var playerNumber = "players/player" + this.index;
  var playerREF = database.ref(playerNumber);
   playerREF.set({
       playername : this.name,
       distance : this.distance
   });
 }
 static getallPlayersInfo(){
   var allplayerref = database.ref("players");
   allplayerref.on("value", (data)=> {
     allplayers = data.val();
   })
 }
 getPos(){
    var positionREF = database.ref("pos");
    positionREF.on("value",(data)=>{
      this.rank = data.val();
    })
 }
 updatePos(rank){
 var updateposREF = database.ref("/");
 updateposREF.update({
   pos : rank
 })
 }
}