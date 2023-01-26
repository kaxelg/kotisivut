import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image";
import dia1 from "/public/Dia1.png";
import dia2 from "/public/Dia2.png";
import dia3 from "/public/Dia3.png";
import dia4 from "/public/Dia4.png";
import dia5 from "/public/Dia5.png";
import dia6 from "/public/Dia6.png";
import dia7 from "/public/Dia7.png";
import dia8 from "/public/Dia8.png";


function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default function App() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <div className="h-screen snap-center flex items-center">
        <div>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide flex items-center justify-center">
                    <Image src={dia1} alt={"dia"} unoptimized={false}></Image>
                </div>
                <div className="keen-slider__slide flex items-center justify-center">
                    <Image src={dia2} alt={"dia"} ></Image>
                </div>
                <div className="keen-slider__slide flex items-center justify-center">
                    <Image src={dia3} alt={"dia"}></Image>
                </div>
                <div className="keen-slider__slide flex items-center justify-center">
                    <Image src={dia4} alt={"dia"}></Image>
                </div>
                <div className="keen-slider__slide flex items-center justify-center">
                    <Image src={dia5} alt={"dia"}></Image>
                </div>
                <div className="keen-slider__slide flex items-center justify-center">
                    <Image src={dia6} alt={"dia"}></Image>
                </div>
                <div className="keen-slider__slide flex items-center justify-center">
                    <Image src={dia7} alt={"dia"}></Image>
                </div>
                <div className="keen-slider__slide flex items-center justify-center">
                    <Image src={dia8} alt={"dia"}></Image>
                </div>

            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail">
            <div className="keen-slider__slide mt-10">
                    <Image src={dia1} alt={"dia"}></Image>
                </div>
                <div className="keen-slider__slide mt-10">
                    <Image src={dia2} alt={"dia"}></Image>
                </div>
                <div className="keen-slider__slide mt-10">
                    <Image src={dia3} alt={"dia"}></Image>
                </div>
                <div className="keen-slider__slide mt-10">
                    <Image src={dia4} alt={"dia"}></Image>
                </div>
                <div className="keen-slider__slide mt-10">
                    <Image src={dia5} alt={"dia"}></Image>
                </div>
                <div className="keen-slider__slide mt-10">
                    <Image src={dia6} alt={"dia"}></Image>
                </div>
                <div className="keen-slider__slide mt-10">
                    <Image src={dia7} alt={"dia"}></Image>
                </div>
                <div className="keen-slider__slide mt-10">
                    <Image src={dia8} alt={"dia"}></Image>
                </div>
            </div>
        </div>
    </div>
  )
}