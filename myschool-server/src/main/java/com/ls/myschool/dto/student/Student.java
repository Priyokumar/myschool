package com.ls.myschool.dto.student;

import com.ls.myschool.dto.employee.Address;
import com.ls.myschool.dto.employee.RecordAudit;

public class Student {

	private Long id;

	private String registrationNo;

	private String registrationDate;

	private String registrationStatus;

	private String firstName;

	private String middleName;

	private String lastName;

	private String standard;

	private Integer rollNo;

	private String dob;

	private Long age;

	private String joiningDate;

	private Address correspondentAddress;

	private Address permanentAddress;

	private RecordAudit recordAudit;

	/* private List<StudentGuardian> guardians = new ArrayList<>(); */
	private StudentGuardian fatherInfo;

	private StudentGuardian motherInfo;

	private StudentGuardian guardianInfo;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRegistrationNo() {
		return registrationNo;
	}

	public void setRegistrationNo(String registrationNo) {
		this.registrationNo = registrationNo;
	}

	public String getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(String registrationDate) {
		this.registrationDate = registrationDate;
	}

	public String getRegistrationStatus() {
		return registrationStatus;
	}

	public void setRegistrationStatus(String registrationStatus) {
		this.registrationStatus = registrationStatus;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public StudentGuardian getFatherInfo() {
		return fatherInfo;
	}

	public void setFatherInfo(StudentGuardian fatherInfo) {
		this.fatherInfo = fatherInfo;
	}

	public StudentGuardian getMotherInfo() {
		return motherInfo;
	}

	public void setMotherInfo(StudentGuardian motherInfo) {
		this.motherInfo = motherInfo;
	}

	public StudentGuardian getGuardianInfo() {
		return guardianInfo;
	}

	public void setGuardianInfo(StudentGuardian guardianInfo) {
		this.guardianInfo = guardianInfo;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getStandard() {
		return standard;
	}

	public void setStandard(String standard) {
		this.standard = standard;
	}

	public Integer getRollNo() {
		return rollNo;
	}

	public void setRollNo(Integer rollNo) {
		this.rollNo = rollNo;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public Long getAge() {
		return age;
	}

	public void setAge(Long age) {
		this.age = age;
	}

	public String getJoiningDate() {
		return joiningDate;
	}

	public void setJoiningDate(String joiningDate) {
		this.joiningDate = joiningDate;
	}

	public Address getCorrespondentAddress() {
		return correspondentAddress;
	}

	public void setCorrespondentAddress(Address correspondentAddress) {
		this.correspondentAddress = correspondentAddress;
	}

	public Address getPermanentAddress() {
		return permanentAddress;
	}

	public void setPermanentAddress(Address permanentAddress) {
		this.permanentAddress = permanentAddress;
	}

	public RecordAudit getRecordAudit() {
		return recordAudit;
	}

	public void setRecordAudit(RecordAudit recordAudit) {
		this.recordAudit = recordAudit;
	}

}
