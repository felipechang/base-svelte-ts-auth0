<script lang="ts">

    import {onMount} from "svelte";
    import Source from "./Source.svelte";
    import {sourcesList} from "$lib/stores/sources";

    let sources;
    sourcesList.subscribe(value => sources = value);

    onMount(async () => {
        const response = await fetch('/api/sources');
        sourcesList.set(await response.json());
    });

</script>

<div class="grid grid-cols-6 place-items-center">
    {#if sources && sources.length > 0}
        {#each sources as s}
            <Source source={s}/>
        {/each}
    {/if}
</div>
