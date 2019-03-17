
DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
);

DROP TABLE IF EXISTS `sc_academic_background`;
CREATE TABLE `sc_academic_background` (
  `board` varchar(255) DEFAULT NULL,
  `highest_qualification` bit(1) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `pass_out_year` datetime DEFAULT NULL,
  `school_institue` varchar(255) DEFAULT NULL,
  `score` varchar(255) DEFAULT NULL,
  `start_year` datetime DEFAULT NULL,
  `highest_qualification_employee_sc_id` bigint(20) NOT NULL
);

DROP TABLE IF EXISTS `sc_address`;
CREATE TABLE `sc_address` (
  `sc_id` int(11) NOT NULL,
  `country` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `first_line` varchar(255) DEFAULT NULL,
  `second_line` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_admission`;
CREATE TABLE `sc_admission` (
  `sc_id` bigint(20) NOT NULL,
  `academic_year` varchar(255) DEFAULT NULL,
  `admission_amount` double DEFAULT NULL,
  `admission_date` datetime DEFAULT NULL,
  `admission_ref_no` varchar(255) DEFAULT NULL,
  `due_amount` double DEFAULT NULL,
  `paid_amount` double DEFAULT NULL,
  `promise_to_pay_date` datetime DEFAULT NULL,
  `created_by` tinyblob,
  `created_date` datetime DEFAULT NULL,
  `updated_by` tinyblob,
  `updated_date` datetime DEFAULT NULL,
  `standard` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `student_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_document_details`;
CREATE TABLE `sc_document_details` (
  `sc_id` bigint(20) NOT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `employee_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_document`;
CREATE TABLE `sc_document` (
  `sc_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_employee_attendence_ref`;
CREATE TABLE `sc_employee_attendence_ref` (
  `employee_attd_id` bigint(20) NOT NULL,
  `employee_id` bigint(20) NOT NULL
);

DROP TABLE IF EXISTS `sc_employee_attendence`;
CREATE TABLE `sc_employee_attendence` (
  `sc_id` bigint(20) NOT NULL,
  `att_date` datetime DEFAULT NULL,
  `created_by` tinyblob,
  `created_date` datetime DEFAULT NULL,
  `updated_by` tinyblob,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_employee_history`;
CREATE TABLE `sc_employee_history` (
  `address` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `employer_name` varchar(255) DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `last_employee_history_employee_sc_id` bigint(20) NOT NULL,
  PRIMARY KEY (`last_employee_history_employee_sc_id`)
);

DROP TABLE IF EXISTS `sc_employee_salary`;
CREATE TABLE `sc_employee_salary` (
  `sc_id` bigint(20) NOT NULL,
  `created_by` tinyblob,
  `created_date` datetime DEFAULT NULL,
  `updated_by` tinyblob,
  `updated_date` datetime DEFAULT NULL,
  `salary_amount` double DEFAULT NULL,
  `employee` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_employee`;
CREATE TABLE `sc_employee` (
  `sc_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `designation` varchar(255) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `employee_type` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `joining_date` datetime DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `created_by` tinyblob,
  `created_date` datetime DEFAULT NULL,
  `updated_by` tinyblob,
  `updated_date` datetime DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `correspondent_address` int(11) DEFAULT NULL,
  `permanent_address` int(11) DEFAULT NULL,
  `profile_pic` tinyblob,
  `mobile_no` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_expense`;
CREATE TABLE `sc_expense` (
  `sc_id` bigint(20) NOT NULL,
  `amount` double DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `expense_date` datetime DEFAULT NULL,
  `expense_details` varchar(255) DEFAULT NULL,
  `expense_type` varchar(255) DEFAULT NULL,
  `created_by` tinyblob,
  `created_date` datetime DEFAULT NULL,
  `updated_by` tinyblob,
  `updated_date` datetime DEFAULT NULL,
  `ref_no` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_fee`;
CREATE TABLE `sc_fee` (
  `sc_id` bigint(20) NOT NULL,
  `act_date_of_payment` datetime DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `expt_date_of_payment` datetime DEFAULT NULL,
  `fee_ref_no` varchar(255) DEFAULT NULL,
  `month_of` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `admission_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_income`;
CREATE TABLE `sc_income` (
  `sc_id` bigint(20) NOT NULL,
  `amount` double DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `income_date` datetime DEFAULT NULL,
  `income_details` varchar(255) DEFAULT NULL,
  `income_type` varchar(255) DEFAULT NULL,
  `created_by` tinyblob,
  `created_date` datetime DEFAULT NULL,
  `updated_by` tinyblob,
  `updated_date` datetime DEFAULT NULL,
  `ref_no` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_manage_admission_fee_yearly`;
CREATE TABLE `sc_manage_admission_fee_yearly` (
  `sc_id` bigint(20) NOT NULL,
  `year` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_manage_admission_fee`;
CREATE TABLE `sc_manage_admission_fee` (
  `sc_id` bigint(20) NOT NULL,
  `admission_amount` double DEFAULT NULL,
  `fee_amount` double DEFAULT NULL,
  `standard` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `sc_maint_adm_fee_yearly_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_menu`;
CREATE TABLE `sc_menu` (
  `sc_id` int(11) NOT NULL,
  `has_submenu` bit(1) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `menu_order` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_pay_salary`;
CREATE TABLE `sc_pay_salary` (
  `sc_id` bigint(20) NOT NULL,
  `due_amount` double DEFAULT NULL,
  `paid_amount` double DEFAULT NULL,
  `pay_date` datetime DEFAULT NULL,
  `created_by` tinyblob,
  `created_date` datetime DEFAULT NULL,
  `updated_by` tinyblob,
  `updated_date` datetime DEFAULT NULL,
  `employee_salary` bigint(20) DEFAULT NULL,
  `salary_amount` double DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_personal_info`;
CREATE TABLE `sc_personal_info` (
  `aadhar_card` varchar(255) DEFAULT NULL,
  `driving_licence` varchar(255) DEFAULT NULL,
  `pan_card` varchar(255) DEFAULT NULL,
  `voter_id` varchar(255) DEFAULT NULL,
  `personal_info_employee_sc_id` bigint(20) NOT NULL,
  `aadhar_card_doc` bigint(20) DEFAULT NULL,
  `driving_licence_doc` bigint(20) DEFAULT NULL,
  `pan_card_doc` bigint(20) DEFAULT NULL,
  `voter_id_doc` bigint(20) DEFAULT NULL,
  `grad_cert_doc` bigint(20) DEFAULT NULL,
  `post_grad_cert_doc` bigint(20) DEFAULT NULL,
  `x_cert_doc` bigint(20) DEFAULT NULL,
  `xiicert_doc` bigint(20) DEFAULT NULL,
  `xii_cert_doc` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`personal_info_employee_sc_id`)
);

DROP TABLE IF EXISTS `sc_role`;
CREATE TABLE `sc_role` (
  `sc_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_by` tinyblob,
  `created_date` datetime DEFAULT NULL,
  `updated_by` tinyblob,
  `updated_date` datetime DEFAULT NULL,
  `role_desc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_staff_class_ref`;
CREATE TABLE `sc_staff_class_ref` (
  `staff_id` bigint(20) NOT NULL,
  `class_id` bigint(20) NOT NULL
);

DROP TABLE IF EXISTS `sc_staff_subject_ref`;
CREATE TABLE `sc_staff_subject_ref` (
  `staff_id` bigint(20) NOT NULL,
  `subject_id` bigint(20) NOT NULL
);

DROP TABLE IF EXISTS `sc_staff`;
CREATE TABLE `sc_staff` (
  `sc_id` bigint(20) NOT NULL,
  `created_by` tinyblob,
  `created_date` datetime DEFAULT NULL,
  `updated_by` tinyblob,
  `updated_date` datetime DEFAULT NULL,
  `employee` bigint(20) DEFAULT NULL,
  `student_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_student_attendence_ref`;
CREATE TABLE `sc_student_attendence_ref` (
  `student_attd_id` bigint(20) NOT NULL,
  `student_id` bigint(20) NOT NULL
);

DROP TABLE IF EXISTS `sc_student_attendence`;
CREATE TABLE `sc_student_attendence` (
  `sc_id` bigint(20) NOT NULL,
  `att_date` datetime DEFAULT NULL,
  `created_by` tinyblob,
  `created_date` datetime DEFAULT NULL,
  `updated_by` tinyblob,
  `updated_date` datetime DEFAULT NULL,
  `standard` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_student_class`;
CREATE TABLE `sc_student_class` (
  `sc_id` bigint(20) NOT NULL,
  `class_code` int(11) DEFAULT NULL,
  `class_name` varchar(255) DEFAULT NULL,
  `created_by` tinyblob,
  `created_date` datetime DEFAULT NULL,
  `updated_by` tinyblob,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_student_guardian`;
CREATE TABLE `sc_student_guardian` (
  `sc_id` bigint(20) NOT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `relationship` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_student_registration`;
CREATE TABLE `sc_student_registration` (
  `sc_id` bigint(20) NOT NULL,
  `created_by` tinyblob,
  `created_date` datetime DEFAULT NULL,
  `updated_by` tinyblob,
  `updated_date` datetime DEFAULT NULL,
  `registration_date` datetime DEFAULT NULL,
  `registration_no` varchar(255) DEFAULT NULL,
  `registration_status` varchar(255) DEFAULT NULL,
  `student_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_student`;
CREATE TABLE `sc_student` (
  `sc_id` bigint(20) NOT NULL,
  `dob` datetime DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `joining_date` datetime DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `created_by` tinyblob,
  `created_date` datetime DEFAULT NULL,
  `updated_by` tinyblob,
  `updated_date` datetime DEFAULT NULL,
  `registration_date` datetime DEFAULT NULL,
  `registration_no` varchar(255) DEFAULT NULL,
  `registration_status` varchar(255) DEFAULT NULL,
  `roll_no` int(11) DEFAULT NULL,
  `standard` varchar(255) DEFAULT NULL,
  `correspondent_address_id` int(11) DEFAULT NULL,
  `father_info_id` bigint(20) DEFAULT NULL,
  `guardian_info_id` bigint(20) DEFAULT NULL,
  `mother_info_id` bigint(20) DEFAULT NULL,
  `permanent_address_id` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `blood_group` varchar(255) DEFAULT NULL,
  `religion` varchar(255) DEFAULT NULL,
  `caste` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `aadhaar_no` varchar(255) DEFAULT NULL,
  `community` varchar(255) DEFAULT NULL,
  `physically_challenged` bit(1) DEFAULT NULL,
  `same_as_perm_addr` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_sub_menu`;
CREATE TABLE `sc_sub_menu` (
  `sc_id` int(11) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `menu_order` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_subject`;
CREATE TABLE `sc_subject` (
  `sc_id` bigint(20) NOT NULL,
  `subject_code` varchar(255) DEFAULT NULL,
  `subject_name` varchar(255) DEFAULT NULL,
  `class_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_user_audit`;
CREATE TABLE `sc_user_audit` (
  `sc_id` bigint(20) NOT NULL,
  `action` varchar(255) DEFAULT NULL,
  `action_date` datetime DEFAULT NULL,
  `action_type` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_user_role`;
CREATE TABLE `sc_user_role` (
  `sc_id` int(11) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);

DROP TABLE IF EXISTS `sc_user`;
CREATE TABLE `sc_user` (
  `sc_id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `linked_id` bigint(20) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_by` tinyblob,
  `created_date` datetime DEFAULT NULL,
  `updated_by` tinyblob,
  `updated_date` datetime DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `employee_id` bigint(20) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
);