import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-950">
      <main className="flex max-w-md flex-col items-center gap-8 text-center">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          유렌드
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          서비스를 이용하려면 로그인하거나 회원가입해 주세요.
        </p>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/login"
            className="flex h-12 items-center justify-center rounded-lg bg-zinc-900 font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            로그인
          </Link>
          <Link
            href="/signup"
            className="flex h-12 items-center justify-center rounded-lg border border-zinc-300 font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            회원가입
          </Link>
        </div>
      </main>
    </div>
  );
}
