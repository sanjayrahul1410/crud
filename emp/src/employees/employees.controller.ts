import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
    getEmployees() {
        console.log("sanjayrahul")
        return this.employeesService.getEmployee();
    }

    @Post()
    createEmployees(@Body() createEmployeeDto: CreateEmployeeDto) {
        console.log("sanjay")
        return this.employeesService.createEmployee(createEmployeeDto);
    }

    @Put(':id')
    async updateEmployee(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
        await this.employeesService.updateEmployee(id, updateEmployeeDto);
    }

    @Delete(':id')
    async deleteEmployee(@Param('id') id:string) {
        await this.employeesService.deleteEmployee(id);
    }
}

