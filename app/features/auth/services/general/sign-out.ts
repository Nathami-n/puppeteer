import { signOut } from "~/lib/auth-client";


export async function signOutUser(){
    return await signOut({
        onSuccess: () => {
            
        }
    })
}