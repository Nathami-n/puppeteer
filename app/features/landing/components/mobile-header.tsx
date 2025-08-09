import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";

import { motion } from "motion/react";
import { Button } from "~/components/ui/button";
import { Logo } from "~/components/custom/logo";
import { XIcon } from "lucide-react";
import type { navLinks } from "./header";
import { Link } from "react-router";
import { Separator } from "~/components/ui/separator";

const drawerVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
    rotateX: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
};

interface SmoothDrawerHeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  links: typeof navLinks;
}
export default function SmoothDrawerHeader({
  open,
  setOpen,
  links,
}: SmoothDrawerHeaderProps) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className=" fixed inset-x-0 w-[95%] mx-auto bottom-3 bg-background border border-border p-4 rounded-xl shadow-lg md:hidden">
        <motion.div
          variants={drawerVariants as any}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants as any}>
            <DrawerHeader className="flex items-center justify-between flex-row  ">
              <Logo className="text-primary" />
              <div
                role="button"
                className="border border-border rounded-xs text-accent-foreground cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <XIcon />
              </div>
            </DrawerHeader>
          </motion.div>

          <Separator className="mb-4" />
          <motion.div variants={itemVariants as any}>
            <ul className="flex flex-col text-sm mb-4 border border-border rounded-md">
              {links.map((link) => (
                <li className="p-2.5 border-b border-border last:border-b-0">
                  <Link className={"underline-offset-4"} to={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}
