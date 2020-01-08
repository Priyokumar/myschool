package com.yourschool.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yourschool.server.dto.empType.Designation;
import com.yourschool.server.dto.empType.EmployeeType;
import com.yourschool.server.service.ScEmployeeTypeService;

@RestController
@RequestMapping("/api/employee-type")
public class ScEmployeTypeController {
	
	@Autowired
	private ScEmployeeTypeService employeeTypeService;
	
	@GetMapping
	public List<EmployeeType> findAllEmployeeTypes() {
		return employeeTypeService.findEmployeeTypes();
	}
	
	@GetMapping(value = "/{id}")
	public EmployeeType findEmployeeType(@PathVariable("id") Long id) {
		return employeeTypeService.findEmployeeTypeById(id);
	}
	
	@GetMapping(value = "/{id}/designations")
	public List<Designation>  findDesignationsByEmployeeType(@PathVariable("id") Long id) {
		return employeeTypeService.findDesignationsByEmployeeType(id);
	}
	
	@GetMapping(value = "/designations/{id}")
	public Designation  findDesignationById(@PathVariable("id") Long id) {
		return employeeTypeService.findDesignationById(id);
	}

}
