
// // 'use client';

// // import React, { useState, useEffect, useRef } from 'react';
// // import { useSession } from 'next-auth/react';
// // import Masonry from 'react-masonry-css';
// // import Explore from './components/Explore';

// // const surrealQuotes = [
// //   // Dexter
// //   "“Tonight’s the night.” — Dexter Morgan",
// //   "“I just want to be normal… whatever that means.” — Dexter",
// //   "“I hope Rita is watching.” — Dexter",
// //   "“If I had a heart, it might be breaking right now.” — Dexter Morgan",
// //   "“Fake it until you make it — that's what normal people do, right?” — Dexter",
// //   "“I'm not the monster. I'm just ahead of the curve.” — Dexter Morgan",
// //   "“Monsters don’t get to live happily ever after.” — Dexter",
// //   "“Some people fake being good. I fake being human.” — Dexter",
// //   "“The mask is slipping.” — Dexter Morgan",
// //   "“This is my code. My darkness. My design.” — Dexter",

// //   // Fincher & Mindhunter vibes
// //   "“People are perverts.” — David Fincher",
// //   "“The past is not my concern.” — Mindhunter",
// //   "“We’re all living someone else’s narrative.” — David Fincher",
// //   "“He who opens the door must be ready for what walks through.” — Mindhunter",
// //   "“This chaos is carefully choreographed.” — Fincher-esque",
// //   "“People don’t break, they unravel.” — Mindhunter-inspired",
// //   "“Beneath every calm face is a sea of noise.” — Fincher-esque",

// //   // Radiohead, Cobain, etc.
// //   "“We are accidents waiting to happen.” — Radiohead",
// //   "“I miss the comfort in being sad.” — Kurt Cobain",
// //   "“Every song is a ghost.” — Radiohead",
// //   "“Wanting to be someone else is a waste of the person you are.” — Kurt Cobain",
// //   "“Nothing ever really ends.” — Thom Yorke",
// //   "“Hallelujah isn’t about God, it’s about grief.” — Jeff Buckley",

// //   // Misc. surrealism
// //   "“What is dead may never die.” — Game of Thrones",
// //   "“No one escapes alone.” — Prison Break",
// // ];

// // export default function DreamFeedApp() {
// //   const { data: session } = useSession();
// //   const postsCache = useRef(null);
// //   const [posts, setPosts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [mood, setMood] = useState('🌀');
// //   const [clientReady, setClientReady] = useState(false);
// //   const [topQuote, setTopQuote] = useState('');
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     setClientReady(true);

// //     const random = Math.floor(Math.random() * surrealQuotes.length);
// //     setTopQuote(surrealQuotes[random]);

// //     const updateScreenSize = () => {
// //       setIsMobile(window.innerWidth <= 700);
// //     };

// //     updateScreenSize();
// //     window.addEventListener('resize', updateScreenSize);

// //     if (postsCache.current) {
// //       setPosts(postsCache.current);
// //       setLoading(false);
// //     } else {
// //       fetch('/api/post')
// //         .then((res) => res.json())
// //         .then((data) => {
// //           postsCache.current = data;
// //           setPosts(data);
// //           setLoading(false);
// //         });
// //     }

// //     const timeout = setTimeout(() => setMood('🌘 Drowsy Vibes'), 3000);
// //     return () => {
// //       clearTimeout(timeout);
// //       window.removeEventListener('resize', updateScreenSize);
// //     };
// //   }, []);

// //   if (loading) return <div className="text-center text-slate-400 p-6">Loading dream feed...</div>;
// //   if (posts.length === 0) return <div className="text-center text-slate-500 p-6">No posts yet.</div>;

// //   const breakpointColumnsObj = {
// //     default: 3,
// //     1100: 2,
// //     700: 1,
// //   };

// //   const interspersedContent = [];

// //   posts.forEach((post, idx) => {
// //     interspersedContent.push(
// //       <Explore key={post._id} post={post} userEmail={session?.user?.email || ''} />
// //     );

// //     // Insert quote only if mobile
// //     if (isMobile) {
// //       const shouldInsert = Math.random() < 0.4;
// //       if (shouldInsert) {
// //         const quote = surrealQuotes[Math.floor(Math.random() * surrealQuotes.length)];
// //         interspersedContent.push(
// //           <div
// //             key={`quote-${idx}`}
// //             className="text-center text-xs italic text-slate-500 px-4 py-2 border-t border-slate-700/30"
// //           >
// //             {quote}
// //           </div>
// //         );
// //       }
// //     }
// //   });

// //   return (
// //     <main className="min-h-screen px-4 sm:px-6 pt-6 pb-10 bg-[#0f1a27] text-[#cbd5e1] font-serif relative overflow-hidden">
// //       {/* Background grain & vignette */}
// //       <div className="absolute inset-0 pointer-events-none z-0">
// //         <div className="w-full h-full bg-[url('/grain.gif')] mix-blend-soft-light opacity-20" />
// //         <div className="w-full h-full bg-black/30 rounded-xl shadow-inner" />
// //       </div>

