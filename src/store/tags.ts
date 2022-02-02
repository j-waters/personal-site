import { defineStore } from "pinia";
import pathListToTree from "path-list-to-tree";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkHtml from "remark-html";
import remarkFrontmatterPlugin from "remark-extract-frontmatter";
import { load } from "js-yaml";
import { ProjectItem, useProjectsStore } from "@/store/projects";

interface TagDetails {
    name?: string;
    icon?: string;
}

const createTags = <T extends Record<string, TagDetails>>(tags: T) => tags;

const tags = createTags({
    ts: { name: "TypeScript" },
    python: { name: "Python" },
    sql: { name: "SQL" },
    js: { name: "JavaScript" },
    mdb: { name: "MongoDB" },
    vue: { name: "VueJS" },
    flutter: { name: "Flutter" },
    school: { name: "School" },
    uni: { name: "University" },
    personal: { name: "Personal" },
    web: { name: "Website" },
    app: { name: "App" },
    jquery: { name: "jQuery" },
    phaser: { name: "PhaserJS" },
});

export type TagID = keyof typeof tags;

export interface Tag extends TagDetails {
    id: TagID;
    name: string;
    count: number;
}

export const useTagsStore = defineStore("tags", {
    getters: {
        tagMap(): Map<TagID, Tag> {
            const projectsStore = useProjectsStore();
            const tagMap: Map<TagID, Tag> = new Map();

            [...projectsStore.projects.values()]
                .flatMap((item) => item.tags)
                .forEach((tagId) => {
                    if (tagMap.has(tagId)) {
                        tagMap.get(tagId)!.count += 1;
                    } else {
                        tagMap.set(tagId, {
                            ...tags[tagId],
                            count: 1,
                            id: tagId,
                        });
                    }
                });

            return tagMap;
        },
        tags(): Tag[] {
            return [...this.tagMap.values()].sort((a, b) => b.count - a.count);
        },
    },
});
