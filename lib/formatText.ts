export function fixTypography(text: string): string {
  if (!text) return "";
  return text
    .replace(/(^|[\s(«"„])(и|в|во|не|на|с|со|к|ко|по|о|об|от|из|за|у|до|для|под|над|при|про|без)\s+/gi, '$1$2\u00A0')
    .replace(/\s+([—–-])\s+/g, '\u00A0$1 ');
}