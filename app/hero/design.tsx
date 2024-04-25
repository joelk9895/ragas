"use client";
import React, { useEffect, useState } from "react";

export default function Design(): JSX.Element {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Canvas context is not available");
      return;
    }

    const sentence =
      "building the opensource standard for evaluating LLM applications";
    const words = sentence.split(" ");

    const scale = window.devicePixelRatio || 1;
    const canvasWidth = window.outerWidth;
    const canvasHeight = window.outerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    // canvas.style.width = canvasWidth + "px";
    // canvas.style.height = canvasHeight + "px";
    // ctx.scale(scale, scale);

    const wordCount = words.length;

    // Predefined opacity values
    const predefinedOpacities = [0.8, 0.58, 0.7, 0.34, 0.95];

    const animatePathLength = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pathLengthOffset =
        ((currentWordIndex + 0.5) * canvas.width) / wordCount;

      ctx.beginPath();
      for (let i = 0; i < wordCount; i++) {
        const currentWord = words[i];
        const textWidth = ctx.measureText(currentWord).width;

        var rectX = ((i + 0.5) * canvas.width) / wordCount - textWidth / 2 - 5;
        const rectY = 28;
        const rectWidth = textWidth + 10;
        const rectHeight = 30;

        if (window.innerWidth < 720) {
          rectX = ((i * canvas.height) / 2 / wordCount) * 0.6 + 32;
          if (i === currentWordIndex) {
            ctx.beginPath();
            ctx.fillStyle = "rgba(255, 204, 0, 1)";
            i === 0
              ? ctx.roundRect(7, rectX, rectWidth, rectHeight, 5)
              : ctx.roundRect(7, rectX, rectWidth, rectHeight, 5);
            ctx.fill();
            ctx.closePath();
          }
        } else {
          if (i === currentWordIndex) {
            ctx.beginPath();
            ctx.fillStyle = "rgba(255, 204, 0, 1)";
            i === 0
              ? ctx.roundRect(rectX - 5, rectY, 2 * rectWidth, rectHeight, 5)
              : ctx.roundRect(rectX, rectY, rectWidth, rectHeight, 5);
            ctx.fill();
            ctx.closePath();
          }
        }

        if (window.innerWidth < 720) {
          ctx.moveTo(20, pathLengthOffset + 10);
          ctx.lineTo(
            window.innerWidth - textWidth,
            ((i * canvas.height) / 2 / wordCount) * 0.6 + 50
          );
        } else {
          ctx.moveTo(pathLengthOffset, 50);
          ctx.lineTo(
            ((i + 0.5) * canvas.width) / wordCount,
            window.innerHeight - 10
          );
        }
        // Randomly select opacity from predefined values
        const randomOpacity =
          predefinedOpacities[
            Math.floor(Math.random() * predefinedOpacities.length)
          ];
        const opacity =
          Math.min(Math.random(), randomOpacity) *
          Math.min(randomOpacity, Math.random());
        ctx.strokeStyle = `rgba(255, 204, 0, ${opacity})`;
        ctx.stroke();

        window.innerWidth < 720
          ? (ctx.font = "10px Satoshi-Regular")
          : (ctx.font = "20px Satoshi-Regular");
        ctx.fillStyle = i === currentWordIndex ? "black" : "rgb(200, 200, 200)";
        window.innerWidth < 720
          ? ctx.fillText(
              currentWord,

              10,
              ((i * canvas.height) / 2 / wordCount) * 0.6 + 50
            )
          : ctx.fillText(
              currentWord,
              ((i + 0.5) * canvas.width) / wordCount - textWidth / 2,
              50
            );

        const currentWords = words[i];
        var rectX2 = 0;
        rectX2 =
          window.innerWidth < 720
            ? ((i * canvas.height) / 2 / wordCount) * 0.6 + 32
            : ((i + 0.5) * canvas.width) / wordCount - textWidth / 2 - 5;
        const rectY2 = window.innerHeight - 20;
        const rectWidth2 = textWidth + 10;
        const rectHeight2 = 30;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 204, 0, ${opacity})`;
        ctx.strokeStyle = `rgba(255, 204, 0, ${opacity})`;
        if (window.innerWidth < 720) {
          i == 0
            ? ctx.roundRect(
                window.innerWidth - textWidth - 15,
                rectX2 - 5,
                2 * rectWidth2,
                rectHeight2,
                5
              )
            : ctx.roundRect(
                window.innerWidth - textWidth - 15,
                rectX2,
                rectWidth2,
                rectHeight2,
                5
              );
          ctx.fill();
        } else {
          i == 0
            ? ctx.roundRect(rectX2 - 5, rectY2, 2 * rectWidth2, rectHeight2, 5)
            : ctx.roundRect(rectX2, rectY2, rectWidth2, rectHeight2, 5);
          ctx.fill();
        }
        ctx.closePath();

        window.innerWidth < 720
          ? (ctx.font = "10px Satoshi-Regular")
          : (ctx.font = "20px Satoshi-Regular");
        if (opacity > 0.7) {
          ctx.fillStyle = "rgb(10,10,10)";
        } else {
          ctx.fillStyle = "rgb(256, 256, 256)";
        }
        window.innerWidth < 720
          ? ctx.fillText(
              currentWord,

              window.innerWidth - textWidth - 10,
              ((i * canvas.height) / 2 / wordCount) * 0.6 + 50
            )
          : ctx.fillText(
              currentWords,
              ((i + 0.5) * canvas.width) / wordCount - textWidth / 2,
              window.innerHeight
            );
      }

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) =>
          prevIndex + 1 < wordCount ? prevIndex + 1 : 0
        );
      }, 1400);
    };

    // Start the animation
    animatePathLength();
  }, [currentWordIndex]);

  return <canvas className="w-screen h-screen"></canvas>;
}
