## mysql 查询练习
1.0 学生表 Student
```js
// 学号
// 性别
// 姓名
// 出生年月日
// 所在班级
create table student(
    sno varchar(20) primary key,
    sname varchar(20) not null,
    ssex varchar(10) not null,
    sbirthday datetime,
    class varchar(20)
)

//--- 添加数据
insert into student values('101','曾华','男','1997-02-16','95033');
```


2.0 课程表 Course
```js
// 课程号
// 课程名称
// 教师编号
create table course(
    cno varchar(20) primary key,
    cname varchar(20) not null,
    tno varchar(20) not null,
    foreign key(tno) references teacher(tno)
)
insert into course values('3-105','生物','825');
insert into course values('3-245','化学','804');
insert into course values('3-166','数学','856');
insert into course values('3-888','英语','831');
```




3.0 成绩表 Score
```js
// 学号
// 课程号
// 成绩
create table score(
    sno varchar(20) not null,
    cno varchar(20) not null,
    degree decimal,
    foreign key(sno) references student(sno),
    foreign key(cno) references course(cno),
    primary key(sno,cno)
)
insert into score values('101','3-105','78');
insert into score values('102','3-245','79');
insert into score values('103','3-166','85');
insert into score values('104','3-888','86');
insert into score values('105','3-166','86');
insert into score values('101','3-245','78');
insert into score values('102','3-166','79');
insert into score values('103','3-888','85');
insert into score values('104','3-245','82');
insert into score values('105','3-245','81');
insert into score values('106','3-245','78');
insert into score values('107','3-166','79');
insert into score values('108','3-888','85');
insert into score values('109','3-245','82');
insert into score values('110','3-245','81');
```



4.0 教师表 Teacher
```js
// 教师编号
// 教师名字
// 教师性别
// 出生年月日
// 职称
// 所在部门

create table teacher(
    tno varchar(20) primary key,
    tname varchar(20) not null,
    tsex varchar(10) not null,    
    tbirthday datetime,
    prof varchar(20) not null,
    depart varchar(20) not null
)

insert into teacher values('856','周杰困','男','1991-02-16','教授','计算机系');
insert into teacher values('804','斌斌','男','1992-02-16','高级教师','环境系');
insert into teacher values('825','冰冰','女','1991-02-16','教师','计算机系');
insert into teacher values('831','静静','女','1992-02-16','中级教师','环境系');
```



**查询练习**

1.0 查询student表的所有记录

>select * from student

2.0 查询指定的几个数据
>select sname,ssex,class from student 

3.0 查询教师所在的部门及不重复的depart

>select distinct depart from teacher

------distinct 就是去掉重复的数据（排重）

4.0 查询成绩在60-80之间的
>select * from score where degree between 60 and 80;

>select * from score where degree > 60 and  degree < 80;

5.0 查询成绩是 78,78和86的
>select * from score where degree  in(78 , 79 ,86);

6.0 查询student表中 班级是95031 或者性别是女的
>select * from student where class = '班级是95031' or ssex = '女' ;

7.0 以class降序查询student表中的所有数据

--升序，降序
>select * from student order by class desc;(降序)<br>
>select * from student order by class asc;(升序)


8.0 以cno升序，degree降序查询score表中的所有数据
>select * from score order by cno,degree desc;

9.0 查询95301 班的学生人数
>select count(*) from student where class='85031'

10.0 查询score表中的最高分的学生学号和课程号，（子查询或者排序）
>select sno,cno from score where degree = (select max(degree) from score)

-- 1.0 找到最高分
>select max(degree) from score

---2.0 找最高分的 sno 和 cno

>select sno,cno from score where degree = (select max(degree) from score)


--- 排序的做法
>1.0 select * from score order by degree  （从高到低排序了）
>2.0 select * from score order by degree desc (降序)

>3.0 select * from score order by degree desc limit 0,1

问题是这个只取到了第一条数据，如果最高分有两个，等于没取完。<br>
limit 第一个数字表示从第几条开始，第二个数字表示查多少条

11.0 查询每门课的平均成绩

---1.0 计算一门课的成绩
```js
select avg(degree) from score where cno = '3-105';
select avg(degree) from score where cno = '3-245';
select avg(degree) from score where cno = '3-166';
select avg(degree) from score where cno = '3-888'
```


---我能不能在一个sql语句里面写呢？
>select avg(degree) from score group by cno

---并展示对应的每门课
>select cno,avg(degree) from score group by cno

12.0 查询score表中至少有2名学生选修的并以3开头的课程的平均分数

---12.1 先查询看一眼分组
>select cno from score group by cno 

--- 大于两个人的
>select cno from score group by cno having count(cno) >=2

---以3开头的  like ‘3%’
>select cno from score group by cno having count(cno) >=2 and cno like '3%'

