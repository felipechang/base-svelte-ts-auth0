<script lang="ts">
    export let picture;
    export let nickname;
</script>
{#if picture}
    <div class="avatar ml-5">
        <div class="w-10 rounded-full">
            <img alt="{nickname}" src="{picture}"/>
        </div>
    </div>
{/if}
