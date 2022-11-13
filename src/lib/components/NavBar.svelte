<script lang="ts">

    import {isAuthenticated} from "$lib/stores/auth0";
    import Avatar from "./Avatar.svelte";

    export let login;
    export let logout;
    export let nickname = "";
    export let picture;

    let authenticated = true;
    isAuthenticated.subscribe((e) => authenticated = e);

</script>

<nav class="navbar bg-base-100 p-4 rounded-box">
    <div class="navbar-start">
        <div class="dropdown">
            {#if authenticated}
                <h1 on:click={logout} on:keypress={()=>{}}><a href="/">Salir</a></h1>
            {:else}
                <h1 on:click={login} on:keypress={()=>{}}><a href="/">Inicio</a></h1>
            {/if}
        </div>
    </div>
    <div class="navbar-center">
        <div class="columns-1">
            <div class="content-center"><h1><a class="btn btn-ghost normal-case text-xl" href="/">My Site</a></h1></div>
        </div>
    </div>
    <div class="navbar-end">
        {#if authenticated}
            <div class="ml-2"><h1>{nickname}</h1></div>
            <Avatar picture="{picture}" nickname="{nickname}"/>
        {/if}
    </div>
</nav>
