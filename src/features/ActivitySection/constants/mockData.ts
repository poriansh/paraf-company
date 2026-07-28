export const activityFilters = [
  {value: "all", label: "نمایش همه"},
  {value: "score", label: "امتیاز"},
  {value: "coin", label: "سکه"},
  {value: "dual", label: "دوگانه"},
  {value: "withdraw", label: "برداشت سکه"},
  {value: "transfer", label: "انتقال سکه"},
] as const;

export type ActivityFilter = (typeof activityFilters)[number]["value"];

export type ActivityType = Exclude<ActivityFilter, "all">;

export interface ChartPoint {
  month: string;
  value: number;
}

/** Fake 6-month activity score series for the static chart. */
export const chartMockData: ChartPoint[] = [
  {month: "اردیبهشت", value: 22},
  {month: "خرداد", value: 48},
  {month: "تیر", value: 82},
  {month: "مرداد", value: 52},
  {month: "شهریور", value: 50},
  {month: "مهر", value: 18},
];

export const chartMeta = {
  title: "نمودار فعالیت‌ها",
  alert: "اخیراً کم‌فعالیت بودی. برای حفظ سطح برتری، بیشتر مشارکت کن!",
  inviteCta: "دعوت دوستان",
  surveyCta: "شرکت در نظرسنجی",
  subtitle: "نمودار تغییرات امتیاز بر اساس فعالیت ۶ ماهه شما",
  changePrefix: "فعالیت شما نسبت به ماه گذشته",
  changeHighlight: "۳۵٪ کاهش",
  changeSuffix: "یافته.",
  yTicks: [0, 20, 40, 60, 80, 100],
} as const;

export interface ActivityItem {
  id: string;
  type: ActivityType;
  amount: string;
  description: string;
  status: string;
  time: string;
}

export const recentActivitiesMeta = {
  title: "فعالیت‌های اخیر",
  subtitle: "مروری بر آخرین فعالیت‌ها و دستاوردها",
  fullListLabel: "لیست کامل",
} as const;
export const recentActivitiesMock: ActivityItem[] = [

  {
    id: "5",
    type: "transfer",
    amount: "۵۰ انتقال",
    description: "انتقال سکه به کاربر آرمان کریمی",
    status: "موفق",
    time: "۱۰:۳۵ - دیروز",
  },
  {
    id: "6",
    type: "dual",
    amount: "+۸ دوگانه",
    description: "پاداش ترکیبی امتیاز و سکه از نظرسنجی",
    status: "موفق",
    time: "۰۹:۱۵ - دیروز",
  },
  {
    id: "7",
    type: "score",
    amount: "+۱۰ امتیاز",
    description: "پاسخ تیکت شما درباره وضعیت سفارش",
    status: "موفق",
    time: "۱۸:۲۹ - امروز",
  },
  {
    id: "8",
    type: "coin",
    amount: "+۵ سکه",
    description: "ثبت نظر برای محصول خریداری‌شده",
    status: "موفق",
    time: "۱۵:۴۰ - امروز",
  },
  {
    id: "9",
    type: "withdraw",
    amount: "۱۰۰- برداشت",
    description: "برداشت سکه به کیف پول پاراف",
    status: "موفق",
    time: "۱۱:۰۵ - امروز",
  },
  {
    id: "10",
    type: "transfer",
    amount: "۳۰ انتقال",
    description: "انتقال سکه به کاربر سارا محمدی",
    status: "موفق",
    time: "۰۸:۵۰ - امروز",
  },
];
