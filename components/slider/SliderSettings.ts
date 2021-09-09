import { ResponsiveType } from "react-multi-carousel";

export const responsiveSettings = function (itemCounter:number,type?: string) {
  let responsive:ResponsiveType;
  if (type == "reviews") {
    responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: itemCounter>4 ? 4 : itemCounter,
      },
      tablet: {
        breakpoint: { max: 1024, min: 800 },
        items: itemCounter>3 ? 3 : itemCounter,
      },
      bigMobile: {
        breakpoint: { max: 800, min: 540 },
        items: itemCounter>2 ? 2 : itemCounter,
      },
      mobile: {
        breakpoint: { max: 540, min: 0 },
        items: 1,
      },
    };
  } else {
    responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1800 },
        items: itemCounter>7 ? 7 : itemCounter,
      },
      largeDesktop: {
        breakpoint: { max: 1800, min: 1400 },
        items: itemCounter>5 ? 5 : itemCounter,
      },
      desktop: {
        breakpoint: { max: 1400, min: 1024 },
        items: itemCounter>4 ? 4 : itemCounter,
      },
      tablet: {
        breakpoint: { max: 1024, min: 800 },
        items: itemCounter>3 ? 3 : itemCounter,
      },
      bigMobile: {
        breakpoint: { max: 800, min: 540 },
        items: itemCounter>2 ? 2 : itemCounter,
      },
      mobile: {
        breakpoint: { max: 540, min: 0 },
        items: 1,
      },
    };
  }
  return responsive;
};
