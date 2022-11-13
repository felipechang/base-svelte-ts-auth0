import {createAuth0Client, User} from "@auth0/auth0-spa-js";
import type {Auth0Client, PopupLoginOptions} from "@auth0/auth0-spa-js";
import {isAuthenticated, popupOpen} from "$lib/stores/auth0";

const createClient = async (): Promise<Auth0Client> => {
    return await createAuth0Client({
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENT,
    });
}

const loginWithPop = async (clientId: Auth0Client, options: PopupLoginOptions): Promise<User> => {
    let user: User = {};
    popupOpen.set(true);
    try {
        await clientId.loginWithPopup(options);
        user = await clientId.getUser() as User;
        isAuthenticated.set(true);
    } catch (e) {
        console.error(e);
    } finally {
        popupOpen.set(false);
    }
    return Promise.resolve(user);
}

const logout = async (clientId: Auth0Client) => {
    isAuthenticated.set(false);
    await clientId.logout();
}

const auth = {
    createClient,
    loginWithPop,
    logout
};

export default auth;
