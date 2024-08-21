"use client";

import { useEffect, useState } from "react";

export const Mounted = ({ children }: { children: React.ReactNode }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return <>{children}</>;
};