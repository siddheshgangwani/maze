scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass1, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestClosed)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleBlueCrystal)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
mySprite.ay = 150
