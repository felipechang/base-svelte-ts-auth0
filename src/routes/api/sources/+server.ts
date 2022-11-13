import type {RequestEvent} from '@sveltejs/kit';
import {json} from '@sveltejs/kit';
import {Source} from "$lib/database";
import {SourceSlug} from "$lib/stores/sources";

interface IRequest {
    action: string,
    data: ISource
}

interface IResponse {
    error: string,
    data: any
}

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
    return json(await Source.find());
}

/** @type {import('./$types').RequestHandler} */
export const POST = async ({request}: RequestEvent) => {
    const {action, data} = await request.json() as IRequest;
    const payload: IResponse = {data: SourceSlug(), error: ""};
    try {
        if (action === 'save') {
            payload.data = data;
            if (data._id) await Source.updateOne({_id: data._id}, data);
            else payload.data = await Source.create(data);
        }
        if (action === 'remove') {
            await Source.deleteOne({_id: data._id});
        }
    } catch (e: any) {
        payload.error = e.message;
    }
    return json(payload);
}
