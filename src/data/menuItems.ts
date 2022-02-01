export interface MenuItem {
    title: string;
    route: string;
}

export default [
    { title: "About", route: "/about" },
    { title: "Portfolio", route: "/portfolio" },
    { title: "Contact", route: "/contact" },
] as MenuItem[];
