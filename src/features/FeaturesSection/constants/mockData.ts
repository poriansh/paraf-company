export const featuresSectionMeta = {
  titlePrefix: "ویژگی‌های",
  titleBrand: "پاراف‌کلاب",
} as const;

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  backTitle: string;
  backDescription: string;
  backImageSrc: string;
  backHint: string;
}

export const featuresMock: FeatureItem[] = [
  {
    id: "prizes",
    title: "جوایز ویژه",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
    imageSrc: "/image/featureSection/gift.png",
    backTitle: "دریافت جایزه",
    backDescription: "با امتیاز باشگاه می‌توانید جوایز ویژه را دریافت کنید",
    backImageSrc: "/image/featureSection/roket.png",
    backHint: "مشاهده جوایز",
  },
  {
    id: "support",
    title: "پشتیبانی حرفه‌ای",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
    imageSrc: "/image/featureSection/laptop.png",
    backTitle: "همیشه در دسترس",
    backDescription: "تیم پشتیبانی در تمام ساعات پاسخگوی شماست",
    backImageSrc: "/image/featureSection/users.png",
    backHint: "ارتباط با پشتیبانی",
  },
  {
    id: "shipping",
    title: "ارسال رایگان",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
    imageSrc: "/image/featureSection/roket.png",
    backTitle: "ارسال سریع",
    backDescription: "سفارش‌های واجد شرایط بدون هزینه ارسال می‌شوند",
    backImageSrc: "/image/featureSection/gift.png",
    backHint: "شرایط ارسال",
  },
  {
    id: "sales",
    title: "گزارش فروش",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
    imageSrc: "/image/featureSection/chart.png",
    backTitle: "تحلیل عملکرد",
    backDescription: "گزارش‌های دقیق فروش را به‌صورت لحظه‌ای ببینید",
    backImageSrc: "/image/featureSection/laptop.png",
    backHint: "مشاهده گزارش",
  },
  {
    id: "events",
    title: "رویدادهای ویژه",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
    imageSrc: "/image/featureSection/calender.png",
    backTitle: "تقویم رویدادها",
    backDescription: "از رویدادها و کمپین‌های ویژه باشگاه مطلع شوید",
    backImageSrc: "/image/featureSection/chart.png",
    backHint: "لیست رویدادها",
  },
  {
    id: "partners",
    title: "شبکه همکاران",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
    imageSrc: "/image/featureSection/users.png",
    backTitle: "همکاری تجاری",
    backDescription: "به شبکه همکاران بپیوندید و از مزایای مشترک بهره ببرید",
    backImageSrc: "/image/featureSection/calender.png",
    backHint: "عضویت در شبکه",
  },
];
