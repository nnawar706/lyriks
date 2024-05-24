import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite"

import { SignUp, SignIn } from "@/types"

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.codearc.lyriks",
    projectId: "665050d000285dc048a2",
    databaseId: "665052a8002fe6b284b7",
    userCollectionId: "665052df001cb18b9aab",
    playlistCollectionId: "6650531c002cb03d09c7"
}

const client = new Client()

client.setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)

const account   = new Account(client)
const avatars   = new Avatars(client)
const databases = new Databases(client)

export const signUp = async ({username, email, password}: SignUp) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if (!newAccount)
        {
            console.log('error occurred')
            throw Error
        }

        const avatar = avatars.getInitials(username)

        await signIn({email, password})

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                username,
                email,
                avatar
            }
        )

        return newUser
    } catch (error) {
        console.log(error)
    }
}

export const signIn = async ({email, password}: SignIn) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)

        return session
        
    } catch (error) {
        throw Error
    }
}