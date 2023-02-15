## 冒泡排序
冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢"浮"到数列的顶端。 <br>
	步骤 <br>
	比较相邻的元素。如果第一个比第二个大，就交换他们两个。 <br>
	对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。 <br>
	针对所有的元素重复以上的步骤，除了最后一个。 <br>
	持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。<br>

如下图：
![avatar](https://www.runoob.com/wp-content/uploads/2019/03/bubbleSort.gif)
```
function bubbleSort(arr){
		var len = arr.length-1; // 长度减1 也就是数组最后一个的下标
		for(var i=0;i<len;i++){
			for(var j=0; j< len-i;j++){
				if(arr[j] > arr[j+1]){ // 相邻元素两两对比
					var temp =arr[j+1]; // 元素交换
					 arr[j+1] = arr[j];
					arr[j] = temp;
				}

			}
		}
		return arr;
	}
```
[demo](http://www.zliel.top/vpdemo/sort-demo/sort1.html)  <br>