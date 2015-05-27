export class Play {
    constructor(_game){
        Phaser.State.call(this, _game);
        _game.state.add("play", this, !1);
        this.game = _game;
    }
    preload () {
        // Loading th image
        console.log('play.preload');
    }
    create () {
        console.log('play.create');
        var game = this.game;
        // The player and its settings
        this.player = game.add.sprite(32, game.world.height - 450, 'dude');

        //  We need to enable physics on the player
        game.physics.arcade.enable(this.player);

        //  Player physics properties. Give the little guy a slight bounce.
        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 300;
        this.player.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        this.player.animations.add('left', [0, 1, 2, 3], 10, true);
        this.player.animations.add('right', [5, 6, 7, 8], 10, true);

        this.cursors = game.input.keyboard.createCursorKeys();

        this.stars = game.add.group();
        this.stars.enableBody = true;

        //  Here we'll create 12 of them evenly spaced apart
        for (var i = 0; i < 12; i++)
        {
            //  Create a star inside of the 'stars' group
            var star = this.stars.create(i * 70, 0, 'star');

            //  Let gravity do its thing
            star.body.gravity.y = 6;

            //  This just gives each star a slightly random bounce value
            star.body.bounce.y = 0.7 + Math.random() * 0.2;
        }
    }
    update () {
        console.log('play.update');
        //  Collide the player and the stars with the platforms
        this.game.physics.arcade.overlap(this.player, this.stars, this.endGame, null, this);
        if (this.cursors.left.isDown)
        {
            //  Move to the left
            this.player.body.velocity.x = -150;

            this.player.animations.play('left');
        }
        else if (this.cursors.right.isDown)
        {
            //  Move to the right
            this.player.body.velocity.x = 150;

            this.player.animations.play('right');
        }
        else
        {
            //  Stand still
            this.player.animations.stop();

            this.player.frame = 4;
        }

        //  Allow the player to jump if they are touching the ground.
        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.body.velocity.y = -350;
        }
    }
    endGame (player, star) {
        player.kill();
        this.game.state.start('end');
    }
}