// //       {/* Mood badge */}
// //       {clientReady && (
// //         <div className="fixed top-4 right-4 sm:top-6 sm:right-6 bg-[#1e293b]/80 px-4 py-1.5 rounded-full text-xs tracking-wide text-slate-400 shadow shadow-black/20 z-20">
// //           Current Mood: {mood}
// //         </div>
// //       )}

// //       {/* Surreal Quote at top */}
// //       {clientReady && (
// //         <div className="z-10 relative max-w-4xl mx-auto text-center text-base text-slate-400 italic mb-8 pt-4 sm:pt-2 px-4">
// //           {topQuote}
// //         </div>
// //       )}

// //       {/* Masonry Grid */}
// //       <div className="relative z-10 max-w-6xl mx-auto w-full">
// //         <Masonry
// //           breakpointCols={breakpointColumnsObj}
// //           className="flex gap-6"
// //           columnClassName="space-y-6"
// //         >
// //           {interspersedContent}
// //         </Masonry>
// //       </div>
// //     </main>
// //   );
// // }
// 'use client';

// import React, { useState, useEffect, lazy, Suspense } from 'react';
// import { useSession } from 'next-auth/react';

// const Explore = lazy(() => import('./components/Explore'));

// const surrealQuotes = [
//   // Dexter
//   "“Tonight’s the night.” — Dexter Morgan",
//   "“I just want to be normal… whatever that means.” — Dexter",
//   "“I hope Rita is watching.” — Dexter",
//   "“If I had a heart, it might be breaking right now.” — Dexter Morgan",
//   "“Fake it until you make it — that's what normal people do, right?” — Dexter",
//   "“I'm not the monster. I'm just ahead of the curve.” — Dexter Morgan",
//   "“Monsters don’t get to live happily ever after.” — Dexter",
//   "“Some people fake being good. I fake being human.” — Dexter",
//   "“The mask is slipping.” — Dexter Morgan",
//   "“This is my code. My darkness. My design.” — Dexter",

//   // Fincher & Mindhunter vibes
//   "“People are perverts.” — David Fincher",
//   "“The past is not my concern.” — Mindhunter",
//   "“We’re all living someone else’s narrative.” — David Fincher",
//   "“He who opens the door must be ready for what walks through.” — Mindhunter",
//   "“This chaos is carefully choreographed.” — Fincher-esque",
//   "“People don’t break, they unravel.” — Mindhunter-inspired",
//   "“Beneath every calm face is a sea of noise.” — Fincher-esque",

//   // Radiohead, Cobain, etc.
//   "“We are accidents waiting to happen.” — Radiohead",
//   "“I miss the comfort in being sad.” — Kurt Cobain",
//   "“Every song is a ghost.” — Radiohead",
//   "“Wanting to be someone else is a waste of the person you are.” — Kurt Cobain",
//   "“Nothing ever really ends.” — Thom Yorke",
//   "“Hallelujah isn’t about God, it’s about grief.” — Jeff Buckley",

//   // Misc. surrealism
//   "“What is dead may never die.” — Game of Thrones",
//   "“No one escapes alone.” — Prison Break",
// ];

// export default function DreamFeedApp() {
//   const { data: session } = useSession();
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [mood, setMood] = useState('🌀');
//   const [topQuote, setTopQuote] = useState('');
//   const [isMobile, setIsMobile] = useState(false);
//   const [clientReady, setClientReady] = useState(false);

//   // ------------------------
//   // 🚀 INITIAL LOAD + CACHE
//   // ------------------------
//   useEffect(() => {
//     setClientReady(true);

//     // Random surreal quote
//     setTopQuote(surrealQuotes[Math.floor(Math.random() * surrealQuotes.length)]);

//     const updateScreenSize = () => setIsMobile(window.innerWidth <= 700);
//     updateScreenSize();
//     window.addEventListener('resize', updateScreenSize);

//     // Load cached posts instantly
//     const cached = localStorage.getItem('dreamFeed');
//     if (cached) {
//       const parsed = JSON.parse(cached);
//       setPosts(parsed);
//       setLoading(false);
//     }

//     // Fetch latest posts in background
//     fetch('/api/post')
//       .then((res) => res.json())
//       .then((data) => {
//         setPosts(data);
//         localStorage.setItem('dreamFeed', JSON.stringify(data));
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));

//     // Mood animation
//     const timeout = setTimeout(() => setMood('🌘 Drowsy Vibes'), 3000);
//     return () => {
//       clearTimeout(timeout);
//       window.removeEventListener('resize', updateScreenSize);
//     };
//   }, []);

//   // ------------------------
//   // 🎭 INTERSPERSE QUOTES
//   // ------------------------
//   const interspersedContent = [];
//   posts.forEach((post, idx) => {
//     interspersedContent.push({ type: 'post', data: post });

//     if (isMobile && Math.random() < 0.4) {
//       interspersedContent.push({
//         type: 'quote',
//         data: surrealQuotes[Math.floor(Math.random() * surrealQuotes.length)],
//       });
//     }
//   });

