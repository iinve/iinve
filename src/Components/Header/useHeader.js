"use client";
import { useSession } from "next-auth/react";

export const useHeader = () => {
  const { status } = useSession();

  const handleCreateYours = () => {
    // router.push('/auth', undefined, { shallow: true, });
  };

  return { status, handleCreateYours };
};
