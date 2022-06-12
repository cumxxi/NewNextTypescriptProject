import NextAuth from "next-auth/next";
import RedditProvider from "next-auth/providers/reddit";

export default NextAuth({
  //Bir veya daha fazla kimlik doğrulama sağlayıcısı yapılandırma
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLİENT_ID,
      clientSecret: process.env.REDDIT_CLİENT_SECRET,
    }),
    // ... ve buraya daha fazla sağlaycı
  ],
});
