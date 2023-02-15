## 状态模式
状态模式：状态模式允许一个对象在其内部状态改变的时候改变行为。这个对象看上去
像是改变了它的类一样。状态模式把所研究的对象的行为包装在不同的状态对象里，每一个
状态对象都属于一个抽象状态类的一个子类。状态模式的意图是让一个对象在其内部状态改变的时候，
其行为也随之改变。状态模式需要对每一个系统可能取得的状态创立一个状态类的子类。当系统的
状态变化时，系统便改变所选的子类。
<br>
举一个关于开关控制电灯的例子，电灯只有一个开关，第一次按下打开弱光，
第二次按下打开强光，第三次按下关闭。
``` 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>state-demo</title>
</head>

<body>
    <button id="btn">开关</button>
    <script>
        // 定义一个关闭状态的类   
        class OffLightState {
            constructor(light) {
                this.light = light
            }
            // 每个类都需要这个方法，在不同状态下按都需要触发这个方法
            pressBtn() {
                this.light.setState(this.light.weekLightState)
                console.log('开启弱光')
            }
        }

        // 定义一个弱光状态的类   
        class WeekLightState {
            constructor(light) {
                this.light = light
            }
            pressBtn() {
                this.light.setState(this.light.strongLightState)
                console.log('开启强光')
            }
        }

        // 定义一个强光状态的类
        class StrongLightState {
            constructor(light) {
                this.light = light
            }
            pressBtn() {
                this.light.setState(this.light.offLightState)
                console.log('关闭电灯')
            }
        }

        class Light {
            constructor() {
                this.offLightState = new OffLightState(this)
                this.weekLightState = new WeekLightState(this)
                this.strongLightState = new StrongLightState(this)
                this.currentState = null
            }
            setState(newState) {
                this.currentState = newState
            }
            init() {
                this.currentState = this.offLightState
            }
        }

        let light = new Light()
        light.init()
        var btn = document.getElementById('btn')
        btn.onclick = function() {
            light.currentState.pressBtn()
        }
    </script>
</body>

</html>
```
如果这时候需要增加一个超强光，则只需增加一个超强光的类，并添加pressBtn方法，改变强光状态下，点击开关需要把状态更改为超强光，超强光状态下，点击开关把状态改为关闭即可，其他代码都不需要改动。
``` 
class StrongLightState {
    constructor(light) {
        this.light = light
    }
    pressBtn() {
        this.light.setState(this.light.superLightState)
        console.log('开启超强光')
    }
}

class SuperLightState {
    constructor(light) {
        this.light = light
    }
    pressBtn() {
        this.light.setState(this.light.offLightState)
        console.log('关闭电灯')
    }
}

class Light {
    constructor() {
        this.offLightState = new OffLightState(this)
        this.weekLightState = new WeekLightState(this)
        this.strongLightState = new StrongLightState(this)
        this.superLightState = new SuperLightState(this)
        this.currentState = null
    }
    setState(newState) {
        this.currentState = newState
    }
    init() {
        this.currentState = this.offLightState
    }
}
```
小结：
1.0 通过定义不同的状态类，根据状态的改变而改变对象的行为,而
不必把大量的逻辑写在被操作对象的类里面，而且容易增加新的状态
<br>
2.0 符合开放封闭原则



