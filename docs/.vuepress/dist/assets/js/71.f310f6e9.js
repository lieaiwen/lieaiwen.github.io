(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{73:function(r,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},(function(){var r=this,n=r.$createElement,a=r._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h2",{attrs:{id:"堆排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆排序"}},[r._v("#")]),r._v(" 堆排序")]),r._v(" "),a("p",[r._v("堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。堆排序可以说是一种利用堆的概念来排序的选择排序。分为两种方法： "),a("br"),r._v("\n大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列"),a("br")]),r._v(" "),a("p",[r._v("小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列；"),a("br"),r._v("\n堆排序的平均时间复杂度为 Ο(nlogn)。"),a("br"),r._v("\n步骤 "),a("br"),r._v("\n创建一个堆 H[0……n-1]； "),a("br"),r._v("\n把堆首（最大值）和堆尾互换 "),a("br"),r._v("\n把堆的尺寸缩小 1，并调用 shift_down(0)，目的是把新的数组顶端数据调整到相应位置；"),a("br"),r._v("\n重复步骤 2，直到堆的尺寸为 1。"),a("br")]),r._v(" "),a("p",[r._v("如下图："),a("br"),r._v(" "),a("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2019/03/heapSort.gif",alt:"avatar"}}),r._v(" "),a("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2019/03/Sorting_heapsort_anim.gif",alt:"avatar"}})]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("var len;    // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量\n\nfunction buildMaxHeap(arr) {   // 建立大顶堆\n    len = arr.length;\n    for (var i = Math.floor(len/2); i >= 0; i--) {\n        heapify(arr, i);\n    }\n}\n\nfunction heapify(arr, i) {     // 堆调整\n    var left = 2 * i + 1,\n        right = 2 * i + 2,\n        largest = i;\n\n    if (left < len && arr[left] > arr[largest]) {\n        largest = left;\n    }\n\n    if (right < len && arr[right] > arr[largest]) {\n        largest = right;\n    }\n\n    if (largest != i) {\n        swap(arr, i, largest);\n        heapify(arr, largest);\n    }\n}\n\nfunction swap(arr, i, j) {\n    var temp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = temp;\n}\n\nfunction heapSort(arr) {\n    buildMaxHeap(arr);\n\n    for (var i = arr.length-1; i > 0; i--) {\n        swap(arr, 0, i);\n        len--;\n        heapify(arr, 0);\n    }\n    return arr;\n}\n")])])]),a("p",[a("a",{attrs:{href:"http://www.zliel.top/vpdemo/sort-demo/sort7.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("demo"),a("OutboundLink")],1),r._v(" "),a("br")])])}),[],!1,null,null,null);n.default=e.exports}}]);