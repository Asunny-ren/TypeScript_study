# TypeScript：JavaScript的超集

来源：http://www.typescriptlang.org/

Node安装

命令行npm install -g typescript

编译  

命令行tsc hello.ts

demo
``` typescript
class Student {
    fullName: string;
    constructor(public firstName, public middleInnitial, public lastName) {
        this.fullName = firstName + ' ' + middleInnitial + ' ' + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function req_user(person: Person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
var user = new Student('RJD', 'M.', 'RDD');
document.body.innerHTML = req_user(user);
```

tsc hello.ts

``` javascript
var Student = (function () {
    function Student(firstName, middleInnitial, lastName) {
        this.firstName = firstName;
        this.middleInnitial = middleInnitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInnitial + ' ' + lastName;
    }
    return Student;
}());
function req_user(person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
var user = new Student('RJD', 'M.', 'RDD');
document.body.innerHTML = req_user(user);

```


## 创建一个简单工程

依赖于Node.js

gulp:使用Gulp构建TypeScript，和如何在Gulp管道里添加Browserify， uglify或Watchify。

1.创建一个文件目录

     mkdir test

     cd test

2.TypeScript文件放在src文件夹下，经过TypeScript编译器编译生成的目标文件放在dist目录下。

     mkdir src

    mkdir dist

3.初始化工程:

把文件夹转换成npm包

    npm init

    你将看到有一些提示操作。 除了入口文件外，其余的都可以使用默认项。
    入口文件使用 ./dist/main.js。 你可以随时在 package.json文件里更改生成的配置。

4.安装依赖项

首先全局安装typescript和gulp

     npm install -g typescript gulp-cli
然后安装gulp和gulp-typescript到开发依赖项：gulp-typescript是typescript的一个gulp插件

     npm install --save-dev gulp gulp-typescript
