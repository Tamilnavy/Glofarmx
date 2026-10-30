// Generated responsive variants (see src/assets/products/) for the locally supplied
// product photography. Each entry lists width/url pairs for both formats.

import onion320w from "../assets/products/onion-320.webp";
import onion480w from "../assets/products/onion-480.webp";
import onion640w from "../assets/products/onion-640.webp";
import onion800w from "../assets/products/onion-800.webp";
import onion320j from "../assets/products/onion-320.jpg";
import onion480j from "../assets/products/onion-480.jpg";
import onion640j from "../assets/products/onion-640.jpg";
import onion800j from "../assets/products/onion-800.jpg";

import potato320w from "../assets/products/potato-320.webp";
import potato480w from "../assets/products/potato-480.webp";
import potato640w from "../assets/products/potato-640.webp";
import potato800w from "../assets/products/potato-800.webp";
import potato320j from "../assets/products/potato-320.jpg";
import potato480j from "../assets/products/potato-480.jpg";
import potato640j from "../assets/products/potato-640.jpg";
import potato800j from "../assets/products/potato-800.jpg";

import carrot320w from "../assets/products/carrot-320.webp";
import carrot480w from "../assets/products/carrot-480.webp";
import carrot640w from "../assets/products/carrot-640.webp";
import carrot800w from "../assets/products/carrot-800.webp";
import carrot320j from "../assets/products/carrot-320.jpg";
import carrot480j from "../assets/products/carrot-480.jpg";
import carrot640j from "../assets/products/carrot-640.jpg";
import carrot800j from "../assets/products/carrot-800.jpg";

import tomato320w from "../assets/products/tomato-320.webp";
import tomato480w from "../assets/products/tomato-480.webp";
import tomato640w from "../assets/products/tomato-640.webp";
import tomato800w from "../assets/products/tomato-800.webp";
import tomato320j from "../assets/products/tomato-320.jpg";
import tomato480j from "../assets/products/tomato-480.jpg";
import tomato640j from "../assets/products/tomato-640.jpg";
import tomato800j from "../assets/products/tomato-800.jpg";

import okra320w from "../assets/products/okra-320.webp";
import okra480w from "../assets/products/okra-480.webp";
import okra640w from "../assets/products/okra-640.webp";
import okra800w from "../assets/products/okra-800.webp";
import okra320j from "../assets/products/okra-320.jpg";
import okra480j from "../assets/products/okra-480.jpg";
import okra640j from "../assets/products/okra-640.jpg";
import okra800j from "../assets/products/okra-800.jpg";

import brinjal320w from "../assets/products/brinjal-320.webp";
import brinjal480w from "../assets/products/brinjal-480.webp";
import brinjal640w from "../assets/products/brinjal-640.webp";
import brinjal800w from "../assets/products/brinjal-800.webp";
import brinjal320j from "../assets/products/brinjal-320.jpg";
import brinjal480j from "../assets/products/brinjal-480.jpg";
import brinjal640j from "../assets/products/brinjal-640.jpg";
import brinjal800j from "../assets/products/brinjal-800.jpg";

import drumstick320w from "../assets/products/drumstick-320.webp";
import drumstick480w from "../assets/products/drumstick-480.webp";
import drumstick640w from "../assets/products/drumstick-640.webp";
import drumstick800w from "../assets/products/drumstick-800.webp";
import drumstick320j from "../assets/products/drumstick-320.jpg";
import drumstick480j from "../assets/products/drumstick-480.jpg";
import drumstick640j from "../assets/products/drumstick-640.jpg";
import drumstick800j from "../assets/products/drumstick-800.jpg";

import turmeric320w from "../assets/products/turmeric-320.webp";
import turmeric480w from "../assets/products/turmeric-480.webp";
import turmeric640w from "../assets/products/turmeric-640.webp";
import turmeric800w from "../assets/products/turmeric-800.webp";
import turmeric320j from "../assets/products/turmeric-320.jpg";
import turmeric480j from "../assets/products/turmeric-480.jpg";
import turmeric640j from "../assets/products/turmeric-640.jpg";
import turmeric800j from "../assets/products/turmeric-800.jpg";

