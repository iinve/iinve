import { userData } from "atoms/userDataAtom";
import { allUsers } from "data/database/allUsers";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { fetchInstagramData } from "utils/useService";
import { fetchUserData } from "./userDataUtils";

export const useUserData = () => {
  const [data, setData] = useRecoilState(userData);
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetchUserData(pathname?.slice(1));
        const instagramData = await fetchInstagramData(response?.instagram_username);
        setData({
          ...response,
          instagram: instagramData,
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setData, pathname]);

  const isValidUser = allUsers?.some(user => user?.username === pathname?.slice(1));

  return { data, isValidUser, isLoading }
}