## Boolean
Boolean 对象用于转换一个不是boolean类型的值 转换为Boolean类型值(true 或者false) <br>

  Boolean 对象属性<br>

  construct 返回对创建此对象的Boolean函数的引用<br>
  prototype 使您有能力向对象添加属性和方法<br>
  

 Boolean 对象方法 <br>

## 1.0 toString()
把布尔值转为字符串，并返回结果  返回值是 'true' 或 'false'
```
  var bool = new Boolean(1);
  var val = bool.valueOf();
    console.log(val) // true
  var bool = new Boolean(0);
  var val = bool.valueOf();
    console.log(val) //false
  var bool = new Boolean(true);
  var val = bool.valueOf();
    console.log(val) // true
  var bool = new Boolean(false);
  var val = bool.valueOf();
    console.log(val) //false
  var bool = new Boolean('');
  var val = bool.valueOf();
    console.log(val) //false
  var bool = new Boolean(' ');
  var val = bool.valueOf();
    console.log(val) // true
  var bool = new Boolean('undefined');
  var val = bool.valueOf();
    console.log(val) // true
```



## 2.0 valueOf()
返回Boolean对象的原始值   返回值是 true 或false
```
var bool = new Boolean(1);
  var val = bool.valueOf();
    console.log(val) // true
  var bool = new Boolean(0);
  var val = bool.valueOf();
    console.log(val) //false
  var bool = new Boolean(true);
  var val = bool.valueOf();
    console.log(val) // true
  var bool = new Boolean(false);
  var val = bool.valueOf();
    console.log(val) //false
  var bool = new Boolean('');
  var val = bool.valueOf();
    console.log(val) //false
  var bool = new Boolean(' ');
  var val = bool.valueOf();
    console.log(val) // true
  var bool = new Boolean('undefined');
  var val = bool.valueOf();
    console.log(val) // true
```

## 为 Boolean 对象创建一个新的方法：
```
Boolean.prototype.myColor=function()
	{
		if (this.valueOf()==true)
		{
			this.color="green";
		}
		else
		{
			this.color="red";
		}
	}
		var a=new Boolean(1);
        var c = a.color;
        console.log(c) // undefined
        a.myColor();
        var b=a.color;
        console.log(b)// green
```
[demo](http://www.zliel.top/vpdemo/js-demo/js-boolean-construct/bc.html)  <br>
