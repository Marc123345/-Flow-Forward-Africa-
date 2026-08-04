'use client'
import { useEffect, useState } from "react"
import DonateModal from "./DonateModal"

/** Mounted once in Layout; listens for the event any DonateButton fires. */
export default function DonateHost() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onOpen = () => setOpen(true)
        window.addEventListener("ffa:donate", onOpen)
        return () => window.removeEventListener("ffa:donate", onOpen)
    }, [])

    return <DonateModal open={open} onClose={() => setOpen(false)} />
}
