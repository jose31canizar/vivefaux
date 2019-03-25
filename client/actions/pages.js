import { genericFetch } from "~/actions/posts";

export const loadPages = genericFetch("pages");
export const loadPagesByPrivacy = genericFetch("pages-by-privacy", "private");
