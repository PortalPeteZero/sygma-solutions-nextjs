'use client';
import { useCallback, useEffect, useState } from \"react\";
import useEmblaCarousel from \"embla-carousel-react\";
import Autoplay from \"embla-carousel-autoplay\";
import Link from \"next/link\";
import { ChevronLeft, ChevronRight } from \"lucide-react\";

const slides = [
  {
    image: \"/images/courses/CAT4-and-Genny-15.webp\",
    alt: \"Trainee using a CAT4 cable avoidance tool during hands-on field training\",
    eyebrow: \"21 Years. One Specialism.\",
    headline: \"The UK's Only Independent Specialist in Underground Utility Location and Avoidance Training.\",
    sub: \"One subject. Delivered by experienced utility mapping professionals who are not tied to any manufacturer.\",
    primaryCta: { label: \"See Our Courses\", href: \"/courses\" },
    secondaryCta: { label: \"Book a Course\", href: \"/contact\" },
  },
  {
    image: \"/images/homepage/Advanced-EM-01.webp\",
    alt: \"Advanced electromagnetic locating equipment used in Sygma utility detection training\",
    eyebrow: \"Proven Record in Reducing Strikes and Increasing Genny Usage.\",
    headline: \"We Teach Operatives to Locate Services, Not Just Avoid Them.\",
    sub: \"Our Genny-First methodology produces a 70 to 80% measurable increase in Genny usage. That is a site that is measurably safer.\",
    primaryCta: { label: \"View Utility Mapping\", href: \"/training/utility-mapping-surveying\" },
    secondaryCta: { label: \"Talk to Us\", href: \"/contact\" },
  },
  {
    image: \"/images/homepage/CAT4-and-Genny-30.webp\",
    alt: \"Instructor demonstrating Genny signal generator connection techniques on site\",
    eyebrow: \"Every Trainer. A Specialist.\",
    headline: \"All Our Trainers Are Experienced Utility Mapping Professionals. That Is What Makes the Difference.\",
    sub: \"Directly employed. Ex-manufacturer or ex-utility surveyors. TAQA qualified. Not freelancers. Not generalists.\",
    primaryCta: { label: \"Bespoke Training\", href: \"/bespoke-training\" },
    secondaryCta: { label: \"About Sygma\", href: \"/about\" },
  },
  {
    image: \"/images/courses/CAT4-and-Genny-63.webp\",
    alt: \"Hands-on Genny signal application demonstration during a Sygma training course\",
    eyebrow: \"On-Site. Nationwide.\",
    headline: \"We Come to Your Site. Any Location on the UK Mainland.\",
    sub: \"On-site delivery for teams of up to eight delegates. Your yard, your site protocols, your equipment. Travel included.\",
    primaryCta: { label: \"Bespoke Training\", href: \"/bespoke-training\" },
    secondaryCta: { label: \"Talk to Us\", href: \"/contact\" },
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: true, playOnInit: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on(\"select\", onSelect);
    return () => { emblaApi.off(\"select\", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setTimeout(() => {
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) autoplay.play();
    }, 12000);
    return () => clearTimeout(timer);
  }, [emblaApi]);

  return (
    <section className=\"relative h-[70vh] min-h-[480px] max-h-[720px] overflow-hidden\">
      <div className=\"overflow-hidden h-full\" ref={emblaRef}>
        <div className=\"flex h-full\">
          {slides.map((slide, i) => (
            <div key={i} className=\"relative flex-[0_0_100%] h-full\">
              {/* Background image */}
              <img
                src={slide.image}
                alt={slide.alt}
                className=\"absolute inset-0 h-full w-full object-cover object-center\"
                loading={i === 0 ? \"eager\" : \"lazy\"}
                fetchPriority={i === 0 ? \"high\" : \"auto\"}
                decoding={i === 0 ? \"sync\" : \"async\"}
              />
              {/* Gradient overlay - stronger on left for text legibility */}
              <div className=\"absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30\" />

              {/* Content - left aligned */}
              <div className=\"relative z-10 h-full flex items-center\">
                <div className=\"container mx-auto px-6 md:px-12\">
                  <div className=\"max-w-2xl\">
                    <p className=\"mb-3 text-sm sm:text-base md:text-lg font-extrabold uppercase tracking-widest text-accent\">
                      {slide.eyebrow}
                    </p>
                    <h2 className=\"mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white\">
                      {slide.headline}
                    </h2>
                    <p className=\"mb-6 text-sm sm:text-base md:text-lg text-white/75 max-w-xl\">
                      {slide.sub}
                    </p>
                    <div className=\"flex flex-wrap gap-3\">
                      <Link
                        href={slide.primaryCta.href}
                        className=\"inline-flex items-center px-6 py-2.5 sm:px-8 sm:py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors\"
                      >
                        {slide.primaryCta.label}
                      </Link>
                      <Link
                        href={slide.secondaryCta.href}
                        className=\"inline-flex items-center px-6 py-2.5 sm:px-8 sm:py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors\"
                      >
                        {slide.secondaryCta.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={scrollPrev}
        className=\"absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-sm hover:bg-background/80 transition-colors\"
        aria-label=\"Previous slide\"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className=\"absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-sm hover:bg-background/80 transition-colors\"
        aria-label=\"Next slide\"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className=\"absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2\">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? \"w-8 bg-primary\"
                : \"w-2 bg-foreground/30 hover:bg-foreground/50\"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
