interface ProseContainerProps {
  children: React.ReactNode;
}

export default function ProseContainer({ children }: ProseContainerProps) {
  return <div className="mx-auto max-w-2xl">{children}</div>;
}
