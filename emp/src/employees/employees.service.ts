import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee} from 'src/employees/entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CreateEmployeeParams, UpdateEmployeeParams } from 'src/employees/dto/type';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
  
 
  
  remove: any;
  create: any;
  update(arg0: number, updateEmployeeDto: UpdateEmployeeDto) {
    throw new Error('Method not implemented.');
  }
    findAll: any;
  findOne: any;
    constructor(
        @InjectRepository(Employee) private employeeRepository: Repository<Employee>,
    ) { }

    getEmployee() {
      console.log("sanjay")
        return this.employeeRepository.find();
    }

    createEmployee(employeeDetails: CreateEmployeeParams) {
        console.log("sanjay", employeeDetails)
        const newEmployee = this.employeeRepository.create(employeeDetails);
        return this.employeeRepository.save(newEmployee);
    }

    updateEmployee(id: string, updateEmployeeDetails: UpdateEmployeeParams) {
        
        return this.employeeRepository.update({ id}, { ...updateEmployeeDetails })
    }

    deleteEmployee(id: string) {
        return this.employeeRepository.delete(id)
    }
}
  