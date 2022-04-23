import { defineStore } from "pinia";
import { useProjectsStore } from "@/store/projects";
import { Exception } from "sass";

type TagType = "platform" | "technology" | "reason";

export enum Familiarity {
    MEDIUM,
    HIGH,
}

interface TagDetails {
    name: string;
    icon?: string;
    type: TagType;
    familiarity?: Familiarity;
}

const createTags = <T extends Record<string, TagDetails>>(tags: T) => tags;
const tags = createTags({
    ts: {
        name: "TypeScript",
        type: "technology",
        familiarity: Familiarity.HIGH,
    },
    python: {
        name: "Python",
        type: "technology",
        familiarity: Familiarity.HIGH,
    },
    sql: { name: "SQL", type: "technology", familiarity: Familiarity.HIGH },
    js: {
        name: "JavaScript",
        type: "technology",
        familiarity: Familiarity.HIGH,
    },
    mdb: {
        name: "MongoDB",
        type: "technology",
        familiarity: Familiarity.MEDIUM,
    },
    vue: { name: "VueJS", type: "technology", familiarity: Familiarity.HIGH },
    flutter: {
        name: "Flutter",
        type: "technology",
        familiarity: Familiarity.HIGH,
    },
    school: { name: "School", type: "reason", icon: "fa-school" },
    uni: { name: "University", type: "reason", icon: "fa-university" },
    personal: { name: "Personal", type: "reason", icon: "fa-rocket" },
    web: { name: "Website", type: "platform", icon: "fa-globe" },
    app: { name: "App", type: "platform", icon: "fa-mobile-alt" },
    desktop: { name: "Desktop", type: "platform", icon: "fa-desktop" },
    jquery: {
        name: "jQuery",
        type: "technology",
        familiarity: Familiarity.MEDIUM,
    },
    phaser: {
        name: "PhaserJS",
        type: "technology",
        familiarity: Familiarity.MEDIUM,
    },
    perl: { name: "Perl", type: "technology", familiarity: Familiarity.MEDIUM },
    haskell: {
        name: "Haskell",
        type: "technology",
        familiarity: Familiarity.MEDIUM,
    },
    docker: {
        name: "Docker",
        type: "technology",
        familiarity: Familiarity.HIGH,
    },
    nest: { name: "NestJS", type: "technology", familiarity: Familiarity.HIGH },
    angular: {
        name: "Angular",
        type: "technology",
        familiarity: Familiarity.MEDIUM,
    },
    azure: {name: "Azure", type: "technology", familiarity: Familiarity.MEDIUM},
    gcloud: {name: "Google Cloud", type: "technology", familiarity: Familiarity.MEDIUM},
    gql: {name: "GraphQL", type: "technology", familiarity: Familiarity.HIGH},
    nestjs: {name: "NestJS", type: "technology", familiarity: Familiarity.HIGH},
});

export type TagID = keyof typeof tags;

export interface Tag extends TagDetails {
    id: TagID;
    count: number;
}

export function isTag(tagId: TagID | string): tagId is TagID {
    return Object.keys(tags).includes(tagId);
}

export const useTagsStore = defineStore("tags", {
    getters: {
        tagMap(): Map<TagID, Tag> {
            const projectsStore = useProjectsStore();
            return new Map<TagID, Tag>(
                Object.entries(tags).map<[TagID, Tag]>(([tagId, tag]) => [
                    tagId as TagID,
                    {
                        ...tag,
                        count: [...projectsStore.projects.values()]
                            .flatMap((p) => p.tags)
                            .reduce(function (acc, pTagId) {
                                return acc + (pTagId === tagId ? 1 : 0);
                            }, 0),
                        id: tagId as TagID,
                    },
                ])
            );
        },
        tags(): Tag[] {
            return [...this.tagMap.values()].sort((a, b) => b.count - a.count);
        },
        tagsFromIds(): (tagIds: TagID[]) => Tag[] {
            return (tagIds: TagID[]) =>
                tagIds.map((tagId) => this.tagMap.get(tagId)!);
        },
    },
    actions: {
        get(tagId: TagID) {
            const tag = this.tagMap.get(tagId);
            if (!tag) {
                throw new Error(`Invalid tagId '${tagId}'`)
            }
            return tag
        }
    }
});
