import React from "react"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";
import dia1 from "/public/Dia.jpeg";
import dia2 from "/public/Dia2.jpeg";
import dia3 from "/public/Dia3.jpeg";
import dia4 from "/public/Dia4.jpeg";
import dia5 from "/public/Dia5.jpeg";
import dia6 from "/public/Dia6.jpeg";
import dia7 from "/public/Dia7.jpeg";
import dia8 from "/public/Dia8.jpeg";

function CaseStudy() {
    return (
        <div className="h-screen snap-center flex justify-center items-center">
            <div>
                <Carousel className="flex items-center justify-center" width="80%" showThumbs={false}>
                    <div>
                        <Image src={dia1} alt={"Dia"} unoptimized={true}></Image>
                    </div>
                    <div>
                        <Image src={dia2} alt={"Dia"} unoptimized={true}></Image>
                    </div>
                    <div>
                        <Image src={dia3} alt={"Dia"} unoptimized={true}></Image>
                    </div>
                    <div>
                        <Image src={dia4} alt={"Dia"} unoptimized={true}></Image>
                    </div>
                    <div>
                        <Image src={dia5} alt={"Dia"} unoptimized={true}></Image>
                    </div>
                    <div>
                        <Image src={dia6} alt={"Dia"} unoptimized={true}></Image>
                    </div>
                    <div>
                        <Image src={dia7} alt={"Dia"} unoptimized={true}></Image>
                    </div>
                    <div>
                        <Image src={dia8} alt={"Dia"} unoptimized={true}></Image>
                    </div>
                </Carousel>
                <h3 className="text-center">*sorry for bad quality it is a bug I am trying to fix</h3>
            </div>
        </div>
    )
} 

export default CaseStudy