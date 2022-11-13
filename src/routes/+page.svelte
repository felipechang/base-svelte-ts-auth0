<script lang="ts">

    import {isAuthenticated} from "$lib/stores/auth0";
    import SourceList from "$lib/components/SourceList.svelte";
    import SourceForm from "$lib/components/SourceForm.svelte";

    let authenticated = true;
    isAuthenticated.subscribe((e) => authenticated = e);

</script>

{#if !authenticated}
    Inicie sesion...
{:else}
    <div class="flex flex-col w-full border-opacity-50">
        <SourceForm/>
        <div class="divider"></div>
        <SourceList/>
    </div>
{/if}
