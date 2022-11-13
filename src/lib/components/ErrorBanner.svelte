<script lang="ts">

    import {errorMessage} from "$lib/stores/error";

    let error;
    errorMessage.subscribe(value => error = value);

    const handleClose = () => errorMessage.set("");

</script>
{#if error}
    <div class="alert alert-error shadow-lg mt-4">
        <div>
            <button on:click={handleClose} class="w-8 h-8 mr-5" style="background-image: url('/error.svg')"></button>
            <span>{error}</span>
        </div>
    </div>
{/if}
