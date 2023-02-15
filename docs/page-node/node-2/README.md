## node 文件操作
终于要开始可以写一点代码了，手都开始痒了，最近几天有些懈怠了，可能是天气热的原因吧！多好的借口，是不（狗蛋）。

>几乎也只需要一些数据处理逻辑，再加上一些文件操作，就能编写出大部分前端工具，
>所以node里面很神奇也是我梦寐以求的一个功能，操作文件，node就可以实现。赶快尝鲜，滋溜，滋溜

NodeJS提供了基本的文件操作API，但是像文件拷贝这种高级功能就没有提供，因此我们先拿文件拷贝程序练手。与copy命令类似，我们的程序需要能接受源文件路径与目标文件路径两个参数。

**小文件拷贝**

```
var fs = require('fs');

function copy(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(argv) {
    copy(argv[0], argv[1]);
}
 // main(process.argv.slice(2));
main(['lib/input.txt','./ii.txt']); // 拷贝lib目录下的input.txt 到当前文件夹下的ii.txt 文档中
```
以上程序使用fs.readFileSync从源路径读取文件内容，并使用fs.writeFileSync将文件内容写入目标路径。
>process 是一个全局变量，可通过 process.argv 获得命令行参数。由于 argv[0] 固定等于 NodeJS 执行程序的绝对路径，argv[1] 固定等于主模块的绝对路径，因此第一个命令行参数从 argv[2] 这个位置开始。

**大文件拷贝**

上边的程序拷贝一些小文件没啥问题，但这种一次性把所有文件内容都读取到内存中后再一次性写入磁盘的方式不适合拷贝大文件，内存会爆仓。对于大文件，我们只能读一点写一点，直到完成拷贝。因此上边的程序需要改造如下。
```
 var fs = require('fs');
 
 function copy(src, dst) {
     fs.createReadStream(src).pipe(fs.createWriteStream(dst));
 }
 
 function main(argv) {
     copy(argv[0], argv[1]);
 }
 
 main(process.argv.slice(2));
```
以上程序使用 fs.createReadStream 创建了一个源文件的只读数据流，并使用 fs.createWriteStream 创建了一个目标文件的只写数据流，并且用 pipe 方法把两个数据流连接了起来。连接起来后发生的事情，说得抽象点的话，水顺着水管从一个桶流到了另一个桶。

**API**

***1.0 Buffer(数据块)***
JS语言自身只有字符串数据类型，没有二进制数据类型，因此NodeJS提供了一个与String对等的全局构造函数Buffer来提供对二进制数据的操作。除了可以读取文件得到Buffer的实例外，还能够直接构造，例如：
>var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);

Buffer与字符串类似，除了可以用.length属性得到字节长度外，还可以用[index]方式读取指定位置的字节，例如：
>bin[0]; // => 0x68;

Buffer与字符串能够互相转化，例如可以使用指定编码将二进制数据转化为字符串：
>var str = bin.toString('utf-8'); // => "hello"

或者反过来，将字符串转换为指定编码下的二进制数据：
>var bin = new Buffer('hello', 'utf-8'); // => <Buffer 68 65 6c 6c 6f>

Buffer与字符串有一个重要区别。字符串是只读的，并且对字符串的任何修改得到的都是一个新字符串，原字符串保持不变。至于Buffer，更像是可以做指针操作的C语言数组。例如，可以用[index]方式直接修改某个位置的字节。
>bin[0] = 0x48;

而.slice方法也不是返回一个新的Buffer，而更像是返回了指向原Buffer中间的某个位置的指针，如下所示。
```
 [ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]
      ^           ^
      |           |
     bin     bin.slice(2)
```
因此对.slice方法返回的Buffer的修改会作用于原Buffer，例如：
```
 var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
 var sub = bin.slice(2);
 
 sub[0] = 0x65;
 console.log(bin); // => <Buffer 68 65 65 6c 6f>
```
也因此，如果想要拷贝一份Buffer，得首先创建一个新的Buffer，并通过.copy方法把原Buffer中的数据复制过去。这个类似于申请一块新的内存，并把已有内存中的数据复制过去。以下是一个例子。
```
var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
var dup = new Buffer(bin.length);

bin.copy(dup);
dup[0] = 0x48;
console.log(bin); // => <Buffer 68 65 6c 6c 6f>
console.log(dup); // => <Buffer 48 65 65 6c 6f>
```
总之，Buffer将JS的数据处理能力从字符串扩展到了任意二进制数据。

**2.0 Stream(数据流)**
>过 暂且不是很理解 需要实际例子更确切的理解和运用

**3.0 File System（文件系统）**
>NodeJS通过fs内置模块提供对文件的操作。fs模块提供的API基本上可以分为以下三类：

```
 -文件属性读写。
 
 其中常用的有fs.stat、fs.chmod、fs.chown等等。
 
 -文件内容读写。
 
 其中常用的有fs.readFile、fs.readdir、fs.writeFile、fs.mkdir等等。
 
 -底层文件操作。
 
 其中常用的有fs.open、fs.read、fs.write、fs.close等等。
```
NodeJS最精华的异步IO模型在fs模块里有着充分的体现，例如上边提到的这些API都通过回调函数传递结果。以fs.readFile为例：
```
 fs.readFile(pathname, function(err, data){
    if(err){
        // deal width error
    } else { 
        // deal with data.
    }
 })
```
如上边代码所示，基本上所有fs模块API的回调参数都有两个。第一个参数在有错误发生时等于异常对象，第二个参数始终用于返回API方法执行结果。

此外，fs模块的所有异步API都有对应的同步版本，用于无法使用异步操作时，或者同步操作更方便时的情况。同步API除了方法名的末尾多了一个Sync之外，异常对象与执行结果的传递方式也有相应变化。同样以fs.readFileSync为例：

```
try {
    var data = fs.readFileSync(pathname);
    // Deal with data.
} catch (err) {
    // Deal with error.
} 
```
fs模块提供的API很多，这里不一一介绍，需要时请自行查阅官方文档。

**path(路径)**

path 模块提供了一些实用工具，用于处理文件和目录的路径。 可以使用以下方式访问它：
>const path = require('path');

path.basename() 方法会返回 path 的最后一部分，类似于 Unix 的 basename 命令
>let name = path.basename('./input.txt') // input.txt

```
path.normalize() 方法规范化给定的 path，解析 '..' 和 '.' 片段。

当找到多个连续的路径段分隔字符时（例如 POSIX 上的 /、Windows 上的 \ 或 /），则它们将被替换为单个平台特定的路径段分隔符（POSIX 上的 /、Windows 上的 \）。 尾部的分隔符会保留。

如果 path 是零长度的字符串，则返回 '.'，表示当前工作目录。
var cache = {};

function store(key, value) {
    cache[path.normalize(key)] = value;
}

store('foo/bar', 1);
store('foo//baz//../bar', 2);
console.log(cache);  // => { "foo/bar": 2 }
```
>注意：标准化之后的路径里的斜杠在Windows系统下是\，而在Linux系统下是/。如果想保证任何系统下都使用/作为路径分隔符的话，需要用.replace(/\\/g, '/')再替换一下标准路径。

#path.join

将传入的多个路径拼接为标准路径。该方法可避免手工拼接路径字符串的繁琐，并且能在不同系统下正确使用相应的路径分隔符。以下是一个例子：
>path.join('foo/', 'baz/', '../bar'); // => "foo/bar"

#path.extname

当我们需要根据不同文件扩展名做不同操作时，该方法就显得很好用。以下是一个例子：
>path.extname('foo/bar.js'); // => ".js"