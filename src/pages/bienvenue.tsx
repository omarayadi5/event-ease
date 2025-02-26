"use client";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Bienvenue() {
  const { currentUser, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/"); // Redirige vers la page d'accueil si pas connecté
    }
  }, [currentUser, router]);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/"); // Redirige vers l'accueil après déconnexion
    } catch (error) {
      console.error("Erreur lors de la déconnexion", error);
    }
  };

  if (!currentUser) return null; // Évite d'afficher la page si pas connecté

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold">Bienvenue,1 12{currentUser.displayName} 👋</h1>
      <p className="text-lg mt-4">Nous sommes ravis de vous voir ici !</p>
      <button
        onClick={handleSignOut}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Déconnexion
      </button>
    </div>
  );
}
