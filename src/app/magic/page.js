"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import ActionButton from "ProUI/ActionButton/ActionButton";
import { useState } from "react";
import { GoArrowUpRight, GoCheck } from "react-icons/go";
import { MdContentCopy } from "react-icons/md";
import { toast } from "sonner";

const VALID_USERNAME = "magicadmin";
const VALID_PASSWORD = "eyeapple";

const invitations = [
  {
    name: "Ashi Lamiya",
    url: "invite/ashi-lamiya",
    type: "Wedding",
    template: "Opaline",
  },
  {
    name: "Karthik Varsha",
    url: "invite/karthik-varsha",
    type: "Wedding",
    template: "Eternity",
  },
  {
    name: "Juliet Nathaniel",
    url: "invite/juliet-nathaniel",
    type: "Wedding",
    template: "Opaline",
  },
  {
    name: "Aswin Sreelakshmi",
    url: "invite/aswin-sreelakshmi",
    type: "Wedding",
    template: "Eternity",
  },
  {
    name: "Paattoholic Noufa",
    url: "invite/paattoholic-noufa",
    type: "Wedding",
    template: "Eternity",
  },
  {
    name: "Shamil Najiya",
    url: "invite/shamil-najiya",
    type: "Wedding",
    template: "Eternity",
  },
  {
    name: "Anil Shakthi",
    url: "wedding/anil-shakthi",
    type: "Wedding",
    template: "Opaline",
  },
  {
    name: "Nikil Sreejitha",
    url: "wedding/nikil-sreejitha",
    type: "Wedding",
    template: "Opaline",
  },
];

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleCopy = (url) => {
    navigator.clipboard.writeText(`https://iinve.com/${url}`);
    setCopiedId(url);
    toast.success("Link copied to clipboard");

    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-zinc-900 p-6 rounded-2xl w-[300px] space-y-4">
          <h2 className="text-xl font-semibold text-center">Enter Access</h2>

          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 rounded bg-zinc-800 outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-zinc-800 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 pt-[150px]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Your Invitations</h1>

        <div className="grid grid-cols-1 gap-4 pb-24">
          {invitations.map((item, index) => {
            const isThisCopied = copiedId === item.url;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2, backgroundColor: "rgba(24, 24, 27, 0.8)" }}
                className="group relative overflow-hidden bg-zinc-900/50 backdrop-blur-md border border-white/5 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all duration-300"
              >
                {/* Animated Gradient Border (Visible on Hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#153AA4] to-transparent" />
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-white text-lg tracking-tight">
                      {item.name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#153AA4] bg-[#153AA4]/10 border border-[#153AA4]/20 px-2 py-0.5 rounded-md">
                      {item.template}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
                    <span className="opacity-50">URL:</span>
                    <span className="group-hover:text-zinc-300 transition-colors">
                      https://iinve.com/{item.url}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-500">
                    Event: {item.type}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button
                    onClick={() => handleCopy(item.url)}
                    className="relative flex-1 md:flex-none overflow-hidden h-11 px-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all min-w-[140px]"
                  >
                    <AnimatePresence mode="wait">
                      {!isThisCopied ? (
                        <motion.div
                          key="copy"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          className="flex items-center justify-center gap-2 text-sm font-medium"
                        >
                          <MdContentCopy className="text-zinc-400" />
                          <span>Copy Link</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copied"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          className="flex items-center justify-center gap-2 text-sm font-bold text-[#153AA4]"
                        >
                          <GoCheck className="text-lg" />
                          <span>Copied</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>

                  <Link
                    href={`https://iinve.com/${item.url}`}
                    target="_blank"
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#153AA4] text-white font-bold hover:bg-[#153AA4] hover:opacity-50 transition-all text-sm shadow-[0_0_20px_rgba(8,170,208,0.3)]"
                  >
                    Live <GoArrowUpRight className="text-lg" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
