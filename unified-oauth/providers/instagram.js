// providers/google.js
import GoogleProvider from "next-auth/providers/instagram";

export default function GoogleProviderFactory({
  clientId,
  clientSecret,
  redirectUri,
  scope =["user_profile","user_media"],
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
