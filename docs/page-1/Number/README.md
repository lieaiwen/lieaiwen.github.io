## Number 对象
Number 对象是原始数值的包装对象。 <br>
Number 创建方式 new Number()。 <br>
var num = new Number(value); <br>
注意： 如果一个参数值不能转换为一个数字将返回 NaN (非数字值)。 <br>
主要Number 对象属性<br>
prototype	允许您可以向对象添加属性和方法。
```
Number.prototype.myMet=function(){
	this.myProp=this.valueOf()/2;
}
function myFunction(){
	var d = new Number(55);
	d.myMet();
	var x=document.getElementById("demo");
	x.innerHTML=d.myProp;
}
```
1.0 Number.isFinite() 方法  ie12才支持<br>

isFinite() 函数用于检测指定参数是否为无穷大。 <br>

提示： 如果 number 是 NaN（非数字），或者是正、负无穷大的数，则返回 false。 <br>

Number.isFinite() 与全局的 isFinite() 函数不同，全局的 isFinite() 会先把检测值转换为 Number ，然后在检测。 <br>

Number.isFinite() 不会将检测值转换为 Number对象，如果检测值不是 Number 类型，则返回 false。 
```
Number.isFinite(123) //true
Number.isFinite(-1.23) //true
Number.isFinite(5-2) //true
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite('2005/12/12') //false
Number.isFinite(Infinity) //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false
```
2.0 toFixed(x)	把数字转换为字符串，结果的小数点后有指定位数的数字。
	toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
```
把数字转换为字符串，结果的小数点后有指定位数的数字：
var num = 5.56789;
var n=num.toFixed(2); // 5.57 

将一个数字，不留任何小数：
var num = 5.56789;
var n=num.toFixed(); // 6

转换一个比指定数小的小数点后的位数的数字：
var num = 5.56789;
var n=num.toFixed(7); // 5.5678900

```

3.0  toPrecision(x)	把数字格式化为指定的长度。
```
var num = new Number(13.3714);
var a = num.toPrecision(); // 13.3714
var b = num.toPrecision(2); // 13
var c = num.toPrecision(3); // 13.4
var d = num.toPrecision(10); // 13.37140000
```
4.0  toString()	把数字转换为字符串，使用指定的基数。
```
数字的字符串表示。例如，当 radix 为 2 时，NumberObject 会被转换为二进制值表示的字符串。

var num = 15;
var a = num.toString(); // 15
var b = num.toString(2); // 1111
var c = num.toString(8); // 17
var d = num.toString(16); // f
```

5.0  valueOf()	返回一个 Number 对象的基本数字值。
```
返回一个 Number 对象的基本数字值：

var num = 15;
var n = num.valueOf(); // 15
```

6.0  （es6新增的）Number.isInteger(): 用来判断给定的参数是否为整数。
```
Number.isInteger() 在参数是整数时返回 true。
Number.isInteger(10);        // 返回 true
Number.isInteger(10.5);      // 返回 false
```

7.0  （es6新增的）Number.isSafeInteger(): 判断传入的参数值是否是一个"安全整数"。

```
Number.isSafeInteger()判断传入的参数值是否是一个"安全整数"。

安全整数范围为 -(253 - 1)到 253 - 1 之间的整数，包含 -(253 - 1)和 253 - 1。
Number.isSafeInteger(10);    // 返回 true
Number.isSafeInteger(12345678901234567890);  // 返回 false
```