--- 平均成绩
>select cno,avg(degree) from score group by cno having count(cno) >=2 and cno like '3%'

--- 再看一下是几个数据的
>select cno,avg(degree),count(*) from score group by cno having count(cno) >=2 and cno like '3%'


13.0 查询分数大于70，小于90的sno列

13.1 方法一
>---select sno,degree from score where degree>=70 and degree <= 90

13.2 方法二
>---select sno,degree from score where degree between 70 and 90;

14.0 查询所有学生的 sname ，cno 和 degree

14.1 先查学生表
>--- select sno,sname from student

14.2 查询 score 表
>--- select sno,cno,degree from score

14.2 查询 score 表
>--- select sname,cno,degree from student,score where student.sno = score.sno

15.0 查询所有学生的sno，cname 和degree列

15.1 先查课程表
>---select cno,cname from course

15.2 再查 成绩表
>---select sno,cno,degree from score

15.3 两表联查
>--- select sno,cname,degree from score,course where score.cno = course.cno


16.0 查询所有学生的sname,cname 和 degree
```js
//综合上面两个步骤
select sname,cname,degree from student,score,course where student.sno = score.sno and score.cno = course.cno

//把学号和课程号也展示出来
select sname,student.sno,cname,score.cno,degree from student,score,course where student.sno = score.sno and score.cno = course.cno

//取个别名
select sname,student.sno as stu_sno,cname,score.cno as score_cno,degree from student,score,course where student.sno = score.sno and score.cno = course.cno

```


17.0 查询 95031 班学生每门课的平均分

17.1 先查询学生
>select * from student where class=95031<br>
>select sno from student where class=95031

17.2 把这些学生的成绩查出来
>select * from score where sno in(select sno from student where class=95031)

17.3 分组求平均数
>select cno,avg(degree) from score where sno in(select sno from student where class=95031) group by cno


18.0 查询选修 “3-245” 课程的成绩高于“101”号同学“3-245”成绩的所有同学的记录。

18.1 先找学号109的学生
>select * from student where sno = '101'

18.2 在找 3-245 成绩
>select * from score where sno = '101' and cno='3-245'

18.3 找大于 
```js
SELECT * FROM `score` 
WHERE degree>(select degree from score where sno = '101' and cno='3-245') 
and cno = '3-245'
```


19.0 查询成绩高于学号为“109”，课程为“3-245”的成绩的所有记录
>select * from score where degree >(select degree from score where sno='109' and cno='3-245')


20.0 查询学号为108、101的同学-同年出生的所有学生的sno、sname和sbirthday列

20.1 先查两个学生
```js
select sno,sname,sbirthday from student where sno='108' or sno = '101'
//第二种写法
select sno,sname,sbirthday from student where sno in('101','108')
```


20.2 获取两个学生的年份
>select year(sbirthday) from student where sno in('101','108')

20.3 获取所有学生
>select * from student where year(sbirthday) in(select year(sbirthday) from student where sno in('101','108'))

21.0 查询“静静”老师任课的学生成绩

21.1 先查询老师的编号
>select tno from teacher where tname = '静静'

21.2 根据老师的编号查 任课编号
>select cno from course where tno = (select tno from teacher where tname = '静静')

2.3 再根据课程编号 查询学生成绩
>select * from score where cno = (select cno from course where tno = (select tno from teacher where tname = '静静'))


22.0 查询选修某课课程的同学人数多于5人的教师姓名。

22.1 先统计课程多于5人的课程
>select cno from score group by cno （先查课程编号）<br>
>select cno from score group by cno having count(*) > 5

22.2 根据课程号 查教师编号
>select tno from course where cno in (select cno from score group by cno having count(*) > 5)

22.3 根据编号查老师信息
>select * from teacher where tno in (select tno from course where cno in (select cno from score group by cno having count(*) > 5))


23.0 查询95033和95031班全体学生的记录
>select * from student where class in ('95033','95031')

24.0 查询存在有85分以上成绩的课程cno

>select * from score where degree>=85

```js
//去重
select distinct cno from score where degree>=85
select cno from score where degree>=85 GROUP by cno
```


25.0 查询出“计算机系”教师所教课程的成绩表

25.1 查询计算机系 教师列表
>select * from teacher where depart = '计算机系'<br>
>select cno from teacher where depart = '计算机系'

25.2 查询对应的课程编号
>select * from course where tno in(select tno from teacher where depart = '计算机系')<br>
>select cno from course where tno in(select tno from teacher where depart = '计算机系')

25.3 查询课程成绩
>select * from score where cno in(select cno from course where tno in(select tno from teacher where depart = '计算机系'))


26.0 查询“计算机系”与“环境系”不同职称的教师的tname和prof

26.1 先查计算机系里 与环境系不同职称的老师
>select * from teacher where depart ='计算机系' and prof not in(select prof from teacher where depart ='环境系')

