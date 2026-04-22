"use client";
import { useSearchParams } from "next/navigation";

export function GuestName() {
    const searchParams = useSearchParams();
    const guest = searchParams.get("to");

    return (
        <h3>
            {guest ? decodeURIComponent(guest) : "Tamu Undangan"}
        </h3>
    );
}