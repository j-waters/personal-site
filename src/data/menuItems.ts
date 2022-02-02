export interface MenuItem {
    title: string;
    route: string;
}

export default [
    { title: "About", route: "/about" },
    { title: "Projects", route: "/projects" },
    { title: "Contact", route: "/contact" },
] as MenuItem[];
