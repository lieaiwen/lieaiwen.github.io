## Git常用命令
**git经典图**
![avatar](/images/git/git-1.png)<br>
**图中专用名词解释**
1. Worksspace: 工作区
2. Index/Stage: 暂存区
3. Repository: 本地仓库
4. Remote: 远程仓库

**接下来就是常用命令了**

1. git clone https://gitee.com/zhengleilieaiwen/studygit.git
>克隆项目到本地

2. git add . 
>添加所有到暂存区
3. git commit -m '第一次修改'
>(提交到本地仓库)
4. git push origin master 
>(提交到主分支)
5. git checkout -b dev 
>(创建dev分支并切换到该分支)
6. git checkout master 
>(切换到master分支)
7. git pull origin dev 
>（拉取dev分支到master分支）
>>dev分支修改了 two.txt 提交了 然后你在 master分支 也修改 two.txt 
这时候你是拉取不了dev内容的 你必须先把 修改保存在 暂存区 也就是 commit一下
这时候 two里面就会有两个分支的代码 修改一下 再提交到master
8. git branch  （查看当前分支）
>(切换到master分支)
9. git branch -vv
>（查看当前的本地分支与远程分支的关联关系）
10. git log  
>(查看当前分支的提交信息)
11. git reset --hard commit_id 
>(回退到某个分支)

**强制覆盖某个分支**
``` js
// 1. 将test分支强制（-f）推送到主分支master
git push origin test:master -f     
 
// 2. 假设当前位于test分支

git checkout master //将当前分支切换到主分支

git reset --hard test  //将主分支重置为test分支

git push origin master -f //将重置后的master分支强制推送到远程仓库
```

