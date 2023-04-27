(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{70:function(n,r,t){"use strict";t.r(r);var e=t(0),i=Object(e.a)({},(function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"快速排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速排序"}},[n._v("#")]),n._v(" 快速排序")]),n._v(" "),t("p",[n._v("在平均状况下，排序 n 个项目要 Ο(nlogn) 次比较。在最坏状况下则需要 Ο(n2) 次比较，但这种状况并不常见。事实上，快速排序通常明显比其他 Ο(nlogn) 算法更快，因为它的内部循环（inner loop）可以在大部分的架构上很有效率地被实现出来。"),t("br"),n._v("\n快速排序使用分治法（Divide and conquer）策略来把一个串行（list）分为两个子串行（sub-lists）。"),t("br")]),n._v(" "),t("p",[n._v("快速排序又是一种分而治之思想在排序算法上的典型应用。本质上来看，快速排序应该算是在冒泡排序基础上的递归分治法。"),t("br")]),n._v(" "),t("p",[n._v("快速排序的名字起的是简单粗暴，因为一听到这个名字你就知道它存在的意义，就是快，而且效率高！它是处理大数据最快的排序算法之一了。虽然 Worst Case 的时间复杂度达到了 O(n²)，但是人家就是优秀， "),t("br"),n._v("\n快速排序的最坏运行情况是 O(n²)，比如说顺序数列的快排。但它的平摊期望时间是 O(nlogn)，且 O(nlogn) 记号中隐含的常数因子很小，比复杂度稳定等于 O(nlogn) 的归并排序要小很多。所以，对绝大多数顺序性较弱的随机数列而言，快速排序总是优于归并排序。"),t("br"),n._v("\n步骤 "),t("br"),n._v('\n从数列中挑出一个元素，称为 "基准"（pivot）; '),t("br"),n._v("\n重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作； "),t("br"),n._v("\n递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序；"),t("br")]),n._v(" "),t("p",[n._v("如下图：\n"),t("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2019/03/quickSort.gif",alt:"avatar"}})]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function quickSort(arr, left, right) {\n    var len = arr.length,\n        partitionIndex,\n        left = typeof left != 'number' ? 0 : left,\n        right = typeof right != 'number' ? len - 1 : right;\n\n    if (left < right) {\n        partitionIndex = partition(arr, left, right);\n        quickSort(arr, left, partitionIndex-1);\n        quickSort(arr, partitionIndex+1, right);\n    }\n    return arr;\n}\n\nfunction partition(arr, left ,right) {     // 分区操作\n    var pivot = left,                      // 设定基准值（pivot）\n        index = pivot + 1;\n    for (var i = index; i <= right; i++) {\n        if (arr[i] < arr[pivot]) {\n            swap(arr, i, index);\n            index++;\n        }        \n    }\n    swap(arr, pivot, index - 1);\n    return index-1;\n}\n\nfunction swap(arr, i, j) {\n    var temp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = temp;\n}\n\n")])])]),t("p",[t("a",{attrs:{href:"http://www.zliel.top/vpdemo/sort-demo/sort6.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("demo"),t("OutboundLink")],1),n._v(" "),t("br")])])}),[],!1,null,null,null);r.default=i.exports}}]);