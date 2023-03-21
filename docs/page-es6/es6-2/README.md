## es6+ 相关知识点

### 1.0 字符串填充
>str.padStart(),str.padEnd()方法可以使得字符串达到固定长度，接受两个参数
```js
let str = "reggie"
console.log(str.padStart(10,'x')) // reggiexxxx
console.log(str.padEnd(10,'x')) // xxxxreggie
console.log(str.padStart(5,'x')) // reggie
console.log(str.padStart(5,'x')) // reggie
```
用处：比如月份填充
```js
let list = []
for(let i = 1; i<13; i++){
    list.push((i+'').padStart(2,'0'))
}
```



