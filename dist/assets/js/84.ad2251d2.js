(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{298:function(e,a,n){"use strict";n.r(a);var r=n(6),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("1.0 显示所有数据\nshow databases")]),e._v(" "),n("p",[e._v("2.0 在服务器中创建我们的数据库\ncreate database test01")]),e._v(" "),n("p",[e._v("3.0 选中数据库\nuse test01")]),e._v(" "),n("p",[e._v("4.0 查看数据库中的数据表\nshow tables")]),e._v(" "),n("p",[e._v("4.0 在数据库中新建表\ncreate table peg(\nname varchar(20),\nage varchar(255),\nsex char(20),\nbirth date,\ndeath date\n)")]),e._v(" "),n("p",[e._v("5.0 查询表里面的数据\nselect * from peg")]),e._v(" "),n("p",[e._v("6.0 查看表的结构\ndescribe peg")]),e._v(" "),n("p",[e._v("7.0 往数据表中添加记录\nINSERT INTO "),n("code",[e._v("peg")]),e._v("("),n("code",[e._v("name")]),e._v(", "),n("code",[e._v("age")]),e._v(", "),n("code",[e._v("sex")]),e._v(", "),n("code",[e._v("birth")]),e._v(", "),n("code",[e._v("death")]),e._v(") VALUES ('xiaohong','15','男','1992-02-05','1992-01-08')")]),e._v(" "),n("p",[e._v("第二种写法\ninsert into peg values ('小白','16','nv','2022-02-16','2025-12-25')")]),e._v(" "),n("p",[e._v("8.0 删除数据\ndelete from peg where name='小白'")]),e._v(" "),n("p",[e._v("9.0 更新数据\nupdate peg set name = '小白白' where name = '小白'")]),e._v(" "),n("p",[n("strong",[e._v("mysql建表的约束")]),e._v("\n1.0 主键约束\n它能够唯一确定一张表的一条记录，也就是我们通过给某个字段添加约束，就可以使得该字段不重复且不为空。\ncreate table user (\nid int primary key,\nname varchar(18)\n)")]),e._v(" "),n("p",[e._v("联合主键 -- 插入数据只要id+name 两个都不重复就行了\ncreate table user2 (\nid int,\nname varchar(20),\npassword varchar(20),\nprimary key(id,name)\n)\n1.1 自增约束\ncreate table user3(\nid int primary key auto_increment,\nname varchar(20)\n)\ninsert into user3 (name) values('小明')")]),e._v(" "),n("p",[e._v("如果我们创建表的时候，忘记增加主键约束怎么办\ncreate table user4(\nid int,\nname varchar(20)\n)\n--修改表结构添加主键\nalter table user4 add primary key auto_increment (id)")]),e._v(" "),n("p",[e._v("-- 删除主键\nalter table user5 drop primary key")]),e._v(" "),n("p",[e._v("--- 另外一种方法添加主键\nalter table user5 modify id int primary key auto_increment")]),e._v(" "),n("p",[e._v("2.0 外键约束\n牵扯到两个表，一个主表，一个附表")]),e._v(" "),n("p",[e._v("**班级表\ncreate table classes(\nid int primary key,\nname varchar(20)\n)")]),e._v(" "),n("p",[e._v("** 学生表\ncreate table students(\nid int primary key,\nname varchar(20),\nclass_id int,\nforeign key(class_id) references classes(id)\n)")]),e._v(" "),n("p",[e._v("======")]),e._v(" "),n("ol",[n("li",[e._v("主表中没有的数据，在附表中是不能使用，比如 主表 id 只有 1 和2 name class_id 也只能是 1和2 如果创建其它值报错")]),e._v(" "),n("li",[e._v("主表中的数据被副标使用，则这条数据是不允许被删除的")])]),e._v(" "),n("h2",{attrs:{id:"_3-0-唯一约束第一种alter-table-user5-add-unique-name-第二种create-table-user4-id-int-name-varchar-20-unique-name"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-唯一约束第一种alter-table-user5-add-unique-name-第二种create-table-user4-id-int-name-varchar-20-unique-name"}},[e._v("#")]),e._v(" 3.0 唯一约束\n第一种\nalter table user5 add unique(name)\n第二种\ncreate table user4(\nid int,\nname varchar(20),\nunique(name)\n)")]),e._v(" "),n("h2",{attrs:{id:"create-table-user4-id-int-name-varchar-20-unique-id-name-这种还是组合起来不重复就行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-table-user4-id-int-name-varchar-20-unique-id-name-这种还是组合起来不重复就行"}},[e._v("#")]),e._v(" create table user4(\nid int,\nname varchar(20),\nunique(id,name)\n)\n这种还是组合起来不重复就行")]),e._v(" "),n("h2",{attrs:{id:"create-table-user4-id-int-name-varchar-20-unique"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-table-user4-id-int-name-varchar-20-unique"}},[e._v("#")]),e._v(" create table user4(\nid int,\nname varchar(20) unique\n)")]),e._v(" "),n("p",[e._v("第三种通过modify 添加\nalter table user5 modify name varchar(20) unique")]),e._v(" "),n("hr"),e._v(" "),n("h2",{attrs:{id:"删除唯一主键alter-table-user5-drop-index-name"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除唯一主键alter-table-user5-drop-index-name"}},[e._v("#")]),e._v(" 删除唯一主键\nalter table user5 drop index name")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("删除表\ndrop table user5")]),e._v(" "),n("p",[e._v("4.0 非空约束\n修饰的字段不能为空\ncreate table user6(\nid int,\nname varchar(20) not null\n)")]),e._v(" "),n("p",[e._v("5.0 默认约束\n当我们没有传值的时候就会，使用默认值\ncreate table user7 (\nid int,\nname varchar(10),\nage int default 18\n)")])])}),[],!1,null,null,null);a.default=t.exports}}]);