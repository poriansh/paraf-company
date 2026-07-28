export type VitrinUserRole = "user" | "retailer" | string;
export type VitrinUserStatus = "active" | string;

export interface VitrinFile {
  id: number;
  key?: string;
  mimeType?: string;
  size?: string;
  link: string;
  type?: string;
}

export interface VitrinLevel {
  id: number;
  name: string;
  scores: string;
  status?: boolean;
  file: VitrinFile | null;
}

export interface VitrinCity {
  id: number;
  name: string;
  locationType: string;
}

export interface VitrinUserInfo {
  firstName: string;
  lastName: string;
  scores?: string;
  file: VitrinFile | null;
  city: VitrinCity | null;
  country: VitrinCity | null;
}

/** Short list item from `users/vitrin/all-user` */
export interface VitrinUser {
  id: number;
  role: VitrinUserRole;
  status: VitrinUserStatus;
  companyPhones: string[] | null;
  companyName: string | null;
}

/** Full detail from `users/vitrin/{userVitrinId}` */
export interface VitrinDetail {
  id: number;
  userId: number;
  role: VitrinUserRole;
  status: string;
  companyName: string | null;
  companyAddress: string | null;
  scores: string;
  authenticatedVitrin: boolean;
  isGoldenVerified: boolean;
  logo: VitrinFile | null;
  level: VitrinLevel | null;
  user: VitrinUserInfo | null;
  citiesRow: VitrinCity[];
  businessActivity: {id: number; name: string} | null;
  fieldOfActivity: {id: number; name: string} | null;
}
