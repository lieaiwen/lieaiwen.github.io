##  堆排序
堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。堆排序可以说是一种利用堆的概念来排序的选择排序。分为两种方法： <br>
大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列<br>

小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列；<br>
堆排序的平均时间复杂度为 Ο(nlogn)。<br>
	步骤 <br>
	创建一个堆 H[0……n-1]； <br>
	把堆首（最大值）和堆尾互换 <br>
	把堆的尺寸缩小 1，并调用 shift_down(0)，目的是把新的数组顶端数据调整到相应位置；<br>
	重复步骤 2，直到堆的尺寸为 1。<br>

如下图：<br>
![avatar](https://www.runoob.com/wp-content/uploads/2019/03/heapSort.gif)
![avatar](https://www.runoob.com/wp-content/uploads/2019/03/Sorting_heapsort_anim.gif)
```
var len;    // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

function buildMaxHeap(arr) {   // 建立大顶堆
    len = arr.length;
    for (var i = Math.floor(len/2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(arr, i) {     // 堆调整
    var left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSort(arr) {
    buildMaxHeap(arr);

    for (var i = arr.length-1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }
    return arr;
}
```
[demo](http://www.zliel.top/vpdemo/sort-demo/sort7.html)  <br>