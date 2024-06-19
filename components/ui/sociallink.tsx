import * as React from "react"
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
  
  const SocialIconList = () => {
    return (
        <div className="hidden lg:flex space-x-1 z-50">
          <Link
            href="deepshikhapatel@oriental.ac.in"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="flex items-center" variant="ghost" size="icon">
              <MdMailOutline className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="https://github.com/Nev-Labs/ACM_OIST"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="flex items-center" variant="ghost" size="icon">
              <GitHubLogoIcon className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="deepshikhapatel@oriental.ac.in"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="flex items-center" variant="ghost" size="icon">
              <FaLinkedin className="h-4 w-4" />
            </Button>
          </Link>
        </div>
    );
  };
  
  export default SocialIconList;