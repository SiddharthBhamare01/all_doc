package com.ibm.springboot.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.springboot.demo.model.Employee;
import com.ibm.springboot.demo.service.EmployeeService;

@RestController
@RequestMapping("emp")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

//	http://localhost:8090/emp/get-emp-pages?page=1&size=5&sortBy=firstName

	@GetMapping(path = "get-emp-pages", produces = "application/json")
	public ResponseEntity<Page<Employee>> getEmpPages(@RequestParam(defaultValue = "0") Integer page,
			@RequestParam(defaultValue = "10") Integer size, @RequestParam(defaultValue = "id") String sortBy) {
		Page<Employee> empList = employeeService.getEmployeePages(page, size, sortBy);
		HttpStatus status = HttpStatus.OK;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "All employees data fetched successfully!");
		ResponseEntity<Page<Employee>> response = new ResponseEntity<Page<Employee>>(empList, headers, status);
		return response;
	}

	@GetMapping(path = "get-all-emps", produces = "application/json")
	public ResponseEntity<List<Employee>> getAllEmps() {
		List<Employee> empList = employeeService.getAllEmployees();
		HttpStatus status = HttpStatus.OK;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "All employees data fetched successfully!");
		ResponseEntity<List<Employee>> response = new ResponseEntity<List<Employee>>(empList, headers, status);
		return response;
	}

	@GetMapping("get-emp-by-id/{eid}")
	public ResponseEntity<Employee> getEmpById(@PathVariable(name = "eid") String employeeId) {
		Employee employee = employeeService.getEmployeeById(employeeId);
		HttpStatus status = HttpStatus.OK;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "Employee data fetched successfully!");
		ResponseEntity<Employee> response = new ResponseEntity<Employee>(employee, headers, status);
		return response;
	}

	@GetMapping("get-emp-by-name/{fname}")
	public ResponseEntity<List<Employee>> getEmpName(@PathVariable(name = "fname") String firstName) {
		List<Employee> empList = employeeService.getEmployeeByFirstName(firstName);
		HttpStatus status = HttpStatus.OK;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "Employees data fetched successfully!");
		ResponseEntity<List<Employee>> response = new ResponseEntity<List<Employee>>(empList, headers, status);
		return response;
	}

	@PostMapping(path = "add-emp", produces = "application/json", consumes = "application/json")
	public ResponseEntity<Employee> addEmp(@RequestBody Employee employee) {
		Employee empToBeAdded = employeeService.addEmployee(employee);
		HttpStatus status = HttpStatus.CREATED;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "Employee added successfully!");
		ResponseEntity<Employee> response = new ResponseEntity<Employee>(empToBeAdded, headers, status);
		return response;
	}
	@PutMapping(path = "update-emp", produces = "application/json", consumes = "application/json")
	public ResponseEntity<Employee> updateEmp(@RequestBody Employee employee) {
		Employee empToBeAdded = employeeService.updateEmployee(employee);
		HttpStatus status = HttpStatus.CREATED;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "Employee updated successfully!");
		ResponseEntity<Employee> response = new ResponseEntity<Employee>(empToBeAdded, headers, status);
		return response;
	}

	@DeleteMapping(path = "delete-emp", produces = "application/json", consumes = "application/json")
	public ResponseEntity<Employee> deleteEmp(@RequestBody String employeeId) {
		System.out.println(employeeId);
		Employee empToBeDeleted = employeeService.deleteEmployee(employeeId);
		HttpStatus status = HttpStatus.CREATED;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "Employee deleted successfully!");
		ResponseEntity<Employee> response = new ResponseEntity<Employee>(empToBeDeleted, headers, status);
		return response;
	}
}

//package com.ibm.springboot.demo.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.ibm.springboot.demo.model.Employee;
//import com.ibm.springboot.demo.service.EmployeeService;
//
//@RestController
//@RequestMapping("emp")
//public class EmployeeController {
//
//	@Autowired
//	EmployeeService employeeService;
//	
////	http://localhost:8080/emp/get-emp-by-id/101
//
//	@GetMapping("get-emp-by-id/{eid}")
//	public Employee getEmpById( @PathVariable(name = "eid") Integer employeeId) {
//		System.out.println(employeeId);
//		Employee employee = employeeService.getEmployeeById(employeeId);
//		System.out.println(employee.toString());
//		return employee;
//	}
//
//	@GetMapping("get-all-emps")
//	public List<Employee> getAllEmps() {
//		List<Employee> empList = employeeService.getAllEmployees();
//		empList.forEach(System.out::println);
//		return empList;
//	}
//
//}

//package com.ibm.springboot.demo.controller;
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("emp")
//public class EmployeeController {
//
////	http://localhost:8080/emp/get-data
//	
//	@GetMapping("get-data")
//	public String hi() {
//		System.out.println("Hello!");
//		return "Employee world!";
//	}
//
//
//}
