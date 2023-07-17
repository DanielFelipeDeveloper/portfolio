import Link from "next/link"

export function Header() {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="#">
            <img src="assets/logo.svg" alt="Logo" />
          </Link>

          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </div>
  )
}