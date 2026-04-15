import { useRef, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playingRef = useRef(false);
  const audioCountryRef = useRef<HTMLAudioElement | null>(null);
  const playingCountryRef = useRef(false);

  const getAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/Fortunate Son.mp3');
      audioRef.current.loop = true;
    }
    return audioRef.current;
  };

  const getAudioCountry = () => {
    if (!audioCountryRef.current) {
      audioCountryRef.current = new Audio('/Achy Breaky.mp3');
      audioCountryRef.current.loop = true;
    }
    return audioCountryRef.current;
  };

  const handleLogoMouseEnter = () => {
    getAudio().play();
  };

  const handleLogoMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleLogoClick = useCallback(() => {
    const audio = getAudio();
    if (playingRef.current) {
      audio.pause();
      audio.currentTime = 0;
      playingRef.current = false;
    } else {
      audio.play();
      playingRef.current = true;
    }
  }, []);

  const handleCountryMouseEnter = () => {
    getAudioCountry().play();
  };

  const handleCountryMouseLeave = () => {
    if (audioCountryRef.current) {
      audioCountryRef.current.pause();
      audioCountryRef.current.currentTime = 0;
    }
  };

  const handleCountryClick = useCallback(() => {
    const audio = getAudioCountry();
    if (playingCountryRef.current) {
      audio.pause();
      audio.currentTime = 0;
      playingCountryRef.current = false;
    } else {
      audio.play();
      playingCountryRef.current = true;
    }
  }, []);

  return (
    <div className="font-body selection:bg-secondary selection:text-on-secondary h-screen w-full bg-black text-[#E2E2E2] overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center py-10 pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-on-background uppercase drop-shadow-2xl pointer-events-auto">
          DOCTA BOSS
        </h1>
      </header>

      <main className="h-screen w-full flex flex-col md:flex-row overflow-hidden relative split-container">
        {/* LEFT HALF: TRIBUTE (Rock Aesthetic) */}
        <section className="split-pane relative flex-1 group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
          {/* Background Image */}
          <div className="absolute inset-0 grayscale contrast-125 brightness-50 group-hover:scale-105 transition-transform duration-1000">
            <img
              alt="Gritty black and white close-up of a vintage electric guitar and amplifier on a dark stage with dramatic smoke and spotlights"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
          {/* Content Centered */}
          <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
            <div className="flex flex-col items-center w-full gap-[15vh] pt-12">
              <img
                alt="Docta Boss Logo"
                className="max-w-[250px] md:max-w-[400px] w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                src="/logo docta.png"
                onMouseEnter={handleLogoMouseEnter}
                onMouseLeave={handleLogoMouseLeave}
                onClick={handleLogoClick}
              />
              <button className="px-12 py-5 bg-white text-black font-headline font-black uppercase tracking-[0.2em] hover:bg-secondary hover:text-on-secondary transition-all duration-300 flex items-center gap-4 group shadow-2xl relative z-20">
                INGRESAR
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* RIGHT HALF: COUNTRY (Ochre Aesthetic) */}
        <section className="split-pane relative flex-1 group cursor-pointer overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 brightness-50 sepia-[.3] group-hover:scale-105 transition-transform duration-1000">
            <img
              alt="Wide cinematic shot of a dusty western landscape at sunset with a lone acoustic guitar leaning against a rustic wooden fence"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
          {/* Content Centered */}
          <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
            <div className="flex flex-col items-center w-full gap-[15vh] pt-12">
              <img
                alt="Country Logo"
                className="max-w-[250px] md:max-w-[400px] w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(247,189,72,0.3)]"
                src="/logo Country.jpeg"
                onMouseEnter={handleCountryMouseEnter}
                onMouseLeave={handleCountryMouseLeave}
                onClick={handleCountryClick}
              />
              <button className="px-12 py-5 bg-white text-black font-headline font-black uppercase tracking-[0.2em] hover:bg-secondary hover:text-on-secondary transition-all duration-300 flex items-center gap-4 group shadow-2xl relative z-20">
                INGRESAR
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 w-full z-50 flex flex-col items-center gap-4 py-8 px-8 pointer-events-none">
        <p className="text-[#C6C6C7] font-body text-[10px] tracking-widest uppercase opacity-60">© 2024 DOCTA BOSS. TODOS LOS DERECHOS RESERVADOS.</p>
      </footer>

      {/* Decorative Elements */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-32 bg-white/20 hidden md:block z-40"></div>
      <div className="fixed top-1/2 left-0 w-full h-[1px] bg-white/10 md:hidden z-40"></div>
    </div>
  );
}
