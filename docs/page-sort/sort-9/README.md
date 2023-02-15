## 桶排序
桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。为了使桶排序更加高效，我们需要做到这两点： <br>
在额外空间充足的情况下，尽量增大桶的数量 <br>
使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中<br>
同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要。<br>

如下图：
![avatar](https://www.runoob.com/wp-content/uploads/2019/03/Bucket_sort_1.svg_.png)
![avatar](https://www.runoob.com/wp-content/uploads/2019/03/Bucket_sort_2.svg_.png)
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
[demo](http://www.zliel.top/vpdemo/sort-demo/sort9.html)  <br>