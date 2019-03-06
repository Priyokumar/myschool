package com.ls.myschool.entity.student;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.ls.myschool.entity.employee.ScAddress;
import com.ls.myschool.entity.employee.ScRecordAudit;

@Entity
@Table(name = "SC_STUDENT")
public class ScStudent implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "SC_ID")
	private Long id;

	@Column(name = "REGISTRATION_NO")
	private String registrationNo;

	@Column(name = "REGISTRATION_DATE")
	private Date registrationDate;

	@Column(name = "REGISTRATION_STATUS")
	private String registrationStatus;

	@Column(name = "FIRST_NAME")
	private String firstName;

	@Column(name = "MIDDLE_NAME")
	private String middleName;

	@Column(name = "LAST_NAME")
	private String lastName;

	@Column(name = "STANDARD")
	private String standard;

	@Column(name = "ROLL_NO")
	private Integer rollNo;

	@Column(name = "DOB")
	private Date dob;

	@Column(name = "JOINING_DATE")
	private Date joiningDate;

	@Embedded
	private ScRecordAudit recordAudit = new ScRecordAudit();

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "CORRESPONDENT_ADDRESS_ID")
	private ScAddress correspondentAddress;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "PERMANENT_ADDRESS_ID")
	private ScAddress permanentAddress;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "FATHER_INFO_ID")
	private ScStudentGuardian fatherInfo;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "MOTHER_INFO_ID")
	private ScStudentGuardian motherInfo;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "GUARDIAN_INFO_ID")
	private ScStudentGuardian guardianInfo;

	public ScStudentGuardian getFatherInfo() {
		return fatherInfo;
	}

	public void setFatherInfo(ScStudentGuardian fatherInfo) {
		this.fatherInfo = fatherInfo;
	}

	public ScStudentGuardian getMotherInfo() {
		return motherInfo;
	}

	public void setMotherInfo(ScStudentGuardian motherInfo) {
		this.motherInfo = motherInfo;
	}

	public ScStudentGuardian getGuardianInfo() {
		return guardianInfo;
	}

	public void setGuardianInfo(ScStudentGuardian guardianInfo) {
		this.guardianInfo = guardianInfo;
	}

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

	public Date getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(Date registrationDate) {
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

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public Long getAge() {

		return null;

	}

	public Date getJoiningDate() {
		return joiningDate;
	}

	public void setJoiningDate(Date joiningDate) {
		this.joiningDate = joiningDate;
	}

	public ScAddress getCorrespondentAddress() {
		return correspondentAddress;
	}

	public void setCorrespondentAddress(ScAddress correspondentAddress) {
		this.correspondentAddress = correspondentAddress;
	}

	public ScAddress getPermanentAddress() {
		return permanentAddress;
	}

	public void setPermanentAddress(ScAddress permanentAddress) {
		this.permanentAddress = permanentAddress;
	}

	public ScRecordAudit getRecordAudit() {
		return recordAudit;
	}

	public void setRecordAudit(ScRecordAudit recordAudit) {
		this.recordAudit = recordAudit;
	}

}
