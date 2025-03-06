import { createClient } from './server';

// Query for Hubs page which shows all of the available interests, to be used as buttons
export async function interests() {
    const supabase = await createClient();
    const { data: interests } = await supabase.from("interests").select();

    return JSON.stringify(interests, null, 2)
};

// Query for search bar on Hubs page
export async function interestSearch(search: string) {
    // call to the server which accesses the database via the keys
    const supabase = await createClient();
    //Queries the table with our given parameter
    const { data: interests } = await supabase.from("interests").select().eq("interest_name", search);
    //renders the result - OK for now
    return JSON.stringify(interests, null, 2)
};
