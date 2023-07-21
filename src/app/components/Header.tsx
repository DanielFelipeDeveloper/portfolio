"use client"

import Link from "next/link";

export function Header() {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="#">
            <img src="assets/logo.svg" alt="Logo" />
          </Link>
        
          <a
            className="btn btn-sm flex items-center "
            href="/Resume.pdf"
            download="resume"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}