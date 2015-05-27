export class Boot {
    constructor(_game){
        Phaser.State.call(this, _game);
        _game.state.add("boot", this, !1);
        this.game = _game;
    }
    preload () {
        // Loading th image
        console.log('boot.preload 23');
        this.game.load.image('loading', 'assets/loading.png');
        this.game.load.image('load_progress_bar', 'assets/progress_bar_bg.png');
        this.game.load.image('load_progress_bar_dark', 'assets/progress_bar_fg.png');
    }
    create () {
        console.log('boot.create');
        // Start the load  
        this.game.state.start('load');
    }
}