export default function BlogPageTemplate({
  children,
  actionButtons,
}: {
  children: React.ReactNode;
  actionButtons?: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto mb-8 flex max-w-4xl justify-between border-b border-b-slate-300 pb-6">
        <a href="/blog">
          <h1 className="text-4xl">Blogposts</h1>
        </a>
        {actionButtons}
      </div>
      <div className="mx-auto max-w-2xl">{children}</div>
    </>
  );
}
