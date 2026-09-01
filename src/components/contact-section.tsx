import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/arthurbangenendt" },
  { label: "Instagram", href: "https://instagram.com/arthur_ben_" },
  { label: "Email", href: "mailto:arthur.b.angenend@gmail.com" },
];

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto flex flex-col gap-8 items-start">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Contact
        </h2>
        <p className="text-lg text-muted-foreground">
          Vamos conversar sobre o próximo projeto.
        </p>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
