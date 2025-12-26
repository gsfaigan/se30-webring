interface RedirectingPageProps {
  targetSite: string;
  direction: 'prev' | 'next';
}

export function RedirectingPage({ targetSite: _targetSite, direction: _direction }: RedirectingPageProps) {
  return (
    <div className="min-h-screen w-full bg-[#181818] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin mb-4">
          <div className="w-8 h-8 border-2 border-candlelight border-t-transparent rounded-full" />
        </div>
        <p className="text-white/80">Redirecting to {_direction === 'prev' ? 'previous' : 'next'} site in the webring...</p>
      </div>
    </div>
  );
}



