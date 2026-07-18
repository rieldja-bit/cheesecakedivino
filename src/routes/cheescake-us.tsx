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
import chefImg from "@/assets/chef.jpg";
const cheesecakeDrippingVideo = { url: "/cheesecake-dripping.mp4" };
import cheesecakeDrippingImg from "@/assets/cheesecake-dripping.jpg";
import heroImg from "@/assets/us/hero.png";
import inside1Img from "@/assets/us/inside-1.png";
import inside2Img from "@/assets/us/inside-2.png";
import inside3Img from "@/assets/us/inside-3.png";
import bonus1Img from "@/assets/us/bonus-1.png";
import bonus2Img from "@/assets/us/bonus-2.png";

export const Route = createFileRoute("/cheescake-us")({
  component: SalesPageUS,
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

function SalesPageUS() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Top urgency bar */}
      <div
        className="w-full py-3 px-4 text-center text-base sm:text-lg font-semibold text-white"
        style={{ background: "linear-gradient(90deg, oklch(0.35 0.14 20), oklch(0.28 0.11 20))" }}
      >
        <Clock className="inline-block h-5 w-5 mr-2 -mt-0.5" />
        Limited-time launch — price goes back up in the next few hours.
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
          <div className="relative mx-auto w-full max-w-3xl px-4 lg:max-w-4xl">
            <div
              className="pointer-events-none absolute inset-0 opacity-60 blur-3xl"
              style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.78 0.16 82 / 0.35), transparent 65%)" }}
            />
            <img
              src={heroImg}
              alt="Divine Cheesecake — product"
              loading="eager"
              className="relative block w-full h-auto object-contain rounded-2xl lg:rounded-3xl drop-shadow-[0_45px_70px_rgba(0,0,0,0.65)]"
            />
          </div>
          <div className="mx-auto flex max-w-5xl flex-col items-center px-4 sm:px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-base font-semibold uppercase tracking-wider text-primary sm:text-sm">
              <Flame className="h-4 w-4" /> Best seller · Premium recipe book
            </span>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              The{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, oklch(0.88 0.17 90), oklch(0.72 0.17 75))",
                }}
              >
                Divine Cheesecake
              </span>{" "}
              recipe book: the dessert everyone falls in love with at first bite — and your next real business.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              A dessert that takes minutes to make, costs almost nothing, and practically sells itself. Every step, every flavor, and the pricing strategy — ready for you to start today.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <CTA>I want my recipe book</CTA>
              <div className="flex items-center gap-2 text-base text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-primary" />
                7-day full money-back guarantee
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-base text-muted-foreground">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
                <span className="ml-1">4.9/5</span>
              </div>
              <span>Over 3,200 home bakers already using it</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-border/50 bg-card/40 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {[
            { icon: Flame, title: "Sells itself", desc: "Look that stops the scroll." },
            { icon: TrendingUp, title: "Real profit", desc: "Up to 4x what you invest." },
            { icon: Zap, title: "No oven needed", desc: "Ready in just a few minutes." },
            { icon: Eye, title: "Premium look", desc: "Bakery-worthy presentation." },
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

      {/* SOLUTION */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              What you'll get with Divine Cheesecake
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Bake a cheesecake so good your customers order a second one before finishing the first.",
                "Sell your first batch this very week — even if you've never cooked to sell before.",
                "Master decoration, plating, and packaging with a pro-level finish.",
                "Launch a real business from your kitchen with minimal investment and high margins.",
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
              If that sounds like you, click below and start today.
            </p>
            <div className="mt-6">
              <CTA>Get started now</CTA>
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
              alt="Pastry chef behind the Divine Cheesecake recipe book"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative w-full rounded-3xl object-cover shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-base font-semibold uppercase tracking-wider text-primary sm:text-sm">
              <Sparkles className="h-4 w-4" /> Behind the recipe book
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Recipes tested by a professional pastry chef
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Every recipe was developed, tweaked, and tested in a real kitchen until the texture, flavor, and presentation were perfect. No formulas copied off the internet — this is the same step-by-step used by people who already make a living from it.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Simplified techniques anyone can replicate.",
                "Exact measurements and texture tricks in every recipe.",
                "Presentation tips straight from boutique bakeries.",
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

      {/* WHAT'S INSIDE */}
      <section className="border-y border-border/50 bg-card/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Everything that's inside</h2>
            <p className="mt-3 text-lg text-muted-foreground">A practical, no-fluff recipe book you can put to work today.</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-10">
            {[
              {
                img: inside1Img,
                title: "Core recipes",
                desc: "25 tested versions explained in full detail — from the batter to the final touch.",
                icon: BookOpen,
              },
              {
                img: inside2Img,
                title: "Gourmet flavors & special editions",
                desc: "Modern combinations, irresistible fillings, and seasonal editions.",
                icon: Sparkles,
              },
              {
                img: inside3Img,
                title: "Pricing & selling",
                desc: "A clear formula to charge what you're worth and sell fast — without giving your work away.",
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
            One payment. Lifetime access.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">
          Real stories from people who already started <span className="text-primary">❤️</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Martina G.",
              text: "I sold my entire first batch in under a week. The step-by-step is impossible to mess up.",
            },
            {
              name: "Rocio P.",
              text: "I'd never cooked to sell before. With the pricing section I made back my investment ten times over.",
            },
            {
              name: "Luciana A.",
              text: "The gourmet flavors set me apart. Now I get WhatsApp orders every single day.",
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
          <CTA>I want to start today</CTA>
        </div>
      </section>

      {/* BONUSES */}
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
              <Gift className="h-4 w-4" /> Included at no extra cost
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Two bonuses that add real value</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
              Two extra recipe books that expand your menu and multiply your sales opportunities.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                tag: "Bonus 1",
                title: "SIGNATURE COOKIE SHOTS",
                desc: "15 fillable cookie-cup recipes — crunchy outside, tender inside, ready to go viral.",
                from: "$76",
                img: bonus1Img,
              },
              {
                tag: "Bonus 2",
                title: "GLUTEN-FREE COOKIES",
                desc: "15 artisan gluten-free cookies with simple ingredients and flavors that stand out in any display.",
                from: "$54",
                img: bonus2Img,
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
                <img
                  src={b.img}
                  alt={b.title}
                  className="mx-auto mt-6 w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
                />
                <div className="mt-6">
                  <h3 className="text-2xl font-black sm:text-3xl">{b.title}</h3>
                  <p className="mt-3 text-lg text-muted-foreground">{b.desc}</p>
                </div>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-lg text-muted-foreground line-through sm:text-base">From {b.from}</span>
                  <span
                    className="text-2xl font-black"
                    style={{
                      backgroundImage: "linear-gradient(120deg, oklch(0.88 0.17 90), oklch(0.72 0.17 75))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Included
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="checkout" className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-destructive/20 px-4 py-1.5 text-base font-bold uppercase tracking-wider text-destructive-foreground sm:text-sm">
            🔥 Launch price
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
                alt="Divine Cheesecake recipe book"
                loading="lazy"
                className="relative w-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
            <div>
              <h2 className="text-2xl font-black leading-tight sm:text-3xl">
                Instant access to the{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, oklch(0.88 0.17 90), oklch(0.72 0.17 75))",
                  }}
                >
                  Divine Cheesecake
                </span>{" "}
                recipe book.
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "25 recipes explained step by step",
                  "Gourmet flavors",
                  "Pricing formula and sales strategy",
                  "2 bonuses: Cookie Shots + Gluten-Free Cookies",
                  "Instant download, yours forever",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" strokeWidth={3} />
                    <span className="text-lg text-foreground/90">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-lg text-muted-foreground sm:text-base">
                Invest less than a coffee and a pastry — and walk away with a business for life.
              </p>
              <div className="mt-8 flex items-baseline gap-3">
                <span className="text-lg text-muted-foreground">
                  Real value <span className="line-through">$60 USD</span>
                </span>
              </div>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-lg font-semibold uppercase tracking-wider text-muted-foreground sm:text-base">
                  Today's price
                </span>
                <span
                  className="text-5xl font-black sm:text-6xl"
                  style={{
                    backgroundImage: "linear-gradient(120deg, oklch(0.88 0.17 90), oklch(0.72 0.17 75))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  $9.50
                </span>
                <span className="text-lg font-bold text-primary">USD</span>
              </div>
              <div className="mt-8">
                <CTA>Yes, I want it at this price</CTA>
              </div>
              <p className="mt-4 text-lg text-muted-foreground sm:text-base">
                <strong className="text-foreground">One-time payment</strong> · Instant access ·{" "}
                <strong className="text-foreground">No subscriptions</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-12 rounded-2xl border border-border/60 bg-card p-8 text-center">
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
            style={{ background: "linear-gradient(135deg, oklch(0.85 0.17 88), oklch(0.62 0.15 70))" }}
          >
            <ShieldCheck className="h-8 w-8 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <h3 className="mt-4 text-xl font-black">7 days to try it risk-free</h3>
          <p className="mx-auto mt-2 max-w-xl text-lg text-muted-foreground sm:text-base">
            If the recipe book doesn't deliver what we promise, just email us and we'll refund every penny. No questions, no hassle.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-lg text-muted-foreground sm:text-base">
            <Lock className="h-5 w-5 text-primary" />
            100% secure payment
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8 text-center text-base text-muted-foreground sm:text-sm">
        © {new Date().getFullYear()} Divine Cheesecake. All rights reserved.
      </footer>
    </div>
  );
}