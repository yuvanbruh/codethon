// providers/google.js
import GoogleProvider from "next-auth/providers/linkedin";

export default function GoogleProviderFactory({
  clientId,
  clientSecret,
  redirectUri,
  scope = ["r_liteprofile","r_emailaddress"],
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
