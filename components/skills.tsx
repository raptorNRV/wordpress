const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    title: "Outils",
    skills: ["Git", "Docker", "Vercel", "Figma", "VS Code"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Travail d'équipe", "Résolution de problèmes", "Autonomie"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-10">
        <span className="font-mono text-primary text-xl">04.</span>
        Compétences
        <span className="h-px flex-1 bg-border max-w-xs" />
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-lg font-bold text-foreground mb-4 border-b border-primary pb-2">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
