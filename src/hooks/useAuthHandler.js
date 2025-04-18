import { usePathname } from "next/navigation";

export const useAuthHandler = () => {
  const pathName = usePathname();
  const isAuthPage = typeof window !== "undefined" && ['/auth', '/templates','/dashboard', '/claim-username'].includes(pathName);
  const isClaimUserNamePage = ['/claim-username'].includes(pathName);

  const isUserLoggedIn = () => {
    return typeof window !== "undefined" && window.localStorage.getItem('user') && window.localStorage.getItem('token');
  }
  return{isAuthPage, isUserLoggedIn, isClaimUserNamePage}
}

