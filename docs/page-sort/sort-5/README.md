## 归并排序
归并排序（Merge sort）是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。 <br>
作为一种典型的分而治之思想的算法应用，归并排序的实现由两种方法：<br>
自上而下的递归<br>
自下而上的迭代；<br>
和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是 O(nlogn) 的时间复杂度。代价是需要额外的内存空间。<br>
	步骤 <br>
	申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列； <br>
	设定两个指针，最初位置分别为两个已经排序序列的起始位置； <br>
	比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置 <br>
	重复步骤 3 直到某一指针达到序列尾；<br>
	将另一序列剩下的所有元素直接复制到合并序列尾。<br>

如下图：
![avatar](https://www.runoob.com/wp-content/uploads/2019/03/mergeSort.gif)
```
function mergeSort(arr) {  // 采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}
```
[demo](http://www.zliel.top/vpdemo/sort-demo/sort5.html)  <br>