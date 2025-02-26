"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { signOut, currentUser, signInWithGoogle } = useAuth();
  const [filter, setFilter] = useState("All Events"); // État pour le filtre sélectionné

  const handleSignOut = async () => {
    try {
      if (!currentUser) return;
      await signOut();
      console.log("Déconnecté avec succès");
    } catch (error) {
      console.error("Erreur lors de la tentative de déconnexion", error);
    }
  };

  // Liste diversifiée des événements avec leurs types
  const events = [
    {
      title: "Data Science Conference 2025",
      description: "Rejoignez-nous pour une journée de conférences enrichissantes et de réseautage avec des leaders de l'industrie.",
      date: "15 mars 2025",
      image: "/event1.jpg",
      type: "Conference",
    },
    {
      title: "Atelier sur l'analyse des données massives 2025",
      description: "Sessions pratiques pour maîtriser les outils et techniques des données massives.",
      date: "10 mai 2025",
      image: "/event2.jpg",
      type: "DataThon Workshop",
    },
    {
      title: "Événement de réseautage pour les femmes en tech 2025",
      description: "Connectez-vous avec d'autres femmes en tech pour partager expériences et opportunités.",
      date: "20 août 2025",
      image: "/event3.jpg",
      type: "Networking",
    },
    {
      title: "Sommet sur l'apprentissage automatique 2025",
      description: "Plongez dans les algorithmes d'apprentissage automatique et leurs applications concrètes.",
      date: "5 juin 2025",
      image: "/event4.jpg",
      type: "Conference",
    },
  ];

  // Filtrer les événements selon le filtre sélectionné
  const filteredEvents = filter === "All Events" ? events : events.filter((event) => event.type === filter);

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="h-10 w-auto" />
          <h1 className="text-lg font-bold ml-2">Women in Data Science</h1>
        </div>
        <ul className="flex space-x-6 text-sm">
          <li><Link href="#" className="text-blue-600 hover:underline">All Events</Link></li>
          <li><Link href="#" className="text-blue-600 hover:underline">Learn</Link></li>
          <li><Link href="#" className="text-yellow-600 hover:underline">Join Us</Link></li>
          <li><Link href="#" className="text-red-600 hover:underline">Get Inspired</Link></li>
          <li><Link href="#" className="text-green-600 hover:underline">Opportunities</Link></li>
          <li><Link href="#" className="text-gray-600 hover:underline">About WiDS</Link></li>
        </ul>
        <button className="bg-yellow-400 px-4 py-2 text-white rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition">Donate</button>
      </nav>

      {/* Banner */}
      <header className="bg-green-500 text-white text-center py-6">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
      </header>

      {/* Auth Section */}
      <main className="container mx-auto p-8 text-center">
        {currentUser ? (
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold text-green-600">Bienvenue 1, {currentUser.displayName} 👋</h2>
            <button 
              onClick={handleSignOut} 
              className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 transition"
            >
              Déconnexion
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-bold">Bienvenue sur notre site</h2>
            <button 
              onClick={signInWithGoogle} 
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Se connecter avec Google
            </button>
          </div>
        )}
      </main>

      {/* Filters */}
      <section className="container mx-auto p-6 bg-white shadow-md mt-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Event Type</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("All Events")}
            className={`px-4 py-2 rounded-lg shadow ${filter === "All Events" ? "bg-green-600 text-white" : "border border-gray-400 hover:bg-gray-200"}`}
          >
            All Events
          </button>
          <button
            onClick={() => setFilter("Conference")}
            className={`px-4 py-2 rounded-lg shadow ${filter === "Conference" ? "bg-green-600 text-white" : "border border-gray-400 hover:bg-gray-200"}`}
          >
            Conference (2)
          </button>
          <button
            onClick={() => setFilter("DataThon")}
            className={`px-4 py-2 rounded-lg shadow ${filter === "DataThon" ? "bg-green-600 text-white" : "border border-gray-400 hover:bg-gray-200"}`}
          >
            DataThon (0)
          </button>
          <button
            onClick={() => setFilter("DataThon Workshop")}
            className={`px-4 py-2 rounded-lg shadow ${filter === "DataThon Workshop" ? "bg-green-600 text-white" : "border border-gray-400 hover:bg-gray-200"}`}
          >
            DataThon Workshop (1)
          </button>
          <button
            onClick={() => setFilter("Networking")}
            className={`px-4 py-2 rounded-lg shadow ${filter === "Networking" ? "bg-green-600 text-white" : "border border-gray-400 hover:bg-gray-200"}`}
          >
            Networking (1)
          </button>
          <button
            onClick={() => setFilter("Panel")}
            className={`px-4 py-2 rounded-lg shadow ${filter === "Panel" ? "bg-green-600 text-white" : "border border-gray-400 hover:bg-gray-200"}`}
          >
            Panel (0)
          </button>
        </div>
      </section>

      {/* Event List */}
      <section className="container mx-auto p-6 bg-white shadow-md mt-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <Image src={event.image} alt={event.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{event.date}</span>
                  <Link href="#" className="text-blue-600 hover:underline">En savoir plus</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}