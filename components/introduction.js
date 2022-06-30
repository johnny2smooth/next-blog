import Link from 'next/link';

export default function Introduction() {
  return (
    <>
      <div className="flex items-baseline gap-1">
        <p className="text-3xl">Highlights</p>
        <p className="text-xs">I am most proud of these</p>
      </div>
      <div className="grid grid-cols-2 gap-4 my-4">
        <Link href="/">
          <a
            href="/"
            class="hover:bg-green-500 focus:bg-green-500 bg-whiteLight mx-auto w-full rounded h-32 flex border-4 border-blueWater shadow-lg"
          >
            <p class="mx-auto my-auto text-lg font-black">1</p>
          </a>
        </Link>
        <Link href="/">
          <a
            href="/"
            class="hover:bg-green-500 focus:bg-green-500 bg-whiteLight mx-auto w-full rounded h-32 flex border-4 border-blueWater shadow-lg"
          >
            <p class="mx-auto my-auto text-lg font-black">2</p>
          </a>
        </Link>
        <Link href="/">
          <a
            href="/"
            class="hover:bg-green-500 focus:bg-green-500 bg-whiteLight mx-auto w-full rounded h-32 flex border-4 border-blueWater shadow-lg"
          >
            <p class="mx-auto my-auto text-lg font-black">3</p>
          </a>
        </Link>
        <Link href="/">
          <a
            href="/"
            class="hover:bg-green-500 focus:bg-green-500 bg-whiteLight mx-auto w-full rounded h-32 flex border-4 border-blueWater shadow-lg"
          >
            <p class="mx-auto my-auto text-lg font-black">4</p>
          </a>
        </Link>
      </div>
    </>
  );
}
