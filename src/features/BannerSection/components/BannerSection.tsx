import Image from "next/image";

export function BannerSection() {
  return (
    <section className="pb-16 sm:pb-20">
        <div className="relative w-full">
          <Image
            src="/image/bannersection/bannersection.png"
            alt="جشن ۱۹ سالگی ایکس‌ویژن"
            width={2880}
            height={600}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
    </section>
  );
}
