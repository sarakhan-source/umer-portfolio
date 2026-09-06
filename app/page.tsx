"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

const skills = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, fast and polished interfaces with modern web technologies.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    number: "02",
    title: "UI / UX Design",
    description:
      "Designing clean user experiences with strong hierarchy, spacing and visual balance.",
    tags: ["Figma", "Wireframes", "Prototyping"],
  },
  {
    number: "03",
    title: "Responsive Design",
    description:
      "Creating layouts that feel natural across desktop, tablet and mobile screens.",
    tags: ["Tailwind", "CSS", "Mobile First"],
  },
  {
    number: "04",
    title: "Web Performance",
    description:
      "Optimizing structure, loading speed and interactions for a smoother experience.",
    tags: ["SEO", "Performance", "Core Web"],
  },
  {
    number: "05",
    title: "Creative Development",
    description:
      "Adding motion, micro-interactions and visual details that make interfaces feel premium.",
    tags: ["Animation", "Interactions", "Motion"],
  },
  {
    number: "06",
    title: "Product Thinking",
    description:
      "Turning ideas into useful digital products with a clear purpose and user flow.",
    tags: ["Strategy", "Research", "Systems"],
  },
];

const experience = [
  {
    year: "2025 — PRESENT",
    title: "Independent Web Developer",
    label: "DEMO / PERSONAL EXPERIENCE",
    description:
      "Building experimental interfaces, portfolio concepts and modern web experiences while continuously improving development and design skills.",
  },
  {
    year: "2024 — 2025",
    title: "Frontend Development",
    label: "DEMO / LEARNING EXPERIENCE",
    description:
      "Focused on React, Next.js, responsive layouts, reusable components and turning visual ideas into functional interfaces.",
  },
  {
    year: "2023 — 2024",
    title: "Design & Exploration",
    label: "DEMO / LEARNING EXPERIENCE",
    description:
      "Explored UI design, modern websites, typography, layouts and the fundamentals of creating better digital products.",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 19L19 5M19 5H8M19 5V16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   PROJECT PREVIEWS
========================================================= */

function BrowserTop({ url }: { url: string }) {
  return (
    <div className="flex h-9 items-center justify-between border-b border-black/10 bg-white/80 px-4">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-black/20" />
        <span className="h-2 w-2 rounded-full bg-black/10" />
        <span className="h-2 w-2 rounded-full bg-black/[0.06]" />
      </div>

      <div className="rounded-full bg-black/[0.05] px-6 py-1 text-[7px] text-black/35">
        {url}
      </div>

      <div className="w-8" />
    </div>
  );
}

/* ===================== NOVA ===================== */

function CommercePreview() {
  return (
    <div className="h-full overflow-hidden rounded-[18px] bg-[#e9e4da] text-[#171717]">
      <BrowserTop url="nova-commerce.com" />

      <div className="p-5 sm:p-8 lg:p-10">
        <div className="mb-8 flex items-center justify-between">
          <h4 className="text-lg font-black tracking-[-0.06em] sm:text-2xl">
            NOVA
          </h4>

          <div className="hidden gap-8 text-[8px] uppercase tracking-[0.2em] sm:flex">
            <span>New Arrivals</span>
            <span>Women</span>
            <span>Men</span>
            <span>Journal</span>
          </div>

          <div className="flex gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/15 text-[9px]">
              ♡
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-[9px] text-white">
              02
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
          <div className="relative min-h-[330px] overflow-hidden bg-[#c8c0b3] p-6 sm:min-h-[410px] sm:p-10">
            <p className="text-[8px] uppercase tracking-[0.25em] text-black/50">
              Autumn / Winter 2026
            </p>

            <h5 className="absolute bottom-7 left-6 max-w-[430px] text-4xl font-medium leading-[0.88] tracking-[-0.07em] sm:left-10 sm:text-6xl">
              Quiet luxury,
              <br />
              redefined.
            </h5>

            <div className="absolute right-[8%] top-[12%] h-[72%] w-[28%] rounded-t-[100px] bg-[#9d9588]" />
            <div className="absolute right-[13%] top-[20%] h-[10%] w-[18%] rounded-full bg-[#b9b1a5]" />

            <button className="absolute bottom-7 right-6 rounded-full bg-black px-5 py-3 text-[8px] uppercase tracking-[0.15em] text-white sm:right-10">
              Shop Collection
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            <div className="relative min-h-[190px] overflow-hidden bg-[#d4cec3] p-5">
              <p className="text-[8px] uppercase tracking-[0.2em]">
                Essentials
              </p>
              <div className="absolute bottom-[-25px] right-[18%] h-[72%] w-[45%] rounded-t-full bg-[#aaa195]" />
            </div>

            <div className="relative min-h-[190px] overflow-hidden bg-[#b7afa2] p-5">
              <p className="text-[8px] uppercase tracking-[0.2em]">
                Editorial
              </p>
              <div className="absolute bottom-[-25px] left-[25%] h-[75%] w-[42%] rounded-t-full bg-[#80796e]" />
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-between border-t border-black/15 pt-4 text-[7px] uppercase tracking-[0.15em] text-black/45">
          <span>Featured collection</span>
          <span>Explore all products →</span>
        </div>
      </div>
    </div>
  );
}

/* ===================== PULSE ===================== */

function AnalyticsPreview() {
  const bars = [30, 42, 35, 55, 48, 67, 56, 74, 63, 80, 72, 91];

  return (
    <div className="h-full overflow-hidden rounded-[18px] bg-[#111318] text-white">
      <div className="flex h-9 items-center justify-between border-b border-white/10 bg-[#17191e] px-4">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/[0.06]" />
        </div>

        <div className="rounded-full bg-white/[0.05] px-6 py-1 text-[7px] text-white/25">
          pulse-analytics.app
        </div>

        <div className="w-8" />
      </div>

      <div className="flex h-[calc(100%-36px)]">
        <aside className="hidden w-[190px] border-r border-white/10 p-5 sm:block">
          <div className="mb-10 flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-white" />
            <span className="text-sm font-bold">pulse.</span>
          </div>

          <div className="space-y-2">
            {[
              "Overview",
              "Analytics",
              "Customers",
              "Transactions",
              "Reports",
              "Settings",
            ].map((item, index) => (
              <div
                key={item}
                className={`rounded-lg px-3 py-2.5 text-[9px] ${
                  index === 0
                    ? "bg-white text-black"
                    : "text-white/35 hover:bg-white/5"
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-white/10 p-3">
            <p className="text-[7px] text-white/30">Workspace</p>
            <p className="mt-2 text-[9px]">Umer Studio</p>
          </div>
        </aside>

        <div className="min-w-0 flex-1 overflow-hidden p-5 sm:p-7">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-[7px] uppercase tracking-[0.2em] text-white/30">
                Overview
              </p>

              <h4 className="mt-1 text-xl font-medium tracking-[-0.04em]">
                Good morning, Umer.
              </h4>
            </div>

            <button className="rounded-lg border border-white/10 px-3 py-2 text-[8px] text-white/50">
              Last 30 days ▾
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              ["Revenue", "$48,240", "+12.4%"],
              ["Customers", "2,894", "+8.2%"],
              ["Orders", "1,204", "+5.8%"],
              ["Conversion", "4.82%", "+1.3%"],
            ].map(([label, value, growth]) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
              >
                <p className="text-[7px] uppercase tracking-wider text-white/30">
                  {label}
                </p>

                <p className="mt-3 text-lg font-medium">{value}</p>

                <p className="mt-1 text-[7px] text-emerald-400">{growth}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_.6fr]">
            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
              <div className="mb-5 flex justify-between">
                <div>
                  <p className="text-[8px] text-white/35">Revenue</p>
                  <p className="mt-1 text-xs font-medium">$48,240.00</p>
                </div>

                <span className="text-[7px] text-emerald-400">
                  +12.4%
                </span>
              </div>

              <div className="flex h-[180px] items-end gap-2">
                {bars.map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-sm bg-white/75"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div className="mt-4 flex justify-between text-[6px] text-white/20">
                <span>JAN</span>
                <span>FEB</span>
                <span>MAR</span>
                <span>APR</span>
                <span>MAY</span>
                <span>JUN</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
              <p className="text-[8px] text-white/35">Top channels</p>

              <div className="mt-5 space-y-5">
                {[
                  ["Direct", "42%"],
                  ["Organic", "31%"],
                  ["Social", "18%"],
                  ["Referral", "9%"],
                ].map(([name, percent]) => (
                  <div key={name}>
                    <div className="mb-2 flex justify-between text-[7px]">
                      <span className="text-white/45">{name}</span>
                      <span>{percent}</span>
                    </div>

                    <div className="h-1 rounded-full bg-white/10">
                      <div
                        className="h-1 rounded-full bg-white/70"
                        style={{ width: percent }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.025] p-4">
            <div className="mb-3 flex justify-between">
              <p className="text-[8px] text-white/35">Recent activity</p>
              <span className="text-[7px] text-white/25">View all →</span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-[7px] text-white/35">
              <span>Customer</span>
              <span>Activity</span>
              <span className="text-right">Amount</span>
            </div>

            <div className="mt-3 space-y-3">
              {[
                ["Alex Morgan", "New purchase", "$240"],
                ["Sarah Khan", "Subscription", "$89"],
                ["Daniel Lee", "New purchase", "$420"],
              ].map(([name, activity, amount]) => (
                <div
                  key={name}
                  className="grid grid-cols-3 gap-3 border-t border-white/5 pt-3 text-[8px]"
                >
                  <span>{name}</span>
                  <span className="text-white/35">{activity}</span>
                  <span className="text-right">{amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== VELORA ===================== */

function StudioPreview() {
  return (
    <div className="h-full overflow-hidden rounded-[18px] bg-[#efede7] text-[#151515]">
      <BrowserTop url="velora-studio.com" />

      <div className="p-5 sm:p-8 lg:p-10">
        <div className="mb-10 flex items-center justify-between">
          <p className="text-sm font-black tracking-[-0.06em] sm:text-xl">
            VELORA®
          </p>

          <p className="hidden text-[8px] uppercase tracking-[0.2em] sm:block">
            Independent creative studio
          </p>

          <button className="rounded-full border border-black/20 px-4 py-2 text-[8px] uppercase tracking-widest">
            Menu +
          </button>
        </div>

        <div className="border-y border-black/20 py-7">
          <p className="mb-4 text-[8px] uppercase tracking-[0.25em]">
            Selected work / 2026
          </p>

          <h4 className="text-[13vw] font-black leading-[0.75] tracking-[-0.09em] sm:text-[90px] lg:text-[125px]">
            WE BUILD
          </h4>

          <div className="mt-3 flex items-end justify-between gap-4">
            <span className="pb-2 text-[8px] uppercase tracking-[0.2em]">
              Ideas → Identity → Culture
            </span>

            <h4 className="text-[13vw] font-black leading-[0.75] tracking-[-0.09em] sm:text-[90px] lg:text-[125px]">
              CULTURE.
            </h4>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
          <div className="relative min-h-[270px] overflow-hidden bg-[#292929] sm:min-h-[340px]">
            <div className="absolute left-[15%] top-[15%] h-[75%] w-[24%] rotate-6 bg-[#a8a197]" />
            <div className="absolute right-[18%] top-[20%] h-[72%] w-[26%] -rotate-6 rounded-t-full bg-[#d0cbc2]" />

            <div className="absolute bottom-5 left-5 text-[8px] uppercase tracking-[0.2em] text-white/50">
              Visual Identity / 04
            </div>
          </div>

          <div className="flex min-h-[270px] flex-col justify-between border border-black/20 p-5 sm:min-h-[340px]">
            <div>
              <span className="text-[8px] uppercase tracking-[0.2em]">
                About the project
              </span>

              <p className="mt-5 max-w-[250px] text-sm leading-6 text-black/55">
                A new digital identity for a culture-led creative studio
                working across fashion, art and technology.
              </p>
            </div>

            <div className="border-t border-black/15 pt-4 text-[8px] uppercase tracking-[0.15em]">
              Strategy
              <br />
              Identity
              <br />
              Digital Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== FINORA ===================== */

function FinancePreview() {
  return (
    <div className="h-full overflow-hidden rounded-[18px] bg-[#eef0f2] text-[#17191c]">
      <BrowserTop url="finora.app" />

      <div className="p-5 sm:p-8 lg:p-10">
        <div className="mb-7 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-[10px] font-bold text-white">
              F
            </div>

            <span className="text-sm font-bold">finora</span>
          </div>

          <div className="hidden items-center gap-6 text-[8px] uppercase tracking-[0.15em] text-black/45 sm:flex">
            <span>Overview</span>
            <span>Payments</span>
            <span>Cards</span>
            <span>Analytics</span>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-[8px] text-white">
            UK
          </div>
        </div>

        <div className="mb-5">
          <p className="text-[8px] uppercase tracking-[0.2em] text-black/40">
            Good morning, Umer
          </p>

          <h4 className="mt-1 text-2xl font-medium tracking-[-0.05em] sm:text-4xl">
            Your finances,
            <br />
            simplified.
          </h4>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_.8fr]">
          <div className="rounded-2xl bg-[#17191c] p-5 text-white sm:p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                  Total Balance
                </p>

                <p className="mt-3 text-3xl font-medium tracking-[-0.05em] sm:text-5xl">
                  $24,892.40
                </p>
              </div>

              <span className="rounded-full bg-white/10 px-3 py-1.5 text-[7px]">
                +8.24%
              </span>
            </div>

            <div className="mt-8 flex h-[180px] items-end gap-2">
              {[30, 40, 36, 52, 47, 62, 55, 70, 61, 77, 69, 88].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-full bg-white/75"
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 rounded-xl bg-white py-3 text-[8px] font-bold text-black">
                Send Money
              </button>

              <button className="flex-1 rounded-xl border border-white/15 py-3 text-[8px]">
                Request
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl bg-white p-5">
              <div className="flex items-center justify-between">
                <p className="text-[8px] uppercase tracking-[0.18em] text-black/35">
                  Visa Card
                </p>

                <span className="text-[8px]">•••</span>
              </div>

              <div className="mt-5 rounded-xl bg-[#c9c2b7] p-5">
                <div className="flex justify-between">
                  <span className="text-[9px] font-bold">FINORA</span>
                  <span className="text-[9px]">◉</span>
                </div>

                <p className="mt-10 text-[10px] tracking-[0.25em]">
                  •••• •••• •••• 2840
                </p>

                <div className="mt-4 flex justify-between text-[6px] uppercase tracking-widest">
                  <span>Umer Khan</span>
                  <span>09 / 28</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <div className="mb-4 flex justify-between">
                <p className="text-[8px] uppercase tracking-[0.18em] text-black/35">
                  Recent Transactions
                </p>

                <span className="text-[7px] text-black/35">View all →</span>
              </div>

              <div className="space-y-3">
                {[
                  ["Spotify", "-$12.00"],
                  ["Adobe", "-$24.00"],
                  ["Apple", "-$89.00"],
                  ["Salary", "+$4,200"],
                ].map(([name, amount]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between border-b border-black/5 pb-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-7 w-7 rounded-lg bg-black/5" />
                      <span className="text-[8px]">{name}</span>
                    </div>

                    <span
                      className={`text-[8px] ${
                        amount.startsWith("+")
                          ? "text-emerald-600"
                          : "text-black/55"
                      }`}
                    >
                      {amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  number,
  category,
  title,
  description,
  tags,
  children,
}: {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  children: ReactNode;
}) {
  return (
    <article className="group w-full">
      <div className="mb-6 grid gap-6 border-t border-white/10 pt-5 lg:grid-cols-[80px_1fr_390px] lg:items-end">
        <span className="text-[10px] tracking-[0.15em] text-white/25">
          {number}
        </span>

        <div>
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
            {category}
          </p>

          <h3 className="text-4xl font-medium tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            {title}
          </h3>
        </div>

        <div>
          <p className="max-w-[430px] text-[13px] leading-6 text-white/40">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1.5 text-[8px] uppercase tracking-[0.12em] text-white/35"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#101010] p-2 transition duration-500 group-hover:border-white/20 sm:p-3">
        <div className="w-full overflow-hidden rounded-[20px]">
          {children}
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070707] text-white">
      {/* NAVBAR */}

      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.07] bg-[#070707]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-[1280px] items-center justify-between px-6 lg:px-10">
          <a
            href="#home"
            className="text-[19px] font-black tracking-[-0.06em]"
          >
            UMER<span className="text-white/30">.</span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] uppercase tracking-[0.18em] text-white/40 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 px-5 py-2.5 text-[10px] uppercase tracking-[0.16em] text-white/70 transition hover:border-white/40 hover:bg-white hover:text-black md:block"
          >
            Let&apos;s Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="h-px w-5 bg-white" />
            <span className="h-px w-5 bg-white" />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#070707] px-6 py-7 md:hidden">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.16em] text-white/55"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}

      <section
        id="home"
        className="relative min-h-screen border-b border-white/[0.07] px-6 pb-20 pt-[120px] lg:px-10 lg:pt-[140px]"
      >
        <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-white/[0.035] blur-[120px]" />

        <div className="mx-auto grid min-h-[calc(100vh-160px)] max-w-[1280px] items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]" />

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">
                Available for selected projects
              </p>
            </div>

            <p className="mb-4 text-sm text-white/35">Hello, I&apos;m</p>

            <h1 className="text-[19vw] font-black leading-[0.72] tracking-[-0.09em] sm:text-[120px] lg:text-[145px]">
              UMER
            </h1>

            <h2 className="mt-7 max-w-[700px] text-[30px] font-medium leading-[1.02] tracking-[-0.055em] text-white/40 sm:text-[48px] lg:text-[54px]">
              Digital designer &
              <span className="text-white"> creative developer.</span>
            </h2>

            <p className="mt-8 max-w-[580px] text-sm leading-7 text-white/43 sm:text-[15px]">
              I create modern digital experiences where clean design, useful
              interactions and strong frontend development come together.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition duration-300 hover:scale-[1.02] hover:bg-white/90"
              >
                View Projects
                <ArrowIcon />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white/65 transition hover:border-white/35 hover:text-white"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-16 grid max-w-[580px] grid-cols-3 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-semibold tracking-[-0.05em]">
                  20+
                </p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-white/25">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold tracking-[-0.05em]">
                  3+
                </p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-white/25">
                  Years Learning
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold tracking-[-0.05em]">
                  6+
                </p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-white/25">
                  Core Skills
                </p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}

          <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
            <div className="absolute -inset-10 rounded-full bg-white/[0.035] blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#101010] p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                <Image
                  src="/hero.png"
                  alt="Umer Khan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 500px"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white/60 backdrop-blur">
                    Umer / 01
                  </span>

                  <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,.7)]" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                        Focus
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        Design + Development
                      </p>
                    </div>

                    <span className="text-[9px] uppercase tracking-[0.18em] text-white/40">
                      2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}

      <section className="border-b border-white/[0.07]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 px-6 sm:grid-cols-4 lg:px-10">
          {[
            ["01", "Design"],
            ["02", "Development"],
            ["03", "Interaction"],
            ["04", "Experience"],
          ].map(([number, text]) => (
            <div
              key={number}
              className="border-r border-white/[0.07] px-5 py-7 first:pl-0 last:border-r-0"
            >
              <span className="text-[9px] tracking-[0.2em] text-white/25">
                {number}
              </span>

              <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/50">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="scroll-mt-20 border-b border-white/[0.07] px-6 py-28 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-16 lg:grid-cols-[.4fr_1fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                01 / About
              </p>
            </div>

            <div>
              <h2 className="max-w-[950px] text-[40px] font-medium leading-[0.98] tracking-[-0.06em] sm:text-[58px] lg:text-[70px]">
                I turn ideas into
                <span className="text-white/25"> digital experiences </span>
                people enjoy using.
              </h2>

              <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2">
                <p className="text-sm leading-7 text-white/42">
                  I&apos;m a web developer who enjoys combining technology,
                  visual design and creative thinking. My goal is to create
                  websites that look impressive while remaining clear and easy
                  to use.
                </p>

                <p className="text-sm leading-7 text-white/42">
                  I pay close attention to typography, spacing, responsive
                  behavior, interactions and the small details that make a
                  digital product feel complete.
                </p>
              </div>

              <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-4">
                {[
                  ["20+", "Projects"],
                  ["3+", "Years"],
                  ["6+", "Skills"],
                  ["∞", "Ideas"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="border-b border-white/10 p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  >
                    <p className="text-2xl font-semibold tracking-[-0.05em]">
                      {number}
                    </p>

                    <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/25">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}

      <section
        id="experience"
        className="scroll-mt-20 border-b border-white/[0.07] px-6 py-28 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-16 lg:grid-cols-[.4fr_1fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                02 / Experience
              </p>

              <h2 className="mt-8 max-w-[430px] text-[48px] font-medium leading-[0.9] tracking-[-0.065em] sm:text-[65px]">
                Building.
                <br />
                Learning.
                <br />
                <span className="text-white/25">Evolving.</span>
              </h2>
            </div>

            <div>
              {experience.map((item, index) => (
                <div
                  key={item.title}
                  className={`grid gap-6 py-9 md:grid-cols-[130px_1fr] ${
                    index !== experience.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <p className="text-[9px] uppercase tracking-[0.17em] text-white/30">
                    {item.year}
                  </p>

                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.035em] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[700px] text-[13px] leading-6 text-white/40">
                      {item.description}
                    </p>

                    <p className="mt-5 text-[8px] uppercase tracking-[0.25em] text-white/20">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="scroll-mt-20 border-b border-white/[0.07] px-6 py-28 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-white/30">
                03 / Capabilities
              </p>

              <h2 className="text-[46px] font-medium leading-none tracking-[-0.06em] sm:text-[65px]">
                Skills & expertise.
              </h2>
            </div>

            <p className="max-w-[380px] text-sm leading-7 text-white/38">
              A focused set of skills for designing and building modern,
              responsive digital products.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <article
                key={skill.number}
                className="group flex min-h-[300px] flex-col rounded-[24px] border border-white/[0.09] bg-[#0c0c0c] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-[#101010] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.2em] text-white/25">
                    {skill.number}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/30 transition group-hover:border-white/30 group-hover:text-white">
                    +
                  </span>
                </div>

                <div className="mt-auto">
                  <h3 className="text-[23px] font-medium leading-[1.05] tracking-[-0.04em]">
                    {skill.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-6 text-white/38">
                    {skill.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.09] px-3 py-1.5 text-[8px] uppercase tracking-[0.13em] text-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="scroll-mt-20 w-full border-b border-white/[0.07] px-6 py-28 lg:px-10 lg:py-40"
      >
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="mb-20 flex w-full flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                04 / Selected Work
              </p>

              <h2 className="text-[54px] font-medium leading-[0.87] tracking-[-0.07em] sm:text-[75px] lg:text-[96px]">
                Projects
                <br />
                <span className="text-white/25">that matter.</span>
              </h2>
            </div>

            <p className="max-w-[400px] text-sm leading-7 text-white/38">
              A collection of fictional demo concepts exploring e-commerce,
              analytics, creative direction and modern product interfaces.
            </p>
          </div>

          <div className="space-y-32">
            <ProjectCard
              number="01"
              category="E-Commerce / Web Design"
              title="Nova Commerce"
              description="A premium fashion storefront focused on product discovery, editorial presentation and a refined shopping experience."
              tags={["Next.js", "UI/UX", "E-Commerce"]}
            >
              <div className="h-[500px] w-full sm:h-[650px] lg:h-[760px]">
                <CommercePreview />
              </div>
            </ProjectCard>

            <ProjectCard
              number="02"
              category="SaaS / Dashboard"
              title="Pulse Analytics"
              description="A modern analytics platform that transforms complex business data into clear metrics, reports and actionable insights."
              tags={["React", "Dashboard", "Data UI"]}
            >
              <div className="h-[540px] w-full sm:h-[680px] lg:h-[800px]">
                <AnalyticsPreview />
              </div>
            </ProjectCard>

            <ProjectCard
              number="03"
              category="Creative / Agency"
              title="Velora Studio"
              description="An editorial creative studio experience built around bold typography, strong visual hierarchy and minimal digital art direction."
              tags={["Creative", "Branding", "Frontend"]}
            >
              <div className="h-[500px] w-full sm:h-[650px] lg:h-[760px]">
                <StudioPreview />
              </div>
            </ProjectCard>

            <ProjectCard
              number="04"
              category="Fintech / Product"
              title="Finora"
              description="A refined financial product concept designed around balances, transactions, payments and a simple modern banking experience."
              tags={["Fintech", "Product UI", "Next.js"]}
            >
              <div className="h-[500px] w-full sm:h-[650px] lg:h-[760px]">
                <FinancePreview />
              </div>
            </ProjectCard>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="border-b border-white/[0.07] px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-16 lg:grid-cols-[.4fr_1fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                05 / Approach
              </p>

              <h2 className="mt-8 max-w-[450px] text-[48px] font-medium leading-[0.92] tracking-[-0.065em] sm:text-[65px]">
                Simple ideas.
                <br />
                <span className="text-white/25">Strong execution.</span>
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "THINK",
                  text: "Understand the idea, the user and what the experience needs to achieve.",
                },
                {
                  number: "02",
                  title: "DESIGN",
                  text: "Create a visual direction with strong typography, spacing and hierarchy.",
                },
                {
                  number: "03",
                  title: "BUILD",
                  text: "Turn the direction into a fast, responsive and polished web experience.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="bg-[#090909] p-8 sm:p-10"
                >
                  <span className="text-[9px] tracking-[0.2em] text-white/25">
                    {item.number}
                  </span>

                  <h3 className="mt-14 text-[11px] font-semibold tracking-[0.2em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[12px] leading-6 text-white/35">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="scroll-mt-20 border-b border-white/[0.07] px-6 py-32 lg:px-10 lg:py-48"
      >
        <div className="mx-auto max-w-[1280px]">
          <p className="mb-8 text-[10px] uppercase tracking-[0.25em] text-white/30">
            06 / Contact
          </p>

          <div className="grid items-end gap-14 lg:grid-cols-[1fr_.35fr]">
            <div>
              <p className="mb-6 text-sm text-white/35">
                Have a project in mind?
              </p>

              <h2 className="text-[16vw] font-medium leading-[0.75] tracking-[-0.085em] sm:text-[110px] lg:text-[135px]">
                LET&apos;S
                <br />
                <span className="text-white/25">CREATE.</span>
              </h2>
            </div>

            <div>
              <p className="mb-8 max-w-[360px] text-sm leading-7 text-white/40">
                I&apos;m open to freelance projects, collaborations and
                interesting digital ideas.
              </p>

              <a
                href="mailto:hello@example.com"
                className="group flex w-full items-center justify-between border-b border-white/20 pb-4 text-sm transition hover:border-white"
              >
                <span>hello@example.com</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <div className="mt-8 flex flex-wrap gap-2">
                {["LinkedIn", "GitHub", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="rounded-full border border-white/10 px-4 py-2.5 text-[9px] uppercase tracking-[0.16em] text-white/35 transition hover:border-white/30 hover:text-white"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-5 text-[9px] uppercase tracking-[0.16em] text-white/25 sm:flex-row sm:items-center">
          <p>© 2026 Umer. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              LinkedIn
            </a>

            <a href="#" className="transition hover:text-white">
              GitHub
            </a>

            <a href="#" className="transition hover:text-white">
              Instagram
            </a>
          </div>

          <a href="#home" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>

      {/* GLOBAL STYLES */}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #070707;
        }

        ::selection {
          background: white;
          color: black;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #070707;
        }

        ::-webkit-scrollbar-thumb {
          background: #292929;
          border-radius: 999px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
      `}</style>
    </main>
  );
}