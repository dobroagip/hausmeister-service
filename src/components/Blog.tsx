import { FormEvent, useState } from 'react';
import { Search, User, Calendar, Clock, ArrowRight, MessageSquare, ChevronLeft, Send } from 'lucide-react';
import { blogPosts as initialPosts } from '../data/blog';
import { BlogPost } from '../types';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  
  // Custom draft post creator
  const [showDraftForm, setShowDraftForm] = useState(false);
  const [draftTitle, setDraftTitle] = useState('');
  const [draftSummary, setDraftSummary] = useState('');
  const [draftContent, setDraftContent] = useState('');
  const [draftCategory, setDraftCategory] = useState('Allgemein');

  // Dynamic comments
  const [comments, setComments] = useState<Record<string, Array<{ author: string, text: string, date: string }>>>({
    'winterdienstpflicht-oesterreich': [
      { author: 'Ing. Harald Steiner', text: 'Sehr präziser Artikel! Die Haftungsverlagerung ist für uns der entscheidende Grund zur Auslagerung gewesen.', date: '21. Mai 2026' }
    ]
  });
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');

  const activePost = posts.find(p => p.id === selectedPostId);

  const filteredPosts = posts.filter(post => {
    const q = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.summary.toLowerCase().includes(q) ||
      post.content.toLowerCase().includes(q) ||
      post.keywords.some(k => k.toLowerCase().includes(q))
    );
  });

  const handleAddComment = (e: FormEvent, postId: string) => {
    e.preventDefault();
    if (!commentName || !commentText) return;

    const newComment = {
      author: commentName,
      text: commentText,
      date: 'Gerade eben'
    };

    const currentPostComments = comments[postId] || [];
    setComments({
      ...comments,
      [postId]: [...currentPostComments, newComment]
    });

    setCommentName('');
    setCommentText('');
  };

  const handleAddDraft = (e: FormEvent) => {
    e.preventDefault();
    if (!draftTitle || !draftContent) {
      alert('Bitte füllen Sie den Titel und Inhalt aus.');
      return;
    }

    const newPost: BlogPost = {
      id: `custom-${Date.now()}`,
      title: draftTitle,
      summary: draftSummary || draftContent.substring(0, 100) + '...',
      content: draftContent,
      category: draftCategory,
      readTime: '3 min',
      publishedAt: new Date().toISOString().split('T')[0],
      author: 'Eigentümer Entwurf',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      keywords: ['Hausmeister', 'Österreich', draftCategory]
    };

    setPosts([newPost, ...posts]);
    setDraftTitle('');
    setDraftSummary('');
    setDraftContent('');
    setShowDraftForm(false);
  };

  return (
    <div className="bg-white py-16 lg:py-24 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full post detailed layout */}
        {activePost ? (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-200">
            {/* Go back trigger button */}
            <button
              onClick={() => setSelectedPostId(null)}
              className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-bold text-xs sm:text-sm select-none"
            >
              <ChevronLeft className="h-4.5 w-4.5" />
              Zurück zur Übersicht
            </button>

            {/* Post Header */}
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                {activePost.category}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {activePost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 pt-2 font-mono">
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <span>{activePost.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>Veröffentlicht am {activePost.publishedAt}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{activePost.readTime} Lesezeit</span>
                </div>
              </div>
            </div>

            {/* Feature Image */}
            <div className="h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <img 
                src={activePost.image} 
                alt={activePost.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Text Structure Content (Using beautiful custom markdown wrapper styled in clean margins) */}
            <div className="text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed whitespace-pre-line px-1">
              {activePost.content}
            </div>

            {/* Keyword tags */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 font-mono text-xs text-slate-400">
              <span className="font-bold text-slate-500">Keywords:</span>
              {activePost.keywords.map((kw) => (
                <span key={kw} className="bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md text-slate-600">
                  #{kw}
                </span>
              ))}
            </div>

            {/* Comments interactive segment */}
            <div className="pt-10 border-t border-slate-100 space-y-6">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-700" />
                Leserkommentare ({comments[activePost.id]?.length || 0})
              </h3>

              {comments[activePost.id] && comments[activePost.id].map((com, idx) => (
                <div key={idx} className="bg-slate-50 p-4.5 rounded-xl border border-slate-150/80">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="font-bold text-xs sm:text-sm text-slate-900">{com.author}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{com.date}</span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {com.text}
                  </p>
                </div>
              ))}

              {/* Leave comment form */}
              <form onSubmit={(e) => handleAddComment(e, activePost.id)} className="space-y-3.5 bg-slate-50/50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">Kommentar verfassen</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    placeholder="Ihr vollständiger Name"
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-lg outline-none bg-white focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <textarea
                  required
                  rows={2}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Ihre fachliche Meinung oder Rückfrage..."
                  className="w-full text-xs p-2.5 border border-slate-200 rounded-lg outline-none bg-white focus:ring-1 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs py-2 px-4.5 rounded-lg flex items-center gap-1.5"
                >
                  <Send className="h-3 w-3" />
                  Kommentar posten
                </button>
              </form>
            </div>

          </div>
        ) : (
          <div className="space-y-12">
            
            {/* Header informational */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Auskunft & Expertenwissen</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Hausmeister Ratgeber</h1>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Rechtliche Pflichten für Gehwege, Pflegerhythmen am Wiener Stiegenhaus und wissenswerte Instandhaltungstipps direkt von unseren Betriebsleitern.
              </p>
            </div>

            {/* Search and Action area */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4.5 rounded-2xl border border-slate-100 max-w-3xl mx-auto">
              <div className="relative w-full sm:max-w-md">
                <Search className="h-4.5 w-4.5 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ratgeber durchsuchen..."
                  className="w-full text-xs sm:text-sm pl-9 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <button
                onClick={() => setShowDraftForm(!showDraftForm)}
                className="w-full sm:w-auto bg-slate-900 border border-slate-800 text-white font-bold text-xs py-3 px-5 rounded-xl hover:bg-slate-950 transition-all flex items-center justify-center gap-1.5"
              >
                Fachbeitrag entwerfen (Demo)
              </button>
            </div>

            {/* Custom pre-post Draft submission form */}
            {showDraftForm && (
              <form onSubmit={handleAddDraft} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 max-w-2xl mx-auto space-y-4 animate-in fade-in slide-in-from-top-4 duration-250">
                <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">Fachbeitrag hinzufügen (Wohnungs-Beiräte & Eigentümer willkommen!)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Artikelüberschrift</label>
                    <input
                      required
                      type="text"
                      value={draftTitle}
                      onChange={(e) => setDraftTitle(e.target.value)}
                      placeholder="z.B. Heizungskontrollen im Zinshaus"
                      className="w-full text-xs p-2.5 border border-slate-200 rounded-lg outline-none bg-white focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Themengebiet (Kategorie)</label>
                    <input
                      type="text"
                      required
                      value={draftCategory}
                      onChange={(e) => setDraftCategory(e.target.value)}
                      placeholder="z.B. Mietrecht, Wartung"
                      className="w-full text-xs p-2.5 border border-slate-200 rounded-lg outline-none bg-white focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Kurzzusammenfassung</label>
                  <input
                    type="text"
                    value={draftSummary}
                    onChange={(e) => setDraftSummary(e.target.value)}
                    placeholder="Worum geht es in dem kurzen Fachartikel?"
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-lg outline-none bg-white focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Artikeltext (Inhalt)</label>
                  <textarea
                    required
                    rows={4}
                    value={draftContent}
                    onChange={(e) => setDraftContent(e.target.value)}
                    placeholder="Schreiben Sie hier Ihre Tipps oder Rechtsausführungen..."
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-lg outline-none bg-white focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowDraftForm(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 rounded-lg"
                  >
                    Abbrechen
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg"
                  >
                    Entwurf einreichen
                  </button>
                </div>
              </form>
            )}

            {/* List of articles */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-2xl border border-slate-105 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-slate-200 transition-all">
                    <div>
                      {/* Image Thumbnail */}
                      <div className="h-44 bg-slate-100 overflow-hidden relative">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover" 
                        />
                        <span className="absolute top-2.5 left-2.5 bg-slate-900/85 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.publishedAt}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug line-clamp-2 hover:text-blue-700 transition-colors cursor-pointer" onClick={() => setSelectedPostId(post.id)}>
                          {post.title}
                        </h3>

                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                          {post.summary}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2">
                      <button
                        onClick={() => setSelectedPostId(post.id)}
                        className="text-blue-700 hover:text-blue-800 font-extrabold text-xs sm:text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Beitrag lesen
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-slate-50 rounded-2xl border border-slate-100 max-w-md mx-auto">
                <p className="text-slate-500 text-sm">Leider keine Ratgeber-Einträge für Ihre Suche gefunden. Versuchen Sie es mit Begriffen wie "Winterdienst", "Stiegenhaus" oder "Garten".</p>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
