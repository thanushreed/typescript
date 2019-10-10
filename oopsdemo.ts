class Employee{
    empCode: number;
    empName: string;
    constructor(empcode:number, empName:string) {
        this.empCode= empcode;
        this.empName=empName;
    }
    displayName():void {
        console.log("Name = "+this.empName+ ", Employee Code= "+ this.empCode);
    }
}
let emp= new Employee(100,"Steve");
emp.displayName();
