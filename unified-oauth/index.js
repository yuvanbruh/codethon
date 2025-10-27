import GoogleProvider from "./providers/google.js";
import GitHubProvider from "./providers/github.js";
import FacebookProvider from "./providers/facebook.js";
import LinkedInProvider from "./providers/linkedin.js";
import TwitterProvider from "./providers/twitter.js";
import InstagramProvider from "./providers/instagram.js";
import RedditProvider from "./providers/reddit.js";
import handleSignIn from "./utils/handleSignIn.js";

export const UnifiedOAuth = {
  GoogleProvider,
  GitHubProvider,
  FacebookProvider,
  LinkedInProvider,
  TwitterProvider,
  InstagramProvider,
  RedditProvider,
  handleSignIn,
};

export default UnifiedOAuth;
