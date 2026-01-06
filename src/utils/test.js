// Logical OR assignment operator (||=)
const giveKey = () =>
  // perform randon computations
  'somekey'

let userDetails = {name: 'chika', age: 5, room: 10, key: ''}
userDetails.key ||= giveKey()
console.log(userDetails.key)
// output : somekey

// Logical AND assignment operator (&&=)
// x &&= y
const deleteKey = () =>
  // perform randon computations
  ' '

let userDetails = {name: 'chika', age: 5, room: 10, key: '990000'}
userDetails.key &&= deleteKey()
console.log(userDetails.key)

// output : ""

// Logical nullish assignment operator (??=)

const getKey = () =>
  // perform randon computations
  'somekey'

let userDetails = {name: 'chika', age: 5, room: 10}
userDetails.key ??= getKey()
console.log(userDetails.key)

// output : "somekey"

// String.replaceAll
const str = 'Linda is a self-taught developer.Linda will rule the world'
let newStr = str.replace('Linda', 'Micheal')
// output: Micheal is a self-taught developer.Linda will rule the world
let newStr = str.replaceAll('Linda', 'Micheal')
// output: Micheal is a self-taught developer.Micheal will rule the world



// Promise.any
const promise1 = new Promise((resolve) => setTimeout((resolve) => resolve, 300, 'faster');
const promise2 = new Promise((reject) => setTimeout( (reject) =>reject, 100,"fastest")
const promise3 = new Promise((resolve) => setTimeout( (resolve) => resolve,700,'fast');
const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value)=>console.log(value));

//Output: faster

// Array.prototype.pop()
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// expected output: "tomato"
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"
plants.pop();
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]






var id = 'GLOBAL';
var obj = {
  id: 'OBJ',
  a: function(){
    console.log(this.id);
  },
  b: () => {
    console.log(this.id);
  }
};
obj.a();    // 'OBJ'
obj.b();    // 'GLOBAL'





var id = 'Global';
// 箭头函数定义在全局作用域
let fun1 = () => {
    console.log(this.id)
};
fun1();     // 'Global'
// this的指向不会改变，永远指向Window对象
fun1.call({id: 'Obj'});     // 'Global'
fun1.apply({id: 'Obj'});    // 'Global'
fun1.bind({id: 'Obj'})();   // 'Global'









var id = 'Global';
function fun1() {
    // setTimeout中使用普通函数
    setTimeout(function(){
        console.log(this.id);
    }, 2000);
}
function fun2() {
    // setTimeout中使用箭头函数
    setTimeout(() => {
        console.log(this.id);
    }, 2000)
}
fun1.call({id: 'Obj'});     // 'Global'
fun2.call({id: 'Obj'});     // 'Obj'




function objectFactory() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  // 判断参数是否是一个函数
  if (typeof constructor !== "function") {
    console.error("type error");
    return;
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(constructor.prototype);
  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments);
  // 判断返回对象
  let flag = result && (typeof result === "object" || typeof result === "function");
  // 判断返回结果
  return flag ? result : newObject;
}
// 使用方法
// objectFactory(构造函数, 初始化参数);


function unique(arr) {
  var array = arr;
  var len = array.length;

  array.sort(function (a, b) {
    //排序后更加方便去重
    return a - b;
  })

  function loop(index) {
    if (index >= 1) {
      if (array[index] === array[index - 1]) {
        array.splice(index, 1);
      }
      loop(index - 1); //递归loop，然后数组去重
    }
  }

  loop(len - 1);
  return array;
}

const arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  15,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {}
];


console.log(unique(arr))


function add (...args) {
    //求和
    return args.reduce((a, b) => a + b)
}

function currying (fn) {
    let args = []
    return function temp (...newArgs) {
        if (newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ]
            return temp
        } else {
            let val = fn.apply(this, args)
            args = [] //保证再次调用时清空
            return val
        }
    }
}

let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15


const flatten = (arr) =>
  Array.from(new Set(arr.flat(Infinity)));

let arr = [1, [5, 2, 3], 4, [10, [13, 21, 2]]];
console.log(flatten(arr));

function* printLog(array) {
  let nextIndex = 0;
  while (nextIndex < array.length) {
    // console.log(array[nextIndex++], nextIndex);
    yield array[nextIndex++];
  }
  return 5;
}

let gen = printLog([3, 4]);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


