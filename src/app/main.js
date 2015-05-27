/*****************************************************************************************************
* LOAD PLUGIN
*/
require('./plugin');
/*****************************************************************************************************
* START
*/
//window.game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv'); // 18x10
//var STATES = {};
/*****************************************************************************************************
* MENU
*/
//var Menu = require('./states/menu').Menu;
//STATES.menu = new Menu(game);
/*****************************************************************************************************
* PLAY STATE
*/
//var Play = require('./states/play').Play;
//STATES.menu = new Play(game);
/*****************************************************************************************************
* END STATE
*/
//var End = require('./states/end').End;
//STATES.end = new End(game);

"use strict";

window.onload = function() {
    var Game = require('./game').Game;
    var game = new Game('gameDiv', 960, 540);
    var STATES = {};
    /*****************************************************************************************************
    * BOOT STATE
    */
    var Boot = require('./states/boot').Boot;
    STATES.boot = new Boot(game);
    /*****************************************************************************************************
    * LOAD STATE
    */
    var Load = require('./states/load').Load;
    STATES.load = new Load(game);

    /*****************************************************************************************************
    * START
    */
    game.state.start('boot');
}