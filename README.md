# Dolphin.js
[![varsion](https://img.shields.io/badge/varsion-0.0.1-blue.svg?style=flat-square)](VERSION) [![varsion](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat-square)](LICENSE)

ES6をサポートしていないブラウザでは動作しない。
デバッグ向けjsクラス

## Namespace
`Dolphin`

## Functions
```js
var baseArr = [1, 2, 3, 4, 5, 1, 8, 4, 2, 6];
var xxxxArr = [1, 2, 3, 4, 5, 1, 8, 4, 2, 10];

// 重複除去（ソートはしない）
var distinct = Dolphin.distinct(baseArr);
// [ 1, 2, 3, 4, 5, 8, 6 ]

// baseArr に 第２引数がすべて含まれている場合 true
var isContainsAll = Dolphin.containsAll(baseArr, [1,9]);
// false

// 比較
var diff = Dolphin.diff(baseArr, xxxxArr);
// {added:[10] ,removed:[6]}

Dolphin.sum(baseArr); // 36
Dolphin.max(baseArr); // 8
Dolphin.min(baseArr); // 1
Dolphin.avg(baseArr); // 3.6

// 除外したい値の配列
Dolphin.sumExclude(baseArr, [1,2]); // 30
Dolphin.maxExclude(baseArr, [8,6]); // 5
Dolphin.minExclude(baseArr, [1,2]); // 3
Dolphin.avgExclude(baseArr, [1,2,8]); // 4.4

// 重心
var points = [{x: 0, y: 1}, {x: 2, y: 3}, {x: -2,y: -6}];
var centor = Dolphin.centerOfGravity2d(points);
// 3d
var points3d = [{x: 0, y: 1, z: 3}, {x: 2, y: 3, z: 1}, {x: -2,y: -6, z: 5}];
var centor3d = Dolphin.centerOfGravity3d(points3d);
```
