## sql的4中连接查询

**内连接**
>inner join 或者join


**外连接**
>1.0 左连接 left join 或者 left outer join<br>
>2.0 右连接 right join 或者 right outer join<br>
>3.0 完全外连接 full join 或者 full outer join

先创建一个数据库
>create database testjoin

创建两个表
```js
create table person (
    id int,
    name varchar(20),
    cardId int
)
insert into person values(1,'张三',1);
insert into person values(2,'李四',3);
insert into person values(3,'小明',6);

create table card (
    id int,
    name varchar(20)
)
insert into card values(1,'建行卡');
insert into card values(2,'农商卡');
insert into card values(3,'工商卡');
insert into card values(4,'华夏卡');
insert into card values(5,'农业卡');
```
这两个表可以看出 cardId 6 目前还没有，因为我们并没有创建外键，单其实他们是有外键关系的

1.0 inner join 查询

>1.1 select  * from person inner join card on person.cardId = card.id

>1.2 select person.id,person.name,person.cardId,card.id as cid, card.name as cname from person join card on person.cardId = card.id

>>内联查询，其实就是两张表中数据，通过某个字段相等，查询出相关记录数据

2.0 左外连接 left join (left outer join)
>select  * from person left join card on person.cardId = card.id

>>左外连接会把左边的表所有数据都查出来，对应不上的 置空

3.0 右连接 right join (right outer join)
>select  * from person right join card on person.cardId = card.id


>> 右连接把右边表的数据都查出来，左边的对应不上会置空

4.0 完全外连接 full join
>select  * from person full join card on person.cardId = card.id

**注意**: mysql 不支持 full join 只能通过 union

```js
select  * from person left join card on person.cardId = card.id
union
select  * from person right join card on person.cardId = card.id
```



## mysql事务

mysql 中，事务其实是一个最小的不可分割的工作单元。事务能够保证一个业务的完整性。<br>
比如我们的银行转账：<br>
```js
    a-> -100
    update user set money = money - 100 where name = 'a'

    b-> +100
    update user set money = money + 100 where name = 'b'
```
实际的程序中，如果只有一条语句执行成功了，而另外一条没有执行成功？<br>
出现数据前后不一致
>update user set money = money - 100 where name = 'a' <br>
>update user set money = money + 100 where name = 'b'

多条sql语句，可能会有同时成功的要求，要么就同时失败。<br>

mysql中如何控制事务？<br>

1.0 mysql默认是开启事务的。
>select @@autocommit（自动提交）

默认开启的作用是什么？<br>
当我们执行一个sql语句的时候，效果会立即体现出来，且不能回滚。
<br>
列子：
```js
create database bank

create table user(
    id int primary key,
    name varchar(20),
    money int
)
insert into user values(1,'a',1000)
```


然后执行回滚
>rollback 数据还是存在的
    
设置 mysql 自动提交false
>set autocommit = 0

我们再插入一个
>insert into user values(2,'b',1000)

再回滚 rollback
>这条数据是没有插入进去的

 除非重新插入
>insert into user values(2,'b',1000)

然后再commit <br>
再回滚 这条数据也还是存在的<br>

--- 自动提交？ @@autocommit=1 <br>
--- 手动提交？ commit <br>
--- 事务回滚？rollback <br>

**事务给我们提供了一个反悔的机会。**

另外一种开始事务的方法
>begin 或者 start transaction;
```js
begin;
update user set money = money - 100 where name = 'a';
update user set money = money + 100 where name = 'b'
```
再rollback 就等于没有执行操作


**事务的4大特征：**

A 原子性：事务是最小的单位，不可以再分割<br><br>
C 一致性：事务要求，统一事务中的sql语句，必须保证同时成功或者同时失败<br>
I 隔离性：事务1和事务2之间是具有隔离性的<br>
D 持久性：事务一旦结束（commit，rollback），就不可以返回<br>

隔离性 <br>

--1.0 read uncommitted  读未提交的(赃读) <br>
--2.0 read committed    读已提交的（）<br>
--3.0 repeatable read   可以重复读<br>
--4.0 serializable      串行化

