"use client"

import type React from "react"

import type { ReactNode } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ScrollToTopLinkProps {
  href: string
  children: ReactNode
  className?: string
  ariaLabel?: string
  target?: string
  focusId?: string
}

export default function ScrollToTopLink({
  href,
  children,
  className,
  ariaLabel,
  target,
  focusId,
}: ScrollToTopLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (target === "_blank") {
      // For external links, just let the default behavior happen
      return
    }

    e.preventDefault()

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    // Navigate after a short delay to allow the scroll to complete
    setTimeout(() => {
      router.push(href)

      // If a focusId is provided, scroll to that element after navigation
      if (focusId) {
        setTimeout(() => {
          const element = document.getElementById(focusId)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            // Optional: focus the element for accessibility
            element.focus({ preventScroll: true })
          }
        }, 500) // Give the page time to load
      }
    }, 300)
  }

  return (
    <Link href={href} onClick={handleClick} className={className} aria-label={ariaLabel} target={target}>
      {children}
    </Link>
  )
}
