import { Logo } from './Logo';

export function StyleGuidePage() {
  return (
    <div className="relative min-h-screen px-8 py-24">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Header */}
        <div>
          <h1 className="text-5xl font-black tracking-wider mb-4">STYLE GUIDE</h1>
          <p className="text-sm tracking-widest uppercase opacity-40">
            Inkwell Tattoo Studio Brand Guidelines
          </p>
        </div>

        {/* Logo Usage */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black tracking-wider border-b border-[var(--border)] pb-4">
            LOGO
          </h2>
          <div className="bg-[var(--secondary)] p-12 rounded-sm flex items-center justify-center">
            <div className="scale-75">
              <Logo />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-black tracking-wider mb-2 text-[var(--tattoo-red)]">PRIMARY USAGE</h3>
              <p className="opacity-60 leading-relaxed">
                The logo should always be centered with ample negative space. Minimum clear space of 40px on all sides.
              </p>
            </div>
            <div>
              <h3 className="font-black tracking-wider mb-2 text-[var(--tattoo-red)]">VARIANTS</h3>
              <p className="opacity-60 leading-relaxed">
                Single color version available for merchandise and print applications. Always maintain stroke treatment.
              </p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black tracking-wider border-b border-[var(--border)] pb-4">
            COLOR PALETTE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="space-y-3">
              <div 
                className="h-32 rounded-sm border border-[var(--border)]"
                style={{ backgroundColor: '#0a0a0a' }}
              />
              <div className="text-xs">
                <p className="font-black tracking-wider">BACKGROUND</p>
                <p className="opacity-60 mt-1">#0a0a0a</p>
              </div>
            </div>
            <div className="space-y-3">
              <div 
                className="h-32 rounded-sm border border-[var(--border)]"
                style={{ backgroundColor: '#f5f5f0' }}
              />
              <div className="text-xs">
                <p className="font-black tracking-wider">PRIMARY</p>
                <p className="opacity-60 mt-1">#f5f5f0</p>
              </div>
            </div>
            <div className="space-y-3">
              <div 
                className="h-32 rounded-sm border border-[var(--border)]"
                style={{ backgroundColor: '#c84040' }}
              />
              <div className="text-xs">
                <p className="font-black tracking-wider">RED ACCENT</p>
                <p className="opacity-60 mt-1">#c84040</p>
              </div>
            </div>
            <div className="space-y-3">
              <div 
                className="h-32 rounded-sm border border-[var(--border)]"
                style={{ backgroundColor: '#d4a340' }}
              />
              <div className="text-xs">
                <p className="font-black tracking-wider">YELLOW ACCENT</p>
                <p className="opacity-60 mt-1">#d4a340</p>
              </div>
            </div>
            <div className="space-y-3">
              <div 
                className="h-32 rounded-sm border border-[var(--border)]"
                style={{ backgroundColor: '#5a8a5a' }}
              />
              <div className="text-xs">
                <p className="font-black tracking-wider">GREEN ACCENT</p>
                <p className="opacity-60 mt-1">#5a8a5a</p>
              </div>
            </div>
          </div>
          <div className="text-sm opacity-60 leading-relaxed">
            <p>
              Accent colors should be used sparingly for hover states, highlights, and decorative elements. 
              Primary palette maintains high contrast for accessibility and bold visual impact.
            </p>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black tracking-wider border-b border-[var(--border)] pb-4">
            TYPOGRAPHY
          </h2>
          
          <div className="space-y-12">
            <div>
              <div className="text-6xl font-black tracking-wider mb-3" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                INKWELL
              </div>
              <div className="text-sm">
                <p className="font-black tracking-wider">DISPLAY / LOGO</p>
                <p className="opacity-60 mt-1">Impact, Arial Black - 900 weight, wide letter spacing</p>
              </div>
            </div>

            <div>
              <div className="text-2xl font-black tracking-wider mb-3">
                HEADING TEXT
              </div>
              <div className="text-sm">
                <p className="font-black tracking-wider">HEADINGS</p>
                <p className="opacity-60 mt-1">System Sans-Serif - 900 weight, wide letter spacing, uppercase</p>
              </div>
            </div>

            <div>
              <div className="text-base tracking-widest mb-3 uppercase">
                Navigation and Body Text
              </div>
              <div className="text-sm">
                <p className="font-black tracking-wider">UI / BODY</p>
                <p className="opacity-60 mt-1">System Sans-Serif - 400 weight, wide letter spacing, uppercase for UI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black tracking-wider border-b border-[var(--border)] pb-4">
            SPACING & LAYOUT
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-4">
              <h3 className="font-black tracking-wider text-[var(--tattoo-red)]">NEGATIVE SPACE</h3>
              <p className="opacity-60 leading-relaxed">
                Embrace generous negative space. Minimum 80px padding on all page edges for desktop, 32px for mobile.
              </p>
              <div className="bg-[var(--secondary)] p-8 rounded-sm">
                <div className="border border-[var(--tattoo-red)] border-dashed p-8 text-center opacity-40">
                  Content Area
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-black tracking-wider text-[var(--tattoo-red)]">GRID SYSTEM</h3>
              <p className="opacity-60 leading-relaxed">
                Center-aligned layouts prioritized. Asymmetric accents used sparingly for visual interest.
              </p>
              <div className="bg-[var(--secondary)] p-8 rounded-sm grid grid-cols-3 gap-4">
                <div className="bg-[var(--tattoo-red)] opacity-20 h-16 rounded-sm" />
                <div className="bg-[var(--tattoo-red)] opacity-20 h-16 rounded-sm" />
                <div className="bg-[var(--tattoo-red)] opacity-20 h-16 rounded-sm" />
              </div>
            </div>
          </div>
        </section>

        {/* Effects */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black tracking-wider border-b border-[var(--border)] pb-4">
            VISUAL EFFECTS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-4">
              <h3 className="font-black tracking-wider text-[var(--tattoo-red)]">GRAIN TEXTURE</h3>
              <div className="bg-[var(--secondary)] h-32 rounded-sm relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    mixBlendMode: 'overlay'
                  }}
                />
              </div>
              <p className="opacity-60 leading-relaxed">
                Subtle grain overlay at 3% opacity for texture and depth.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-black tracking-wider text-[var(--tattoo-yellow)]">GLOW EFFECTS</h3>
              <div className="bg-[var(--secondary)] h-32 rounded-sm flex items-center justify-center">
                <div 
                  className="text-xl font-black tracking-wider"
                  style={{ textShadow: '0 0 12px var(--tattoo-glow)' }}
                >
                  HOVER
                </div>
              </div>
              <p className="opacity-60 leading-relaxed">
                Red glow on interactive elements at 30% opacity.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-black tracking-wider text-[var(--tattoo-green)]">GRADIENTS</h3>
              <div 
                className="h-32 rounded-sm opacity-20"
                style={{
                  background: 'radial-gradient(circle, var(--tattoo-red) 0%, var(--tattoo-yellow) 50%, var(--tattoo-green) 100%)'
                }}
              />
              <p className="opacity-60 leading-relaxed">
                Psychedelic gradients at very low opacity for atmosphere.
              </p>
            </div>
          </div>
        </section>

        {/* Iconography */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black tracking-wider border-b border-[var(--border)] pb-4">
            ICONOGRAPHY
          </h2>
          
          <div className="flex gap-12 items-center justify-center py-8">
            {/* Rose */}
            <svg width="48" height="48" viewBox="0 0 48 48" className="opacity-60">
              <circle cx="24" cy="24" r="12" fill="none" stroke="var(--tattoo-red)" strokeWidth="2" />
              <circle cx="24" cy="24" r="6" fill="var(--tattoo-red)" opacity="0.3" />
            </svg>
            
            {/* Dagger */}
            <svg width="48" height="48" viewBox="0 0 48 48" className="opacity-60">
              <line x1="24" y1="8" x2="24" y2="36" stroke="var(--tattoo-yellow)" strokeWidth="2" />
              <polygon points="24,8 20,14 28,14" fill="var(--tattoo-yellow)" />
              <rect x="22" y="36" width="4" height="4" fill="var(--tattoo-yellow)" />
            </svg>
            
            {/* Decorative Line */}
            <svg width="48" height="48" viewBox="0 0 48 48" className="opacity-60">
              <rect x="10" y="23" width="28" height="2" fill="var(--tattoo-green)" />
              <circle cx="10" cy="24" r="3" fill="var(--tattoo-green)" />
              <circle cx="38" cy="24" r="3" fill="var(--tattoo-green)" />
            </svg>
          </div>
          
          <div className="text-sm opacity-60 leading-relaxed text-center">
            <p>
              American Traditional motifs (roses, daggers, decorative elements) used sparingly as accents. 
              Bold linework, 2px minimum stroke weight.
            </p>
          </div>
        </section>

        {/* Voice & Tone */}
        <section className="space-y-8 pb-24">
          <h2 className="text-3xl font-black tracking-wider border-b border-[var(--border)] pb-4">
            VOICE & TONE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-4">
              <h3 className="font-black tracking-wider text-[var(--tattoo-red)]">DO</h3>
              <ul className="space-y-2 opacity-60 leading-relaxed">
                <li>• Use uppercase for emphasis and hierarchy</li>
                <li>• Embrace negative space and minimalism</li>
                <li>• Keep copy concise and direct</li>
                <li>• Maintain high contrast throughout</li>
                <li>• Use accent colors sparingly</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-black tracking-wider text-[var(--tattoo-red)]">DON'T</h3>
              <ul className="space-y-2 opacity-60 leading-relaxed">
                <li>• Use script or decorative fonts for UI</li>
                <li>• Overcrowd layouts with content</li>
                <li>• Use busy patterns or textures</li>
                <li>• Dilute brand colors with variations</li>
                <li>• Add unnecessary decorative elements</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
