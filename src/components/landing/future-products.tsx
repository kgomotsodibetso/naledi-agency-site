import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles } from "lucide-react"

export function FutureProducts() {
  return (
    <section id="future" className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto bg-card rounded-xl p-8 md:p-12 text-center shadow-2xl shadow-primary/10">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold px-4 py-1 rounded-full text-sm border border-accent/20">
                <Sparkles className="w-4 h-4" />
                Coming Soon
            </div>
          <h2 className="section-title mt-4">The Digital Vanguard</h2>
          <p className="section-subtitle mx-auto">
            Get exclusive access to our upcoming suite of courses, templates, and community memberships designed for the modern brand builder. Join the waitlist to be first in line.
          </p>
          <form className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <Input type="email" placeholder="Enter your email" className="h-12 flex-grow text-base bg-background" />
            <Button type="submit" size="lg" className="h-12 bg-accent text-accent-foreground hover:bg-accent/90">
              Join Waitlist
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
