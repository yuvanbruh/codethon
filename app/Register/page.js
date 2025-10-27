

// // "use client";
// // import { useSession, signIn, signOut } from "next-auth/react";
// // import { useState, useEffect } from "react";

// // const providers = [
// //   { id: "google", name: "Google", icon: "/google.png" },
// //   { id: "github", name: "GitHub", icon: "/github.png" },
// //   { id: "facebook", name: "Facebook", icon: "/facebook.png" },
// //   { id: "linkedin", name: "LinkedIn", icon: "/linkedin.png" },
// //   { id: "twitter", name: "Twitter", icon: "/twitter.png" },
// //   { id: "instagram", name: "Instagram", icon: "/instagram.png" },
// //   { id: "reddit", name: "Reddit", icon: "/reddit.png" },
// // ];

// // export default function App({ closeModal }) {
// //   const { data: session, status } = useSession();
// //   const [currentUser, setCurrentUser] = useState(null);

// //   useEffect(() => {
// //     if (session) setCurrentUser(session.user);
// //   }, [session]);

// //   if (status === "loading") return <p className="text-white">Loading...</p>;

// //   return (
// //     <div className="flex items-center justify-center bg-black w-full h-full">
// //       <div className="w-full max-w-md px-4 py-6">
// //         {!currentUser ? (
// //           <>
// //             <h1 className="text-center text-white font-semibold text-2xl md:text-3xl mb-6">
// //               Sign in with OAuth
// //             </h1>
// //             <div className="flex flex-col gap-3">
// //               {providers.map((provider) => (
// //                 <button
// //                   key={provider.id}
// //                   className="w-full bg-white text-black font-bold py-3 rounded-full text-sm md:text-base hover:bg-gray-200 flex justify-center items-center gap-2 transition"
// //                   onClick={() =>
// //                     signIn(provider.id, { callbackUrl: "/Profile" })
// //                   }
// //                 >
// //                   <img
// //                     src={provider.icon}
// //                     alt={`${provider.name} icon`}
// //                     className="w-6 h-6 md:w-7 md:h-7"
// //                   />
// //                   Login with {provider.name}
// //                 </button>
// //               ))}
// //             </div>
// //           </>
// //         ) : (
// //           <div className="text-center">
// //             <p className="text-white font-semibold text-lg">
// //               Welcome, {currentUser.displayName || currentUser.username}!
// //             </p>
// //             {currentUser.userImage && (
// //               <img
// //                 src={currentUser.userImage}
// //                 alt={currentUser.displayName || currentUser.username}
// //                 className="w-16 h-16 rounded-full mx-auto mt-2"
// //               />
// //             )}
// //             <div className="mt-4 flex justify-center gap-2">
// //               <button
// //                 onClick={() => signOut({ callbackUrl: "/" })}
// //                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
// //               >
// //                 Sign Out
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { useState, useEffect } from "react";

// const providers = [
//   { id: "google", name: "Google", icon: "/google.png" },
//   { id: "github", name: "GitHub", icon: "/github.png" },
//   { id: "facebook", name: "Facebook", icon: "/facebook.png" },
//   { id: "linkedin", name: "LinkedIn", icon: "/linkedin.png" },
//   { id: "twitter", name: "Twitter", icon: "/twitter.png" },
//   { id: "instagram", name: "Instagram", icon: "/instagram.png" },
//   { id: "reddit", name: "Reddit", icon: "/reddit.png" },
// ];

// export default function App({ closeModal }) {
//   const { data: session, status } = useSession();
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     if (session) setCurrentUser(session.user);
//   }, [session]);

//   if (status === "loading") return <p className="text-white">Loading...</p>;

