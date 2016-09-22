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
