'use client'
import { Separator } from "@radix-ui/react-dropdown-menu"


export default function Footer() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
    <footer className="">
    
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
         
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            never
          </a>
          . The source code is available on{" "}
          <a
       
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
    </dl>
    </div>
  )
}