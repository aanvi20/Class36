class Form{
  constructor(){

  }
  display(){
      var title = createElement('h1');
      title.html("Car Racing Game");
      title.position(200, 20); 

      var input = createInput('Name');
      input.position (250, 250);

      var button = createButton('Play');
      button.position (250, 300);

      var greeting = createElement('h3');
     
     button.mousePressed(function(){
       input.hide();
       button.hide();
       var name = input.value();
       playerCount+=1;
       player.update(name);
       player.updateCount(playerCount);

       greeting.html("Welcome " + name);
       greeting.position(250, 250);
     });
         
    
  }
}