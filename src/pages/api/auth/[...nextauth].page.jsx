// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// // import { axiosPost } from "@/utils/api";

// // For more information on each option (and a full list of options) go to
// // https://next-auth.js.org/configuration/options
// export const authOptions = {
//   // https://next-auth.js.org/configuration/providers/oauth
//   providers: [
//     GoogleProvider({
//       clientId:
//         "586486200042-n2gsukec90iep47p3erp515l30m5ar68.apps.googleusercontent.com",
//       clientSecret: "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",
//     }),
//   ],
//   callbacks: {
//     async signIn(user, account, profile) {
//       console.log("data1", user, account, profile);
//     },
//     // Các callback khác...
//   },
//   secret: "94d25574656a8ee61f1adb9d18435c36",
// };

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

async function refreshAccessToken(token) {
  try {
    const apiHost = process.env.apiHost;
    const response = await axios.post(`${apiHost}/api/login/google`, {
      access_token: token?.access_token,
    });
    const newData = await response.data.Payload;
    return {
      ...token,
      newData,
    };
  } catch (error) {
    console.log("show error refresh token: =>>>", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Access token has expired, try to update it
      return { ...token, ...account };
    },
    async session({ session, token }) {
      const abc = await refreshAccessToken(token);
      if (abc) {
        session.user = abc;
      }
      return session;
    },
    // Các callback khác...
  },
  secret: "94d25574656a8ee61f1adb9d18435c36",
};

export default (req, res) => NextAuth(req, res, authOptions);
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// const authOptions = ({
//   providers: [
//     GoogleProvider({
//       clientId:
//         "586486200042-n2gsukec90iep47p3erp515l30m5ar68.apps.googleusercontent.com",
//       clientSecret: "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",
//     }),
//   ],
//   secret: "94d25574656a8ee61f1adb9d18435c36",
// });

// export default (req, res) => NextAuth(req, res, authOptions);
