// providers/google.js
import GoogleProvider from "next-auth/providers/facebook";

export default function GoogleProviderFactory({
  clientId,
  clientSecret,
  redirectUri,
  scope = ["email","public_profile"],
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
