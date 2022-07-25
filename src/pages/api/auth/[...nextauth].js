import NextAuth from 'next-auth'
import { Api } from "../api";
// import axios from 'axios'

import Credentials from "next-auth/providers/credentials";

export const nextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, request) => {
        console.log({credentials})
        // login logic goes here
        const api = new Api();
        try {
          const response = await api.client.post("https://patientlogin.mocklab.io/user/login", credentials)
          if (response && response.status === 200) {
            console.log({response: response.data})
            router.push("/")
          } else {
            return response
          }
        } catch(error) {
          console.error(error)
          return error
        }
        // return
        return { id: 1, email: 'john@email.com', firstName: 'John', lastName: 'Doe' }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },
  jwt: {
    secret: "super-secret",
    maxAge: 15 * 24 * 30 * 60, // 15 days
  },
  pages: {
    signIn: "/login",
    newUser: "/auth/create-account",
  },
};

export default NextAuth(nextAuthOptions)