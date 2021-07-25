# Vue响应式代码实现之defineProperties

```js
// 基于数组原型创建新的原型newArrProto，目的是不污染全局Array
let oldArrayProto = Array.prototype;
// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
let newArrayProto = Object.create(oldArrayProto);

// 使用 Array["push"] = function() {} 为原型添加方法
["push"].forEach((methodName) => {
newArrayProto[methodName] = function () {
oldArrayProto[methodName].call(this, ...arguments);
console.log("视图更新");
};
});

function defineReactive(target, key, value) {
// 再次调用 observer(),来检查当前属性是否嵌套对象
observer(value);
Object.defineProperty(target, key, {
get() {
return value;
},
set(newVal) {
// 监听 user.name = { num: 1 }; 方式创建的新对象
observer(newVal);
value = newVal;
console.log("视图更新");
},
});
}

function observer(target) {
// 判断是否为数组或者对象，不是则直接返回
if (typeof target !== "object" || target === null) {
return target;
}

// 使用 Array.isArray() 判断是否为数组
if (Array.isArray(target)) {
// 将隐式原型改变为具体更新视图能力的 newArrayProto
target.__proto__ = newArrayProto;
return;
}
// 将对象的属性都设置为响应式
for (let key in target) {
defineReactive(target, key, target[key]);
}
}

user = {
name: "zhangsan",
age: 18,
skills: {
java: true,
javascript: true,
},
nums: [1, 2, 3, 4],
};

observer(user);

// user.name = "lisi";
// user.skills.java = "false";

// user.name = { num: 1 };
// user.name.num = 2;
user.nums.push(1);

console.log(user);
/* 输出
{
name: [Getter/Setter],
age: [Getter/Setter],
skills: [Getter/Setter],
nums: [Getter/Setter]
}
*/

// 使用了 ES5 Getter/Setter 特性就会这样。因为 getter 是你自定义的函数，其中有可能会带有副作用，而 console.log 通常不应当干涉业务逻辑，所以浏览器默认不会直接调用 getter，需要你手动点一下明确让它触发 getter 才行
console.log(Object.assign({}, user.nums));
```