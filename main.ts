namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e f f f f f e e e f f f f f f e 
f e f f f f e f f e f f f f e f 
f f e f f e f f f f e f f e f f 
f f f e e f f f f f f e e f f f 
f f f e e f f f f f f e e f f f 
f f e f f e f f f f e f f e f f 
f e f f f f e f f e f f f f e f 
e f f f f f f e e f f f f f f e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 f f f f f f 2 2 f f f f f f 2 
f 2 f f f f 2 f f 2 f f f f 2 f 
f f 2 f f 2 f f f f 2 f f 2 f f 
f f f 2 2 f f f f f f 2 2 f f f 
f f f 2 2 f f f f f f 2 2 f f f 
f f 2 f f 2 f f f f 2 f f 2 f f 
f 2 f f f f 2 f f 2 f f f f 2 f 
2 f f f f f f 2 2 f f f f f f 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
}
tiles.setTilemap(tiles.createTilemap(
            hex`1000100003030303030303030303030303030303030303030303030301010101010303030303030301010101030303030303030301010101030303030303030303030303030303030303030303030303030303030101010103030303030303030303030303030303010101010303030303030303030303030303030301010101030303030303030303030303030303030101010103030303030303030303030303030303030303030303030303030303010101010303030303030303010101010303030303030303010101010303030303030303010101010303030303030303030303030303030303030303030303030303030301010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 . . . 
. . . . 2 2 2 2 . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
. . . . 2 2 2 2 . . . . . . . . 
. . . . . . . . 2 2 2 2 . . . . 
. . . . . . . . . . . . 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 2 
. . . . . . . . 2 2 2 2 . . . . 
. . . . 2 2 2 2 . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
