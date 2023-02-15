## Date 对象
Date 对象用于处理日期与时间。<br>
创建 Date 对象： new Date() <br>
1.0 getDate()	从 Date 对象返回一个月中的某一天 (1 ~ 31)。
```
var d = new Date();
var n = d.getDate();
```
注意：使用new Date(dataTime).getTime()在pc端以及Android手机上调试均没有问题，在苹果手机上显示的是NAN；解决方案就是
>new Date(dataTime.replace(/-/g,'/')).getTime()

2.0 getDay()	从 Date 对象返回一周中的某一天 (0 ~ 6)。
```
var d = new Date();
var n = d.getDay();
```
3.0 getFullYear()	从 Date 对象以四位数字返回年份。
```
var d = new Date();
var n = d.getFullYear(); // 2019
```
4.0 getHours()	返回 Date 对象的小时 (0 ~ 23)。
```
var d = new Date();
var n = d.getHours(); //14
```
5.0 getMilliseconds()	返回 Date 对象的毫秒(0 ~ 999)。
6.0 getMinutes()	返回 Date 对象的分钟 (0 ~ 59)。
7.0 getMonth()	从 Date 对象返回月份 (0 ~ 11)。
8.0 getSeconds()	返回 Date 对象的秒数 (0 ~ 59)。
9.0 getTime()	返回 1970 年 1 月 1 日至今的毫秒数。
```
var d = new Date();
var n = d.getTime();
```
10.0 parse()	返回1970年1月1日午夜到指定日期（字符串）的毫秒数。
```
var d = Date.parse("4 21, 2012"); // 1334937600000
```
11.0 setDate()	设置 Date 对象中月的某一天 (1 ~ 31)。
```
Date.setDate(day)
day	    必需。表示一个月中的一天的一个数值（1 ~ 31）:

            0 为上一个月的最后一天
            -1 为上一个月最后一天之前的一天
            如果当月有 31 天:
            
            32 为下个月的第一天
            如果当月有 30 天:
            
            32 为下一个月的第二天
var d = new Date();
d.setDate(15);
```
12.0 setFullYear()	设置 Date 对象中的年份（四位数字）。
```
Date.setFullYear(year,month,day) 后两个可选
我们将通过 setFullYear() 把日期设置为 November 3, 2020：

var d=new Date();
d.setFullYear(2020,10,3); // Tue Nov 03 2020 14:08:56 GMT+0800 (中国标准时间)
```
13.0 setHours()	设置 Date 对象中的小时 (0 ~ 23)。
14.0 setMilliseconds()	设置 Date 对象中的毫秒 (0 ~ 999)。
15.0 setMinutes()	设置 Date 对象中的分钟 (0 ~ 59)。
16.0 setMonth()	设置 Date 对象中月份 (0 ~ 11)。
17.0 setSeconds()	设置 Date 对象中的秒钟 (0 ~ 59)。
18.0 setTime()	setTime() 方法以毫秒设置 Date 对象。
```
我们将向 1970年01月01日 添加 1332403882588毫秒，并显示新的日期和时间：
var d = new Date();
d.setTime(1332403882588);
```

