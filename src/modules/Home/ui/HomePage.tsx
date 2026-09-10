import { ArrowRight, Layers3, Sparkles } from "lucide-react";

import { Badge } from "@/shared/ui/shadcn/badge";
import { Button } from "@/shared/ui/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/shared/ui/shadcn/card";
import { Separator } from "@/shared/ui/shadcn/separator";

const foundations = ["Next.js App Router", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui"];

export function HomePage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-muted/40 p-4 sm:p-8">
      <Card className="w-full max-w-2xl shadow-sm">
        <CardHeader className="gap-4">
          <div className="flex items-center justify-between gap-4">
            <Badge variant="secondary" className="gap-1.5">
              <Sparkles aria-hidden="true" />
              Server-first starter
            </Badge>
            <Layers3 className="size-5 text-muted-foreground" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <h1 className="font-heading text-3xl font-medium tracking-tight">Next.js project template</h1>
            <CardDescription className="text-base">
              A clean App Router baseline with narrow client boundaries and an owned shadcn design system.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <Separator />
          <ul className="flex flex-wrap gap-2" aria-label="Included foundations">
            {foundations.map((item) => (
              <li key={item}><Badge variant="outline">{item}</Badge></li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            Start in <code className="font-mono text-foreground">src/app/page.tsx</code>. Add client components only where interaction requires them.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <a href="https://nextjs.org/docs/app" target="_blank" rel="noreferrer">
              App Router docs <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
