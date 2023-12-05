"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const Point_ts_1 = require("../src/Point.ts");
const Rect_ts_1 = require("../src/Rect.ts");
let subject;
// no args constructor
subject = new Rect_ts_1.Rect();
assert_1.default.strictEqual(subject.x, 0);
assert_1.default.strictEqual(subject.y, 0);
assert_1.default.strictEqual(subject.width, 0);
assert_1.default.strictEqual(subject.height, 0);
// all args constructor
subject = new Rect_ts_1.Rect(1, 2, 3, 4);
assert_1.default.strictEqual(subject.x, 1);
assert_1.default.strictEqual(subject.y, 2);
assert_1.default.strictEqual(subject.width, 3);
assert_1.default.strictEqual(subject.height, 4);
// setters
assert_1.default.strictEqual(subject.setWidth(7), subject);
assert_1.default.strictEqual(subject.width, 7);
assert_1.default.strictEqual(subject.setHeight(8), subject);
assert_1.default.strictEqual(subject.height, 8);
assert_1.default.strictEqual(subject.setHeight(9), subject);
assert_1.default.strictEqual(subject.height, 9);
assert_1.default.strictEqual(subject.setLeft(17), subject);
assert_1.default.strictEqual(subject.left, 17);
subject.left = 16;
assert_1.default.strictEqual(subject.left, 16);
assert_1.default.strictEqual(subject.setRight(18), subject);
assert_1.default.strictEqual(subject.right, 18);
subject.right = 17;
assert_1.default.strictEqual(subject.right, 17);
assert_1.default.strictEqual(subject.setTop(19), subject);
assert_1.default.strictEqual(subject.top, 19);
subject.top = 18;
assert_1.default.strictEqual(subject.top, 18);
assert_1.default.strictEqual(subject.setBottom(11), subject);
assert_1.default.strictEqual(subject.bottom, 11);
subject.bottom = 10;
assert_1.default.strictEqual(subject.bottom, 10);
assert_1.default.strictEqual(subject.setCenterX(14), subject);
assert_1.default.strictEqual(subject.centerX, 14);
subject.centerX = 13;
assert_1.default.strictEqual(subject.centerX, 13);
subject.setCenterY(15);
assert_1.default.strictEqual(subject.centerY, 15);
subject.centerY = 14;
assert_1.default.strictEqual(subject.centerY, 14);
assert_1.default.strictEqual(subject.setCenter(new Point_ts_1.Point().setX(12).setY(13)), subject);
assert_1.default.strictEqual(subject.center.x, 12);
assert_1.default.strictEqual(subject.center.y, 13);
subject.center = new Point_ts_1.Point().setX(11).setY(12);
assert_1.default.strictEqual(subject.center.x, 11);
assert_1.default.strictEqual(subject.center.y, 12);
// metrics
subject = new Rect_ts_1.Rect().setX(0).setY(0).setWidth(1).setHeight(1);
assert_1.default.strictEqual(subject.right, 0);
assert_1.default.strictEqual(subject.bottom, 0);
subject = new Rect_ts_1.Rect().setX(0).setY(0).setWidth(2).setHeight(2);
assert_1.default.strictEqual(subject.right, 1);
assert_1.default.strictEqual(subject.bottom, 1);
subject = new Rect_ts_1.Rect().setX(0).setY(0).setWidth(3).setHeight(3);
assert_1.default.strictEqual(subject.right, 2);
assert_1.default.strictEqual(subject.bottom, 2);
subject = new Rect_ts_1.Rect().setX(0).setY(0).setWidth(4).setHeight(4);
assert_1.default.strictEqual(subject.right, 3);
assert_1.default.strictEqual(subject.bottom, 3);
subject.setRight(subject.right);
subject.setBottom(subject.bottom);
assert_1.default.strictEqual(subject.x, 0);
assert_1.default.strictEqual(subject.y, 0);
subject = new Rect_ts_1.Rect().setX(0).setY(0).setWidth(5).setHeight(5);
assert_1.default.strictEqual(subject.centerX, 2);
assert_1.default.strictEqual(subject.centerY, 2);
subject = new Rect_ts_1.Rect().setX(0).setY(0).setWidth(6).setHeight(6);
assert_1.default.strictEqual(subject.centerX, 3);
assert_1.default.strictEqual(subject.centerY, 3);
// union
const RECT1 = new Rect_ts_1.Rect().setX(10).setY(20).setWidth(30).setHeight(40);
const RECT2 = new Rect_ts_1.Rect().setX(50).setY(60).setWidth(70).setHeight(80);
subject = RECT1.makeUnion(RECT2);
assert_1.default.strictEqual(subject.left, RECT1.left);
assert_1.default.strictEqual(subject.top, RECT1.top);
assert_1.default.strictEqual(subject.right, RECT2.right);
assert_1.default.strictEqual(subject.bottom, RECT2.bottom);
//# sourceMappingURL=RectTest.js.map