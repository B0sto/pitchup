'use server';

import {signIn, signOut} from '@/auth';

export async function loginWithGithub() {
    await signIn('github');
}

export async function logoutWithGithub() {
    await signOut({redirectTo: "/"});
}