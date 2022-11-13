<script lang="ts">

    import {sourceSelected} from "$lib/stores/sources";

    export let source;

    const handleEdit = () => {
        sourceSelected.set(source);
    }
</script>

<div class="bg-white w-full h-20 p-4 mb-2 rounded-tl-lg rounded-bl-lg">{source._id || ""}</div>
<div class="bg-white w-full h-20 p-4 mb-2">{source.name || ""}</div>
<div class="bg-white w-full h-20 p-4 mb-2">{source.url || ""}</div>
<div class="bg-white w-full h-20 p-4 mb-2">{source.department || ""}</div>
<div class="bg-white w-full h-20 p-4 mb-2">{source.message || ""}</div>
<div class="bg-white w-full h-20 p-4 mb-2 rounded-tr-lg rounded-br-lg place-items-end">
    <button on:click={handleEdit} class="w-8 h-8" style="background-image: url('/edit.svg')">
    </button>
</div>
