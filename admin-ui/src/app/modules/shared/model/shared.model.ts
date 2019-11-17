export const allSideNavs: ISideNav[] = [

    { title: 'Dashboard', path: '/dashboard', icon: 'home', hasSubmenu: false, submenu: [] },
    {
        title: 'Employees', path: '', icon: 'cloud_circle', hasSubmenu: true, submenu:
            [
                { title: 'Employee List', path: '/admin/employees', icon: 'dashboard', hasSubmenu: false, submenu: [] },
                { title: 'Attendances', path: '/admin/employees/attendence-create', icon: 'dashboard', hasSubmenu: false, submenu: [] },
                { title: 'Salaries', path: '/admin/employees/salaries', icon: 'dashboard', hasSubmenu: false, submenu: [] },
                { title: 'Paid Salaries', path: '/admin/employees/paid-salaries', icon: 'dashboard', hasSubmenu: false, submenu: [] },
            ]
    },
    {
        title: 'Maintenance', path: '', icon: 'wc', hasSubmenu: true, submenu:
            [
                { title: 'Admission Fees', path: '/admin/maintenances/admission-fees', icon: 'dashboard', hasSubmenu: false, submenu: [] },
                { title: 'Classes', path: '/admin/maintenances/classes', icon: 'dashboard', hasSubmenu: false, submenu: [] },
            ]
    },
    {
        title: 'Student Management', path: '', icon: 'wc', hasSubmenu: true, submenu:
            [
                { title: 'Student', path: '/admin/students', icon: 'dashboard', hasSubmenu: false, submenu: [] },
                { title: 'Admission', path: '/admin/students/admissions', icon: 'dashboard', hasSubmenu: false, submenu: [] },
                { title: 'Attendence', path: '/admin/students/attendances', icon: 'dashboard', hasSubmenu: false, submenu: [] },
            ]
    },
    {
        title: 'Incomes And Expenses', path: '', icon: 'wc', hasSubmenu: true, submenu:
            [
                { title: 'Incomes', path: '/admin/incomes-expenses/incomes', icon: 'dashboard', hasSubmenu: false, submenu: [] },
                { title: 'Expenses', path: '/admin/incomes-expenses/expenses', icon: 'dashboard', hasSubmenu: false, submenu: [] },
            ]
    }
];

export interface ISideNav {
    title: string;
    path: string;
    icon: string;
    hasSubmenu: boolean;
    submenu: ISideNav[];
    isExternalUrl?: boolean;
}

export class ApiEndpoint {

    public static BASE_URL = 'http://localhost:9090';

    public static SECURITY = ApiEndpoint.BASE_URL + '/security';
    public static LOGIN = ApiEndpoint.BASE_URL + '/login';
    public static EMPLOYEES = ApiEndpoint.BASE_URL + '/api/employees';
    public static ADMISSIONS = ApiEndpoint.BASE_URL + '/api/admission-fees';
    public static STUDENTS = ApiEndpoint.BASE_URL + '/api/students';
    public static ADDMISSION_FEE_MAINTENANCE = ApiEndpoint.BASE_URL + '/api/maintenance/admission-fees';
    public static EXPENSES = ApiEndpoint.BASE_URL + '/api/expenses';
    public static INCOMES = ApiEndpoint.BASE_URL + '/api/incomes';
    public static ROLES = ApiEndpoint.BASE_URL + '/api/roles';
    public static USERS = ApiEndpoint.BASE_URL + '/api/users';
    public static EMPLOYEE_SALARY = ApiEndpoint.BASE_URL + '/api/salaries';
    public static EMPLOYEE_ATTENDENCES = ApiEndpoint.BASE_URL + '/employee-attendences';
    public static PAY_SALARY = ApiEndpoint.BASE_URL + '/api/pay-salaries';
    public static DOCUMENT = ApiEndpoint.BASE_URL + '/document';


}

export class Utils {

    static getDay(day: number) {
        switch (day) {
            case 0:
                return 'Sunday';

            case 1:
                return 'Monday';

            case 2:
                return 'Tuesday';

            case 3:
                return 'Wednesday';

            case 4:
                return 'Thursday';

            case 5:
                return 'Friday';

            case 6:
                return 'Saturday';

            default:
                return '';
        }
    }
}

export const districts: string[] = [
    'Thoubal',
    'Bishnupur',
    'Imphal East',
    'Imphal West',
    'Senapati',
    'Ukhrul',
    'Chandel',
    'Churachandpur',
    'Tamenglong',
    'Jiribam',
    'Kangpokpi',
    'Kakching',
    'Tengnoupal',
    'Kamjong',
    'Noney',
    'Pherzawl'
];

