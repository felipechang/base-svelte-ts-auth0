import {writable} from "svelte/store";
import type {Auth0Client} from '@auth0/auth0-spa-js';

export const isAuthenticated = writable(false);
export const popupOpen = writable(false);
export const auth0Client = writable({} as Auth0Client);
