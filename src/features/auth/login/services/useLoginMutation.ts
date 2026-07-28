import useMutate from "@/infrastructure/client/api/useMutate";

type ResponseLogin = {
  accessToken: string;
  refreshToken: string;
};
function useAdminLogin() {
  return useMutate<ResponseLogin>({
    method: "POST",
    url: "users/login",
    hideToast: true,
  });
}

export default useAdminLogin;
