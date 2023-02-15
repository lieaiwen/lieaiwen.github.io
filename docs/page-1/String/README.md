## String 对象
String 对象用于处理已有的字符块。<br>
 
```
    var txt="Hello World!";
语法：substr(start [，length]) 第一个字符的索引是0，start必选 length可选
　　　substring(start [, end]) 第一个字符的索引是0，start必选 end可选
1.0 字符串（String）使用长度属性length来计算字符串的长度：
    txt.length

2.0 使用位置（索引）可以访问字符串中任何的字符：
    var character=txt[4]; // 下标从0 开始

3.0 在字符串中查找字符串
字符串使用 indexOf() 来定位字符串中某一个指定的字符首次出现的位置：
    var str="Hello world, welcome to the universe.";
    var n=str.indexOf("welcome"); // 13 不存在的话是 -1

4.0 内容匹配
match()函数用来查找字符串中特定的字符，并且如果找到的话返回数组 没找到返回null
    var str="Hello world!";
    str.match("world") // ["world", index: 6, input: "Hello world!", groups: undefined]
    str.match("worldd") // null

5.0 替换内容
replace() 方法在字符串中用某些字符替换另一些字符。
    str="Please visit Microsoft!"
    var n=str.replace("Microsoft","Runoob"); // 不变的

6.0 字符串大小写转换
字符串大小写转换使用函数 toUpperCase() / toLowerCase():
    var txt="Hello World!";       // String
    var txt1=txt.toUpperCase();   // txt1 文本会转换为大写
    var txt2=txt.toLowerCase();   // txt2 文本会转换为小写

7.0 字符串转为数组
字符串使用split()函数转为数组:
    txt="a,b,c,d,e"   // String
    txt.split(",");   // 使用逗号分隔 ["a", "b", "c", "d", "e"]
    txt.split(" ");   // 使用空格分隔 ["a,b,c,d,e"]
    txt.split("|");   // 使用竖线分隔  ["a,b,c,d,e"]

8.0 特殊字符
    Javascript 中可以使用反斜线（\）插入特殊符号，如：撇号,引号等其他特殊符号。
主要有： \'	单引号
        \"	双引号
        \\	斜杆
        \n	换行
        \r	回车
        \t	tab
        \b	空格
        \f	换页
```
## String 对象属性
   constructor	对创建该对象的函数的引用 <br>
   length	字符串的长度 <br>
   prototype	允许您向对象添加属性和方法 <br>
## String 对象方法
1.0 charAt()	返回在指定位置的字符。
```
第一个字符位置为 0, 第二个字符位置为 1,以此类推.
var str = "HELLO WORLD";
var n = str.charAt(2) // L
```
2.0 charCodeAt()	返回在指定的位置的字符的 Unicode 编码。
```
var str = "HELLO WORLD";
var n = str.charCodeAt(0); // 72
```
3.0 concat()	连接两个或更多字符串，并返回新的字符串。
```
var str1 = "Hello ";
var str2 = "world!";
var n = str1.concat(str2); // Hello world!

var str1="Hello ";
var str2="world!";
var str3=" Have a nice day!";
var n = str1.concat(str2,str3); // Hello world! Have a nice day!
```
4.0 fromCharCode()	将 Unicode 编码转为字符。
```
var n = String.fromCharCode(65); // A
var n = String.fromCharCode(72,69,76,76,79); // HELLO
```
5.0 indexOf()	返回某个指定的字符串值在字符串中首次出现的位置。
```
如果没有找到匹配的字符串则返回 -1。
注意： indexOf() 方法区分大小写。

在字符串查找字符 "e" 第一次出现的位置:
var str="Hello world, welcome to the universe.";
var n=str.indexOf("e"); // 1

在字符串第五个位置开始查找字符 "e" 第一次出现的位置:
var str="Hello world, welcome to the universe.";
var n=str.indexOf("e",5);
n 输出结果:14
```
6.0 lastIndexOf()	从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。
```
语法: string.lastIndexOf(searchvalue,start)
开始检索的位置在字符串的 start 处或字符串的结尾（没有指定 start 时）。
如果没有找到匹配字符串则返回 -1 。
注意：lastIndexOf() 方法是区分大小写的！
从第 20 个字符开始查找字符串 "runoob" 最后出现的位置,：
var str="I am from runoob，welcome to runoob site.";
var n=str.lastIndexOf("runoob", 20); // 10
```
7.0 includes()	查找字符串中是否包含指定的子字符串。
```
includes() 方法用于判断字符串是否包含指定的子字符串。
如果找到匹配的字符串则返回 true，否则返回 false。
注意： includes() 方法区分大小写。
var str = "Hello world, welcome to the Runoob。";
var n = str.includes("world"); // true
```
8.0 match()	查找找到一个或多个正则表达式的匹配。
```
match() 方法将检索字符串 String Object，以找到一个或多个与 regexp 匹配的文本。
这个方法的行为在很大程度上有赖于 regexp 是否具有标志 g。
如果 regexp 没有标志 g，那么 match() 方法就只能在 stringObject 中执行一次匹配。
如果没有找到任何匹配的文本， match() 将返回 null。
否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息。

全局查找字符串 "ain"，且不区分大小写:
var str="The rain in SPAIN stays mainly in the plain"; 
var n=str.match(/ain/gi); //["ain", "AIN", "ain", "ain"]

判断是否微信浏览器:
function is_weixn(){  
    var ua = navigator.userAgent.toLowerCase();  
    if(ua.match(/MicroMessenger/i)=="micromessenger") {  
        return true;  
    } else {  
        return false;  
    }  
}
```

