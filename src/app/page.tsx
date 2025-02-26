"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { signOut, currentUser, signInWithGoogle } = useAuth();
  const [filter, setFilter] = useState("All Events");

  const handleSignOut = async () => {
    try {
      if (!currentUser) return;
      await signOut();
      console.log("Déconnecté avec succès");
    } catch (error) {
      console.error("Erreur lors de la tentative de déconnexion", error);
    }
  };

  return (
    <div className="font-sans bg-blue-500 min-h-screen">
<header className="relative w-full h-screen flex flex-col items-center justify-center p-6 bg-blue-500">
  {/* Logo en haut à gauche */}
  <div className="absolute top-4 left-4 z-10">
    <Image src="/web-app-manifest-512x512.png" alt="Logo" width={200} height={200} priority className="h-12 w-auto" />
  </div>

  {/* Connexion en haut à droite */}
  {!currentUser && (
    <div className="absolute top-4 right-4 flex flex-col items-end text-black">
      <button 
        onClick={signInWithGoogle} 
        className="mt-2 px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-900 transition"
      >
        Se connecter avec Google
      </button>
    </div>
  )}

  {/* Image centrée */}
  <Image src="/bg.jpg" alt="Background" width={1200} height={400}  />

</header>

  {/* Contenu principal */}
  <div className="text-center text-black mt-6 p-6 bg-white-700 ">
    <h1 className="text-4xl font-bold text-white mb-4">Bienvenue sur Event Ease !</h1>
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
  {/* Formulaire de Connexion */}
  <div className="bg-white  rounded-lg  max-w-md w-full">
    
    {/* Onglets Participant / Organisateur */}
    <div className="flex">
      <button className="flex-1 bg-blue-500 text-white font-bold py-2 px-4 rounded-l-lg">
        Participant
      </button>
      <button className="flex-1 bg-black text-white font-bold py-2 px-4 rounded-r-lg">
        Organisateur
      </button>
    </div>

    {/* Champs de connexion */}
    <div className="mt-6">
      <label className="block text-gray-700">Email</label>
      <input 
        type="email" 
        placeholder="Entrer votre adresse e-mail"
        className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="mt-4">
      <label className="block text-gray-700">Mot de passe</label>
      <input 
        type="password" 
        placeholder="Entrer votre mot de passe"
        className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Lien mot de passe oublié */}
    <div className="text-right mt-2">
      <a href="#" className="text-blue-500 text-sm">Mot de passe oublié ?</a>
    </div>

    {/* Bouton de connexion */}
    <button className="w-full mt-6 bg-black text-white font-bold py-3 rounded-lg">
      Se connecter
    </button>

    {/* Lien d'inscription */}
    <p className="text-center mt-4 text-gray-600">
      Pas de compte ? <a href="#" className="text-blue-500">S'inscrire</a>
    </p>
  </div>
</div>

  
  </div>

      {/* Section événements */}
      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Événements à proximité :</h2>
        <div className="bg-pink-500 text-white px-4 py-2 rounded-lg inline-flex items-center">
          <span>Paris, FR</span>
        </div>
        <div className="mt-6 space-y-6">
          {/* Événement 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src="/event1.jpg" alt="Event 1" width={600} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Festival Un Día de Muertos</h3>
              <p className="text-gray-600 mt-2">Plongez dans la culture mexicaine à Paris avec ce festival vibrant !</p>
              <div className="mt-4 flex items-center justify-between text-gray-500">
                <Link href="#" className="text-blue-500">📍 9 rue de la Paix, 75002</Link>
                <span>🎟️ 32 participants</span>
                <span>🎭 Culturel</span>
              </div>
            </div>
          </div>
          {/* Événement 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src="/event2.jpg" alt="Event 2" width={600} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Paris Roues Libres</h3>
              <p className="text-gray-600 mt-2">Participez à une expérience cycliste unique à Paris !</p>
              <div className="mt-4 flex items-center justify-between text-gray-500">
                <Link href="#" className="text-blue-500">📍 12 Rue de la Forge, 75011</Link>
                <span>🚴 110 participants</span>
                <span>🏅 Sport</span>
              </div>
            </div>
          </div>

           {/* Événement 3 */}
           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src="/event4.jpg" alt="Event 2" width={600} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">SoundWave Festival</h3>
              <p className="text-gray-600 mt-2">Plongez dans une ambiance électrisante avec ce festival de musique live à Paris, réunissant des artistes de tous horizons pour une expérience sonore inoubliable !</p>
              <div className="mt-4 flex items-center justify-between text-gray-500">
                <Link href="#" className="text-blue-500">📍 21 Avenue Jean Jaurès, 75019</Link>
                <span>🚴 556 participants</span>
                <span>🏅 Musique</span>
              </div>
            </div>
          </div>

           {/* Événement 4 */}
           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src="/event3.jpg" alt="Event 2" width={600} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Créa'Telier</h3>
              <p className="text-gray-600 mt-2">Participez à Créa'Telier Paris : un événement DIY pour libérer votre créativité avec des ateliers de bricolage et de décoration</p>
              <div className="mt-4 flex items-center justify-between text-gray-500">
                <Link href="#" className="text-blue-500">📍 Quai de la Mégisserie, 75001</Link>
                <span>🚴 22 participants</span>
                <span>🏅 DIY</span>
              </div>
            </div>
          </div>
          
        </div>
        
      </section>
      {/* Footer */}
      <footer className="bg-black text-white p-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
          <div>
            <h3 className="text-blue-400 font-bold text-lg mb-2">Votre compte</h3>
            <ul className="space-y-2">
              <li><Link href="#">S'inscrire</Link></li>
              <li><Link href="#">Se connecter</Link></li>
              <li><Link href="#">Devenir organisateur</Link></li>
              <li><Link href="#">Aide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-bold text-lg mb-2">Événements</h3>
            <ul className="space-y-2">
              <li><Link href="#">Liste des événements</Link></li>
              <li><Link href="#">Calendrier</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-bold text-lg mb-2">Event Ease</h3>
            <ul className="space-y-2">
              <li><Link href="#">À propos</Link></li>
              <li><Link href="#">Pourquoi nous ?</Link></li>
              <li><Link href="#">Partenaires</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 font-bold text-lg mb-2">Nous contacter</h3>
            <div className="flex space-x-4">
              <Link href="#"><Image src="/facebook-icon.png" alt="Facebook" width={30} height={30} /></Link>
              <Link href="#"><Image src="/instagram-icon.png" alt="Instagram" width={30} height={30} /></Link>
              <Link href="#"><Image src="/tiktok-icon.png" alt="TikTok" width={30} height={30} /></Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 border-t border-gray-600 pt-4">
          <p>©Event Ease</p>
          <ul className="flex justify-center space-x-6 mt-2">
            <li><Link href="#">Mentions légales</Link></li>
            <li><Link href="#">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
