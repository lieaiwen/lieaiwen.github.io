## 命令模式
在软件系统中，“行为请求者”与“行为实现者”通常呈现一种“紧耦合”。但在某些场合，比如要对行为进行“记录、撤销/重做、事务”等处理，这种无法抵御变化的紧耦合是不合适的。在这种情况下，如何将“行为请求者”与“行为实现者”解耦？将一组行为抽象为对象，实现二者之间的松耦合。这就是命令模式（Command Pattern）。
<br>
在命令的发布者和接收者之间，定义一个命令对象，命令对象暴露出一个统一的接口给
命令发布者，而命令的发布者不用去管接收者是如何执行命令的，做到命令的发布者和接收者的“解耦”。

<br>
举一个如果页面中有3个按钮，给不同按钮添加不同功能的例子

``` 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>cmd-demo</title>
</head>
<body>
    <div>
        <button id="btn1">按钮1</button>
        <button id="btn2">按钮2</button>
        <button id="btn3">按钮3</button>
    </div>
    <script>
        var btn1 = document.getElementById('btn1')
        var btn2 = document.getElementById('btn2')
        var btn3 = document.getElementById('btn3')

        // 定义一个命令发布者(执行者)的类
        class Executor {
            setCommand(btn, command) {
                btn.onclick = function() {
                    command.execute()
                }
            }
        }

        // 定义一个命令接收者
        class Menu {
            refresh() {
                console.log('刷新菜单')
            }

            addSubMenu() {
                console.log('增加子菜单')
            }
        }

        // 定义一个刷新菜单的命令对象的类
        class RefreshMenu {
            constructor(receiver) {
                // 命令对象与接收者关联
                this.receiver = receiver
            }

            // 暴露出统一的接口给命令发布者Executor
            execute() {
                this.receiver.refresh()
            }
        }

        // 定义一个增加子菜单的命令对象的类
        class AddSubMenu {
            constructor(receiver) {
                // 命令对象与接收者关联
                this.receiver = receiver
            }
            // 暴露出统一的接口给命令发布者Executor
            execute() {
                this.receiver.addSubMenu()
            }
        }

        var menu = new Menu()
        var executor = new Executor()

        var refreshMenu = new RefreshMenu(menu)
        // 给按钮1添加刷新功能
        executor.setCommand(btn1, refreshMenu)

        var addSubMenu = new AddSubMenu(menu)
        // 给按钮2添加增加子菜单功能
        executor.setCommand(btn2, addSubMenu)

        // 如果想给按钮3增加删除菜单的功能，就继续增加删除菜单的命令对象和接收者的具体删除方法，而不必修改命令对象
    </script>
</body>
</html>
```



