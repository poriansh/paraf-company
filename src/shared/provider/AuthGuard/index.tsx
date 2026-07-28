"use client";

import {useRouter} from "next/navigation";
import {useEffect} from "react";
import type {ReactNode} from "react";
import {getToken} from "@/shared/utils/token";
import { LoadingScreen } from "@/shared/components/common/loadingscreen/loading-screen";


interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({children}: AuthGuardProps) {
  const router = useRouter();

  const token = getToken();

  useEffect(() => {
    if (!token) {
      router.replace("/login");
    }
  }, [router, token]);

  if (!token) {
    return <LoadingScreen />;
  }

  return children;
}
