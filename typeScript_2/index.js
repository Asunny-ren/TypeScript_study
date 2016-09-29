var my = (function () {
    function my(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.me = name + ' ' + sex + ' ' + age;
    }
    return my;
}());
function create_user(person) {
    return person.name + ',��һ��' + person.sex + '��,����Ϊ' + person.age;
}
var me = new my('rjd', '��', 23);
