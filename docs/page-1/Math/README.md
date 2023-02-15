## Math 对象
Math 对象用于执行数学任务。 <br>
Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()。<br>
例子：
	var x = Math.PI // 返回PI
	var y = Math.sqrt(16) // 返回16的平方根

```
常用的：
1.0 abs(x)	返回 x 的绝对值。
	Math.abs(x) ：x 的绝对值。如果 x 不是数字返回 NaN,如果 x 为 null 返回 0。
	Math.abs('we') // NaN 
	Math.abs(null) // 0
	Math.abs(-7.25); // 7.25  
2.0 ceil(x)	对数进行上舍入。
	向上取整
	Math.ceil(1.4) // 2
	Math.ceil(-1.4) // -1

3.0  floor(x)	对 x 进行下舍入。
	 向下取整
		Math.floor(1.6);// 1
		Math.floor(-1.6);// 2
4.0  round(x)	四舍五入。
	.5的时候往上走
	 Math.round(-2.5); // -2
	 Math.round(2.5);  // 3
	 Math.round(2.4); // 2
5.0 max(x,y,z,...,n)	返回 x,y,z,...,n 中的最高值。 es3只能有两个参数
	
	var b=Math.max(0,150,30,20,38); // 150
	var c=Math.max(-5,10); // 10
	var d=Math.max(-5,-10); // -5
	var e=Math.max(1.5,2.5); // 2.5

6.0 min(x,y,z,...,n)	返回 x,y,z,...,n中的最低值。 es3只能有两个参数
	同上
	
7.0 random()	返回 0 ~ 1 之间的随机数。
	返回介于 0（包含） ~ 1（不包含） 之间的一个随机数：
	Math.random();

	取得介于 1 到 10 之间的一个随机数：
	Math.floor((Math.random()*10)+1);
	取得介于 1 到 100 之间的一个随机数：
	Math.floor((Math.random()*100)+1);
```



