class Game{
    constructor(){
      
    }

    getState(){
        // ref () refers the column from a variable in database 
        var gameStateRef = database.ref('gameState');
        // on() creates a listener
        gameStateRef.on("value",
         function(data){
           gameState = data.val();
        });
    }

    update(state){
        // '/' means refer the main database
       database.ref('/').update({
                      gameState: state
       });
    }

    start(){
        if(gameState === 0){
           player = new Player();
           player.getCount();
           form = new Form();
           form.display();
        }
    }
}