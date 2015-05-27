export class End {
    constructor(_game){
        Phaser.State.call(this, _game);
        _game.state.add("end", this, !1);
        this.game = _game;
    }
    preload () {
        // Loading th image
        console.log('end.preload');
    }
    create () {
        console.log('end.create');
        this.game.add.text(16, 16, 'end game', { fontSize: '32px', fill: '#fff' });
        this.game.add.button(this.game.world.centerX, this.game.world.centerY - 70, 'menu_button1', function () {
            this.game.state.start('play');
        });
        this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'menu_button2', function () {
            this.game.state.start('menu');
        });
    }
}