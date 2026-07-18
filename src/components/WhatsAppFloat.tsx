import { MessageCircle } from "lucide-react";

interface WhatsAppFloatProps {
  phone: string;
  message?: string;
  label?: string;
}

export function WhatsAppFloat({ phone, message = "", label = "Chat on WhatsApp" }: WhatsAppFloatProps) {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const text = message ? `&text=${encodeURIComponent(message)}` : "";
  // Use web.whatsapp.com on desktop and wa.me on mobile to evitar bloqueios de api.whatsapp.com
  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  const href = isMobile
    ? `https://wa.me/${cleanPhone}${message ? `?text=${encodeURIComponent(message)}` : ""}`
    : `https://web.whatsapp.com/send?phone=${cleanPhone}${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center h-14 w-14 rounded-full shadow-2xl transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      style={{
        background: "linear-gradient(145deg, #25D366 0%, #128C7E 100%)",
      }}
    >
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-40 pointer-events-none"
        style={{ background: "#25D366" }}
        aria-hidden="true"
      />
      <MessageCircle className="relative h-7 w-7 text-white" strokeWidth={2.4} />
    </a>
  );
}