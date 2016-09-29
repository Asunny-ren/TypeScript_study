class my {
    me: string;
    constructor(public name, public sex, public age){
        this.me = name + ' ' + sex + ' ' + age;
    }
}
interface Person {
    name: string;
    sex: string;
    age: number;
}
function create_user (person: Person) {
    return  person.name + ',是一个' + person.sex + '生,年龄为' + person.age;
}
var me = new my('rjd', '男', 23);
