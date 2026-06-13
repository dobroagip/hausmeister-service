import React, { useState } from 'react';
import { Shield, PhoneCall, Menu, X, ChevronDown, CheckCircle } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onEmergencyClick: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onEmergencyClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Startseite' },
    { id: 'services', label: 'Unsere Leistungen' },
    { id: 'about', label: 'Über uns' },
    { id: 'references', label: 'Referenzen' },
    { id: 'blog', label: 'Ratgeber (Blog)' },
    { id: 'contact', label: 'Kontakt' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    setShowServicesDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      {/* Top emergency announcement bar */}
      <div className="bg-emerald-600 text-white py-1.5 px-4 text-xs font-semibold sm:text-sm flex justify-between items-center z-50">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-center md:justify-between">
          <span className="flex items-center gap-1.5 animate-pulse">
            <span className="h-2 w-2 rounded-full bg-white block"></span>
            24/7 Hausmeister Notdienst in Wien & Umgebung
          </span>
          <a 
            href="tel:+43123456789" 
            className="hidden md:flex items-center gap-1 hover:underline bg-white/10 px-2 py-0.5 rounded transition-all duration-200"
          >
            <PhoneCall className="h-3 w-3" />
            +43 (1) 234 567 89
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-700 to-emerald-600 flex items-center justify-center text-white shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-200">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-tight">
                Hausmeister <span className="text-emerald-600 font-extrabold text-2xl">S</span>ervice
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block -mt-0.5">
                Österreich • Wien
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.id === 'services') {
                return (
                  <div 
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setShowServicesDropdown(true)}
                    onMouseLeave={() => setShowServicesDropdown(false)}
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-200 ${
                        activeTab === 'services'
                          ? 'bg-blue-50/75 text-blue-700'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-transform" />
                    </button>
                    
                    {/* Hover Dropdown */}
                    {showServicesDropdown && (
                      <div className="absolute left-0 mt-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="px-4 py-2 border-b border-gray-50 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Häufige Dienstleistungen
                        </div>
                        <button 
                          onClick={() => handleNavClick('services')}
                          className="w-full text-left px-4 py-2 hover:bg-slate-50 text-sm text-slate-700 hover:text-blue-700 transition-colors flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                          Hausbetreuung Wien
                        </button>
                        <button 
                          onClick={() => handleNavClick('services')}
                          className="w-full text-left px-4 py-2 hover:bg-slate-50 text-sm text-slate-700 hover:text-blue-700 transition-colors flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                          Gartenpflege & Rasenmähen
                        </button>
                        <button 
                          onClick={() => handleNavClick('services')}
                          className="w-full text-left px-4 py-2 hover:bg-slate-50 text-sm text-slate-700 hover:text-blue-700 transition-colors flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                          Winterdienst § 93 StVO
                        </button>
                        <button 
                          onClick={() => handleNavClick('services')}
                          className="w-full text-left px-4 py-2 hover:bg-slate-50 text-sm text-slate-700 hover:text-blue-700 transition-colors flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></span>
                          Stiegenhausreinigung
                        </button>
                        <div className="border-t border-gray-50 mt-1 pt-1">
                          <button 
                            onClick={onEmergencyClick}
                            className="w-full text-left px-4 py-2 hover:bg-rose-50 text-sm font-semibold text-rose-600 transition-colors flex items-center gap-2"
                          >
                            <span className="h-2 w-2 bg-rose-600 rounded-full animate-ping"></span>
                            24/7 Notdienst rufen
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-200 ${
                    activeTab === link.id
                      ? 'bg-blue-50/75 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={onEmergencyClick}
              className="flex items-center gap-1.5 text-rose-600 hover:bg-rose-50 px-3.5 py-2 rounded-lg font-semibold text-sm border border-rose-200 hover:border-rose-300 transition-all duration-200"
            >
              <PhoneCall className="h-4 w-4" />
              Notruf: +43 1 234 56 78
            </button>
            <button 
              onClick={() => handleNavClick('angebot')}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm shadow-blue-700/10 transition-colors duration-200"
            >
              Angebot anfordern
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button 
              onClick={onEmergencyClick}
              className="p-2 text-rose-600 bg-rose-50 rounded-lg border border-rose-100"
              title="Notdienst anrufen"
            >
              <PhoneCall className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 transition-colors"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-inner animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                  activeTab === link.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {activeTab === link.id && <CheckCircle className="h-4 w-4 text-blue-600" />}
              </button>
            ))}

            <div className="border-t border-slate-100 my-4 pt-4 space-y-3 px-4">
              <button 
                onClick={onEmergencyClick}
                className="w-full flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-bold shadow-md shadow-rose-600/10"
              >
                <PhoneCall className="h-5 w-5" />
                Notdienst anrufen
              </button>
              <button 
                onClick={() => handleNavClick('angebot')}
                className="w-full flex justify-center bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-bold shadow-sm"
              >
                Kostenloses Angebot anfordern
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
