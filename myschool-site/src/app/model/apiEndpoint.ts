
export class ApiEndpoint {

    //public static BASE_URL = "http://www.pesl.org.in:8080";
    public static BASE_URL = "http://localhost:8080";

    public static SITE = ApiEndpoint.BASE_URL + "/site";
    public static CONTACT_US = ApiEndpoint.SITE + "/contact-us";
    public static ADMISSION_ENQUIRY = ApiEndpoint.SITE + "/admission-enquiry";

}