<script lang="ts">

    import {sourceSelected, SourceSlug} from "$lib/stores/sources";

    let source = SourceSlug();
    sourceSelected.subscribe((value) => source = value);

</script>

<div>
    <select
            class="block w-full h-20 p-3 border border-gray-300 rounded-sm cursor-pointer focus:outline-none"
            multiple
    >
        <option value="1">super admin</option>
        <option value="2">admin</option>
        <option value="3">writer</option>
        <option value="4">user</option>
    </select>
</div>
