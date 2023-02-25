import { Employee } from "../model/Employee";
import employeeConfig from "../config/employee-config.json";
import { getRandomNumber } from "../utils/random";


export class Company {
    private employees: Employee[] = [];
    addEmployee(empl: Employee): void {
        empl.id= randomEmployeeId(this.employees);
        this.employees.push(empl);
    }

    updateEmployee(empl: Employee): void {
        const index = this.employees.findIndex(e => e.id == empl.id);
        if (index >= 0) {

            this.employees[index] = empl;
        }
    }
    getEmployee(id: number): Employee | null {
        const index: number = this.employees.findIndex(e => e.id === id);
        return index < 0 ? null : this.employees[index];
    }
    removeEmployee(id: number): void {
        const index: number = this.employees.findIndex(e => e.id === id);
        index >= 0 && this.employees.splice(index, 1);
    }
    getAllEmployees(): Employee[] {
        return this.employees.slice();
    }
}

function randomEmployeeId(employees: Employee[]) : number {
    const {minId, maxId} = employeeConfig;
  

    const existingIds = employees.map(emp => emp.id);
  
    let randomId: number;
    do {
      randomId = getRandomNumber(minId, maxId, true, true);
    } while (existingIds.includes(randomId));
  
    return randomId;
  }
  
