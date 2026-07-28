export interface UserCurrency {
  name: string;
}

export interface CurrentUser {
  scores: string;
  firstName: string;
  lastName: string;
  defaultCurrency: UserCurrency;
}
