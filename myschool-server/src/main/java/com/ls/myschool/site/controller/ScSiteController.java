package com.ls.myschool.site.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.context.Context;

import com.ls.myschool.dto.ActionResponse;
import com.ls.myschool.service.ScEmailService;
import com.ls.myschool.site.dto.AdmissionEnquiry;
import com.ls.myschool.site.dto.ContactUs;

@RestController
@RequestMapping("/site")
public class ScSiteController {

	@Autowired
	private ScEmailService emailService;

	private static final String TEMPLATE = "template";
	private static final String BODY = "body";

	@PostMapping(value = "/contact-us")
	private ActionResponse contactUs(@RequestBody ContactUs contactUs) {

		ActionResponse actionResponse = new ActionResponse();

		Context context = new Context();
		context.setVariable(BODY, contactUs);
		context.setVariable(TEMPLATE, "contact-us");
		emailService.sendTemplateEmail("priyon999@gmail.com", context);

		actionResponse.setActionMessage("Ok");
		return actionResponse;
	}
	
	@PostMapping(value = "/admission-enquiry")
	private ActionResponse admissionEnquiry(@RequestBody AdmissionEnquiry admissionEnquiry) {

		ActionResponse actionResponse = new ActionResponse();

		Context context = new Context();
		context.setVariable(BODY, admissionEnquiry);
		context.setVariable(TEMPLATE, "admission-enquiry");
		emailService.sendTemplateEmail("priyon999@gmail.com", context);

		actionResponse.setActionMessage("Ok");
		return actionResponse;
	}
}
