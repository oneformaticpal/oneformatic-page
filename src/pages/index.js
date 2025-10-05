import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Award, Calendar, BookOpen, Code, Wifi, Trophy, Zap, ChevronDown, Cog } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [counts, setCounts] = useState({ students: 0, achievements: 0, projects: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animateCount = (target, key) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 30);
    };

    animateCount(36, 'students');
    animateCount(1, 'achievements');
    animateCount(2, 'projects');
  }, []);

  const primaryColor = '#1a3baa';
  const secondaryColor = '#ffffff';

  // --- New Gallery URL Constant ---
  const galleryUrl = 'https://oneformaticgallery.vercel.app/';

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 animate-fade-in">
              <div className="relative">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg animate-pulse-subtle" style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, #2d5dd9 100%)` }}>
                  <Code className="h-6 w-6" style={{ color: secondaryColor }} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <span className="text-xl font-bold transition-colors duration-300" style={{ color: scrolled ? primaryColor : secondaryColor }}>X TKJ 1</span>
                <p className="text-xs transition-colors duration-300" style={{ color: scrolled ? '#6b7280' : 'rgba(255,255,255,0.8)' }}>SMKN 3 Buduran</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="https://oneformatic.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold transition-all duration-300 hover:scale-110"
                style={{ color: scrolled ? '#374151' : secondaryColor }}
              >
                Manajemen Kelas
              </a>
              <a 
                href={galleryUrl} // <-- UPDATED LINK
                target="_blank" // <-- Added target and rel for external link
                rel="noopener noreferrer"
                className="font-semibold transition-all duration-300 hover:scale-110"
                style={{ color: scrolled ? '#374151' : secondaryColor }}
              >
                Galeri
              </a>
              <a 
                href="https://oneformatic.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
                style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, #2d5dd9 100%)`, color: secondaryColor }}
              >
                Masuk Dashboard
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden transition-colors duration-300"
              style={{ color: scrolled ? primaryColor : secondaryColor }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 animate-slide-down">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="https://oneformatic.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 py-3 font-semibold transition-all duration-300 hover:translate-x-2"
                style={{ color: '#374151' }}
              >
                Manajemen Kelas
              </a>
              <a 
                href={galleryUrl} // <-- UPDATED LINK
                target="_blank" // <-- Added target and rel for external link
                rel="noopener noreferrer"
                className="block text-gray-700 py-3 font-semibold transition-all duration-300 hover:translate-x-2"
                style={{ color: '#374151' }}
              >
                Galeri
              </a>
              <a 
                href="https://oneformatic.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 hover:shadow-xl"
                style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, #2d5dd9 100%)`, color: secondaryColor }}
              >
                Masuk Dashboard
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: secondaryColor }}>
        {/* Animated Background - subtle blue accents */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full blur-3xl animate-float" style={{ top: '10%', left: '10%', backgroundColor: `${primaryColor}15` }}></div>
          <div className="absolute w-96 h-96 rounded-full blur-3xl animate-float-delayed" style={{ bottom: '10%', right: '10%', backgroundColor: `${primaryColor}20` }}></div>
          <div className="absolute w-64 h-64 rounded-full blur-2xl animate-pulse-slow" style={{ top: '50%', left: '50%', backgroundColor: `${primaryColor}10` }}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-3 rounded-full animate-bounce-subtle" style={{ backgroundColor: `${primaryColor}15`, border: `2px solid ${primaryColor}` }}>
              <span className="text-sm font-semibold flex items-center space-x-2" style={{ color: primaryColor }}>
                <Zap className="h-4 w-4 animate-pulse" />
                <span>Teknik Komputer dan Jaringan</span>
              </span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up" style={{ color: primaryColor }}>
             <span className="inline-block px-4 py-2 rounded-2xl" style={{ backgroundColor: primaryColor, color: secondaryColor }}>X TKJ 1</span>
            </h1>
            
            <p className="text-2xl sm:text-3xl mb-4 font-semibold animate-slide-up-delayed" style={{ color: '#374151' }}>
              SMKN 3 Buduran
            </p>
            
            <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed" style={{ color: '#6b7280' }}>
              Belajar, Berkarya, dan Berinovasi Bersama. Membangun masa depan digital dengan teknologi terkini dan semangat kolaborasi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-delayed">
              <a
                href="https://oneformatic.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 flex items-center space-x-3"
                style={{ backgroundColor: primaryColor, color: secondaryColor }}
              >
                <span>Lihat Dashboard</span>
                <Code className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="#tentang"
                className="group px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-110 hover:-translate-y-2 flex items-center space-x-3"
                style={{ border: `3px solid ${primaryColor}`, color: primaryColor, backgroundColor: 'transparent' }}
              >
                <span>Tentang Kami</span>
                <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Floating Stats */}
            <div className="mt-20 grid grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: <Users />, count: counts.students, label: 'Siswa' },
                { icon: <Trophy />, count: counts.achievements, label: 'Prestasi' },
                { icon: <BookOpen />, count: counts.projects, label: 'Project' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 animate-fade-in-scale"
                  style={{ 
                    backgroundColor: secondaryColor,
                    border: `2px solid ${primaryColor}`,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    animationDelay: `${index * 0.2}s` 
                  }}
                >
                  <div className="flex justify-center mb-3" style={{ color: primaryColor }}>
                    {React.cloneElement(stat.icon, { className: 'h-8 w-8' })}
                  </div>
                  <p className="text-4xl font-bold mb-1" style={{ color: primaryColor }}>{stat.count}</p>
                  <p className="text-sm font-semibold text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8" style={{ color: primaryColor }} />
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: secondaryColor }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Tentang <span style={{ color: primaryColor }}>X TKJ 1</span>
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ background: `linear-gradient(to right, ${primaryColor}, #2d5dd9)` }}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll">
              <p className="text-lg text-gray-700 leading-relaxed">
                Kelas X TKJ 1 adalah bagian dari jurusan Teknik Komputer dan Jaringan di SMKN 3 Buduran. Kami adalah kelas yang penuh dengan semangat belajar, kreativitas, dan inovasi dalam bidang teknologi informasi.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dengan bimbingan guru-guru yang berpengalaman, kami mempelajari berbagai aspek teknologi mulai dari pemrograman, jaringan komputer, hingga sistem operasi. Kami tidak hanya belajar teori, tetapi juga praktik langsung untuk membangun skill yang dibutuhkan di dunia kerja.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2" style={{ backgroundColor: secondaryColor, border: `2px solid ${primaryColor}` }}>
                  <Wifi className="h-10 w-10 mb-3" style={{ color: primaryColor }} />
                  <h3 className="font-bold mb-2" style={{ color: primaryColor }}>Networking</h3>
                  <p className="text-sm text-gray-600">Ahli dalam jaringan komputer</p>
                </div>
                <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2" style={{ backgroundColor: secondaryColor, border: `2px solid ${primaryColor}` }}>
                  <Code className="h-10 w-10 mb-3" style={{ color: primaryColor }} />
                  <h3 className="font-bold mb-2" style={{ color: primaryColor }}>Programming</h3>
                  <p className="text-sm text-gray-600">Coding untuk masa depan</p>
                </div>
              </div>
            </div>

            <div className="relative animate-on-scroll">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 border-4" style={{ borderColor: primaryColor, backgroundColor: secondaryColor }}>
                <div className="aspect-square flex items-center justify-center p-8">
                  <div className="text-center w-full">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg" style={{ borderColor: primaryColor, backgroundColor: secondaryColor }}>
                        <BookOpen className="h-10 w-10 mx-auto mb-2" style={{ color: primaryColor }} />
                        <p className="text-xl font-bold" style={{ color: primaryColor }}>36</p>
                        <p className="text-xs text-gray-600">Siswa Aktif</p>
                      </div>
                      <div className="p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg" style={{ borderColor: primaryColor, backgroundColor: secondaryColor }}>
                        <Code className="h-10 w-10 mx-auto mb-2" style={{ color: primaryColor }} />
                        <p className="text-xl font-bold" style={{ color: primaryColor }}>2</p>
                        <p className="text-xs text-gray-600">Project Selesai</p>
                      </div>
                      <div className="p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg" style={{ borderColor: primaryColor, backgroundColor: secondaryColor }}>
                        <Wifi className="h-10 w-10 mx-auto mb-2" style={{ color: primaryColor }} />
                        <p className="text-xl font-bold" style={{ color: primaryColor }}>100%</p>
                        <p className="text-xs text-gray-600">Praktik Lab</p>
                      </div>
                      <div className="p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg" style={{ borderColor: primaryColor, backgroundColor: secondaryColor }}>
                        <Award className="h-10 w-10 mx-auto mb-2" style={{ color: primaryColor }} />
                        <p className="text-xl font-bold" style={{ color: primaryColor }}>1</p>
                        <p className="text-xs text-gray-600">Sertifikasi</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t-2" style={{ borderColor: `${primaryColor}30` }}>
                      <p className="text-lg font-bold mb-1" style={{ color: primaryColor }}>Generasi Digital</p>
                      <p className="text-sm text-gray-600">Masa Depan Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-30 animate-pulse-slow" style={{ backgroundColor: primaryColor }}></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full blur-2xl opacity-30 animate-pulse-slow" style={{ backgroundColor: primaryColor }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Keunggulan <span style={{ color: primaryColor }}>Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Berbagai kegiatan dan program yang membuat kami berkembang
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cog className="h-10 w-10" style={{ color: secondaryColor }} />,
                title: "Rakit & Repair PC",
                description: "Ahli dalam merakit dan memperbaiki komputer dari komponen dasar"
              },
              {
                icon: <Wifi className="h-10 w-10" style={{ color: secondaryColor }} />,
                title: "Lab Jaringan",
                description: "Fasilitas laboratorium dengan peralatan networking modern"
              },
              {
                icon: <Users className="h-10 w-10" style={{ color: secondaryColor }} />,
                title: "Tim Solid",
                description: "Kolaborasi dan kerjasama yang kuat antar siswa"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:-translate-y-3 animate-on-scroll"
                style={{ 
                  backgroundColor: secondaryColor,
                  border: '2px solid #e5e7eb',
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                <div className="mb-6 p-4 rounded-xl inline-block transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ backgroundColor: primaryColor }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: primaryColor }}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section id="galeri" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, #2d5dd9 100%)` }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-on-scroll">
            <Calendar className="h-24 w-24 mx-auto mb-6 animate-float" style={{ color: secondaryColor, opacity: 0.7 }} />
            <h2 className="text-5xl font-bold mb-4" style={{ color: secondaryColor }}>
              Galeri Segera Hadir
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Dokumentasi kegiatan dan momen berharga kelas X TKJ 1 akan segera tersedia
            </p>
            <a // <-- Changed div to a for redirection
              href={galleryUrl} // <-- UPDATED LINK
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: secondaryColor, border: `2px solid ${secondaryColor}` }}
            >
              <span className="font-semibold" style={{ color: primaryColor }}>Kunjungi Galeri</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: secondaryColor }}>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-on-scroll">
          <h2 className="text-5xl font-bold mb-6" style={{ color: primaryColor }}>
            Bergabung dengan Perjalanan Kami
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Lihat perkembangan dan kegiatan kelas melalui dashboard kami
          </p>
          <a
            href="https://oneformatic.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-12 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:-translate-y-2"
            style={{ backgroundColor: primaryColor, color: secondaryColor }}
          >
            <span>Buka Dashboard</span>
            <Code className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: primaryColor, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: secondaryColor }}>
                  <Code className="h-5 w-5" style={{ color: primaryColor }} />
                </div>
                <div>
                  <span className="text-lg font-bold" style={{ color: secondaryColor }}>X TKJ 1</span>
                  <p className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>SMKN 3 Buduran</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Membangun generasi teknologi yang unggul dan berintegritas tinggi.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4" style={{ color: secondaryColor }}>Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://oneformatic.vercel.app/" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Manajemen Kelas
                  </a>
                </li>
                <li>
                  <a href={galleryUrl} target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Galeri</a> {/* <-- UPDATED LINK */}
                </li>
                <li>
                  <a href="#tentang" className="transition hover:opacity-80" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Tentang Kami</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4" style={{ color: secondaryColor }}>Kontak</h4>
              <ul className="space-y-2 text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                <li>oneformaticpal@gmail.com</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 text-center text-sm" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.8)' }}>
            <p>&copy; 2025 X TKJ 1 SMKN 3 Buduran. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes slide-down {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up-delayed {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delayed {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up-delayed {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-subtle { animation: pulse-subtle 3s ease-in-out infinite; }
        .animate-slide-down { animation: slide-down 0.5s ease-out; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-slide-up { animation: slide-up 1s ease-out; }
        .animate-slide-up-delayed { animation: slide-up-delayed 1.2s ease-out; }
        .animate-fade-in-delayed { animation: fade-in-delayed 1.5s ease-out; }
        .animate-fade-in-up-delayed { animation: fade-in-up-delayed 1.8s ease-out; }
        .animate-fade-in-scale { animation: fade-in-scale 0.8s ease-out; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }

        .bg-grid-pattern {
          background-image: linear-gradient(rgba(26,59,170,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(26,59,170,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .animate-on-scroll {
          /* Placeholder for Intersection Observer based animation logic */
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}