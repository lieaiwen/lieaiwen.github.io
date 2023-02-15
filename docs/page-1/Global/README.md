## js 全局
js 全局属性和方法 可用于创建js对象 <br>
js 全局属性
```
1.0 NaN 指示某个值是不是数字值
2.0 undefined 指示未定义的值 
3.0 Infinity 代表正的无穷大的数值。
var x=1.7976931348623157E+10308;
 x // Infinity

var y=-1.7976931348623157E+10308;
y // -Infinity

```
js 全局函数
```
1.0 encodeURI()	把字符串编码为 URI。
2.0 decodeURI()	解码某个编码的 URI。
3.0 encodeURIComponent()	把字符串编码为 URI 组件。
4.0 decodeURIComponent()	解码一个编码的 URI 组件。
5.0 escape()	对字符串进行编码。
6.0 unescape()	对由 escape() 编码的字符串进行解码。
7.0 eval()	计算 JavaScript 字符串，并把它作为脚本代码来执行。(不建议使用，我现在也没使用)
8.0 isFinite() 函数用于检查其参数是否是无穷大。
	提示： 如果 number 是 NaN（非数字），或者是正、负无穷大的数，则返回 false。

	isFinite(123) // true
	isFinite(-1.23) // true
	isFinite(5-2) // true
	isFinite(0) // true
	isFinite("Hello") // false
	isFinite("2005/12/12") // false
9.0 isNaN() 函数用于检查其参数是否是非数字值。
	如果参数值为 NaN 或字符串、对象、undefined等非数字值则返回 true, 否则返回 false。

	isFinite(123) // false
	isFinite(-1.23) // false
	isFinite(5-2) // false
	isFinite(0) // false
	isFinite("Hello") // true
	isFinite("2005/12/12") // true

10.0 Number() 函数把对象的值转换为数字。
	如果对象的值无法转换为数字，那么 Number() 函数返回 NaN。
	语法： Number(object)
	object	可选。一个 JavaScript 对象。如果没有提供参数，则返回0。
	var a = Number() // 0

	注意：如果参数是 Date 对象，Number() 返回从 1970 年 1 月 1 日至今的毫秒数。

	var test1= new Boolean(true);
	var test2= new Boolean(false);
	var test3= new Date();
	var test4= new String("999");
	var test5= new String("999 888");
	Number(test1) // 1
	Number(test2) // 0
	Number(test3) // 1580629153603
	Number(test4) // 999
	Number(test5) // NaN

11.0 parseFloat() 函数可解析一个字符串，并返回一个浮点数。

该函数指定字符串中的首个字符是否是数字。如果是，则对字符串进行解析，直到到达数字的末端为止，然后以数字返回该数字，而不是作为字符串。
	注意： 字符串中只返回第一个数字。

	注意： 开头和结尾的空格是允许的。

	注意： 如果字符串的第一个字符不能被转换为数字，那么 parseFloat() 会返回 NaN。
	parseFloat("10") // 10
	parseFloat("10.33") // 10.33
	parseFloat("34 45 66") // 34
	parseFloat(" 60 ") // 60
	parseFloat("40 years") // 40
	parseFloat("He was 40") // NaN

12.0 parseInt() 函数可解析一个字符串，并返回一个整数。
	当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。

	语法： parseInt(string, radix)
	string	必需。要被解析的字符串。
	radix	可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
	当忽略参数 radix , JavaScript 默认数字的基数如下:

	如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。
	如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。
	如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。

	注意：在字符串以"0"为开始时旧的浏览器默认使用八进制基数。ECMAScript 5，默认的是十进制的基数。
	注意： 只有字符串中的第一个数字会被返回。

	注意： 开头和结尾的空格是允许的。

	注意：如果字符串的第一个字符不能被转换为数字，那么 parseInt() 会返回 NaN。

	parseInt("10") // 10
	parseInt("10.33") // 10
	parseInt("34 45 66") // 34
	parseInt(" 60 ") // 60
	parseInt("40 years") // 40
	parseInt("He was 40") //NaN

	parseInt("10",10) // 10
	parseInt("010") // 10
	parseInt("10",8) // 8
	parseInt("0x10") //16 
	parseInt("10",16) // 16

13.0 String 把对象的值转换为字符串
	注意： String() 函数返回与字符串对象的toString()方法值一样。
	var test1 = new Boolean(1);
	var test2 = new Boolean(0);
	var test3 = new Boolean(true);
	var test4 = new Boolean(false);
	var test5 = new Date();
	var test6 = new String("999 888");
	var test7 = 12345;
	String(test1) // true
	String(test2) // false
	String(test3) // true
	String(test4) // false
	String(test5) // Sun Feb 02 2020 17:08:43 GMT+0800 (中国标准时间)
	String(test6) // 999 888
	String(test7) // 12345
```
