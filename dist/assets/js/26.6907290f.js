(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{235:function(n,a,e){"use strict";e.r(a);var t=e(6),r=Object(t.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"js-regexp-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-regexp-对象"}},[n._v("#")]),n._v(" js RegExp 对象")]),n._v(" "),e("p",[n._v("正则表达式 是描述自付模式的对象 "),e("br"),n._v("\n正则表达式用于对字符串模式匹配及检索替换，是对字符串执行模式匹配的强大工具。"),e("br")]),n._v(" "),e("p",[n._v("语法：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('var patt=new RegExp(pattern,modifiers);\n\n或者更简单的方式:\nvar patt=/pattern/modifiers;\n\npattern（模式） 描述了表达式的模式\nmodifiers(修饰符) 用于指定全局匹配、区分大小写的匹配和多行匹配\n\n注意：当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 \\）。比如，以下是等价的：\nvar re = new RegExp("\\\\w+");\nvar re = /\\w+/;\n')])])]),e("h2",{attrs:{id:"regexp修饰符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regexp修饰符"}},[n._v("#")]),n._v(" RegExp修饰符")]),n._v(" "),e("p",[n._v("修饰符只有 三个 "),e("br"),n._v("\n1.0 i 执行对大小写不敏感的匹配  "),e("br"),n._v("\n2.0 g 执行全局匹配(查找所有匹配而非在找到第一个匹配后停止) "),e("br"),n._v("\n3.0 m 执行多行匹配 "),e("br")]),n._v(" "),e("h2",{attrs:{id:"regexp-对象的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regexp-对象的方法"}},[n._v("#")]),n._v(" RegExp 对象的方法")]),n._v(" "),e("p",[n._v("1.0 match方法")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('  var str = "hello WoRld";\n    var reg = /world/i;\n    var reg1 = /worldd/i;\n    var a = str.match(reg);\n    console.log(a) // \'WoRld\' 返回匹配到的字符\n    console.log(str.match(reg1)); // null 不存在\n\n    // g 的话就不一样了\n    var str2 = "hello good node";\n    var reg2 = /od/g;\n    var b = str2.match(reg2); \n    console.log(b) // ["od", "od"]\n\n    // 结合ig  ig 和gi 没区别的\n    var str3="Is this all there is?";\n\tvar patt1=/is/ig;\n\tconsole.log(str3.match(patt1)) // ["Is", "is", "is"]\n')])])]),e("p",[e("a",{attrs:{href:"http://www.zliel.top/vpdemo/js-demo/js-req/reg-1.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("demo"),e("OutboundLink")],1),n._v(" "),e("br"),n._v("\n2.0 test 方法"),e("br"),n._v("\ntest()方法搜索字符串指定的值，根据结果并返回真或假。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  var str = 'runoob';\nvar patt1 = new RegExp('\\\\w', 'g'); // 有转义作为正则表达式处理\nvar patt2 = new RegExp('\\w', 'g');  // 无转义作为字符串处理\nvar patt3 =/\\w+/g;  // 与 patt1 效果相同\nconsole.log(patt1.test(str)) // true\nconsole.log(patt2.test(str)) // false\nconsole.log(patt3.test(str)) // true\n\n")])])]),e("p",[e("a",{attrs:{href:"http://www.zliel.top/vpdemo/js-demo/js-req/reg-2.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("demo"),e("OutboundLink")],1),n._v(" "),e("br"),n._v("\n3.0 exec 方法"),e("br"),n._v("\nexec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(' var patt1=new RegExp("e");\nconsole.log(patt1.exec("The best things in life are free")); // [\'e\',...]\n\n')])])]),e("p",[e("a",{attrs:{href:"http://www.zliel.top/vpdemo/js-demo/js-req/reg-3.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("demo"),e("OutboundLink")],1),n._v(" "),e("br")]),n._v(" "),e("p",[n._v("更多方法：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('1.0 toString  返回正则表达式的字符串。\n\tvar patt = new RegExp("RUNOOB", "g");\n    var res = patt.toString(); // /RUNOOB/g\n\n2.0 source  属性用于返回模式匹配所用的文本。\n\tvar patt1=/RUN/g;\n\tpatt1.source // RUN\n\n3.0 multiline 属性用于返回正则表达式是否具有标志 m。\n\t如果 m 标志被设置，则该属性为 true，否则为 false。\n\tvar patt1=/RUN/g;\n\tpatt1.multiline // true\n\n4.0 ignoreCase 属性规定是否设置 "i" 标志。\n\t如果设置了 "i" 标志，则返回 true，否则返回 false。 \n\n5.0 global 属性用于返回正则表达式是否具有 "g" 。\n\t如果 g 标志被设置，则该属性为 true，否则为 false。\n\n6.0 search 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。\n    var str = "Visit Runoob!"; \n    var n = str.search(/Runoob/i); // 6 \n    var n = str.search(/Runoobb/i); // 不存在返回 -1\n\n    这样也可以\n    var str = "Visit Runoob!"; \n    var n = str.search("Runoob");\n\n7.0 replace  方法替换与正则表达式匹配的子串。\n    var str = \'Visit Microsoft!\'; \n    var txt = str.replace(/microsoft/i,"Runoob"); // Visit Runoob!\n    注意： 匹配不成功的话 就 txt == str\n\n    // 单纯替换字符串 这样写也行\n    var txt = str.replace("Microsoft","Runoob");\n8.0 split() 方法把字符串分割成字符串数组 不改变原来的数组\n    var str="How are you doing today?";\n    var n=str.split(" "); // ["How", "are", "you", "doing", "today?"]\n\n    语法： string.split(separator,limit)\n    separator 可选。字符串或正则表达式\n    limit 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。\n')])])]),e("p",[n._v("这是 一个demo")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("6.0 lastIndex 属性用于规定下次匹配的起始位置。\n\n注意： 该属性只有设置标志 g 才能使用。\n\n上次匹配的结果是由方法 RegExp.exec() 和 RegExp.test() 找到的，它们都以 lastIndex 属性所指的位置作为下次检索的起始点。这样，就可以通过反复调用这两个方法来遍历一个字符串中的所有匹配文本。\n\n注意：该属性是可读可写的。只要目标字符串的下一次搜索开始，就可以对它进行设置。当方法 exec() 或 test() 再也找不到可以匹配的文本时，它们会自动把 lastIndex 属性重置为 0。\n\n")])])]),e("p",[e("a",{attrs:{href:"http://www.zliel.top/vpdemo/js-demo/js-req/reg-4.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("demo"),e("OutboundLink")],1),n._v(" "),e("br")]),n._v(" "),e("p",[n._v("基本认识：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('方括号\n    1.0  [abc]  查找方括号之间的任何字符。\n\n    2.0 [^abc]   查找任何不在方括号之间的字符。\n\n    3.0 [0-9]   查找任何从 0 至 9 的数字。\n\n    4.0 [a-z]   查找任何从小写 a 到小写 z 的字符。\n\n    5.0 [A-Z]   查找任何从大写 A 到大写 Z 的字符。\n\n    6.0 [A-z]   查找任何从大写 A 到小写 z 的字符。\n\n    7.0 [adgk]  查找给定集合内的任何字符。\n\n    8.0 [^adgk] 查找给定集合外的任何字符。\n\n    9.0 (red|blue|green)    查找任何指定的选项。\n\n量词\n    1.0 n+  \n        匹配任何包含至少一个 n 的字符串。\n        例如，/a+/ 匹配 "candy" 中的 "a"，"caaaaaaandy" 中所有的 "a"。\n\n    2.0 n*  \n        匹配任何包含零个或多个 n 的字符串。\n        例如，/bo*/ 匹配 "A ghost booooed" 中的 "boooo"，"A bird warbled" 中的 "b"，但是不匹配 "A goat grunted"。\n\n    3.0 n?  \n        匹配任何包含零个或一个 n 的字符串。\n        例如，/e?le?/ 匹配 "angel" 中的 "el"，"angle" 中的 "le"。\n\n    4.0 n{X}    \n        匹配包含 X 个 n 的序列的字符串。\n        例如，/a{2}/ 不匹配 "candy," 中的 "a"，但是匹配 "caandy," 中的两个 "a"，且匹配 "caaandy." 中的前两个 "a"。\n\n    5.0 n{X,}   \n        X 是一个正整数。前面的模式 n 连续出现至少 X 次时匹配。\n        例如，/a{2,}/ 不匹配 "candy" 中的 "a"，但是匹配 "caandy" 和 "caaaaaaandy." 中所有的 "a"。\n\n    6.0 n{X,Y}  \n        X 和 Y 为正整数。前面的模式 n 连续出现至少 X 次，至多 Y 次时匹配。\n        例如，/a{1,3}/ 不匹配 "cndy"，匹配 "candy," 中的 "a"，"caandy," 中的两个 "a"，匹配 "caaaaaaandy" 中的前面三个 "a"。注意，当匹配 "caaaaaaandy" 时，即使原始字符串拥有更多的 "a"，匹配项也是 "aaa"。\n\n    7.0 n$  匹配任何结尾为 n 的字符串。\n\n    8.0 ^n  匹配任何开头为 n 的字符串。\n\n    9.0 ?=n 匹配任何其后紧接指定字符串 n 的字符串。\n\n    10.0 ?!n    匹配任何其后没有紧接指定字符串 n 的字符串\n\n\n')])])]),e("p",[n._v("记录一下简单的 正则表达式的 规则")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('两个特殊的符号 ^ 和 $ 他们的作用分别是指出一个字符串的开始和结束。\n    例子：\n    "^The"：表示所有以"The"开始的字符串（"There"，"The cat"等）；\n\n    "of despair$"：表示所以以"of despair"结尾的字符串；\n\n    "^abc$"：表示开始和结尾都是"abc"的字符串——呵呵，只有"abc"自己了；\n\n    "notice"：表示任何包含"notice"的字符串。\n\n\n其它还有\'*\'，\'+\'和\'?\'这三个符号，表示一个或一序列字符重复出现的次数。\n\n它们分别表示“没有或更多”，“一次或更多”还有“没有或一次”。\n    下面是几个例子：\n\n    "ab*"：表示一个字符串有一个a后面跟着零个或若干个b。（"a", "ab", "abbb",……）；\n\n    "ab+"：表示一个字符串有一个a后面跟着至少一个b或者更多；\n\n    "ab?"：表示一个字符串有一个a后面跟着零个或者一个b；\n\n    "a?b+$"：表示在字符串的末尾有零个或一个a跟着一个或几个b。\n\n    你也可以使用范围，用大括号括起，用以表示重复次数的范围。\n\n    "ab{2}"：表示一个字符串有一个a跟着2个b（"abb"）；\n\n    "ab{2,}"：表示一个字符串有一个a跟着至少2个b；\n\n    "ab{3,5}"：表示一个字符串有一个a跟着3到5个b。\n\n    请注意，你必须指定范围的下限（如："{0,2}"而不是"{,2}"）。\n\n    还有，你可能注意到了，\'*\'，\'+\'和\'?\'相当于"{0,}"，"{1,}"和"{0,1}"\n\n\n还有一个\'|\'，表示“或”操作：\n\n    "hi|hello"：表示一个字符串里有"hi"或者"hello"；\n\n    "(b|cd)ef"：表示"bef"或"cdef"；\n\n    "(a|b)*c"：表示一串"a""b"混合的字符串后面跟一个"c"；\n\n\'.\'可以替代任何字符：\n\n    "a.[0-9]"：表示一个字符串有一个"a"后面跟着一个任意字符和一个数字；\n\n    "^.{3}$"：表示有任意三个字符的字符串（长度为3个字符）；\n\n方括号表示某些字符允许在一个字符串中的某一特定位置出现：\n\n    "[ab]"：表示一个字符串有一个"a"或"b"（相当于"a¦b"）；\n\n    "[a-d]"：表示一个字符串包含小写的\'a\'到\'d\'中的一个（相当于"a¦b¦c¦d"或者"[abcd]"）；\n\n    "^[a-zA-Z]"：表示一个以字母开头的字符串；\n\n    "[0-9]%"：表示一个百分号前有一位的数字；\n\n    ",[a-zA-Z0-9]$"：表示一个字符串以一个逗号后面跟着一个字母或数字结束。\n\n    你也可以在方括号里用\'^\'表示不希望出现的字符，\'^\'应在方括号里的第一位。\n\n    （如："%[^a-zA-Z]%"表示两个百分号中不应该出现字母）。\n\n为了逐字表达，你必须在"^.$()|*+?{\\"这些字符前加上转移字符\'\\\'。\n\n请注意在方括号中，不需要转义字符。\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);