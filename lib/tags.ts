import { ValueOf } from "lib/types";

// NOTE: you can customize tags to match the tags in your Notion database
const TAG_SLUGS = {
  All: "all",
  Notion: "notion",
  Obsidian: "obsidian",
  Link: "link",
  Automatisation:"automatisation",
  Productivite:"productivité"
} as const;

export type TagSlug = ValueOf<typeof TAG_SLUGS>;

type TagData = {
  slug: string;
  name: string;
  emoji: string;
};

const TAG_DATA: Record<TagSlug, TagData> = {
  [TAG_SLUGS.Obsidian]: {
    name: "Obsidian", // Display name
    emoji: "📋", // Emoji
    slug: TAG_SLUGS.Obsidian, // Slug
  },
  [TAG_SLUGS.Notion]: {
    name: "Notion",
    emoji: "📝",
    slug: TAG_SLUGS.Notion,
  },
  [TAG_SLUGS.Productivite]: {
    name: "Productivité",
    emoji: "📋",
    slug: TAG_SLUGS.Productivite,
  },
   [TAG_SLUGS.Link]: {
    name: "Link",
    emoji: "🔗",
    slug: TAG_SLUGS.Link,
  },
  [TAG_SLUGS.Automatisation]: {
    name: "Automatisation",
    emoji: "🔋",
    slug: TAG_SLUGS.Automatisation,
  },
  [TAG_SLUGS.All]: {
    name: "Tous",
    emoji: "🌴",
    slug: TAG_SLUGS.All,
  },
} as const;

export const isTagSlug = (slug: string): slug is TagSlug =>
  (Object.values(TAG_SLUGS) as string[]).includes(slug);

export const getTagDataBySlug = (slug: TagSlug): TagData => TAG_DATA[slug];
