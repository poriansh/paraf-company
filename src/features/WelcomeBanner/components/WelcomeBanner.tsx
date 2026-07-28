import Image from "next/image";

export function WelcomeBanner() {
  return (
    <section
      className="
           relative
    mx-auto
    max-w-230
    h-50
    z-10
    rounded-[100px]
    bg-white
      "
    >
      {/* تصویر اصلی سمت چپ */}
      <div
        className="
          absolute
          -left-20
          -bottom-2.5
          w-65
          h-57.5
          z-20
        "
      >
        <Image
          src="/image/wellcombanner/cup.png"
          alt="welcome trophy"
          width={360}
          height={360}
        />
      </div>

      <div
        className="
           absolute
    inset-0
    z-0
    pointer-events-none
        "
      >
        <Image
          src="/image/wellcombanner/FadeIn.png"
          alt="banner effect"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* لوگو / المان وسط */}
      <div
        className="
          absolute
          left-20
         -bottom-10

          w-50
          h-50
        "
      >
        <Image
          src="/image/wellcombanner/kiseh.png"
          alt="logo"
          fill
          className="object-contain"
        />
      </div>

      {/* متن */}
      <div
        className="
          absolute
          right-22.5
          top-1/2
          -translate-y-1/2
          text-right
          z-30
        "
      >
        <p className="text-sm text-gray-700 mb-3">آرین عزیز</p>

        <h1
          className="
            text-[32px]
            font-bold
            text-[#7447F5]
          "
        >
          به بارافکلاس
          <span className="font-medium"> (باشگاه مشتریان باراف)</span>
          <br />
          <span>خوش آمدی!</span>
        </h1>
      </div>
    </section>
  );
}
