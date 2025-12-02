"use server"

import { auth } from "@/auth";

export default async function startNewSession(){
    const session= await auth();

    if(!session){
        return(

        )
    }
}