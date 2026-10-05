import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { NavLinks } from "@/components/layout/NavLinks";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-canvas">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <NavLinks />
      </Container>
    </header>
  );
}
