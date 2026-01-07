"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-primary mb-4">05. Et maintenant ?</p>
        <h2 className="text-4xl font-bold text-foreground mb-6">Travaillons ensemble</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question, un projet en tête,
          ou simplement envie de dire bonjour, n'hésitez pas à me contacter !
        </p>

        {isSubmitted ? (
          <div className="flex flex-col items-center gap-4 p-8 bg-card rounded-lg">
            <CheckCircle className="h-12 w-12 text-primary" />
            <p className="text-lg text-foreground">Merci pour votre message ! Je vous répondrai rapidement.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Nom
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Votre nom"
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="bg-card border-border focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">
                Sujet
              </label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="Sujet de votre message"
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Votre message..."
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto bg-transparent border border-primary text-primary hover:bg-primary/10"
            >
              {isLoading ? (
                "Envoi en cours..."
              ) : (
                <>
                  Envoyer <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        )}

        <div className="mt-12">
          <a href="mailto:votre@email.com" className="inline-flex items-center gap-2 text-primary hover:underline">
            votre@email.com
          </a>
        </div>
      </div>
    </section>
  )
}
