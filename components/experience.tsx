"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "Entreprise A",
    title: "Développeur Full-Stack Senior",
    period: "2022 — Présent",
    description: [
      "Développement d'applications web avec React, Next.js et Node.js",
      "Architecture et mise en place de CI/CD pipelines",
      "Mentorat des développeurs juniors",
      "Optimisation des performances et de l'accessibilité",
    ],
  },
  {
    company: "Startup B",
    title: "Développeur Front-End",
    period: "2020 — 2022",
    description: [
      "Création d'interfaces utilisateur réactives avec React",
      "Intégration de designs Figma en composants réutilisables",
      "Collaboration avec l'équipe UX pour améliorer l'expérience utilisateur",
      "Tests unitaires et d'intégration avec Jest et Cypress",
    ],
  },
  {
    company: "Agence C",
    title: "Développeur Web Junior",
    period: "2018 — 2020",
    description: [
      "Développement de sites web pour divers clients",
      "Maintenance et évolution d'applications existantes",
      "Apprentissage des bonnes pratiques de développement",
      "Participation aux réunions clients et estimations",
    ],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24">
      <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-10">
        <span className="font-mono text-primary text-xl">02.</span>
        Mon parcours
        <span className="h-px flex-1 bg-border max-w-xs" />
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Tabs */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border">
          {experiences.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-5 py-3 text-sm font-mono text-left whitespace-nowrap transition-colors",
                "hover:bg-secondary hover:text-primary",
                activeTab === index
                  ? "text-primary bg-secondary border-b-2 md:border-b-0 md:border-l-2 border-primary md:-ml-px"
                  : "text-muted-foreground",
              )}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 min-h-[300px]">
          <h3 className="text-xl font-medium text-foreground">
            {experiences[activeTab].title} <span className="text-primary">@ {experiences[activeTab].company}</span>
          </h3>
          <p className="font-mono text-sm text-muted-foreground mt-1 mb-6">{experiences[activeTab].period}</p>
          <ul className="space-y-3">
            {experiences[activeTab].description.map((item, index) => (
              <li key={index} className="flex gap-3 text-muted-foreground leading-relaxed">
                <span className="text-primary mt-1.5">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
