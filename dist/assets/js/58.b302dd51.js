(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{69:function(r,t,e){"use strict";e.r(t);var n=e(0),l=Object(n.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h2",{attrs:{id:"归并排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#归并排序"}},[r._v("#")]),r._v(" 归并排序")]),r._v(" "),e("p",[r._v("归并排序（Merge sort）是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。 "),e("br"),r._v("\n作为一种典型的分而治之思想的算法应用，归并排序的实现由两种方法："),e("br"),r._v("\n自上而下的递归"),e("br"),r._v("\n自下而上的迭代；"),e("br"),r._v("\n和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是 O(nlogn) 的时间复杂度。代价是需要额外的内存空间。"),e("br"),r._v("\n步骤 "),e("br"),r._v("\n申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列； "),e("br"),r._v("\n设定两个指针，最初位置分别为两个已经排序序列的起始位置； "),e("br"),r._v("\n比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置 "),e("br"),r._v("\n重复步骤 3 直到某一指针达到序列尾；"),e("br"),r._v("\n将另一序列剩下的所有元素直接复制到合并序列尾。"),e("br")]),r._v(" "),e("p",[r._v("如下图：\n"),e("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2019/03/mergeSort.gif",alt:"avatar"}})]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("function mergeSort(arr) {  // 采用自上而下的递归方法\n    var len = arr.length;\n    if(len < 2) {\n        return arr;\n    }\n    var middle = Math.floor(len / 2),\n        left = arr.slice(0, middle),\n        right = arr.slice(middle);\n    return merge(mergeSort(left), mergeSort(right));\n}\n\nfunction merge(left, right)\n{\n    var result = [];\n\n    while (left.length && right.length) {\n        if (left[0] <= right[0]) {\n            result.push(left.shift());\n        } else {\n            result.push(right.shift());\n        }\n    }\n\n    while (left.length)\n        result.push(left.shift());\n\n    while (right.length)\n        result.push(right.shift());\n\n    return result;\n}\n")])])]),e("p",[e("a",{attrs:{href:"http://www.zliel.top/vpdemo/sort-demo/sort5.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("demo"),e("OutboundLink")],1),r._v(" "),e("br")])])}),[],!1,null,null,null);t.default=l.exports}}]);