<script lang="ts">

    export let source;

    const LIST = [
        'Amazonas',
        'Áncash',
        'Apurímac',
        'Arequipa',
        'Ayacucho',
        'Cajamarca',
        'Callao',
        'Cusco',
        'Huancavelica',
        'Huánuco',
        'Ica',
        'Junín',
        'La Libertad',
        'Lambayeque',
        'Lima Metropolitana',
        'Lima',
        'Loreto',
        'Madre de Dios',
        'Moquegua',
        'Pasco',
        'Piura',
        'Puno',
        'San Martín',
        'Tacna',
        'Tumbes',
        'Ucayali',
    ]

</script>

{#if source.name && source.url}
    <select
            class="block w-full p-3 border border-gray-300 rounded-sm cursor-pointer focus:outline-none"
            bind:value={source.department}
    >
        {#each LIST as name}
            <option value="{name}">{name}</option>
        {/each}
    </select>
{/if}
