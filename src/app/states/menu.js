var buttons = {
    pos: [-50, 50, 150],
    callbacks: ['playState', 'playState', 'playState'],
    draw: function () {
        this.button1 = this.addButton(1, this.playState);
        this.button1.anchor.setTo(0.5, 0.5);

        this.button2 = this.addButton(2, this.playState);
        this.button2.anchor.setTo(0.5, 0.5);

        this.button3 = this.addButton(3, this.playState);
        this.button3.anchor.setTo(0.5, 0.5);
    },

    addButton: function (position, func) {
        return game.add.button(game.world.centerX, game.world.centerY + this.pos[position - 1], 'menu_button' + position, func);
    },

    playState: function () {
        console.log('play game');
        game.state.start('play');
    }
};

export class Menu {
    constructor(_game){
        Phaser.State.call(this, _game);
        _game.state.add("menu", this, !1);
        this.game = _game;
    }
    preload () {
        // Loading th image
        console.log('menu.preload');
        this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        this.game.load.image('star', 'assets/star.png');
    }
    create () {
        console.log('menu.create');
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.gameTitle = this.game.add.image(this.game.world.centerX, this.game.world.centerY - 200, 'menu_title');
        this.gameTitle.anchor.setTo(0.5, 0.5);

        buttons.draw();
    }
}