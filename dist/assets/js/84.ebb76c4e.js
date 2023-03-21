(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{300:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"sql的4中连接查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql的4中连接查询"}},[t._v("#")]),t._v(" sql的4中连接查询")]),t._v(" "),a("p",[a("strong",[t._v("内连接")])]),t._v(" "),a("blockquote",[a("p",[t._v("inner join 或者join")])]),t._v(" "),a("p",[a("strong",[t._v("外连接")])]),t._v(" "),a("blockquote",[a("p",[t._v("1.0 左连接 left join 或者 left outer join"),a("br"),t._v("\n2.0 右连接 right join 或者 right outer join"),a("br"),t._v("\n3.0 完全外连接 full join 或者 full outer join")])]),t._v(" "),a("p",[t._v("先创建一个数据库")]),t._v(" "),a("blockquote",[a("p",[t._v("create database testjoin")])]),t._v(" "),a("p",[t._v("创建两个表")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("create table "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cardId int\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninsert into person "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'张三'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninsert into person "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'李四'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninsert into person "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小明'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ncreate table "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("card")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninsert into card "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'建行卡'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninsert into card "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'农商卡'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninsert into card "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'工商卡'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninsert into card "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'华夏卡'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninsert into card "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'农业卡'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这两个表可以看出 cardId 6 目前还没有，因为我们并没有创建外键，单其实他们是有外键关系的")]),t._v(" "),a("p",[t._v("1.0 inner join 查询")]),t._v(" "),a("blockquote",[a("p",[t._v("1.1 select  * from person inner join card on person.cardId = card.id")])]),t._v(" "),a("blockquote",[a("p",[t._v("1.2 select person.id,person.name,person.cardId,card.id as cid, card.name as cname from person join card on person.cardId = card.id")])]),t._v(" "),a("blockquote",[a("blockquote",[a("p",[t._v("内联查询，其实就是两张表中数据，通过某个字段相等，查询出相关记录数据")])])]),t._v(" "),a("p",[t._v("2.0 左外连接 left join (left outer join)")]),t._v(" "),a("blockquote",[a("p",[t._v("select  * from person left join card on person.cardId = card.id")])]),t._v(" "),a("blockquote",[a("blockquote",[a("p",[t._v("左外连接会把左边的表所有数据都查出来，对应不上的 置空")])])]),t._v(" "),a("p",[t._v("3.0 右连接 right join (right outer join)")]),t._v(" "),a("blockquote",[a("p",[t._v("select  * from person right join card on person.cardId = card.id")])]),t._v(" "),a("blockquote",[a("blockquote",[a("p",[t._v("右连接把右边表的数据都查出来，左边的对应不上会置空")])])]),t._v(" "),a("p",[t._v("4.0 完全外连接 full join")]),t._v(" "),a("blockquote",[a("p",[t._v("select  * from person full join card on person.cardId = card.id")])]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v(": mysql 不支持 full join 只能通过 union")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("select  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" person left join card on person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cardId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" card"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\nunion\nselect  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" person right join card on person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cardId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" card"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n")])])]),a("h2",{attrs:{id:"mysql事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql事务"}},[t._v("#")]),t._v(" mysql事务")]),t._v(" "),a("p",[t._v("mysql 中，事务其实是一个最小的不可分割的工作单元。事务能够保证一个业务的完整性。"),a("br"),t._v("\n比如我们的银行转账："),a("br")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n    update user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" where name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),t._v("\n\n    b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n    update user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" where name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),t._v("\n")])])]),a("p",[t._v("实际的程序中，如果只有一条语句执行成功了，而另外一条没有执行成功？"),a("br"),t._v("\n出现数据前后不一致")]),t._v(" "),a("blockquote",[a("p",[t._v("update user set money = money - 100 where name = 'a' "),a("br"),t._v("\nupdate user set money = money + 100 where name = 'b'")])]),t._v(" "),a("p",[t._v("多条sql语句，可能会有同时成功的要求，要么就同时失败。"),a("br")]),t._v(" "),a("p",[t._v("mysql中如何控制事务？"),a("br")]),t._v(" "),a("p",[t._v("1.0 mysql默认是开启事务的。")]),t._v(" "),a("blockquote",[a("p",[t._v("select @@autocommit（自动提交）")])]),t._v(" "),a("p",[t._v("默认开启的作用是什么？"),a("br"),t._v("\n当我们执行一个sql语句的时候，效果会立即体现出来，且不能回滚。\n"),a("br"),t._v("\n列子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("create database bank\n\ncreate table "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id int primary key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    money int\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninsert into user "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("然后执行回滚")]),t._v(" "),a("blockquote",[a("p",[t._v("rollback 数据还是存在的")])]),t._v(" "),a("p",[t._v("设置 mysql 自动提交false")]),t._v(" "),a("blockquote",[a("p",[t._v("set autocommit = 0")])]),t._v(" "),a("p",[t._v("我们再插入一个")]),t._v(" "),a("blockquote",[a("p",[t._v("insert into user values(2,'b',1000)")])]),t._v(" "),a("p",[t._v("再回滚 rollback")]),t._v(" "),a("blockquote",[a("p",[t._v("这条数据是没有插入进去的")])]),t._v(" "),a("p",[t._v("除非重新插入")]),t._v(" "),a("blockquote",[a("p",[t._v("insert into user values(2,'b',1000)")])]),t._v(" "),a("p",[t._v("然后再commit "),a("br"),t._v("\n再回滚 这条数据也还是存在的"),a("br")]),t._v(" "),a("p",[t._v("--- 自动提交？ @@autocommit=1 "),a("br"),t._v("\n--- 手动提交？ commit "),a("br"),t._v("\n--- 事务回滚？rollback "),a("br")]),t._v(" "),a("p",[a("strong",[t._v("事务给我们提供了一个反悔的机会。")])]),t._v(" "),a("p",[t._v("另外一种开始事务的方法")]),t._v(" "),a("blockquote",[a("p",[t._v("begin 或者 start transaction;")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("begin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nupdate user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" where name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nupdate user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" where name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),t._v("\n")])])]),a("p",[t._v("再rollback 就等于没有执行操作")]),t._v(" "),a("p",[a("strong",[t._v("事务的4大特征：")])]),t._v(" "),a("p",[t._v("A 原子性：事务是最小的单位，不可以再分割"),a("br"),a("br"),t._v("\nC 一致性：事务要求，统一事务中的sql语句，必须保证同时成功或者同时失败"),a("br"),t._v("\nI 隔离性：事务1和事务2之间是具有隔离性的"),a("br"),t._v("\nD 持久性：事务一旦结束（commit，rollback），就不可以返回"),a("br")]),t._v(" "),a("p",[t._v("隔离性 "),a("br")]),t._v(" "),a("p",[t._v("--1.0 read uncommitted  读未提交的(赃读) "),a("br"),t._v("\n--2.0 read committed    读已提交的（）"),a("br"),t._v("\n--3.0 repeatable read   可以重复读"),a("br"),t._v("\n--4.0 serializable      串行化")])])}),[],!1,null,null,null);s.default=e.exports}}]);