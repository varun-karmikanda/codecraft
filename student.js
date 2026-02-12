var Student = /** @class */ (function () {
    function Student(name, usn, age) {
        var _this = this;
        this.setName = function (name) {
            _this.name = name;
        };
        this.setUSN = function (usn) {
            _this.usn = usn;
        };
        this.setAge = function (age) {
            _this.age = age;
        };
        this.getName = function () {
            return _this.name;
        };
        this.getUSN = function () {
            return _this.usn;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.name = name;
        this.usn = usn;
        this.age = age;
    }
    Student.prototype.toString = function () {
        return "Student{\n    name: ".concat(this.name, ",\n    usn: ").concat(this.usn, ",\n    age: ").concat(this.age, "\n}");
    };
    return Student;
}());
var student = new Student("Varun", "CS67", 21);
console.log(student.toString());
