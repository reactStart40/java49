import { Employee } from "../model/Employee";
 
export class Company {
 constructor(private employees: Employee[]){
   
 }
    addEmployee(empl:Employee):void{
        this.employees.push(empl);

    }
    updateEmployee(empl:Employee):void{
        const emplUpdated= this.getEmployee(empl.id);
        if (emplUpdated != null){
         emplUpdated.department = empl.department;
         emplUpdated.salary = empl.salary;   
        }
    }
     getEmployee(id:number): Employee | null{
        const index: number = this.employees.findIndex(e =>e.id ===id);
        return index < 0 ? null : this.employees[index];
     }
     removeEmployee (id:number):void{
        const index:number = this.employees.findIndex( e=> e.id ===id);
        index >=0 && this.employees.splice(index,1);
     }
     getAllEmployees(): Employee[]{
        return this.employees.slice();
     }
}
