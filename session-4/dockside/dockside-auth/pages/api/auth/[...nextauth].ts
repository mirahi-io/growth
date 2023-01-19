import NextAuth from "next-auth"
import AzureAD from "next-auth/providers/azure-ad"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    providers: [
        AzureAD({
            clientId: process.env.AZURE_AD_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
            tenantId: process.env.AZURE_AD_TENANT_ID,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                email: { label: "email", type: "text", placeholder: "jsmith@mirahi.io" },
            },
            authorize(credentials, req) {
                return {name: credentials.username, id: 123, email: credentials.email }
            }
        })
    ],
})