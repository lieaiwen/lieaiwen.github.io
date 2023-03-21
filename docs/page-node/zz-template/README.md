## 蓝牙key功能页面流程图

1.0 进入页面需要先判断目前是不是蓝牙key的转账方式，如果是进入2
<br>
2.0 获取蓝牙key基本信息  接口：ukey.query
<br>
```js
getKeyNumber(){
  rpc('ukey.query').then((res)=> {
    console.log('res',res)
    this.keySn = res.body.usbKeyNo;
    this.certStatusCode= res.body.certStatusCode;
    this.expired= res.body.expired;
    this.otherChannel= res.body.otherChannel
  }).catch((err)=>{
    console.log('err',err)
  })
}
```
3.0 进入相应操作需要连接蓝牙key，在这之前需要判断证书情况
<br>
判断逻辑如下：
```js
beforeConnectBluetooth(){
      // 先判断证书
      if(this.certStatusCode=='3'){// 未下载
          // 3.0 判断是否开通个人网银
        if(this.otherChannel=='1'){ // 开通
          callErrorTips("提示", `证书未下载，当前无法使用蓝牙KEY进行转账认证，请本人持有效证件到柜面或使用个人网银下载证书。`, "我知道了")
        }else{
          callErrorTips("提示", `证书未下载，当前无法使用蓝牙KEY进行转账认证，请本人持有效证件到柜面下载证书。`, "我知道了")
        }
      }else if(this.certStatusCode=='5'){ // 冻结
        callErrorTips("提示", `您的证书已冻结，当前无法使用蓝牙KEY进行转账认证，请本人持有效证件到柜面办理证书解冻。`, "我知道了")
      }else{
         // 2.0 判断日期
         let expired = Number(this.expired);
         if(expired < 30 && expired > 0){
           // 3.0 判断是否开通个人网银
           if(this.otherChannel=='1'){ // 开通
             callErrorTips("提示", `您的证书将在${expired}天内到期，建议您本人持有效证件及时到柜面或使用个人网银进行证书更新。`, "我知道了").then(res=>{
               this.connectBluetooth()
             })
           }else{
             callErrorTips("提示", `您的证书将在${expired}天内到期，建议您本人持有效证件及时到柜面进行证书更新。`, "我知道了").then(res=>{
               this.connectBluetooth()
             })
           }
         }else if(expired <= 0){
           // 3.0 判断是否开通个人网银
           if(this.otherChannel=='1') { // 开通
             callErrorTips("提示", `您的证书已失效，当前无法使用蓝牙KEY进行转账认证，请本人持有效证件到柜面或使用个人网银进行证书更新。`, "我知道了")
           }else{
             callErrorTips("提示", `您的证书已失效，当前无法使用蓝牙KEY进行转账认证，请本人持有效证件到柜面进行证书更新。`, "我知道了")
           }
         }else{
           this.connectBluetooth()
         }

       }
    }
```
4.0 连接蓝牙key
```js
 connectBluetooth(){
            let params = {sn:this.keySn}; // 'Z950970100000232'
            this.showDialogStyle = true;
            this.loadingMsg = '正在连接蓝牙KEY'
            // 2.0 连接key
            zzbkConnectBluetooth(params).then(res=>{
              // 3.0 判断是不是初始密码
              if(res.code=='0'){
                this.loadingMsg = '蓝牙KEY连接成功'
                this.abOldPwd();
              }else if(res.code=='-2'){
                this.showDialogStyle = false;
              }else{
                this.showDialogStyle = false;
                callChoiceTips("提示", '蓝牙KEY连接失败，请开启后重试。',"确定", "取消").then(msg => {
                  if (msg.retCode == '1') {
                    this.handleSaveClick();
                  }
                });
              }
            })
          },
```

