<script lang="ts">

    // Import our global CSS
    import "$lib/styles/tailwind.css";

    import {onMount} from 'svelte';
    import NavBar from "$lib/components/NavBar.svelte";
    import {auth0Client, isAuthenticated} from "$lib/stores/auth0";
    import auth from "$lib/service/auth0";
    import ErrorBanner from "$lib/components/ErrorBanner.svelte";


    let user;

    onMount(async () => {
        $auth0Client = await auth.createClient();
        isAuthenticated.set(await $auth0Client.isAuthenticated());
        user = await $auth0Client.getUser();
    });

    // Login
    const login = async () => {
        user = await auth.loginWithPop($auth0Client, {});
    }

    // Logout
    const logout = async () => {
        await auth.logout($auth0Client);
    }

</script>

<div class="h-screen" style="background-image: url('/background.svg')">
    <div class="container mx-auto pt-2 px-4">
        <NavBar login="{login}" logout="{logout}" nickname="{user?.nickname}" picture="{user?.picture}"/>
        <ErrorBanner/>
        <div class="grid card rounded-box place-items-center h-full">
            <slot/>
        </div>
    </div>
</div>
