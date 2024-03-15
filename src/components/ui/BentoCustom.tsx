"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import {
  IconBrandTeams,
  IconUserSearch,
  IconMailFast,
  IconMessages,
  IconArrowUp
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BentoCustom() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] pt-24">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-white/[0.2]bg-black">
    <Image src="/dance.gif" alt="dance" width={100} height={100} className="flex-shrink-0 object-cover h-full w-full rounded-xl" />
  </div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.2] p-2  items-center space-x-2 bg-black"
      >
        <Image src="/bots/game-stats-tracker.webp" alt="bot Image" width={24} height={24} className="rounded-full flex-shrink-0" />
        <div className="w-full  h-4 rounded-full bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-black"
      >
        <div className="w-full h-4 rounded-full bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 bg-black"
      >
        <Image src="/bots/gamemaster.jpeg" alt="bot Image" width={24} height={24} className="rounded-full object-cover flex-shrink-0" />
        <div className="w-full h-4 rounded-full bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-white/[0.2] p-2  items-center space-x-2 bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] rounded-lg  flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
      >
        <Image
          src="/participants/raphael.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 object-cover"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Raphaël Raclot
          Student at Coda
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center">
        <Image
          src="/robot.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 object-cover"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Our Bot
        </p>
        <p className="border border-green-500 bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Useful
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
      >
        <Image
          src="/participants/benoit.jpeg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 object-contain"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Benoît Parmentier
          Student at Coda
        </p>
      </motion.div>
    </motion.div >
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-white/[0.2] p-2  items-start space-x-2 bg-black"
      >
        <Image
          src="/bots/game-stats-tracker.webp"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          🪙 You got <b>tails</b>
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-black"
      >
        <p className="text-xs text-neutral-500">Oh noo 🥲 </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Message Detection",
    description: (
      <span className="text-sm">
        Our ChatBot detects what&apos;s been sent by the user.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconUserSearch className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Fast Answers",
    description: (
      <span className="text-sm">
        Our ChatBot answers questions in a fast way.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconMailFast className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Used Command Completion",
    description: (
      <span className="text-sm">
        Use arrow up to get last written command.
      </span>
    ),
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Our Team",
    description: (
      <span className="text-sm">
        Take a quick look of the team who made this useful bot!
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconBrandTeams className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Real Conversations",
    description: (
      <span className="text-sm">
        Get real conversations with our ChatBot.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconMessages className="h-4 w-4 text-neutral-500" />,
  },
];
