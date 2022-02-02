import { defineStore } from "pinia";
import pathListToTree from "path-list-to-tree";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkHtml from "remark-html";
import remarkFrontmatterPlugin from "remark-extract-frontmatter";
import { load } from "js-yaml";

import type { TagID } from "@/store/tags";

type PostMedia = { [key: string]: string };

interface PostItem {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    tags: TagID[];
    date: Date;
    media?: PostMedia;
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
        async load(id: string): Promise<ProjectItem> {
            const rc = require.context("@/assets/projects/", true, /.*/);
            const post = rc(`./${id}/post.md`);
            const md = await remark()
                .use(remarkGfm)
                .use(remarkHtml)
                .use(remarkFrontmatter)
                .use(remarkFrontmatterPlugin, { yaml: load })
                .process(post);
            const frontMatter = md.data as Frontmatter;
            const project: ProjectItem = {
                id,
                content: md.toString(),
                ...frontMatter,
                media: {
                    cover: rc(`./${id}/main.png`),
                    icon: rc(`./${id}/logo.svg`),
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
