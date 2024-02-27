"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

export function BackgroundGradientCustom() {


  const entities = [
    {
      name: 'Benoît',
      avatar: '/participants/benoit.jpeg',
      description: 'He\'s a passionate programmer who excels particularly in Python, JavaScript, and PHP languages. Using them, he creates innovative and functional projects. Outside coding, he explores creativity through his camera, capturing unique moments and telling visual stories.',
      socials: [
        {
          name: 'Github',
          url: 'https://github.com/BenoitPrmt',
          icon: GithubIcon
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/benoit-parmentier/',
          icon: LinkedinIcon
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/BenoitDev_',
          icon: TwitterIcon
        },
      ]
    },
    {
      name: 'Raphaël',
      avatar: '/participants/edited-raph.jpg',
      description: 'He\'s a driven individual with a fervor for coding, basketball, and F1. Committed to self-improvement, he tackles challenges head-on, both in his work and personal pursuits. When he\'s not coding or indulging in his favorite sports, he unwinds with video games, embracing new experiences and adventures.',
      socials: [
        {
          name: 'Github',
          url: 'https://github.com/Raxuis',
          icon: GithubIcon
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/raphael-raclot/',
          icon: LinkedinIcon
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/I_Haruki_I',
          icon: TwitterIcon
        },
      ]
    }];
  return (
    <div className="flex flex-wrap justify-center pt-24 gap-8">
      {entities.map(entity => (
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 h-full" key={entity.name}>

          <div className="flex justify-center">
            <Image
              src={entity.avatar}
              alt={entity.name}
              height="100"
              width="100"
              className="object-cover rounded-full h-20 w-20 duration-500 hover:scale-110"
            />
          </div>
          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
            {entity.name}
          </p>

          <p className="text-sm text-neutral-400">
            {entity.description}
          </p>
          <div className="flex justify-center space-x-4">
            <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 mt-4 text-xs font-bold bg-zinc-800">
              {entity.socials.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-2 py-2 duration-500 text-white hover:text-greyLinks flex items-center space-x-1 text-xs font-bold bg-zinc-800"
                >
                  {React.createElement(social.icon, { className: "w-4 h-4" })}
                  <span className="text-xs">{social.name}</span>
                </a>
              ))}
            </button>
          </div>
        </BackgroundGradient>))}
    </div>
  );
}
