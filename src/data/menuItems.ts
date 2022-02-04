export interface MenuItem {
    title: string;
    route: string;
}

export default [
    { title: "About me", route: "/about" },
    { title: "Projects", route: "/projects" },
] as MenuItem[];
