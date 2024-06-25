import React from "react";
import {
  SiFacebook,
  SiLinkedin,
  SiInstagram,
  SiYoutube,
  SiPinterest,
  SiGithub
} from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { useAnimate, motion } from "framer-motion";

export default function ContactSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        duration: 0.5
      }}
      className="w-full h-fit divide-y divide-neutral-900 border border-neutral-900"
    >
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <LinkBox
          Icon={SiLinkedin}
          href="https://www.linkedin.com/in/oysturn-vas"
          initialColor="text-blue-700"
          startColor="bg-indigo-600"
          endColor="text-white"
        />
        <LinkBox
          Icon={SiGithub}
          href="https://github.com/Oysturn-Vas"
          initialColor="text-black"
          startColor="bg-black"
          endColor="text-white"
        />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900">
        <LinkBox
          Icon={BsTwitterX}
          href="https://x.com/Oysturn_X_Vas"
          initialColor="text-black"
          startColor="bg-black"
          endColor="text-white"
        />
        <LinkBox
          Icon={SiInstagram}
          href="https://www.instagram.com/build.with.ovs/"
          initialColor="text-fuchsia-600"
          startColor="bg-rose-400"
          endColor="text-white"
        />
        <LinkBox
          Icon={SiYoutube}
          href="#"
          initialColor="text-red-600"
          startColor="bg-red-600"
          endColor="text-white"
        />
      </div>
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <LinkBox
          Icon={SiPinterest}
          href="https://pin.it/7c0AE02KK"
          initialColor="text-red-600"
          startColor="bg-red-600"
          endColor="text-white"
        />
        <LinkBox
          Icon={SiFacebook}
          href="https://www.facebook.com/oysturnxvas/"
          initialColor="text-blue-700"
          startColor="bg-indigo-600"
          endColor="text-white"
        />
      </div>
    </motion.div>
  );
}

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP]
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP]
};

const LinkBox = ({
  Icon,
  href,
  initialColor = "text-black",
  startColor = "bg-slate-900",
  endColor = "text-white"
}) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left"
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right"
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top"
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom"
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side]
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side]
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-32 w-full place-content-center md:h-28"
    >
      <Icon className={`text-xl sm:text-3xl lg:text-4xl ${initialColor}`} />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP
        }}
        className={`absolute inset-0 grid place-content-center ${startColor} ${endColor}`}
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};
