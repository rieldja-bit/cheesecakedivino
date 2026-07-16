import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  component: SalesPage,
});

const CHECKOUT_URL = "#checkout";

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.78_0.16_82/0.6)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_50px_-10px_oklch(0.78_0.16_82/0.8)] sm:text-lg " +
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

function SalesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top urgency bar */}
      <div
        className="w-full py-3 px-4 text-center text-sm sm:text-base font-semibold text-white"
        style={{ background: "linear-gradient(90deg, oklch(0.35 0.14 20), oklch(0.28 0.11 20))" }}
      >
        <Clock className="inline-block h-4 w-4 mr-2 -mt-0.5" />
        ¡Últimas horas! Esta oferta termina hoy. Aprovechá el descuento antes de que desaparezca.
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
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-24 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Flame className="h-3.5 w-3.5" /> Tendencia viral 2026
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Descubrí el{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, oklch(0.88 0.17 90), oklch(0.72 0.17 75), oklch(0.88 0.17 90))",
                }}
              >
                Cheesecake Ruso en Paleta
              </span>
              , la tendencia que estás transformando en un negocio rentable.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Aprovechá un producto viral, fácil de hacer, económico y con ganancia alta. Todo
              listo para que empieces hoy mismo — sin experiencia previa.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CTA>Quiero descargar ahora</CTA>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Garantía de 7 días
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <span className="ml-1">4.9/5</span>
              </div>
              <span>+3.200 alumnas activas</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative mx-auto max-w-md">
              <div
                className="absolute -inset-8 rounded-full blur-3xl opacity-50"
                style={{ background: "radial-gradient(circle, oklch(0.78 0.16 82 / 0.5), transparent 70%)" }}
              />
              <img
                src="http://polarisdigital.online/wp-content/uploads/2026/02/Expert-Photoroom.png"
                alt="Cheesecake Ruso en Paleta - producto"
                className="relative w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VANTAGENS */}
      <section className="border-y border-border/50 bg-card/40 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {[
            { icon: Flame, title: "Tendencia viral", desc: "Producto explotando en redes." },
            { icon: TrendingUp, title: "Alta ganancia", desc: "Márgenes de hasta 400%." },
            { icon: Zap, title: "Producción rápida", desc: "Listo en minutos, sin horno." },
            { icon: Eye, title: "Venden con la vista", desc: "Estética premium y virales." },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(135deg, oklch(0.85 0.17 88), oklch(0.62 0.15 70))" }}
              >
                <v.icon className="h-7 w-7 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Con este producto vas a lograr…
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Crear un postre tan visualmente irresistible que tus clientes te van a pedir más antes de terminar el primero.",
                "Tener tu primera tanda lista y vendida en menos de 7 días, incluso sin experiencia previa.",
                "Presentar, decorar y entregar tus Cheesecake Rusos en Paleta con un estilo premium y profesional.",
                "Construir un negocio desde casa con un producto viral, económico y con márgenes muy altos.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "linear-gradient(135deg, oklch(0.85 0.17 88), oklch(0.62 0.15 70))" }}
                  >
                    <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <span className="text-base text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-muted-foreground">
              Si te identificás, tocá el botón y reservá tu cupo ahora.
            </p>
            <div className="mt-6">
              <CTA>¡Quiero descargar ahora!</CTA>
            </div>
          </div>
          <div className="relative">
            <img
              src="http://polarisdigital.online/wp-content/uploads/2026/02/Mockup-1.png"
              alt="Recetario Cheesecake de Oro"
              className="w-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </section>

      {/* ESTO ES LO QUE VERÁS */}
      <section className="border-y border-border/50 bg-card/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Esto es lo que verás</h2>
            <p className="mt-3 text-muted-foreground">Todo el contenido del recetario, listo para aplicar.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                img: "http://polarisdigital.online/wp-content/uploads/2026/02/Mockup-Principal.png",
                title: "Cheesecake en Tendencia",
                desc: "Más de 20 recetas listas para vender. Paso a paso probado. Acabado premium.",
                icon: BookOpen,
              },
              {
                img: "http://polarisdigital.online/wp-content/uploads/2026/02/Mockup-Secundario.png",
                title: "Sabores Gourmet",
                desc: "Rellenos modernos, sabores virales y ediciones limitadas para vender más.",
                icon: Sparkles,
              },
              {
                img: "http://polarisdigital.online/wp-content/uploads/2026/02/Mockup-Terciario.png",
                title: "Costos & Marketing",
                desc: "Calculá precios sin perder dinero. Márgenes para escalar y vender rápido.",
                icon: DollarSign,
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-transform hover:-translate-y-1"
              >
                <div className="relative flex h-48 items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-xl opacity-30 blur-2xl"
                    style={{ background: "radial-gradient(circle, oklch(0.78 0.16 82 / 0.4), transparent 70%)" }}
                  />
                  <img src={c.img} alt={c.title} className="relative h-full w-auto object-contain" />
                </div>
                <c.icon className="mt-4 h-6 w-6 text-primary" />
                <h3 className="mt-3 text-xl font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
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
            Esta es la última edición del año.
          </p>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">
          Lo que dicen nuestros clientes <span className="text-primary">❤️</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Camila R.",
              text: "En 5 días vendí toda mi primera tanda. El recetario es súper claro y el paso a paso funciona.",
            },
            {
              name: "Valentina M.",
              text: "Nunca había hecho postres para vender. Con la fórmula de precios ya recuperé la inversión x10.",
            },
            {
              name: "Sofía L.",
              text: "Los sabores gourmet son un golazo. Mis clientas piden por WhatsApp todos los días.",
            },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-foreground/90">"{t.text}"</p>
              <p className="mt-4 text-sm font-semibold text-primary">— {t.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTA>¡Quiero descargar ahora!</CTA>
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
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Gift className="h-3.5 w-3.5" /> Regalos exclusivos
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Bonos Exclusivos</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              ¡Y como si fuera poco, por esta única ocasión te llevás estos increíbles bonos de regalo!
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                tag: "Bono 1",
                title: "COOKIE SHOTS",
                desc: "Recetas fáciles para hacer Cookie Shots irresistibles, crujientes por fuera, suaves por dentro y 100% sin gluten.",
                from: "$76",
              },
              {
                tag: "Bono 2",
                title: "GALLETAS SIN GLUTEN",
                desc: "Recetas rápidas y deliciosas para hacer galletas sin gluten, crocantes por fuera, suaves por dentro y con ingredientes simples.",
                from: "$54",
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
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {b.tag}
                </span>
                <h3 className="mt-2 text-2xl font-black">{b.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{b.desc}</p>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-sm text-muted-foreground line-through">De {b.from}</span>
                  <span
                    className="text-2xl font-black"
                    style={{
                      backgroundImage: "linear-gradient(120deg, oklch(0.88 0.17 90), oklch(0.72 0.17 75))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ¡GRATIS!
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
          <span className="inline-block rounded-full bg-destructive/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-destructive-foreground">
            🔥 Oferta Especial
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
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-full blur-3xl opacity-40"
                style={{ background: "radial-gradient(circle, oklch(0.78 0.16 82 / 0.6), transparent 70%)" }}
              />
              <img
                src="http://polarisdigital.online/wp-content/uploads/2026/02/Mockup-1.png"
                alt="Recetario Cheesecake de Oro"
                className="relative w-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
            <div>
              <h2 className="text-2xl font-black leading-tight sm:text-3xl">
                ¡Tu acceso inmediato al recetario{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, oklch(0.88 0.17 90), oklch(0.72 0.17 75))",
                  }}
                >
                  Cheesecake de Oro
                </span>
                !
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "25 recetas deliciosas y prácticas",
                  "Sabores gourmet",
                  "Fórmula de costos & marketing",
                  "2 bonos exclusivos",
                  "Paso a paso para empezar hoy",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" strokeWidth={3} />
                    <span className="text-foreground/90">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                🔥 Oferta única: pagás menos de lo que gastarías en un café... y ganás un negocio para toda la vida.
              </p>
              <div className="mt-8 flex items-baseline gap-3">
                <span className="text-lg text-muted-foreground">
                  Antes <span className="line-through">$60 USD</span>
                </span>
              </div>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Hoy solo
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
                <CTA>¡Sí, quiero aprovechar el descuento!</CTA>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                <strong className="text-foreground">95% de descuento</strong> — acceso inmediato con{" "}
                <strong className="text-foreground">pago único</strong>.
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
          <h3 className="mt-4 text-xl font-black">Garantía de 7 días</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Tu inversión está protegida. Si no estás completamente satisfecho/a con el recetario, te
            devolvemos el 100% de tu dinero sin complicaciones.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4 text-primary" />
            Tu compra 100% segura
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Cheesecake de Oro. Todos los derechos reservados.
      </footer>
    </div>
  );
}
