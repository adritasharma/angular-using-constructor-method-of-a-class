export class Employee {
  name: string;
  id: number;
  annualSalary: number;
  monthlySalary:number
  constructor(name: string, id: number, annualSalary: number) {
    this.name = name,
    this.id = id,
    this.annualSalary = annualSalary,
    this.monthlySalary = this.calculateMonthlySalary(annualSalary)
    
  }

  calculateMonthlySalary(annualSalary: number): any {
    return annualSalary / 12;
  }
}