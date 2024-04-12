"use client";
import React, { useEffect, useState } from "react";

export default function Design(): JSX.Element {
  const [pathLength, setPathLength] = useState(0);
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
    const canvasWidth = window.innerWidth - 20;
    const canvasHeight = window.innerHeight - 20;
    canvas.width = canvasWidth * scale;
    canvas.height = canvasHeight * scale;
    canvas.style.width = canvasWidth + "px";
    canvas.style.height = canvasHeight + "px";
    ctx.scale(scale, scale);

    const wordCount = words.length;

    // Predefined opacity values
    const predefinedOpacities = [0.99, 0.98, 0.07, 0.1, 0.095];

    const animatePathLength = () => {
      setPathLength((prevPathLength) => prevPathLength + 1);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pathLengthOffset =
        ((currentWordIndex + 0.5) * canvas.width) / 2 / wordCount;

      ctx.beginPath();
      for (let i = 0; i < wordCount; i++) {
        const currentWord = words[i];
        const textWidth = ctx.measureText(currentWord).width;

        const rectX =
          ((i + 0.5) * canvas.width) / 2 / wordCount - textWidth / 2 - 5;
        const rectY = 28;
        const rectWidth = textWidth + 10;
        const rectHeight = 30;

        if (i === currentWordIndex) {
          ctx.fillStyle = "rgba(255, 204, 0, 1)";
          i === 0
            ? ctx.roundRect(rectX - 5, rectY, 2 * rectWidth, rectHeight, 5)
            : ctx.roundRect(rectX, rectY, rectWidth, rectHeight, 5);
          ctx.fill();
        }

        ctx.moveTo(pathLengthOffset, 50);
        ctx.lineTo(
          ((i + 0.5) * canvas.width) / 2 / wordCount,
          window.innerHeight - 60
        );

        // Randomly select opacity from predefined values
        const randomOpacity =
          predefinedOpacities[
            Math.floor(Math.random() * predefinedOpacities.length)
          ];
        console.log(randomOpacity);
        ctx.strokeStyle = `rgba(255, 204, 0, ${
          Math.min(Math.random(), Math.random(), randomOpacity) *
          Math.min(Math.random(), Math.random())
        })`;
        ctx.stroke();

        ctx.font = "20px Arial";
        ctx.fillStyle = i === currentWordIndex ? "black" : "rgb(200, 200, 200)";
        ctx.fillText(
          currentWord,
          ((i + 0.5) * canvas.width) / 2 / wordCount - textWidth / 2,
          50
        );

        ctx.fillStyle = "rgb(200, 200, 200)";
        ctx.fillText(
          currentWord,
          ((i + 0.5) * canvas.width) / 2 / wordCount - textWidth / 2,
          window.innerHeight - 50
        );
      }
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) =>
          prevIndex + 1 < wordCount ? prevIndex + 1 : 0
        );
        setPathLength(0);
      }, 2000);
    };

    // Start the animation
    animatePathLength();
  }, [currentWordIndex]);

  return <canvas></canvas>;
}
