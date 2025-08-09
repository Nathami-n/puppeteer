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
  links: (typeof navLinks);
}
export default function SmoothDrawerHeader({
  open,
  setOpen,
  links,
}: SmoothDrawerHeaderProps) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="max-w-fit mx-auto p-6 rounded-2xl shadow-xl">
        <motion.div
          variants={drawerVariants as any}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-[340px] space-y-6"
        >
          <motion.div variants={itemVariants as any}>
            <DrawerHeader className="flex items-center justify-between">
              <div>
                <Logo />
              </div>
              <div>
                <div>
                  <XIcon />
                </div>
              </div>
            </DrawerHeader>
          </motion.div>

          <motion.div variants={itemVariants as any}>
            
          </motion.div>
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}
