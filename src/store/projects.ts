import { defineStore } from "pinia";
import pathListToTree from "path-list-to-tree";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkHtml, { Root } from "remark-html";
import remarkFrontmatterPlugin from "remark-extract-frontmatter";
import { load } from "js-yaml";

import type { Literal } from "unist";
import { TagID } from "@/store/tags";

type PostMedia = { [key: string]: string };

interface PostItem {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    tags: TagID[];
    date: Date;
    media?: PostMedia;
    summary: string;
}

interface ProjectMedia extends PostMedia {
    icon: string;
    cover: string;
}

export interface ProjectItem extends PostItem {
    github?: string;
    website?: string;
    media: ProjectMedia;
}

type Frontmatter = Omit<ProjectItem, "content" | "id" | "media">;

interface ProjectsStoreState {
    projectMap: Map<string, ProjectItem>;
}

export const useProjectsStore = defineStore("projects", {
    state: () => ({ projectMap: new Map() } as ProjectsStoreState),

    actions: {
        async load(id: string): Promise<ProjectItem | null> {
            const rc = require.context("@/assets/projects/", true, /.*/);
            const post = rc(`./${id}/post.md`);
            const md = await remark()
                .use(remarkGfm)
                .use(remarkHtml)
                .use(remarkFrontmatter)
                .use(remarkFrontmatterPlugin, { yaml: load, throws: true })
                .use(() => (tree: Root, file) => {
                    for (const child of tree.children) {
                        if (child.type == "paragraph") {
                            const textNode = child
                                .children[0] as Literal<string>;
                            const summary = textNode.value;
                            file.data.summary = summary.endsWith(".")
                                ? summary.slice(0, -1)
                                : summary;
                            break;
                        }
                    }
                })
                .process(post).catch(e => console.trace("Error parsing!"));
            if (!md) return null
            const frontMatter = md.data as Frontmatter;
            let icon: string;
            try {
                icon = rc(`./${id}/logo.svg`)
            } catch (e) {
                icon = rc(`./${id}/logo.png`)
            }
            const project: ProjectItem = {
                id,
                content: md.toString(),
                ...frontMatter,
                media: {
                    cover: rc(`./${id}/main.png`),
                    icon,
                },
            };
            this.projectMap.set(id, project);
            return project;
        },

        async loadAll() {
            const rc = require.context("@/assets/projects/", true, /.*/);
            const projectTree = pathListToTree(rc.keys());

            return await Promise.all(
                projectTree[0].children.map(async (projectDir) =>
                    this.load(projectDir.name)
                )
            );
        },
    },
    getters: {
        projects(): ProjectItem[] {
            return [...this.projectMap.values()];
        },
    },
});
