
import { loadingState } from "@/atoms/loadingAtom";
import { useRecoilState } from "recoil";

export function useLoading() {
  const [loading, setLoading] = useRecoilState(loadingState);

  const setLoadingState = (action, value, progress = 0) => {
    setLoading((prev) => ({
      ...prev,
      [action]: value,
      progress,
    }));
  };

  return { loading, setLoadingState };
}
