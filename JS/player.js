class Player{
    constructor(){
      
    }

    getCount(){
        // ref () refers the column from a variable in database 
        var playerCountRef = database.ref('playerCount');
        // on() creates a listener
        playerCountRef.on("value",
         function(data){
           playerCount = data.val();
        });
    }

    updateCount(count){
        // '/' means refer the main database
       database.ref('/').update({
                     playerCount: count
       });
    }

    update(name){
         var playerIndex = "Player" + playerCount;
         database.ref(playerIndex).set({name: name});
         
    }
}