package com.ibm.springboot.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ibm.springboot.demo.model.Employee;
import com.ibm.springboot.demo.service.EmployeeService;

@SpringBootTest
class AppTests {

	@Autowired
	private EmployeeService employeeService;

	private static final Logger LOG = LoggerFactory.getLogger(AppTests.class);
	
	@BeforeAll
	public static void setUp() {
		LOG.info("before all");
	}
	
	@AfterAll
	public static void tearDown() {
		LOG.info("after all");
	}
	
//	@BeforeEach
	
//	@AfterEach

//	@Test
//	public void testAddEmp() {
//		Employee emp = new Employee("asdf", "Test Data", "test@data.com", 888888888888L, 90.9);
//		assertEquals(employeeService.addEmployee(emp), emp);
//	}

	@Test
	public void testAllEmps() {
		assertEquals(employeeService.getAllEmployees().size(), 24);
	}

//	@Test
//	public void testAllEmps2() {
//		assertNotEquals(employeeService.getAllEmployees().size(), 15);
//	}
}



//package com.ibm.springboot.demo;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertNotEquals;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.ibm.springboot.demo.service.EmployeeService;
//
//@SpringBootTest
//class AppTests {
//
//	@Autowired
//	private EmployeeService employeeService;
//
//	// positive test case
//	@Test
//	public void testTest() {
//		Integer expected = 10;
//		Integer actual = 5 + 5;
//		assertEquals(expected, actual);
//	}
//
//	// negative test case
//	@Test
//	public void testTest2() {
//		Integer unexpected = 10;
//		Integer actual = 5 + 6;
//		assertNotEquals(unexpected, actual);
//	}
//	
//	
//}