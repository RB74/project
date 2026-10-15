import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/15">
      <div className="mx-auto flex h-16 max-w-5xl items-center px-4">
        <h1  className="text-xl font-bold tracking-widest">
          IDEA
        </h1>
      </div>
    </header>
  );
}
