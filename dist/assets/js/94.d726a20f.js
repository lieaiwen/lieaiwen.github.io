(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{314:function(r,n,t){"use strict";t.r(n);var e=t(6),a=Object(e.a)({},(function(){var r=this,n=r.$createElement,t=r._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h2",{attrs:{id:"基数排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基数排序"}},[r._v("#")]),r._v(" 基数排序")]),r._v(" "),t("p",[r._v("基数排序是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。 "),t("br"),r._v("\n基数排序 vs 计数排序 vs 桶排序 "),t("br"),r._v("\n基数排序有两种方法："),t("br"),r._v("\n这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异： "),t("br"),r._v("\n基数排序：根据键值的每位数字来分配桶；"),t("br"),r._v("\n计数排序：每个桶只存储单一键值；"),t("br"),r._v("\n桶排序：每个桶存储一定范围的数值；"),t("br")]),r._v(" "),t("p",[r._v("如下图：\n"),t("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2019/03/radixSort.gif",alt:"avatar"}})]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("\nvar counter = [];\nfunction radixSort(arr, maxDigit) {\n    var mod = 10;\n    var dev = 1;\n    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {\n        for(var j = 0; j < arr.length; j++) {\n            var bucket = parseInt((arr[j] % mod) / dev);\n            if(counter[bucket]==null) {\n                counter[bucket] = [];\n            }\n            counter[bucket].push(arr[j]);\n        }\n        var pos = 0;\n        for(var j = 0; j < counter.length; j++) {\n            var value = null;\n            if(counter[j]!=null) {\n                while ((value = counter[j].shift()) != null) {\n                      arr[pos++] = value;\n                }\n          }\n        }\n    }\n    return arr;\n}\nmaxDigit(最大位数 下面的是两位)\n\tconsole.log( radixSort([1,3,2,4,56,7,84,3,5],2) )\n")])])]),t("p",[t("a",{attrs:{href:"http://www.zliel.top/vpdemo/sort-demo/sort10.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("demo"),t("OutboundLink")],1),r._v(" "),t("br")])])}),[],!1,null,null,null);n.default=a.exports}}]);