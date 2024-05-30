package com.ibm.springboot.demo.service;

import java.util.List;
import java.util.Optional;

import javax.lang.model.element.Element;

import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.ibm.springboot.demo.exception.DepartmentNotFoundException;
import com.ibm.springboot.demo.exception.EmployeeNotFoundException;
import com.ibm.springboot.demo.model.Department;
import com.ibm.springboot.demo.repository.DepartmentRepository;

@Service
public class DepartmentServicelmpl implements DepartmentService {

	private final Logger LOG = LoggerFactory.getLogger(this.getClass());

	@Autowired
	DepartmentRepository departmentRepository;

	@Override
	public List<Department> getAllDepartments() {
		// TODO Auto-generated method stub
		LOG.info("getAllDepartment");
		return departmentRepository.findAll();
	}

	@Override
	public Department getDepartmentById(String departmentId) {
		Optional<Department> depOptional = departmentRepository.findById(departmentId);
		// TODO Auto-generated method stub
		if (depOptional.isEmpty()) {
			String errorMessage = "Department with the id " + departmentId + " is not found!";
			LOG.warn(errorMessage);
			throw new DepartmentNotFoundException(errorMessage);
		}
		LOG.info(departmentId.toString());
		return depOptional.get();
	}

	/*
	 * @Override public List<Department> getDepartmentByName(String departmentName)
	 * { // TODO Auto-generated method stub LOG.info(departmentName); return
	 * departmentRepository.findByDepName(departmentName); }
	 */

	@Override
	public Department addDepartment(Department department) {
		// TODO Auto-generated method stub
		LOG.info(department.toString());
		return departmentRepository.save(department);
	}

	@Override
	public Department updateDepartment(Department department) {
		// TODO Auto-generated method stub
		return null;
	}

	// TODO Auto-generated method stub
	@Override
	public Department deleteDepartment(String departmentId) {
		LOG.info(departmentId);
		Department deptToBeDeleted = this.getDepartmentById(departmentId);
		if (deptToBeDeleted == null) {
			String errorMessage = "Department not found";
			LOG.warn(errorMessage);
			throw new DepartmentNotFoundException(errorMessage);
		} else {
			departmentRepository.deleteById(departmentId);
			LOG.info("Department with departmentId: " + departmentId + " has been deleted");
			return deptToBeDeleted;
		}

	}

	@Override
	public List<Department> getDepartmentByLocation(String location) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Department> getDepartmentBymanagerID(String managerId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Department> getDepartmentByName(String departmentName) {
		// TODO Auto-generated method stub
		return null;
	}

}