import tamarind320w from "../assets/products/tamarind-320.webp";
import tamarind480w from "../assets/products/tamarind-480.webp";
import tamarind640w from "../assets/products/tamarind-640.webp";
import tamarind800w from "../assets/products/tamarind-800.webp";
import tamarind320j from "../assets/products/tamarind-320.jpg";
import tamarind480j from "../assets/products/tamarind-480.jpg";
import tamarind640j from "../assets/products/tamarind-640.jpg";
import tamarind800j from "../assets/products/tamarind-800.jpg";

export interface LocalImageSet {
  webp: { src: string; width: number }[];
  jpg: { src: string; width: number }[];
}

function buildSet(
  webp: [string, number][],
  jpg: [string, number][],
): LocalImageSet {
  return {
    webp: webp.map(([src, width]) => ({ src, width })),
    jpg: jpg.map(([src, width]) => ({ src, width })),
  };
}

export const localProductImages: Record<string, LocalImageSet> = {
  onion: buildSet(
    [
      [onion320w, 320],
      [onion480w, 480],
      [onion640w, 640],
      [onion800w, 800],
    ],
    [
      [onion320j, 320],
      [onion480j, 480],
      [onion640j, 640],
      [onion800j, 800],
    ],
  ),
  potato: buildSet(
    [
      [potato320w, 320],
      [potato480w, 480],
      [potato640w, 640],
      [potato800w, 800],
    ],
    [
      [potato320j, 320],
      [potato480j, 480],
      [potato640j, 640],
      [potato800j, 800],
    ],
  ),
  carrot: buildSet(
    [
      [carrot320w, 320],
      [carrot480w, 480],
      [carrot640w, 640],
      [carrot800w, 800],
    ],
    [
      [carrot320j, 320],
      [carrot480j, 480],
      [carrot640j, 640],
      [carrot800j, 800],
    ],
  ),
  tomato: buildSet(
    [
      [tomato320w, 320],
      [tomato480w, 480],
      [tomato640w, 640],
      [tomato800w, 800],
    ],
    [
      [tomato320j, 320],
      [tomato480j, 480],
      [tomato640j, 640],
      [tomato800j, 800],
    ],
  ),
  okra: buildSet(
    [
      [okra320w, 320],
      [okra480w, 480],
      [okra640w, 640],
      [okra800w, 800],
    ],
    [
      [okra320j, 320],
      [okra480j, 480],
      [okra640j, 640],
      [okra800j, 800],
    ],
  ),
  brinjal: buildSet(
    [
      [brinjal320w, 320],
      [brinjal480w, 480],
      [brinjal640w, 640],
      [brinjal800w, 800],
    ],
    [
      [brinjal320j, 320],
      [brinjal480j, 480],
      [brinjal640j, 640],
      [brinjal800j, 800],
    ],
  ),
  drumstick: buildSet(
    [
      [drumstick320w, 320],
      [drumstick480w, 480],
      [drumstick640w, 640],
      [drumstick800w, 800],
    ],
    [
      [drumstick320j, 320],
      [drumstick480j, 480],
      [drumstick640j, 640],
      [drumstick800j, 800],
    ],
  ),
  turmeric: buildSet(
    [
      [turmeric320w, 320],
      [turmeric480w, 480],
      [turmeric640w, 640],
      [turmeric800w, 800],
    ],
    [
      [turmeric320j, 320],
      [turmeric480j, 480],
      [turmeric640j, 640],
      [turmeric800j, 800],
    ],
  ),
  tamarind: buildSet(
    [
      [tamarind320w, 320],
      [tamarind480w, 480],
      [tamarind640w, 640],
      [tamarind800w, 800],
    ],
    [
      [tamarind320j, 320],
      [tamarind480j, 480],
      [tamarind640j, 640],
      [tamarind800j, 800],
    ],
  ),
};
