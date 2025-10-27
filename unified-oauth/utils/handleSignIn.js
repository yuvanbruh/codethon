// utils/handleSignIn.js
export default async function handleSignIn(profile, { onUserCreateOrUpsert }) {
  if (!profile) return false;
  if (typeof onUserCreateOrUpsert !== "function") return true;

  try {
    await onUserCreateOrUpsert(profile);
    return true;
  } catch (err) {
    console.error("UnifiedOAuth handleSignIn error:", err);
    return false;
  }
}
