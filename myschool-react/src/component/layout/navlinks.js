
export const navLinks = [

    { id: "1", name: "Dashboard", icon: "fas fa-chart-line", link: "/module/dashboard", hasSubMenus: false, subMenus: [] },
    { id: "2", name: "User", icon: "fas fa-users", link: "/module/users", hasSubMenus: false, subMenus: [] },
    { id: "3", name: "Role", icon: "fas fa-user-tag", link: "/module/roles", hasSubMenus: false, subMenus: [] },

    {
        id: "4", link: "", name: "Employee", icon: "fas fa-people-carry", hasSubMenus: true, subMenus:
            [
                { id: "1", link: "/module/employees", name: "Employee", icon: "dashboard" },
                { id: "2", link: "/employee/attendence-list", name: "Attendence", icon: "dashboard" },
                { id: "3", link: "/employee/salaries", name: "Salary", icon: "dashboard" },
                { id: "4", link: "/employee/pay-salaries", name: "Salary payment", icon: "dashboard" }
            ]
    }

]

export const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}