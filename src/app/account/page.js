"use client";

import { SignIn, SignUp, useUser, UserButton } from "@clerk/nextjs";
import { useState } from "react";
import AccountForm from "@/components/AccountForm";

export default function AccountPage() {
  const { isSignedIn, isLoaded } = useUser();
  const [mode, setMode] = useState("signin");

  if (!isLoaded) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px" }}>
      {isSignedIn ? (
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div style={{ width: "100%" }}>
            <AccountForm />
          </div>
        </div>
      ) : (
        <>
          <div className="logo-name" style={{ fontSize: "28px", color: "var(--accent)", marginBottom: "10px" }}>Kith</div>
          <h2 style={{ color: "var(--heading)", marginBottom: "5px" }}>
            {mode === "signin" ? "Welcome back" : "Join Kith"}
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: "20px" }}>
            {mode === "signin" ? "Sign in to your Kith account" : "Create an account to start shopping"}
          </p>

          <div style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
            <button
              onClick={() => setMode("signin")}
              className={`btn-outline ${mode === "signin" ? "active" : ""}`}
              style={{ padding: "8px 20px", borderRadius: "999px" }}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`btn-outline ${mode === "signup" ? "active" : ""}`}
              style={{ padding: "8px 20px", borderRadius: "999px" }}
            >
              Sign Up
            </button>
          </div>

          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            {mode === "signin" ? (
              <SignIn routing="hash" />
            ) : (
              <SignUp routing="hash" />
            )}
          </div>
        </>
      )}
    </div>
  );
}