5.0 判断蓝牙key是不是默认密码
```js
abOldPwd(errNum){
            zzbkGetBluetoothInfo().then(res=>{
              console.log('222233333',res,errNum)
              // isDefault是否默认密码  0否 1是  retry还剩几次  maxRetry最大次数  mediaId蓝牙key的编号
              if(res.code=='0' && res.isDefault=='1') { // 成功 不是默认密码
                callChoiceTips("温馨提示", '请修改您的蓝牙KEY密码。', "确定", "取消").then(msg => {
                  if (msg.retCode === '1') {
                    pushWindow("/zz_user_data/safe_sign/change_bluetooth_pwd.html");
                  }
                })
                // this.isOldPwd = true;
                this.showDialogStyle = false;
              }else if(res.code=='0' && res.isDefault=='0'){
                // this.isOldPwd = false;
                // this.checkOldPsw()
                if(errNum=='1'){
                  let num = Number(res.maxRetry) - Number(res.retry)
                  let msg = `蓝牙KEY密码错误${num}次，还剩余${res.retry}次，连续错误6次将被锁定`;
                  callErrorTips("提示", msg);
                  this.showDialogStyle = false;
                }else{
                  // this.isOldPwd = false;
                  this.checkOldPsw()
                }
              }else if(res.code=='-1'){
                callChoiceTips("提示", '蓝牙KEY连接失败，请重试。',"确定", "取消").then(msg => {
                  if (msg.retCode == '1') {
                    this.handleSaveClick();
                  }
                });
                this.showDialogStyle = false;
              }else{
                callErrorTips("提示", '蓝牙KEY信息获取失败，请重新连接后再次尝试。');
                this.showDialogStyle = false;
              }
            }).catch(err=>{
              console.log('2222',err)
            })
          },
```
6.0 验证密码正确与否
```js
 checkOldPsw(){
            // 原密码是否正确
            let params = {
              psw:this.oldLoginPwd,
            }
            zzbkBluetoothOldPsw(params).then(res=>{
              console.log('456789',res,res.code=='20')
              if(res.code=='0'){ // 成功
                // 5.0 上送sign
                this.handleSign()
              }else if(res.code=='20'){
                console.log('我没触发嘛',)
                this.showDialogStyle = false;
                this.abOldPwd('1');
                //toast('密码不正确，请重新输入');
              }else if(res.code=='21'){
                callErrorTips("提示", '您的蓝牙KEY已被锁定，请本人持有效证件到柜面重置。');
                this.showDialogStyle = false;
              }else if(res.code=='23'){
                callErrorTips("提示", '验证失败，请重试。');
                this.showDialogStyle = false;
              }else if(res.code=='-1'){
                callChoiceTips("提示", '蓝牙KEY连接失败，请重试。',"确定", "取消").then(msg => {
                  if (msg.retCode == '1') {
                    this.handleSaveClick();
                  }
                });
                this.showDialogStyle = false;
              }else{
                callErrorTips("提示", '验证未通过，请重试。');
                this.showDialogStyle = false;
              }
            }).catch(err=>{
              console.log('456789333',err)
            })
          },
```
7.0 交易签名
```js
handleSign(){
              this.showDialogStyle = true;
              this.loadingMsg = '交易签名中';
              setTimeout(()=>{
                this.loadingMsg = '请核对蓝牙KEY屏幕上显示的内容是否正确，如正确请按“OK”键，否则按“C”键取消';
              },1500)
              let title1 = this.isTCard ? '转入金额':'转账金额';
              let title1Msg = this.money; //this.money | currencyFormat('', 2)
              let showMsg = '';
              let hideMsg = '';
              for(let k=0;k<this.transferMsg.length;k++){
                if(this.transferMsg[k].value){
                  showMsg += `<M><k>${this.transferMsg[k].label}：</k><v>${this.transferMsg[k].value}</v></M>`
                  hideMsg += `<M><k>${this.transferMsg[k].label}：</k><v>${this.transferMsg[k].value}</v></M>`
                }
              }
              let params = `<?xml version="1.0" encoding="utf-8"?><T><D>`+
                  `<M><k>确认转账信息</k><v></v></M>`+
                  `<M><k>${title1}：</k><v>${title1Msg}</v></M>`+`${showMsg}`+`</D><E>`
                  + `<M><k>账号转账</k><v></v></M>`
                  +`<M><k>${title1}：</k><v>${title1Msg}</v></M>`+`${showMsg}` + `</E></T>`
              console.log('qweqwewqweqwe',params)
            let req = {
              transInfo:params,
              psw:this.oldLoginPwd,
              overTime:'60'
            }
            this.ukeySign = ''
            zzbkBluetoothSign(req).then(res=>{
              console.log('我看看呗',res);
              if(res.code=='0'){ // 成功了返回加签数据  6 是用户点击取消了
                this.loadingMsg = '交易签名成功';
                this.ukeySign = res.encryptMsg
                this.handleSaveClick(1)
              }else if(res.code=='20'){
                this.abOldPwd('1');
              }else if(res.code=='21'){
                callErrorTips("提示", '您的蓝牙KEY已被锁定，请本人持有效证件到柜面重置。');
              }else if(res.code=='22'){
                callErrorTips("提示", '蓝牙KEY确认未通过，如您需要进行转账交易，请提交后在蓝牙KEY点击“OK”键完成确认。');
              }else if(res.code=='23'){
                callErrorTips("提示", '验证失败，请重试。');
              }else if(res.code=='24'){
                callErrorTips("提示", '蓝牙KEY无证书或证书错误，请本人持有效证件至柜面重新下载证书。');
              }else if(res.code=='25'){
                callErrorTips("提示", '蓝牙KEY不匹配，请连接正确的蓝牙KEY。');
              }else if(res.code=='-1'){
                callChoiceTips("提示", '连接已断开，请重试。',"确定", "取消").then(msg => {
                  if (msg.retCode == '1') {
                    this.handleSaveClick();
                  }
                });
              }else if(res.code=='-3'){
                callErrorTips("提示", '蓝牙KEY连接超时，请重试。');
              }else{
                callErrorTips("提示", '验证未通过，请重试。');
              }
              this.showDialogStyle = false;
            })
          },
```
8.0 签名成功，调用密码键盘，验证交易密码，交易成功。

## 涉及范围+页面认证判断

1.0 账号转账:

根据getUserInfo 获取是不是蓝夜key转账方式
<br>
接口：transfer.accountTransfer
<br>

2.0 多人转账


根据getUserInfo 获取是不是蓝夜key转账方式
<br>
接口：transfer.batch.doTransBatch
<br>

3.0 短信签约


根据接口：user.common.authList 获取是不是蓝夜key转账方式
<br>
接口：account.commitSmsSign
<br>

4.0 纪念日存单


根据getUserInfo 获取是不是蓝夜key转账方式
<br>
接口：product.anniversary.deposit.productPreBuyCheck
<br>

5.0 支付密码设置


根据接口：user.common.authList 获取是不是蓝夜key转账方式
<br>
接口：account.commitSmsSign
<br>

6.0 电话号转账


根据getUserInfo 获取是不是蓝夜key转账方式
<br>
接口：transfer.bankTransferByMobile
<br>

7.0 预约转账


根据接口：getUserInfo 获取是不是蓝夜key转账方式
<br>
接口：transfer.futureTransfer.insert
<br>