26.2 再查环境系里 与计算机系不同职称的老师
>select * from teacher where depart ='环境系' and prof not in(select prof from teacher where depart ='计算机系')

26.3 结合两个
```js
select * from teacher where depart ='计算机系' and prof not in(select prof from teacher where depart ='环境系')
union
select * from teacher where depart ='环境系' and prof not in(select prof from teacher where depart ='计算机系')

//union 求并集 not in 不在什么里面
```


27.0 查询选修编号为3-105课程且课程至少高于选修编号3-245的同学的cno、sno和degree，并按degree从高到底依次排序

27.1 先查询 3-245 和3-105的成绩
>select * from score  where cno = '3-105'<br>
>select * from score  where cno = '3-245'

27.2 至少高于，意思就是最少得高于一个吧
>select * from score where cno = '3-105' and degree>any(select degree from score  where cno = '3-245') order by desc


28.0 查询选修编号为3-105课程且课程高于选修编号3-245的同学的cno、sno和degree，
>select * from score where cno = '3-105' and degree>all(select degree from score  where cno = '3-245')


29.0查询所有教师和同学的name，sex和birthday 

```js
select tname,tsex,tbirthday from teacher
union
select sname,ssex,sbirthday from student

//上面这是有问题的 名字全部变成了  tname,tsex,tbirthday
//用到别名 as
select tname as name,tsex as sex,tbirthday as birthday from teacher
union
select sname,ssex,sbirthday from student
```




30.0 查询所有“女”教师和女同学的 name,sex和birthday
```js
select tname as name,tsex as sex,tbirthday as birthday from teacher where tsex='女'
union
select sname,ssex,sbirthday from student where ssex='女'
```


31.0 查询成绩比该科成绩低的学生

31.1 先查课程编号
>select cno from course

31.2 查每一科的平均成绩

>select cno,avg(degree) from score group by cno

>(总的平均成绩 select avg(degree) from score where cno in(select cno from course))

31.3 换成 两个表比对
>select * from score a where degree <(select avg(degree) from score b where a.cno = b.cno)

32.0 查询所有任课老师的tname 和 depart

32.1 先查询成绩表的课程编号
>select cno from score group by cno

32.2 根据课程编号 查询老师编号
>select tno from course where cno in(select cno from score group by cno)

32.3 根据老师编号查询老师
>select * from teacher where tno in(select tno from course where cno in(select cno from score group by cno)) 


33.0 查询至少有两名男生的班号

33.1 查询班及 总共有多少班号
>select class from student group by class

33.2 增加筛选条件 大于1 是男生
>select class from student where ssex='男' group by class having count(*) >1


34.0 查询student表中不姓小的同学
>select * from student where sname not like '小%'


35.0 查询student表中每个学生的姓名和年龄

35.1 获取当前年份
>select year(now())

35.2 
>select sname,year(now()) - year(sbirthday) as 'age' from student



36.0 查询student表中最大，最小birthday

>select max(sbirthday) from student<br>
>select min(sbirthday) from student

>select max(sbirthday) as '最大', min(sbirthday) as '最小' from student


37.0 以班号和年龄从大到小的顺序查询student表中的全部数据
>select * from student order by class desc,sbirthday asc



38.0 查询男教师及其所上的课程

38.1 先查询男教师编号
>select * from teacher where tsex = '男'

38.2 查询教师对应的课程
>select cno,cname from course where tno in (select tno from teacher where tsex = '男') 


39.0查询最高分同学的sno，cno和degree 

>SELECT * FROM `score` WHERE degree = (select max(degree) from score)

40.0 查询和小明同性别的所有同学的sname
>select * from student where ssex =(select ssex from student where sname='小明')

41.0 查询和曾华同性别的并且同班的同学
>select * from student where ssex =(select ssex from student where sname='曾华')
and class = (select class from student where sname = '曾华')

42.0 查询所有学习 生物 课程的 男 同学 的成绩表

42.1 先查询男同学 编号
>select sno from student where ssex = '男'

42.2 查询学习生物的课程编号
>select cno from course where cname = '生物'

42.3 查询 成绩是男同学 并且 是生物课
```js
select * from score 
where sno in (select sno from student where ssex = '男')
and cno = (select cno from course where cname = '生物')
```


43.0使用下命令建立了一个grade表
```js
create table grade(
    low int(3),
    upp int(3),
    grade char(1)
)
insert into grade values(90,100,'A');
insert into grade values(80,89,'B');
insert into grade values(70,79,'C');
insert into grade values(60,69,'D');
insert into grade values(0,59,'E');
```
查询所有同学的sno，cno和grade列
```js
select sno,cno,grade from score,grade where degree between low and upp

//第二种写法
select sno,cno,grade from score,grade where score.degree between grade.low and grade.upp
```

