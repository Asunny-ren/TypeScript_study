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
    return  person.name + ',��һ��' + person.sex + '��,����Ϊ' + person.age;
}
var me = new my('rjd', '��', 23);
