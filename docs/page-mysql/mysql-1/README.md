## mysql基础用法
1.0 显示所有数据
>show databases

2.0 在服务器中创建我们的数据库
>create database test01

3.0 选中数据库
>use test01

4.0 查看数据库中的数据表
>show tables

4.0 在数据库中新建表
```sql
create table peg(
    name varchar(20),
    age varchar(255),
    sex char(20),
    birth date,
    death date
 )
```


5.0 查询表里面的数据
>select * from peg

6.0 查看表的结构
>describe peg

7.0 往数据表中添加记录
```js
INSERT INTO `peg`(`name`, `age`, `sex`, `birth`, `death`) VALUES ('xiaohong','15','男','1992-02-05','1992-01-08')

//第二种写法
insert into peg values ('小白','16','nv','2022-02-16','2025-12-25')
```



8.0 删除数据
>delete from peg where name='小白'

9.0 更新数据
>update peg set name = '小白白' where name = '小白'

**mysql建表的约束**

1.0 主键约束
>它能够唯一确定一张表的一条记录，也就是我们通过给某个字段添加约束，就可以使得该字段不重复且不为空。
```js
create table user (
    id int primary key,
    name varchar(18)
)
```
    
**联合主键** -- 插入数据只要id+name 两个都不重复就行了
```js
create table user2 ( 
    id int, 
    name varchar(20), 
    password varchar(20), 
    primary key(id,name) 
)
 //1.1 自增约束
create table user3(
    id int primary key auto_increment,
    name varchar(20)
)
insert into user3 (name) values('小明')
```


如果我们创建表的时候，忘记增加主键约束怎么办
```js
create table user4( 
    id int, 
    name varchar(20) 
)
//--修改表结构添加主键
alter table user4 add primary key auto_increment (id)

//-- 删除主键
alter table user5 drop primary key

//--- 另外一种方法添加主键
alter table user5 modify id int primary key auto_increment
```


2.0 外键约束

牵扯到两个表，一个主表，一个附表

*班级表
```js
create table classes(
    id int primary key,
    name varchar(20)
)

```

** 学生表
```js
create table students(
    id int primary key,
    name varchar(20),
    class_id int,
    foreign key(class_id) references classes(id)
)
```

1. 主表中没有的数据，在附表中是不能使用，比如 主表 id 只有 1 和2 name class_id 也只能是 1和2 如果创建其它值报错 
<br>
2. 主表中的数据被副标使用，则这条数据是不允许被删除的



3.0 唯一约束
```js
//第一种
alter table user5 add unique(name)

//第二种
create table user4(
    id int,
    name varchar(20),
    unique(name)
)
// 其它写法
create table user4(
    id int,
    name varchar(20),
    unique(id,name)
) //这种还是组合起来不重复就行

create table user4(
    id int,
    name varchar(20) unique
)

//第三种通过modify 添加
alter table user5 modify name varchar(20) unique
```

删除唯一主键
>alter table user5 drop index name

删除表
>drop table user5


4.0 非空约束
>修饰的字段不能为空
```js
create table user6( 
    id int,
    name varchar(20) not null 
)
```

5.0 默认约束
>当我们没有传值的时候就会，使用默认值
```js
create table user7 (
    id int,
    name varchar(10),
    age int default 18
)

```
**数据库设计第一范式1NF**
> 数据库中的所有字段都是不可分割的原子值

比如：某个表中的address ‘河南省郑州市小小村100号’,<br>
我们可以做成，Provinces：河南省，，city：郑州市，address：小小村100号


**数据库设计第二范式2NF**

第二范式是在第一范式的基础上建立起来的，即满足第二范式必须先满足第一范式。<br>
除主键外的每一列都应该依赖于主键

**数据库设计第三范式3NF**

必须满足第二范式，除了主键列表的其它列之间不能有传递依赖关系
