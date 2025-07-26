// utils/withAuth.tsx
import { useAuth } from "../lib/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function withAuth(Component: React.ComponentType) {
  return function ProtectedComponent(props: any) {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/login");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) return <p className="text-center">Redirecting to login...</p>;

    return <Component {...props} />;
  };
}
