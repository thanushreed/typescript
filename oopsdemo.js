var Employee = /** @class */ (function () {
    function Employee(empcode, empName) {
        this.empCode = empcode;
        this.empName = empName;
    }
    Employee.prototype.displayName = function () {
        console.log("Name = " + this.empName + ", Employee Code= " + this.empCode);
    };
    return Employee;
}());
var emp = new Employee(100, "Steve");
emp.displayName();
