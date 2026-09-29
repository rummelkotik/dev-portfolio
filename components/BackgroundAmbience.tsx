export default function BackgroundAmbience() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#09090b]">
      {/* Деликатная точечная сетка (dot pattern) сверху */}
      <div 
        className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Мягкий рассеянный луч сверху по центру */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/[0.07] blur-[140px]" />

      {/* Едва заметный холодный свет сбоку для объема */}
      <div className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.04] blur-[160px]" />
    </div>
  );
}