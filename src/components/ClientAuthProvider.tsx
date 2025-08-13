"use client"

import { useAuthStore } from "@/store/authStore";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react"

const ClientAuthProvider = ({ children }: { children: ReactNode })=> {
    const {check} = useAuthStore();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const skipCheck = ['/login', '/register']
        if(skipCheck.includes(pathname)) return;

        check().catch(() => {
            //Aca van a ir las rutas protegidas del front (cuando las haga)
        });
    }, [check, pathname, router]);


    return <>{children}</>;
}


export default ClientAuthProvider