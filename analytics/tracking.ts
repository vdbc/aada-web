declare global {
  interface Window {
    fbq(type: string, event: string): void;
  }
}

export function fbTrack(event: string) {
  if (!event) return;
  window.fbq("track", event);
}
