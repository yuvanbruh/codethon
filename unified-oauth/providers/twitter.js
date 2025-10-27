// providers/google.js
import GoogleProvider from "next-auth/providers/twitter";

export default function GoogleProviderFactory({
  clientId,
  clientSecret,
  redirectUri,
  scope = ["tweet.read","users.read"],
  extraParams = {},
} = {}) {
  const auth = {
    clientId,
    clientSecret,
    authorization: {
      params: { scope: scope.join(" "), ...extraParams },
    },
  };
  if (redirectUri) auth.authorization.params.redirect_uri = redirectUri;
  return GoogleProvider(auth);
}
