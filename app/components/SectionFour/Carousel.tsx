"use client";
import React, { MutableRefObject } from "react";
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaAngleRight } from "react-icons/fa";
const items = [
  { title: "Operation", img: "/ServiceMap/Operation.jpeg" },
  { title: "Warehouse & Distribution", img: "/ServiceMap/Warehouse.jpg" },
  { title: "Campaign Planning", img: "/ServiceMap/Campaign.jpeg" },
  { title: "Data Analysis", img: "/ServiceMap/Data.jpeg" },
  { title: "Investment", img: "/ServiceMap/Investment.jpeg" },
  { title: "Product Owner", img: "/ServiceMap/Product.jpg" },
  { title: "Managing Content", img: "/ServiceMap/Managing.jpeg" },
];

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function App() {
  const [instanceRef, instanceRefSet] = React.useState<
    MutableRefObject<KeenSliderInstance | null>
  >(React.createRef());
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 2,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-14 px-4 lg:px-6">
        <div className="flex justify-end">
          <h1 className="text-3xl">
            <FaAngleRight />
          </h1>
        </div>
        <div ref={thumbnailRef} className="keen-slider thumbnail">
          <div className="keen-slider__slide-container my-12">
            {items.map((item, index) => (
              <div
                key={index}
                className={`keen-slider__slide flex items-end justify-start relative rounded-xl ${
                  index < 4
                    ? "shadow-bottom-only-mobile shadow-blue2"
                    : "shadow-bottom-only-mobile shadow-gray-900"
                }
              }`}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1 className="text-white ml-4 font-bold text-2xl mb-4 z-10">
                  {item.title}
                </h1>
                <div className="bg-black absolute w-full h-full z-0 opacity-30"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .keen-slider__slide-container {
          display: flex;
        }
        .keen-slider__slide {
            height: 300px;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
