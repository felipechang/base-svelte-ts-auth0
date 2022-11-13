<script lang="ts">

    import {errorMessage} from "$lib/stores/error";
    import {SourceSlug, sourceSelected, sourcesList} from "$lib/stores/sources";
    import DepartmentSelector from "./DepartmentSelector.svelte";

    let source = SourceSlug();
    sourceSelected.subscribe((value) => source = value);

    const submit = async (action) => {
        if (source.name === "" || source.url === "" || source.department === "") {
            errorMessage.set("Por favor completar todos los campos...");
            return;
        }
        if (!(/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/g.test(source.url))) {
            errorMessage.set("URL es invalido");
            return;
        }
        const response = await fetch('/api/sources', {
            method: 'POST',
            body: JSON.stringify({action, data: source}),
            headers: {'Content-Type': 'application/json'}
        });
        source = SourceSlug();
        sourceSelected.set(source);
        const {error, data} = await response.json();
        if (error) {
            errorMessage.set(error);
            return;
        }
        return data;
    };

    const handleSave = async () => {
        const id = source._id;
        const data = await submit("save");
        if (!data) return;
        if (id) {
            sourcesList.update(sources => sources.map((s) => s._id === id ? data : s));
        } else {
            sourcesList.update(sources => {
                sources.push(data);
                return sources;
            });
        }
    }

    const handleDelete = async () => {
        const id = source._id;
        await submit("remove") as { _id: string };
        sourcesList.update(sources => sources.filter(source => source._id !== id));
    }

    const handleCancel = async () => sourceSelected.set(SourceSlug());

</script>

<div class="grid grid-cols-6 bg-white place-items-center mt-10 rounded-lg">
    <div class="w-full h-12 p-4 rounded-tl-lg bg-gray-300">ID</div>
    <div class="w-full h-12 p-4 bg-gray-300">Nombre</div>
    <div class="w-full h-12 p-4 bg-gray-300">URL</div>
    <div class="w-full h-12 p-4 bg-gray-300">Departamento</div>
    <div class="w-full h-12 p-4 bg-gray-300">Mensaje</div>
    <div class="w-full h-12 p-4 rounded-tr-lg bg-gray-300"></div>

    <div class="w-full h-20 pt-4 rounded-bl-lg">
        <input disabled name="_id"
               value="{source._id || ''}"
               type="text"
               class="input w-full"
               style="background-color: transparent; border-color: transparent">
    </div>
    <div class="w-full h-20 pt-4 pr-2">
        <input name="name" bind:value="{source.name}" type="text" class="input w-full">
    </div>
    <div class="w-full h-20 pt-4">
        <input name="url" bind:value="{source.url}" type="url" class="input w-full">
    </div>
    <div class="w-full h-20 p-4">
        <DepartmentSelector bind:source={source}/>
    </div>
    <div class="w-full h-20 p-4">
        <input name="message" value="{source.message}" type="text" class="input hidden">
    </div>
    <div class="w-full h-20 p-4 pt-9 rounded-br-lg place-items-end">
        <button on:click={handleSave} class="w-8 h-8 mr-5" style="background-image: url('/save.svg')">
        </button>
        <button on:click={handleDelete} class="w-8 h-8 mr-5" style="background-image: url('/trash.svg')">
        </button>
        <button on:click={handleCancel} class="w-8 h-8" style="background-image: url('/cancel.svg')">
        </button>
    </div>
</div>
