import { createFileRoute, redirect } from "@tanstack/react-router";
import {
  Clock,
  Flame,
  TrendingUp,
  Zap,
  Eye,
  Check,
  ShieldCheck,
  Star,
  BookOpen,
  Sparkles,
  DollarSign,
  Gift,
  Lock,
} from "lucide-react";
import chefImg from "@/assets/chef.jpg";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
// Video served from public/ so it works on Lovable AND Cloudflare Pages.
const cheesecakeDrippingVideo = { url: "/cheesecake-dripping.mp4" };
import cheesecakeDrippingImg from "@/assets/cheesecake-dripping.jpg";

const heroImg =
  "https://res.cloudinary.com/dkxd7dqxo/image/upload/v1784287649/0893d6ad-062f-4ff9-83f2-a6a93e93f685_rhsumv.png";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/cheescake-es" });
  },
  component: SalesPage,
});

const CHECKOUT_URL = "https://pay.hotmart.com/M106778531G?checkoutMode=10";

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-5 text-lg font-bold uppercase tracking-wide text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.78_0.16_82/0.6)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_50px_-10px_oklch(0.78_0.16_82/0.8)] sm:px-10 sm:py-4 sm:text-lg " +
        className
      }
      style={{
        background:
          "linear-gradient(135deg, oklch(0.85 0.17 88) 0%, oklch(0.72 0.17 75) 50%, oklch(0.85 0.17 88) 100%)",
      }}
    >
      <Sparkles className="h-5 w-5" strokeWidth={2.5} />
      {children}
    </a>
  );
}

