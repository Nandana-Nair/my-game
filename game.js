class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    start(){
      background(strikeEagles);
      if(gameState === 0){
       
        player = new Player();
  
        player.getCount();
  
        form = new Form()
        
        form.display();
      }
    
  
      
       
    }
  
    play(){
      
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
       
        background(forest);
       
        
        var index = 0;
  
        
        
        
  
        for(var plr in allPlayers){
          
          index = index + 1 ;
  
        
          
        
         
  
          if (index === player.index){
            fill("grey");
            ellipse(x,y,60,60);
            fill("white");
            textSize(15);
            text(allPlayers[plr].name,x,y+60);
            
  
          }
         
          
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      if(player.distance>3650){
      gameState=2;
  
      }
      drawSprites();
    }
  
    end(){
   console.log("game ended")
  
    }
  }
  