let food = {
  allFood: {
    fruit: ["apple", "orange"],
    vegetable: ["cabbage", "potato", "tomato"],
    snacks: ["cookie", "candy"]
  }
};

food[Symbol.iterator] = function* () {
  let afood = this.allFood;
  let keys = Reflect.ownKeys(afood);
  let values = [];
  while (true) {
    if (!values.length) {
      if (keys.length) {
        values = afood[keys[0]];
        console.debug(values)
        keys.shift();
        yield values.shift();
      } else {
        return false;
      }
    } else {
      yield values.shift();
    }
  }
};

for (let f of food) {
  console.log(f);
}


//
var obj = {
    a:1,
    b:2,
    c:3
};

//方法一：
obj[Symbol.iterator] = function(){
	var keys = Object.keys(this);
	var count = 0;
	return {
		next(){
			if(count<keys.length){
				return {value: obj[keys[count++]],done:false};
			}else{
				return {value:undefined,done:true};
			}
		}
	}
};

for(var k of obj){
	console.log(k);
}

//方法二：
obj[Symbol.iterator] = function*(){
    var keys = Object.keys(obj);
    for(var k of keys){
        yield [k,obj[k]]
    }
};

for(var [k,v] of obj){
    console.log(k,v);
}

/**
 * @type {number}
 */
let number
for (var i = 0; i < 5; i++) {
  number = i
  setTimeout(() => {
    console.log(number);
  }, 1000)
} // 5 times 4

for (var i = 0; i < 5; i++) {
  // number = i
  setTimeout(() => {
    console.log(i);
  }, 1000)
} // 5(5)

for (let i = 0; i < 5; i++) {
  // number = i
  setTimeout(() => {
    console.log(i);
  }, 1000)
} // 0,1,2,3,4

for (var i = 1; i <= 5; i++) {
  ;(function(j) {
    setTimeout(function timer() { console.log(j) }, j * 1000)
  })(i)
}

for (var i = 0; i <= 5; i++) {
  (function (j) {
    setTimeout(()=> {
      console.log(j);
    }, j * 1000);
  })(i);
}


function euclideanGCDRecursive(first, second) {
  /*
    Calculates GCD of two numbers using Euclidean Recursive Algorithm
    :param first: First number
    :param second: Second number
    :return: GCD of the numbers
    */
  if (second === 0) {
    return first;
  } else {
    return euclideanGCDRecursive(second, first % second);
  }
}
// console.log(euclideanGCDRecursive(56, 64));

// (64, 57)
// (57, 7)
// (7, 1)
// (1, 1)
// console.log(56%64)
// console.log(64%56)
// console.log(3%10)
// console.log(64%57)

function euclideanGCDIterative(first, second) {
  /*
    Calculates GCD of two numbers using Euclidean Iterative Algorithm
    :param first: First number
    :param second: Second number
    :return: GCD of the numbers
    */
  while (second !== 0) {
    const temp = second;
    second = first % second;
    first = temp;
  }
  return first;
}


const onWatch = (obj, setBind, getLogger) => {
  const handler = {
    get(target, property, receiver) {
      // getLogger(target, property, receiver);
      if (property === "secret") {
        return `${target.secret.substr(0, 4)} ... shhhh!`;
      }
      // if (property === "a") {
      //   return 10;
      // }
      console.log(`监听到属性 ${property} 为: ${target[property]}`);
      getLogger(target, property, receiver);
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      setBind(value, property);
      return Reflect.set(target, property, value);
    }
  };
  return new Proxy(obj, handler);
};

let obj = {
  a: 1,
  b: 5,
  eyeCount: 4,
  secret: "easily scared",
};
let p = onWatch(
  obj,
  (target, property, receiver) => {
    // if (property === "secret") {
    //   return `${target.secret.substr(0, 4)} ... shhhh!`;
    // }
    // if (property === "a") {
    //   return 10;
    // }
    console.log(`监听到属性${property}改变为${target}`);
  },
  (target, property) => {
    console.log(`'${property}' = ${target[property]}`);
  }
);
p.a = 8; // 监听到属性a改变
// p.b; // 'a' = 2
console.log(p.a);
console.log(p.b);
console.log(p.secret);
console.log(p.eyeCount);
console.log(p);


function solution(A) {
    var length = A.length;
    var sum = ((length + 1) /2) * (length + 2);
    var sumMinusMissing = 0;
    for (i = 0; i < length; i++) {
        sumMinusMissing += A[i];
    }
    return sum - sumMinusMissing;
}