"use strict";
/**
* Game class
*
* @class Game
* @namespace LR
*/
export class Game extends Phaser.Game {
    constructor(_containerId,_width, _height) {
        var renderType = Phaser.AUTO;

        var appVersion = window.navigator.appVersion.toLowerCase();
        if( appVersion.indexOf("android") >= 0 || appVersion.indexOf("ios") >= 0)
            renderType = Phaser.CANVAS;

        if (_width && _height) {
            super(_width, _height, renderType, _containerId);
        } else {
            super(640, 360, renderType, _containerId);
        }

        /**
        * The Input Manager of LadybugRiders Engine
        * 
        * @property inputManager
        * @type {Phaser.Plugin.InputManager}
        */
        this.inputManager = null;

        /**
        * The PlayerSave of LadybugRiders Engine
        * 
        * @property playerSave
        * @type {Phaser.Plugin.PlayerSave}
        */
        this.playerSave = null;

        /**
        * The CollisionManager of LadybugRiders Engine
        * 
        * @property collisionManager
        * @type {CollisionManager}
        */
        this.collisionManager = null;
    }
}