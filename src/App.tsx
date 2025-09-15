import React from 'react';
import { Menu, Calendar, Users, ChevronRight, Facebook, Twitter, Instagram, MapPin, Clock, Trophy, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-green-600">Ruote</span>{' '}
                <span className="text-red-600">Tricolori</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#news" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">News</a>
              <a href="#storie" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">Storie</a>
              <a href="#gare" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">Gare</a>
              <a href="#contatti" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">Contatti</a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/images/bici_movimento.png)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              La caduta che ha <span className="text-red-500">spezzato</span> un sogno
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              La gara di Francesco Borca, promessa del ciclismo juniores, 
              costretto ad abbandonare il titolo italiano 2022 dopo una caduta 
              nella finale.
            </p>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Article */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 md:h-80">
                <img 
                  src="/images/bici_ferme.jpg"
                  alt="Francesco Borca cycling"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">Storia Esclusiva</span>
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Campionato Italiano Juniores: il sogno di Borca spezzato dalla caduta di gruppo <br />
                  Cherasco (CN), 3 luglio
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Doveva essere la giornata della consacrazione per Francesco Borca, uno dei nomi più attesi al via del Campionato Italiano su strada Juniores disputato ieri a Cherasco. Invece, la corsa valida per il titolo nazionale si è trasformata in un’amara delusione a causa di una caduta di gruppo negli ultimi chilometri che ha costretto il giovane talento al ritiro. <br /><br />
                  La prova, valevole per la categoria Juniores, si è sviluppata fin da subito su ritmi altissimi. Borca si era mantenuto nelle prime posizioni del plotone, dimostrando lucidità e gambe all’altezza della maglia tricolore. A pochi chilometri dal traguardo, però, la corsa è stata segnata da una maxi-caduta di gruppo che ha coinvolto diversi corridori. Tra i più colpiti proprio Borca, che non ha potuto riprendere la gara. <br /><br />
                  Visibilmente scosso e dolorante, il ragazzo ha dovuto arrendersi al verdetto della strada. Una beffa per chi, fino a quel momento, aveva dato prova di essere tra i più forti in gara e pronto a giocarsi il titolo nazionale. <br /><br />
                  “Francesco stava bene, aveva la gamba giusta. È un peccato enorme, ma queste sono le corse”, ha commentato a fine giornata il suo coach Franco Ballerini, riassumendo l’amarezza per un epilogo che nessuno avrebbe voluto. <br /><br />
                  Il tricolore Juniores 2022 sfugge così a Borca, che però resta tra i protagonisti assoluti di questa stagione. Per lui, la consapevolezza di poter tornare a lottare presto per traguardi importanti.
                </p>

              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Calendar Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Calendario Juniores 2022</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Dalle classiche di primavera alle grandi corse a tappe, il calendario Juniores 
                ha regalato emozioni e colpi di scena. Consulta tutte le date ufficiali delle gare 
                che hanno segnato la stagione 2022.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group">
                Visualizza calendario completo
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Interviews Box */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Interviste esclusive</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Voci dal gruppo e dal cuore del ciclismo giovanile. Tecnici, compagni di squadra 
                e avversari raccontano la crescita di Francesco Borca e le emozioni di un'annata 
                spezzata dalla caduta alla Coppa Pietro Linari.
              </p>
              <button className="text-green-600 hover:text-green-700 font-semibold flex items-center group">
                Ascolta le testimonianze
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Races Section */}
        <section id="gare" className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prossime Gare</h2>
            <p className="text-xl text-gray-600">Gli eventi più attesi del calendario ciclistico</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Giro della Lunigiana */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48">
                <img 
                  src="/images/bici_vittoria.jpg"
                  alt="Giro della Lunigiana"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Trophy className="inline h-4 w-4 mr-1" />
                    Gara a Tappe
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Giro della Lunigiana</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Toscana, Italia</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>15-18 Settembre 2022</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Una delle corse a tappe più prestigiose per juniores, tra i paesaggi mozzafiato 
                  della Lunigiana toscana.
                </p>
              </div>
            </div>

            {/* Trofeo Buffoni */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48">
                <img 
                  src="/images/bici_ferme.jpg"
                  alt="Trofeo Buffoni"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <User className="inline h-4 w-4 mr-1" />
                    Gara in Linea
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trofeo Buffoni</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Lombardia, Italia</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>25 Settembre 2022</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Classica lombarda dedicata alla memoria di un grande appassionato di ciclismo, 
                  percorso tecnico e selettivo.
                </p>
              </div>
            </div>

            {/* Giro di Basilicata */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48">
                <img 
                  src="/images/bici_vittoria.jpg"
                  alt="Giro di Basilicata"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Trophy className="inline h-4 w-4 mr-1" />
                    Gara a Tappe
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Giro di Basilicata</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Basilicata, Italia</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>5-8 Ottobre 2022</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Avventura nel Sud Italia tra salite impegnative e paesaggi unici, 
                  una sfida per i migliori scalatori.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-green-500">Ruote</span>{' '}
                <span className="text-red-500">Tricolori</span>
              </h3>
              <p className="text-gray-400">
                Via Torti, 10 - 16121 Genova (GE)<br />
                Tel: +39 010 1234567<br />
                Email: info@ruotetricolori.it<br />
                © 2020 Ruote Tricolori. Tutti i diritti riservati.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;