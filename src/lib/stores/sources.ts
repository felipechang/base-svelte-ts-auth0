import {writable} from "svelte/store";

export const SourceSlug = (source?: ISource): ISource => {
    return {
        _id: source?._id || undefined,
        name: source?.name || "",
        url: source?.url || "",
        message: source?.message || "",
        department: source?.department || "",
    }
}

export const sourcesList = writable<ISource[]>([]);
export const sourceSelected = writable<ISource>(SourceSlug());
