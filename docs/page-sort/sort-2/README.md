## 选择排序
选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。 <br>
	步骤 <br>
	首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。 <br>
	再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。 <br>
	重复第二步，直到所有元素均排序完毕。<br>
	自己总结 就是 <br>
	遍历一遍 找到最小的放在第一个位置，再遍历一遍(剩下的的不包括第一个位置)，知道最小的放在第二个位置，以此类推<br>

如下图：
![avatar](https://www.runoob.com/wp-content/uploads/2019/03/selectionSort.gif)
```
function selectSort(arr){
		var len = arr.length; 
		var minIndex , temp;
		for(var i=0;i<len-1;i++){
			minIndex =i;
			for(var j=i+1;j<len;j++){
				if(arr[j] < arr[minIndex]){
					minIndex = j;
				}
			}
			temp =arr[i];
			arr[i] =arr[minIndex];
			arr[minIndex] = temp;
		}
		return arr;
	}
```
[demo](http://www.zliel.top/vpdemo/sort-demo/sort2.html)  <br>