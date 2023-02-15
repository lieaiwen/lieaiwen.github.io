## es6 相关知识点2

## 1.0 Promise 的模拟实现
1.0 简易版
```
function myPromise(fun){
        var that = this;
        that.status = "pending";
        that.value = undefined;
        that.reason = undefined;
        function resolve(value){
            if(that.status === "pending"){
                that.value = value;
                that.status = "resolved";
            }
        }
        function reject(reason){
            if(that.status === "pending"){
                that.reason = reason;
                that.status = "rejected";
            }
        }
        //捕获构造异常
        try{
            fun(resolve,reject);
        }catch(e){
            reject(e);
        }
    }
    myPromise.prototype.then=function(onFullfilled,onRejected){
        let self=this;
        switch(self.status){
            case "resolved":
                onFullfilled(self.value);
                break;
            case "rejected":
                onRejected(self.reason);
                break;
            default:
        }
    }
    var aa = new myPromise(function(resolve,reject){ resolve(1)});
    console.log(aa)
    aa.then(function(res){console.log(res)}) 
```
