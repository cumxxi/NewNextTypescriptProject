import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import RedditProvider from "next-auth/providers/reddit";
import prisma from "../../lib/prisma"

export const authOptions = {
  //Bir veya daha fazla kimlik doğrulama sağlayıcısı yapılandırma
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLİENT_ID,
      clientSecret: process.env.REDDIT_CLİENT_SECRET,
      profile(profile){
        return{
          id:profile.id.toString();
          name:profile.name || profile.login,
          username: profile.login,
          email:profile.email,
          image:profile.avatar_url,
  callbacks: {
      session:({ session,  user }) =>({
      ...session,
      // Bir sağlayıcıdan gelen bir access_token gibi özellikleri istemciye gönderin.
      //session.accessToken = token.accessToken
      user:{
        ...session.user,
        id:user.id,
        username:user.username
      }
      //return session
    })
  

  // async signIn({ user, account, profile, email, credentials }) {
  //   const isAllowedToSignIn = true
  //   if (isAllowedToSignIn) {
  //     return true
  //   } else {
  //     // Varsayılan bir hata mesajı görüntülemek için false döndürün
  //     return false
  //     // Veya yönlendirmek için bir URL döndürebilirsiniz:
  //     // return '/unauthorized'
  //   }
  }
}
        }
      }
    }),
    Gtihubprovider({
      clientId:process.env.GITHUB_CLIENT_ID,
      clientSecret:process.env.GITHUB_CLIENT_SECRET
    })
    // ... ve buraya daha fazla sağlaycı
  ],
  secret:process.env.NEXTAUTH_SECRET,
  adapter:PrismaAdapter(prisma)
};

export default NextAuth(authOptions);