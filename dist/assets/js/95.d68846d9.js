(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{310:function(t,r,n){"use strict";n.r(r);var a=n(6),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"冒泡排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#冒泡排序"}},[t._v("#")]),t._v(" 冒泡排序")]),t._v(" "),n("p",[t._v('冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢"浮"到数列的顶端。 '),n("br"),t._v("\n步骤 "),n("br"),t._v("\n比较相邻的元素。如果第一个比第二个大，就交换他们两个。 "),n("br"),t._v("\n对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。 "),n("br"),t._v("\n针对所有的元素重复以上的步骤，除了最后一个。 "),n("br"),t._v("\n持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。"),n("br")]),t._v(" "),n("p",[t._v("如下图：\n"),n("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2019/03/bubbleSort.gif",alt:"avatar"}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function bubbleSort(arr){\n\t\tvar len = arr.length-1; // 长度减1 也就是数组最后一个的下标\n\t\tfor(var i=0;i<len;i++){\n\t\t\tfor(var j=0; j< len-i;j++){\n\t\t\t\tif(arr[j] > arr[j+1]){ // 相邻元素两两对比\n\t\t\t\t\tvar temp =arr[j+1]; // 元素交换\n\t\t\t\t\t arr[j+1] = arr[j];\n\t\t\t\t\tarr[j] = temp;\n\t\t\t\t}\n\n\t\t\t}\n\t\t}\n\t\treturn arr;\n\t}\n")])])]),n("p",[n("a",{attrs:{href:"http://www.zliel.top/vpdemo/sort-demo/sort1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),n("OutboundLink")],1),t._v(" "),n("br")])])}),[],!1,null,null,null);r.default=e.exports}}]);