9.0 repeat()	复制字符串指定次数，并将它们连接在一起返回。
```
var str = "Runoob";
str.repeat(2); //RunoobRunoob
```

10.0 replace()	在字符串中查找匹配的子串， 并替换与正则表达式匹配的子串。
```
1.0 
var str="Visit Microsoft! Visit Microsoft!";
var n=str.replace("Microsoft","Runoob"); // Visit Runoob!Visit Microsoft!

2.0 执行一个全局替换:
    var str="Mr Blue has a blue house and a blue car";
    var n=str.replace(/blue/g,"red");//Mr Blue has a red house and a red car
```

11.0 search()	查找与正则表达式相匹配的值。
```
search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
如果没有找到任何匹配的子串，则返回 -1。
var str="Visit Runoob!"; 
var n=str.search("Runoob"); // 6

执行一次忽略大小写的检索:
var str="Mr. Blue has a blue house";
document.write(str.search(/blue/i)); // 4
```

12.0 slice()	提取字符串的片断，并在新的字符串中返回被提取的部分。
```
slice(start, end) 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
使用 start（包含） 和 end（不包含） 参数来指定字符串提取的部分。
字符串中第一个字符位置为 0, 第二个字符位置为 1, 以此类推。
提示： 如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。
string.slice(start,end) // start必须 end 可选

var str="Hello world!";
 var n=str.slice(1,5); // ello
```

13.0 split()	把字符串分割为字符串数组。
```
split() 方法用于把一个字符串分割成字符串数组。
提示： 如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。
注意： split() 方法不改变原始字符串。
语法
string.split(separator,limit) // 返回值array
separator	可选。字符串或正则表达式，从该参数指定的地方分割 string Object。
limit	可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回
1.0 省略分割参数：
var str="How are you doing today?";
var n=str.split(); // ["How are you doing today?"]

2.0 分割每个字符，包括空格:
var str="How are you doing today?";
var n=str.split(""); // ["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n", "g", " ", "t", "o", "d", "a", "y", "?"]

3.0 使用 limit 参数:
var str="How are you doing today?";
var n=str.split(" ",3);// ["How", "are", "you"]
```

14.0 startsWith()	查看字符串是否以指定的子字符串开头。
```
string.startsWith(searchvalue, start) start	可选
如果是以指定的子字符串开头返回 true，否则 false。
startsWith() 方法对大小写敏感。
var str = "Hello world, welcome to the Runoob.";
var n = str.startsWith("Hello"); // true
```

15.0 substr()	从起始索引号提取字符串中指定数目的字符。
```
string.substr(start,length) length	可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。

var str="Hello world!";
var n=str.substr(2) //llo world!

var str="Hello world!";
var n=str.substr(2,3) // llo
```

16.0 substring()	提取字符串中两个指定的索引号之间的字符。
```
substring() 方法用于提取字符串中介于两个指定下标之间的字符。
substring() 方法返回的子串包括 开始 处的字符，但不包括 结束 处的字符。
string.substring(from, to) from	必需。一个非负的整数 to	可选。一个非负的整数
var str="Hello world!";
str.substring(3) // lo world!
str.substring(3,7) // lo w
```

17.0 trim()	去除字符串两边的空白
```
注意ie9以上才支持
trim() 方法用于删除字符串的头尾空格。
trim() 方法不会改变原始字符串。
1.0 var str = "       Runoob        ";
 str.trim() // Runoob

2.0 如果不支持的话
function myTrim(x) {
  return x.replace(/^\s+|\s+$/gm,'');
}
 myTrim("        Runoob        ") // Runoob
```

18.0 toLocaleLowerCase()	根据本地主机的语言环境把字符串转换为小写。
```
本地是根据浏览器的语言设置来判断的。
通常，该方法与 toLowerCase() 方法返回的结果相同，只有几种语言（如土耳其语）具有地方特有的大小写映射。
```

19.0 toLocaleUpperCase()	根据本地主机的语言环境把字符串转换为大写。
```
本地是根据浏览器的语言设置来判断的。
通常，该方法与 toUpperCase() 方法返回的结果相同，只有几种语言（如土耳其语）具有地方特有的大小写映射。
```

20.0 valueOf()	返回某个字符串对象的原始值。
```
valueOf() 方法可返回 String 对象的原始值。

注意： valueOf() 方法通常由 JavaScript 在后台自动进行调用，而不是显式地处于代码中。
var str="Hello world!";
str.valueOf() // Hello world!
```

21.0 toString()	返回一个字符串。
```
toString() 方法返回一个表示 String 对象的值。
var str = "Runoob";
var res = str.toString(); // Runoob
```

22.0 toLowerCase()	把字符串转换为小写。 <br>
toUpperCase()	把字符串转换为大写。

## toString() 和valueOf() 的区别
[说明](https://www.jb51.net/article/74888.htm)  <br>
