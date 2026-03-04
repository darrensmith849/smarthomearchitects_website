export function buildWhatsAppUrl(phone: string) {
  const cleanPhone = phone.replace(/\D/g, "");
  const text = encodeURIComponent(
    "Hello Smart Home Architects, I would like to book a discovery call for my project.",
  );

  return `https://wa.me/${cleanPhone}?text=${text}`;
}
