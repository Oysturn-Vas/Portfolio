"use client";
import Room from "./Room";
import { val } from "@theatre/core";
import {
  PerspectiveCamera,
  useCurrentSheet,
  editable as e
} from "@theatre/r3f";
import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useAtom } from "jotai";
import {
  currentSectionAtom,
  hiddenNav,
  mobileMenu,
  navClick
} from "@/actions/GlobalState";
import { useEffect } from "react";

export default function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const sequenceLength = val(sheet.sequence.pointer.length); // // Using Atom from Jotai to set current page
  const [currentPage, setCurrentPage] = useAtom(currentSectionAtom);
  const [currNavClick, setNavClick] = useAtom(navClick);
  const [hiddenNavValue, setHiddenNavValue] = useAtom(hiddenNav);
  const [currMobileMenu, setMobileMenu] = useAtom(mobileMenu);

  function logCurrentPageCallback(scroll, callback) {
    var currentPage = Math.abs(scroll.offset * scroll.pages);
    var page;
    if (currentPage % 10 > 0.7) {
      if (Math.trunc(currentPage) >= 4) {
        page = 4;
      } else {
        page = Math.trunc(currentPage);
      }
    } else {
      if (currentPage % 10 < 0.7) {
        page = Math.trunc(currentPage);
      } else {
        page = Math.round(currentPage);
      }
    }
    callback(page);
  }

  var lastScrollTopPosition = scroll.el.scrollTop;
  scroll.el.onscroll = () => {
    const newScrollTop = scroll.el.scrollTop;
    if (
      newScrollTop > lastScrollTopPosition &&
      newScrollTop > 150 &&
      currMobileMenu == false
    ) {
      setHiddenNavValue(true);
    } else {
      setHiddenNavValue(false);
    }
    lastScrollTopPosition = newScrollTop;
  };

  useFrame(() => {
    if (currNavClick == false && scroll) {
      logCurrentPageCallback(scroll, setCurrentPage);
      //This ties the animation to the scroll
      sheet.sequence.position = Math.abs(scroll.offset * sequenceLength);
    } else if (currNavClick && scroll) {
      sheet.sequence.position = Math.abs(scroll.offset * sequenceLength);
    }
  });

  useEffect(() => {
    const sections = document.getElementsByTagName("section");
    if (currNavClick && sections.length != 0) {
      const sectionFirstChild = sections[currentPage].firstChild.offsetTop;
      const oddNo = currentPage >= 1 ? 2 * currentPage + 1 : 0;
      var smallIncrement = currentPage > 1 ? 44 * currentPage : 0;
      const scrollOffset = sectionFirstChild + 32 * oddNo + smallIncrement;
      scroll.el.scrollTo({
        top: scrollOffset,
        behavior: "smooth"
      });
    }
    setTimeout(() => {
      setNavClick(false);
    }, 1000);
  }, [currentPage]);

  return (
    <>
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 1, 10]}
        fov={45}
        near={0.1}
        far={70}
      />
      <e.group theatreKey="Room">
        <Room />
      </e.group>
    </>
  );
}
