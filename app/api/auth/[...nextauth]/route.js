
import NextAuth from "next-auth";
import UnifiedOAuth from "yuvan-unified-oauth-v1";
import connectMongoDB from "@/app/lib/mongodb";
import Topic from "@/app/models/topic";

async function upsertUser(profile) {
  await connectMongoDB();
  const email = profile.email;
  const existingUser = await Topic.findOne({ email });

  if (!existingUser) {
    await Topic.create({
      email,
      username: email?.split("@")[0] || profile.name || "unknown_user",
      userImage: profile.picture || profile.avatar_url || profile.image,
      displayName: profile.name,
    });
  }
}

// 🔹 Fetch provider-specific info
async function fetchProviderInfo(provider, accessToken) {
  switch (provider) {
    case "github": {
      const res = await fetch("https://api.github.com/user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!res.ok) return null;
      const data = await res.json();
      return {
        username: data.login,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        avatar: data.avatar_url,
      };
    }

    case "reddit": {
      const res = await fetch("https://oauth.reddit.com/api/v1/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!res.ok) return null;
      const data = await res.json();
      return {
        username: data.name,
        karma: data.total_karma,
        createdAt: new Date(data.created_utc * 1000).toLocaleDateString(),
        avatar: data.icon_img,
      };
    }

    case "twitter": {
      const res = await fetch("https://api.x.com/2/users/me?user.fields=profile_image_url,public_metrics", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!res.ok) return null;
      const data = await res.json();
      const user = data.data;
      return {
        username: user.username,
        followers: user.public_metrics.followers_count,
        following: user.public_metrics.following_count,
        tweets: user.public_metrics.tweet_count,
        avatar: user.profile_image_url,
      };
    }

    default:
      return null;
  }
}

const providers = [
  UnifiedOAuth.GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
  }),
  UnifiedOAuth.GitHubProvider({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }),
  UnifiedOAuth.RedditProvider({
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
  }),
  UnifiedOAuth.TwitterProvider({
    clientId: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET,
  }),
  UnifiedOAuth.FacebookProvider({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  }),
  UnifiedOAuth.LinkedInProvider({
    clientId: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  }),
  UnifiedOAuth.InstagramProvider({
    clientId: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
  }),
];

export const authOptions = {
  providers,
  callbacks: {
    async signIn({ profile, account }) {
      await UnifiedOAuth.handleSignIn(profile, {
        onUserCreateOrUpsert: upsertUser,
      });
      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.provider = account.provider;
        token.providerData = await fetchProviderInfo(
          account.provider,
          account.access_token
        );
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.provider = token.provider;
      session.user.providerData = token.providerData || null;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
