class Form{
  constructor(){}

  display(){
      var title=createElement('h2','CAR RACING GAME')
      title.position(130,50)

      var input=createInput("NAME")
      input.position(130,160)

      var button=createButton("PLAY")
      button.position(230,250)

      var greeting=createElement('h3')

      button.mousePressed(function(){
          input.hide()
          button.hide()

          var name=input.value()
          playerCount+=1
          player.update(name)
          player.updateCount(playerCount)

          greeting.html("HELLO," + name)
          greeting.position(130,160)
      })
      
  }

}