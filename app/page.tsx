import Banner from '@/components/banner.client';
import Link from 'next/link';

export default function Home() {
  const storeId = 'dark-horse-coffee';
  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <Banner />
        <Link href={`/coffee-shop/${storeId}`}>Dark Horse Coffee</Link>
      </main>
    </div>
  );
}
