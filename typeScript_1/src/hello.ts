// 接口
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function req_user(person: Person) {
//     return "hello" + person.firstName + '' + person.lastName;
// }
// var user = {firstName: 'RJD', lastName: 'RDD'};
// document.body.innerHTML = req_user(user);

//类

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
