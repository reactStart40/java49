import { Employee } from "../model/Employee";
export class Company {
 constructor(private employees: Employee[]){
 }
    addEmployee(empl:Employee):void{
        this.employees.push(empl);
    }
    updateEmployee(empl:Employee):void{
        const emplUpdated= this.getEmployee(empl.id);
         console.log (empl.id, empl.department, empl.salary);
        if (emplUpdated != null){
         
         empl.department = emplUpdated.department;
         empl.name = emplUpdated.name;
         empl.birthDate = emplUpdated.birthDate;

          if(emplUpdated.salary>=20000){
            empl.salary = Math.round(emplUpdated.salary*0.9);
          }
          else {
            empl.salary= Math.round(emplUpdated.salary*1.1);
         }
         console.log (emplUpdated.salary, empl.salary);
         this.removeEmployee(empl.id);
         this.addEmployee(empl)
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
