import { Container } from "@/components/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-auto">
      <Container>
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">{children}</div>
        </div>
      </Container>
    </main>
  );
}
