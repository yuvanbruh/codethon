// "use client";

// import { useSession, signOut } from "next-auth/react";
// import { useEffect } from "react";

// export default function ProfilePage() {
//   const { data: session, status } = useSession();

//   // This will log user data (session) to your **browser console**
//   console.log("Client-side session data:", session);

//   // This will log session data to your **server terminal**
//   useEffect(() => {
//     fetch("/api/test-session")
//       .then((res) => res.json())
//       .then((data) => console.log("Server session response:", data));
//   }, []);

//   if (status === "loading") {
//     return (
//       <div className="flex items-center justify-center h-screen bg-black text-white">
//         Loading...
//       </div>
//     );
//   }

//   if (!session) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
//         <h1 className="text-2xl mb-4">You are not logged in ❌</h1>
//         <a
//           href="/"
//           className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-blue-500"
//         >
//           Go to Home
//         </a>
//       </div>
//     );
//   }

//   const user = session.user;

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
//       <h1 className="text-3xl font-bold mb-6">Welcome, {user.name} 👋</h1>
//       <img
//         src={user.image}
//         alt="Profile"
//         className="w-28 h-28 rounded-full border-4 border-gray-700 mb-6"
//       />
//       <p className="text-lg mb-2">📧 {user.email}</p>
//       <p className="text-sm text-gray-400 mb-6">User ID: {session.user.id}</p>

//       <button
//         onClick={() => signOut({ callbackUrl: "/" })}
//         className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }
// "use client";

// import { useSession, signOut } from "next-auth/react";

// export default function ProfilePage() {
//   const { data: session, status } = useSession();

//   if (status === "loading") {
//     return (
//       <div className="flex items-center justify-center h-screen bg-black text-white">
//         Loading...
//       </div>
//     );
//   }

//   if (!session) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
//         <h1 className="text-2xl mb-4">You are not logged in ❌</h1>
//         <a
//           href="/"
//           className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-blue-500"
//         >
//           Go to Home
//         </a>
//       </div>
//     );
//   }

//   const user = session.user;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
//       <h1 className="text-3xl font-bold mb-6">Welcome, {user.name || user.username} 👋</h1>

//       {/* Profile Image */}
//       <img
//         src={user.image || user.userImage || "/default-avatar.png"}
//         alt="Profile"
//         className="w-28 h-28 rounded-full border-4 border-gray-700 mb-6 object-cover"
//       />

//       {/* Basic Info */}
//       <p className="text-lg mb-2">📧 Email: {user.email || "Not Provided"}</p>
//       <p className="text-sm text-gray-400 mb-2">User ID: {user.id}</p>
//       <p className="text-sm text-gray-400 mb-6">Provider: {user.provider || "Unknown"}</p>

//       {/* Provider-specific Data */}
//       {user.providerData && (
//         <div className="w-full max-w-md bg-gray-900 p-4 rounded-lg mb-6">
//           <h2 className="text-xl font-semibold mb-4">Provider Details:</h2>
//           {Object.entries(user.providerData).map(([key, value]) => (
//             <p key={key} className="text-sm text-gray-300 mb-2">
//               <span className="font-semibold">{key}:</span> {value}
//             </p>
//           ))}
//         </div>
//       )}

//       {/* Logout Button */}
//       <button
//         onClick={() => signOut({ callbackUrl: "/Register" })}
//         className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }
"use client";

import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        Loading...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <h1 className="text-2xl mb-4">You are not logged in ❌</h1>
        <a
          href="/"
          className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-blue-500"
        >
          Go to Home
        </a>
      </div>
    );
  }

  const user = session.user;

  // Normalize provider-specific data for display
  const providerData = { ...user.providerData };

  // Special case for Reddit
  if (user.provider === "reddit" && providerData.data?.username) {
    providerData.username = providerData.data.username;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user.name || providerData.username || user.username} 👋
      </h1>

      {/* Profile Image */}
      <img
        src={user.image || user.userImage || providerData.avatar || "/default-avatar.png"}
        alt="Profile"
        className="w-28 h-28 rounded-full border-4 border-gray-700 mb-6 object-cover"
      />

      {/* Basic Info */}
      <p className="text-lg mb-2">📧 Email: {user.email || "Not Provided"}</p>
      <p className="text-sm text-gray-400 mb-2">User ID: {user.id}</p>
      <p className="text-sm text-gray-400 mb-6">Provider: {user.provider || "Unknown"}</p>

      {/* Provider-specific Data */}
      {providerData && (
        <div className="w-full max-w-md bg-gray-900 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Provider Details:</h2>
          {Object.entries(providerData).map(([key, value]) => (
            <p key={key} className="text-sm text-gray-300 mb-2">
              <span className="font-semibold">{key}:</span>{" "}
              {typeof value === "object" ? JSON.stringify(value) : value}
            </p>
          ))}
        </div>
      )}

      {/* Logout Button */}
      <button
        onClick={() => signOut({ callbackUrl: "/Register" })}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
      >
        Logout
      </button>
    </div>
  );
}
