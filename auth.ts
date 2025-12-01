import NextAuth from "next-auth";
import GoogleProvider from "@auth/core/providers/google"

export const {handlers, auth} = NextAuth(
    {
        providers: [GoogleProvider],
    },
)