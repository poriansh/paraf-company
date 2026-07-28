import Image from "next/image";

export function BannerSection() {
  return (
    <section className="pb-10 sm:pb-16 md:pb-20">
      <div className="relative w-full overflow-hidden">
        <Image
          src="/image/bannersection/bannersection.png"
          alt="جشن ۱۹ سالگی ایکس‌ویژن"
          width={2880}
          height={600}
          className="h-auto w-full object-cover"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}