//   return (
//     <div className="flex items-center justify-center bg-black w-full h-full">
//       <div className="w-full max-w-md px-4 py-6">
//         {!currentUser ? (
//           <>
//             <h1 className="text-center text-white font-semibold text-2xl md:text-3xl mb-6">
//               Sign in with OAuth
//             </h1>
//             <div className="flex flex-col gap-3">
//               {providers.map((provider) => (
//                 <button
//                   key={provider.id}
//                   className="w-full bg-white text-black font-bold py-3 rounded-full text-sm md:text-base hover:bg-gray-200 flex justify-center items-center gap-2 transition"
//                   onClick={() =>
//                     signIn(provider.id, { callbackUrl: "/Profile" })
//                   }
//                 >
//                   <img
//                     src={provider.icon}
//                     alt={`${provider.name} icon`}
//                     className="w-6 h-6 md:w-7 md:h-7"
//                   />
//                   Login with {provider.name}
//                 </button>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="text-center">
//             <p className="text-white font-semibold text-lg">
//               Welcome, {currentUser.displayName || currentUser.username}!
//             </p>
//             {currentUser.userImage && (
//               <img
//                 src={currentUser.userImage}
//                 alt={currentUser.displayName || currentUser.username}
//                 className="w-16 h-16 rounded-full mx-auto mt-2"
//               />
//             )}

//             {/* GitHub info */}
//             {currentUser.githubData && (
//               <div className="text-white mt-4 space-y-1">
//                 <p>GitHub Username: {currentUser.githubData.username}</p>
//                 <p>Public Repositories: {currentUser.githubData.repos}</p>
//                 <p>Followers: {currentUser.githubData.followers}</p>
//                 <p>Following: {currentUser.githubData.following}</p>
//               </div>
//             )}

//             <div className="mt-4 flex justify-center gap-2">
//               <button
//                 onClick={() => signOut({ callbackUrl: "/" })}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
//               >
//                 Sign Out
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

const providers = [
  { id: "google", name: "Google", icon: "/google.png" },
  { id: "github", name: "GitHub", icon: "/github.png" },
  { id: "facebook", name: "Facebook", icon: "/facebook.png" },
  { id: "linkedin", name: "LinkedIn", icon: "/linkedin.png" },
  { id: "twitter", name: "Twitter", icon: "/twitter.png" },
  { id: "instagram", name: "Instagram", icon: "/instagram.png" },
  { id: "reddit", name: "Reddit", icon: "/reddit.png" },
];

export default function App() {
  const { data: session, status } = useSession();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (session) setCurrentUser(session.user);
  }, [session]);

  if (status === "loading") return <p className="text-white">Loading...</p>;

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center bg-black w-full h-full">
        <div className="w-full max-w-md px-4 py-6">
          <h1 className="text-center text-white font-semibold text-2xl md:text-3xl mb-6">
            Sign in with OAuth
          </h1>
          <div className="flex flex-col gap-3">
            {providers.map((provider) => (
              <button
                key={provider.id}
                className="w-full bg-white text-black font-bold py-3 rounded-full text-sm md:text-base hover:bg-gray-200 flex justify-center items-center gap-2 transition"
                onClick={() =>
                  signIn(provider.id, { callbackUrl: "/Profile" })
                }
              >
                <img
                  src={provider.icon}
                  alt={`${provider.name} icon`}
                  className="w-6 h-6 md:w-7 md:h-7"
                />
                Login with {provider.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ✅ Logged-in view
  const provider = currentUser.provider;
  const data = currentUser.providerData;

  return (
    <div className="flex flex-col items-center justify-center bg-black w-full h-full text-white px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">
        Welcome, {currentUser.displayName || data?.username || "User"}!
      </h1>

      <img
        src={data?.avatar || currentUser.userImage}
        alt="User Avatar"
        className="w-20 h-20 rounded-full mb-4"
      />

      {/* Provider-specific info */}
      {provider === "github" && data && (
        <div className="space-y-1">
          <p>GitHub Username: {data.username}</p>
          <p>Repositories: {data.repos}</p>
          <p>Followers: {data.followers}</p>
          <p>Following: {data.following}</p>
        </div>
      )}

      {provider === "reddit" && data && (
        <div className="space-y-1">
          <p>Reddit Username: {data.username}</p>
          <p>Total Karma: {data.karma}</p>
          <p>Account Created: {data.createdAt}</p>
        </div>
      )}

      {provider === "twitter" && data && (
        <div className="space-y-1">
          <p>Twitter Username: {data.username}</p>
          <p>Followers: {data.followers}</p>
          <p>Following: {data.following}</p>
          <p>Tweets: {data.tweets}</p>
        </div>
      )}

      <button
        onClick={() => signOut({ callbackUrl: "/Register" })}
        className="mt-6 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
      >
        Sign Out
      </button>
    </div>
  );
}
