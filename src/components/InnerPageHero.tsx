import Image from 'next/image';

interface InnerPageHeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

export default function InnerPageHero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
}: InnerPageHeroProps) {
  return (
    <div className="relative h-96 w-full overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-top opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-indigo-900/80 to-slate-900/80" />
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
