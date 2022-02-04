export interface MenuItem {
    title: string;
    route: string;
}

export default [
    { title: "About Me", route: "/about" },
    { title: "My Projects", route: "/projects" },
] as MenuItem[];
