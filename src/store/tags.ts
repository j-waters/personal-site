import { defineStore } from "pinia";
import pathListToTree from "path-list-to-tree";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkHtml from "remark-html";
import remarkFrontmatterPlugin from "remark-extract-frontmatter";
import { load } from "js-yaml";
import { ProjectItem, useProjectsStore } from "@/store/projects";

type TagType = "platform" | "technology" | "reason";

interface TagDetails {
    name: string;
    icon?: string;
    type: TagType;
}

const createTags = <T extends Record<string, TagDetails>>(tags: T) => tags;

const tags = createTags({
    ts: { name: "TypeScript", type: "technology" },
    python: { name: "Python", type: "technology" },
    sql: { name: "SQL", type: "technology" },
    js: { name: "JavaScript", type: "technology" },
    mdb: { name: "MongoDB", type: "technology" },
    vue: { name: "VueJS", type: "technology" },
    flutter: { name: "Flutter", type: "technology" },
    school: { name: "School", type: "reason", icon: "fa-school" },
    uni: { name: "University", type: "reason", icon: "fa-university" },
    personal: { name: "Personal", type: "reason", icon: "fa-rocket" },
    web: { name: "Website", type: "platform", icon: "fa-globe" },
    app: { name: "App", type: "platform", icon: "fa-mobile-alt" },
    desktop: { name: "Desktop", type: "platform", icon: "fa-desktop" },
    jquery: { name: "jQuery", type: "technology" },
    phaser: { name: "PhaserJS", type: "technology" },
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