export function SalesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Top urgency bar */}
      <div
        className="w-full py-3 px-4 text-center text-base sm:text-lg font-semibold text-white"
        style={{ background: "linear-gradient(90deg, oklch(0.35 0.14 20), oklch(0.28 0.11 20))" }}
      >
        <Clock className="inline-block h-5 w-5 mr-2 -mt-0.5" />
        Promo por tiempo limitado — el precio vuelve a subir en las próximas horas.
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, oklch(0.78 0.16 82 / 0.25), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.35 0.14 20 / 0.4), transparent 60%)",
          }}
        />
        <div className="relative flex flex-col items-center gap-10 pt-6 pb-16 text-center sm:pt-10 sm:pb-24 md:gap-14 md:pt-12">
          <div className="relative mx-auto w-full max-w-3xl px-3 sm:px-4 lg:max-w-4xl">
            <div
              className="pointer-events-none absolute inset-0 opacity-60 blur-3xl"
              style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.78 0.16 82 / 0.35), transparent 65%)" }}
            />
            <video
              src="/hero-cheesecake.mp4"
              poster={heroImg}
              autoPlay
              loop
              muted
              playsInline
              className="relative block w-full h-auto object-contain rounded-2xl lg:rounded-3xl drop-shadow-[0_45px_70px_rgba(0,0,0,0.65)]"
            />
          </div>
          <div className="mx-auto flex max-w-5xl flex-col items-center px-4 sm:px-6">
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              El recetario{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, oklch(0.88 0.17 90), oklch(0.72 0.17 75), oklch(0.88 0.17 90))",
                }}
              >
                Cheesecake Divino
              </span>
              : el postre que enamora a primera mordida y se transforma en tu próximo negocio.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Un postre que se prepara en minutos, cuesta poco y se vende solo. Todo el paso a
              paso, los sabores y la estrategia de precios listos para que arranques hoy.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <CTA>Quiero mi recetario</CTA>
              <div className="flex items-center gap-2 text-base text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-primary" />
                7 días de garantía total
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-base text-muted-foreground">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
                <span className="ml-1">4.9/5</span>
              </div>
              <span>Más de 3.200 emprendedoras ya lo usan</span>
            </div>
          </div>
        </div>
      </section>

      {/* VANTAGENS */}
      <section className="border-y border-border/50 bg-card/40 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {[
            { icon: Flame, title: "Se vende solo", desc: "Estética que enamora en redes." },
            { icon: TrendingUp, title: "Ganancia real", desc: "Hasta 4x lo que invertís." },
            { icon: Zap, title: "Sin horno", desc: "Listo en pocos minutos." },
            { icon: Eye, title: "Look premium", desc: "Presentación digna de pastelería." },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(135deg, oklch(0.85 0.17 88), oklch(0.62 0.15 70))" }}
              >
                <v.icon className="h-7 w-7 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
              <p className="mt-1 text-base text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Lo que vas a conseguir con Cheesecake Divino
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Preparar un cheesecake tan lindo que tus clientes te piden el segundo antes de terminar el primero.",
                "Vender tu primera tanda esta misma semana, aunque nunca hayas cocinado para vender.",
                "Dominar la decoración, el emplatado y la entrega con acabado profesional.",
                "Montar un emprendimiento desde tu cocina, con inversión mínima y margen alto.",
              ].map((t) => (
                <li key={t} className="flex min-w-0 gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "linear-gradient(135deg, oklch(0.85 0.17 88), oklch(0.62 0.15 70))" }}
                  >
                    <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <span className="min-w-0 text-lg text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-muted-foreground">
              Si esto es lo que buscás, hacé clic y empezá hoy.
            </p>
            <div className="mt-6">
              <CTA>Empezar ahora</CTA>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px] md:max-w-none">
            <video
              src={cheesecakeDrippingVideo.url}
              poster={cheesecakeDrippingImg}
              autoPlay
              loop
              muted
              playsInline
              className="block w-full h-auto rounded-3xl drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </section>

      {/* CHEF */}
      <section className="border-y border-border/50 bg-card/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
            <div
              className="absolute -inset-6 rounded-3xl blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, oklch(0.78 0.16 82 / 0.5), transparent 70%)" }}
            />
            <img
              src={chefImg}
              alt="Chef pastelera detrás del recetario Cheesecake Divino"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative w-full rounded-3xl object-cover shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-base font-semibold uppercase tracking-wider text-primary sm:text-sm">
              <Sparkles className="h-4 w-4" /> Detrás del recetario
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Recetas probadas por una pastelera profesional
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Cada receta fue desarrollada, ajustada y probada en cocina real hasta lograr la
              textura, el sabor y la presentación que enamoran. Nada de fórmulas copiadas de
              internet: es el mismo paso a paso que usan quienes ya viven de esto.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Técnicas simplificadas para que cualquiera pueda replicarlas.",
                "Cantidades exactas y trucos de textura en cada receta.",
                "Consejos de presentación estilo pastelería boutique.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={3} />
              <span className="text-lg text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ESTO ES LO QUE VERÁS */}
      <section className="border-y border-border/50 bg-card/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Todo lo que hay adentro</h2>
            <p className="mt-3 text-lg text-muted-foreground">Un recetario práctico, directo y listo para aplicar hoy.</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-10">
            {[
              {
                img: "https://res.cloudinary.com/dkxd7dqxo/image/upload/v1784285965/de7b698d-e8dc-43cc-848f-d429b67340c8_nzcvwc.png",
                title: "Recetas base",
                desc: "25 versiones probadas y explicadas al detalle. De la mezcla al último detalle.",
                icon: BookOpen,
              },
              {
                img: "https://res.cloudinary.com/dkxd7dqxo/image/upload/v1784295347/cccccc_ap4729.png",
                title: "Sabores gourmet y ediciones especiales",
                desc: "Combinaciones modernas, rellenos irresistibles y ediciones estacionales.",
                icon: Sparkles,
              },
              {
                img: "https://res.cloudinary.com/dkxd7dqxo/image/upload/v1784286013/8c7821c6-353d-4e15-8a89-4dbdc2a8ca12_pgdbaa.png",
                title: "Precio & venta",
                desc: "Fórmula clara para cobrar bien y vender rápido, sin regalar tu trabajo.",
                icon: DollarSign,
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 sm:p-8 transition-transform hover:-translate-y-1"
              >
                <div className="relative flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-xl opacity-30 blur-2xl"
                    style={{ background: "radial-gradient(circle, oklch(0.78 0.16 82 / 0.4), transparent 70%)" }}
                  />
                  <img
                    src={c.img}
                    alt={c.title}
                    className="relative block w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
                  />
                </div>
                <c.icon className="mt-6 h-7 w-7 text-primary" />
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{c.title}</h3>
                <p className="mt-3 text-lg text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
          <p
            className="mt-12 text-center text-2xl font-black italic sm:text-3xl"
            style={{
              backgroundImage: "linear-gradient(120deg, oklch(0.88 0.17 90), oklch(0.72 0.17 75))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Un solo pago. Acceso para siempre.
          </p>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">
          Historias reales de quienes ya empezaron <span className="text-primary">❤️</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Martina G.",
              text: "Vendí toda la primera tanda en menos de una semana. El paso a paso es imposible de errar.",
            },
            {
              name: "Rocío P.",
              text: "Nunca había cocinado para vender. Con la parte de precios recuperé lo invertido diez veces.",
            },
            {
              name: "Luciana A.",
              text: "Los sabores gourmet me diferenciaron. Hoy tengo pedidos por WhatsApp todos los días.",
            },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-lg text-foreground/90">"{t.text}"</p>
              <p className="mt-4 text-base font-semibold text-primary">— {t.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTA>Quiero empezar hoy</CTA>
        </div>
      </section>

      {/* BONOS */}
      <section
        className="border-y border-border/50 py-20"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.22 0.06 25), oklch(0.16 0.05 25))",
        }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-base font-semibold uppercase tracking-wider text-primary sm:text-sm">
              <Gift className="h-4 w-4" /> Incluidos sin costo
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Dos bonos que suman valor real</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
              Sumás dos recetarios extra que amplían tu catálogo y multiplican tus posibilidades de venta.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                tag: "Bono 1",
                title: "COOKIE SHOTS DE AUTOR",
                desc: "15 recetas de vasitos de galleta rellenables — crujientes por fuera, tiernos por dentro, listos para viralizarse.",
                from: "$76",
                img: "https://res.cloudinary.com/dkxd7dqxo/image/upload/v1784285924/e060ebb6-54a0-4fef-b013-e36bf05aad68_zpz6v9.png",
                video: "/bono1-cookies.mp4",
              },
              {
                tag: "Bono 2",
                title: "GALLETAS SIN GLUTEN",
                desc: "15 galletas artesanales sin gluten, con ingredientes simples y sabores que se destacan en cualquier vitrina.",
                from: "$54",
                img: "https://res.cloudinary.com/dkxd7dqxo/image/upload/v1784285915/ac29dc6d-2784-4ba1-b6ed-e8d8024aea2b_zsuwns.png",
                video: undefined as string | undefined,
              },
            ].map((b) => (
              <div
                key={b.title}
                className="relative overflow-hidden rounded-2xl border-2 p-8"
                style={{
                  borderColor: "oklch(0.78 0.16 82 / 0.4)",
                  background:
                    "linear-gradient(135deg, oklch(0.24 0.07 25), oklch(0.18 0.05 25))",
                }}
              >
                <div
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30 blur-3xl"
                  style={{ background: "oklch(0.78 0.16 82)" }}
                />
                <span className="text-sm font-bold uppercase tracking-wider text-primary">
                  {b.tag}
                </span>
                {b.video ? (
                  <video
                    src={b.video}
                    poster={b.img}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="mx-auto mt-6 w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
                  />
                ) : (
                  <img
                    src={b.img}
                    alt={b.title}
                    className="mx-auto mt-6 w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
                  />
                )}
                <div className="mt-6">
                  <h3 className="text-2xl font-black sm:text-3xl">{b.title}</h3>
                  <p className="mt-3 text-lg text-muted-foreground">{b.desc}</p>
                </div>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-lg text-muted-foreground line-through sm:text-base">De {b.from}</span>
                  <span
                    className="text-2xl font-black"
                    style={{
                      backgroundImage: "linear-gradient(120deg, oklch(0.88 0.17 90), oklch(0.72 0.17 75))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Incluido
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANCORAGEM / OFERTA */}
      <section id="checkout" className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-destructive/20 px-4 py-1.5 text-base font-bold uppercase tracking-wider text-destructive-foreground sm:text-sm">
            🔥 Precio de lanzamiento
          </span>
        </div>
        <div
          className="mt-8 overflow-hidden rounded-3xl border-2 p-8 sm:p-12"
          style={{
            borderColor: "oklch(0.78 0.16 82 / 0.5)",
            background:
              "linear-gradient(135deg, oklch(0.24 0.07 25), oklch(0.18 0.05 25))",
          }}
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-none">
              <div
                className="absolute -inset-6 rounded-full blur-3xl opacity-40"
                style={{ background: "radial-gradient(circle, oklch(0.78 0.16 82 / 0.6), transparent 70%)" }}
              />
              <img
                src={heroImg}
                alt="Recetario Cheesecake Divino"
                loading="lazy"
                className="relative w-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
            <div>
              <h2 className="text-2xl font-black leading-tight sm:text-3xl">
                Acceso inmediato al recetario{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, oklch(0.88 0.17 90), oklch(0.72 0.17 75))",
                  }}
                >
                  Cheesecake Divino
                </span>
                .
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "25 recetas explicadas paso a paso",
                  "Sabores gourmet",
                  "Fórmula de precios y estrategia de venta",
                  "2 bonos: Cookie Shots + Galletas sin gluten",
                  "Descarga inmediata, para siempre",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" strokeWidth={3} />
                    <span className="text-lg text-foreground/90">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-lg text-muted-foreground sm:text-base">
                Invertís menos que un café con medialunas y te llevás un negocio para toda la vida.
              </p>
              <div className="mt-8 flex items-baseline gap-3">
                <span className="text-lg text-muted-foreground">
                  Valor real <span className="line-through">$60 USD</span>
                </span>
              </div>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-lg font-semibold uppercase tracking-wider text-muted-foreground sm:text-base">
                  Precio de hoy
                </span>
                <span
                  className="text-5xl font-black sm:text-6xl"
                  style={{
                    backgroundImage: "linear-gradient(120deg, oklch(0.88 0.17 90), oklch(0.72 0.17 75))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  $9,50
                </span>
                <span className="text-lg font-bold text-primary">USD</span>
              </div>
              <div className="mt-8">
                <CTA>Sí, lo quiero a este precio</CTA>
              </div>
              <p className="mt-4 text-lg text-muted-foreground sm:text-base">
                <strong className="text-foreground">Un solo pago</strong> · Acceso inmediato ·{" "}
                <strong className="text-foreground">Sin suscripciones</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Garantía */}
        <div className="mt-12 rounded-2xl border border-border/60 bg-card p-8 text-center">
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
            style={{ background: "linear-gradient(135deg, oklch(0.85 0.17 88), oklch(0.62 0.15 70))" }}
          >
            <ShieldCheck className="h-8 w-8 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <h3 className="mt-4 text-xl font-black">7 días para probarlo sin riesgo</h3>
          <p className="mx-auto mt-2 max-w-xl text-lg text-muted-foreground sm:text-base">
            Si el recetario no cumple con lo que te prometemos, escribinos y te devolvemos cada
            centavo. Sin preguntas, sin trabas.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-lg text-muted-foreground sm:text-base">
            <Lock className="h-5 w-5 text-primary" />
            Pago 100% seguro
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-border/50 bg-card/40 py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/15 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary">
              Preguntas frecuentes
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Todo lo que necesitás saber
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Resolvé tus dudas antes de dar el paso.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {[
              {
                q: "¿Cómo recibo el ebook después de comprar?",
                a: "Al finalizar la compra, recibís acceso inmediato por email con el enlace de descarga. Podés acceder desde tu celular, tablet o computadora en cualquier momento.",
              },
              {
                q: "¿Necesito experiencia previa en pastelería?",
                a: "No. Las recetas están explicadas paso a paso, con medidas exactas y consejos para que cualquiera pueda lograr resultados profesionales, incluso empezando desde cero.",
              },
              {
                q: "¿En qué formato viene el material?",
                a: "Es un PDF de alta calidad, optimizado para leer en cualquier dispositivo. También podés imprimirlo si preferís tenerlo físico en tu cocina.",
              },
              {
                q: "¿Puedo vender lo que preparo con estas recetas?",
                a: "Sí. El ebook incluye un módulo completo de negocio: cálculo de costos, márgenes, precios sugeridos, venta por porciones y estrategias para vender por WhatsApp, redes sociales y a cafeterías.",
              },
              {
                q: "¿Los bonos están incluidos en el precio?",
                a: "Sí. Cookies de Autor y Galletas Sin Gluten están 100% incluidos sin costo adicional, siempre que compres durante la promoción de lanzamiento.",
              },
              {
                q: "¿Y si no me gusta? ¿Hay garantía?",
                a: "Tenés 7 días de garantía incondicional. Si por cualquier motivo no te gusta el contenido, escribís al soporte y te devolvemos el 100% del dinero. Sin preguntas.",
              },
              {
                q: "¿El pago es seguro?",
                a: "Sí. El pago se procesa por Hotmart, una plataforma internacional con máxima seguridad. Aceptamos tarjeta de crédito, débito y otros medios según tu país.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl border border-border/60 bg-background/40 p-5 transition-colors hover:border-primary/40 sm:p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-bold sm:text-lg">
                  <span>{q}</span>
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-lg font-black transition-transform group-open:rotate-45"
                    style={{
                      background:
                        "linear-gradient(120deg, oklch(0.78 0.16 82), oklch(0.72 0.17 75))",
                      color: "oklch(0.15 0.03 20)",
                    }}
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={CHECKOUT_URL}
              className="inline-block rounded-full px-8 py-4 text-base font-black uppercase tracking-wide text-background shadow-lg transition-transform hover:scale-105 sm:text-lg"
              style={{
                background:
                  "linear-gradient(120deg, oklch(0.78 0.16 82), oklch(0.72 0.17 75))",
              }}
            >
              Quiero mi copia ahora
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8 text-center text-base text-muted-foreground sm:text-sm">
        © {new Date().getFullYear()} Cheesecake Divino. Todos los derechos reservados.
      </footer>
      <WhatsAppFloat
        phone="5511959847343"
        message="¡Hola! Quiero más información sobre Cheesecake Divino."
        label="Habla con nosotros por WhatsApp"
      />
    </div>
  );
}
