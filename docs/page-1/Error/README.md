## js Error(错误)对象
Error 对象在错误发生时提供了错误的提示信息。
```
try {
    adddlert("Welcome");
}
catch(err) {
     err.name + "<br>" + err.message;
} 
// ReferenceError(引用错误)
adddlert is not defined
```
Error 对象属性 两个 <br>
err.name  错误名 <br>
err.message 错误信息 <br>

## Throw 语句
throw 语句允许我们创建自定义错误。 <br>

正确的技术术语是：创建或抛出异常（exception）。 <br>

如果把 throw 与 try 和 catch 一起使用，那么您能够控制程序流，并生成自定义的错误消息

```
var message, x;
    try { 
        if(x == "")  throw "值为空";
        if(isNaN(x)) throw "不是数字";
        x = Number(x);
        if(x < 5)    throw "太小";
        if(x > 10)   throw "太大";
    }
    catch(err) {
        message.innerHTML = "错误: " + err;
    }
```

## finally 语句
finally 语句不论之前的 try 和 catch 中是否产生异常都会执行该代码块。

```
var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "") throw "值是空的";
    if(isNaN(x)) throw "值不是一个数字";
    x = Number(x);
    if(x > 10) throw "太大";
    if(x < 5) throw "太小";
  }
  catch(err) {
    message.innerHTML = "错误: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
```

