http://www.html5gamedevs.com/topic/6745-using-plugins/
Hi, I hesitated to create the same post couple of days ago. I was also sad that there isn't so much doc about plugins in Phaser.
 
I was trying to use the Juicy plugin from the Phaser plugin repository. (https://github.com/p...ee/master/Juicy)
 
So i did like this :
 
var GameState = {
    create: function(){
      // rest of the code
      this.juicy = this.game.plugins.add(new Phaser.Plugin.Juicy(this));
    },

    gameOver: function(bomb){
     // when I need to call my plugin
      this.juicy.shake();
    }
};
 
PS: Pro tip : Don't forget to add the plugin script <script src="Juicy.js"></script>
 
EDIT : Pro tip 2 : of course the use of this depend if you're using the OOP notation and game states and all that stuff. Try to play with the this value and console.log()
 
Pro tip 3 : I'm not a pro ;)