//   // ------------------------
//   // 🧱 RENDER
//   // ------------------------
//   if (loading)
//     return (
//       <div className="text-center text-slate-400 p-6 animate-pulse">
//         Loading dream feed...
//       </div>
//     );

//   if (posts.length === 0)
//     return <div className="text-center text-slate-500 p-6">No posts yet.</div>;

//   return (
//     <main className="min-h-screen px-4 sm:px-6 pt-6 pb-10 bg-[#0f1a27] text-[#cbd5e1] font-serif relative overflow-hidden transition-opacity duration-500">
//       {/* Background grain & vignette */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         <div className="w-full h-full bg-[url('/grain.gif')] mix-blend-soft-light opacity-20" />
//         <div className="w-full h-full bg-black/30 rounded-xl shadow-inner" />
//       </div>

//       {/* Mood badge */}
//       {clientReady && (
//         <div className="fixed top-4 right-4 sm:top-6 sm:right-6 bg-[#1e293b]/80 px-4 py-1.5 rounded-full text-xs tracking-wide text-slate-400 shadow shadow-black/20 z-20 animate-fadeIn">
//           Current Mood: {mood}
//         </div>
//       )}

//       {/* Top surreal quote */}
//       {clientReady && (
//         <div className="z-10 relative max-w-4xl mx-auto text-center text-base text-slate-400 italic mb-8 pt-4 sm:pt-2 px-4 animate-fadeIn">
//           {topQuote}
//         </div>
//       )}

//       {/* Feed Grid (CSS columns = faster than Masonry) */}
//       <div className="relative z-10 max-w-6xl mx-auto w-full columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 animate-fadeIn">
//         {interspersedContent.map((item, i) => (
//           <div key={i} className="break-inside-avoid mb-6">
//             {item.type === 'post' ? (
//               <Suspense fallback={<div className="text-slate-600">Loading post...</div>}>
//                 <Explore post={item.data} userEmail={session?.user?.email || ''} />
//               </Suspense>
//             ) : (
//               <div className="text-center text-xs italic text-slate-500 px-4 py-2 border-t border-slate-700/30">
//                 {item.data}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <style jsx global>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.6s ease-in-out;
//         }
//       `}</style>
//     </main>
//   );
// }




"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
// import './globals.css'; // or whatever your CSS file is named

export default function App({ closeModal }) {
  const { data: session } = useSession();
  const [userCreated, setUserCreated] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setUserExists(false);
    setUserCreated(false);

    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);

    if (result.ok) {
      setUserExists(true);
    } else {
      setUserCreated(true);
    }
  };

  const redirectToLogin = () => {
    router.push("/login");
    closeModal();
  };

  return (
    <div className="flex items-center justify-center bg-black w-full h-full">
      <div className="w-full  max-w-md px-4 py-6">
        {/* Loading */}
        {isSubmitting && (
          <div className="bg-gray-500   text-white p-2 text-center mb-4 rounded text-sm md:text-base">
            Loading...
          </div>
        )}

        {/* Success/Error Messages */}
        {userCreated && (
          <div className="text-center bg-green-600 text-white font-semibold text-sm md:text-lg mb-4 rounded p-2">
            User has been created successfully!
          </div>
        )}
        {userExists && (
          <div className="text-center bg-red-600 text-white font-semibold text-sm md:text-lg mb-4 rounded p-2">
            User already exists with the email.
          </div>
        )}

        {/* Title */}
        <h1 className="text-center text-white font-semibold text-2xl  md:text-3xl mb-6">
          Create your account
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              {...register("email", { required: "Email is required!" })}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-black rounded-lg border border-gray-700 text-white placeholder-gray-500 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            />
            {errors.email && (
              <span className="block text-red-500 text-xs md:text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Username Input */}
          <div>
            <input
              {...register("name", { required: "Username is required!" })}
              id="name"
              name="name"
              type="text"
              placeholder="Username"
              className="w-full p-3 bg-black rounded-lg border border-gray-700 text-white placeholder-gray-500 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            />
            {errors.name && (
              <span className="block text-red-500 text-xs md:text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-3 rounded-full text-sm md:text-base hover:bg-blue-500 transition duration-200"
              disabled={isSubmitting}
            >
              Register
            </button>
          </div>

          {/* Go to Login Page */}
          {userCreated && (
            <div>
              <button
                onClick={redirectToLogin}
                className="w-full bg-blue-500 text-black font-bold py-3 rounded-full text-sm md:text-base hover:bg-blue-700 transition duration-200"
              >
                Go to Login Page
              </button>
            </div>
          )}
        </form>

        {/* Google Login Button */}
        <button
          className="w-full mt-4 bg-white text-black font-bold py-3 rounded-full text-sm md:text-base hover:bg-blue-500 transition duration-200 border border-black flex justify-center items-center gap-2"
          onClick={() => signIn("google", { callbackUrl: "/Profile" })}
        >
          <img src="/google.png" alt="Google Icon" className="w-6 h-6 md:w-7 md:h-7" />
          Login with Google
        </button>
      </div>
    </div>
  );
}
