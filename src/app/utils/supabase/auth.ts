import { supabase } from "./supabase";

// Sign up a user with email and password
export const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });
    return { user: data?.user, error };
};

// Log in a user with email and password
export const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    return { user: data?.user, error };
};

// Log out the current user
export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
};
