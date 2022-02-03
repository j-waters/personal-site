import menuItems from "@/data/menuItems";

export function indexFromPath(path: string) {
    while (path != "/") {
        const index = menuItems.findIndex(
            (value) => value.route == path
        );
        if (index != -1) return index
        path = path.split("/").slice(0, -1).join("/")
    }
    return -1
}
