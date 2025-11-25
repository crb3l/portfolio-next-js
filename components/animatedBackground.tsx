"use client";

import { useRef, useEffect } from "react";

const AnimatedWaveBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        let animationFrame: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        window.addEventListener("mousemove", (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        });

        const draw = () => {
            const w = canvas.width;
            const h = canvas.height;

            ctx.fillStyle = "#000000"; // black background
            ctx.fillRect(0, 0, w, h);

            ctx.lineWidth = 2;
            ctx.strokeStyle = "#FFD700"; // yellow

            const time = performance.now() / 800;

            ctx.beginPath();
            for (let x = 0; x < w; x++) {
                const baseWave =
                    40 * Math.sin((x * 0.01) + time) +
                    10 * Math.sin((x * 0.05) + time * 2);

                // cursor influence
                const dist = Math.abs(mouse.current.x - x);
                const cursorWave = Math.max(80 - dist / 4, 0);

                const y = h / 2 + baseWave - cursorWave;

                x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }

            ctx.stroke();

            animationFrame = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
        />
    );
};

export default AnimatedWaveBackground;
