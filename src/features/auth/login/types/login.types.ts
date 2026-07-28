export interface LoginRequest {
  phone: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}
