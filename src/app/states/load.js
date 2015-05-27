export class Load {
    constructor(_game){
        Phaser.State.call(this, _game);
        _game.state.add("load", this, !1);
        this.game = _game;
    }
    loadingLabel () {
        //Here we add a label to let the user know we are loading everything
        //This is the "Loading" phrase in pixel art
        //You can just as easily change it for your own art :)
        this.loading = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 20, 'loading');
        this.loading.anchor.setTo(0.5, 0.5);
        //This is the bright blue bar that is hidden by the dark bar
        this.barBg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 40, 'load_progress_bar');
        this.barBg.anchor.setTo(0.5, 0.5);
        //This bar will get cropped by the setPreloadSprite function as the game loads!
        this.bar = this.game.add.sprite(this.game.world.centerX - 192, this.game.world.centerY + 40, 'load_progress_bar_dark');
        this.bar.anchor.setTo(0, 0.5);
        this.game.load.setPreloadSprite(this.bar);
    }
    preload () {
        // Loading th image
        console.log('load.preload');
        this.loadingLabel();
        // Load all assets
        this.game.load.image('player', 'assets/player.png');
        this.game.load.image('target', 'assets/target.png');
        this.game.load.image('wall', 'assets/wall.png');
        this.game.load.image('floor', 'assets/floor.png');
        this.game.load.image('hot', 'assets/hqReg.jpg');

        this.game.load.image('menu_title', 'assets/menu_game_title.png');
        this.game.load.image('menu_button1', 'assets/menu_button.png');
        this.game.load.image('menu_button2', 'assets/menu_button2.png');
        this.game.load.image('menu_button3', 'assets/menu_button3.png');
    }
    create () {
        console.log('load.create');
        // Start the load  
        this.game.state.start('menu');
    }
}