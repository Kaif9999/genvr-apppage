'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  speed: number;
  angle: number;
  color: string;
  rotationSpeed: number;
}

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Star[] = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];

    // Increase the number of stars to 500
    for (let i = 0; i < 500; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * Math.min(canvas.width, canvas.height) / 2;
      stars.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        radius: Math.random() * 2 + 1,
        alpha: Math.random(),
        speed: (Math.random() * 0.5 + 0.1) * (Math.random() < 0.5 ? 1 : -1),
        angle: angle,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotationSpeed: (Math.random() * 0.002 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
      });
    }

    function animate() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0c1445';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      stars.forEach(star => {
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `${star.color}${Math.floor(star.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx!.fill();

        // Change alpha (twinkling effect)
        star.alpha += Math.random() * 0.05 - 0.025;
        star.alpha = Math.max(0, Math.min(1, star.alpha));

        // Rotate around center
        star.angle += star.rotationSpeed;
        const distance = Math.sqrt(Math.pow(star.x - centerX, 2) + Math.pow(star.y - centerY, 2));
        star.x = centerX + Math.cos(star.angle) * distance;
        star.y = centerY + Math.sin(star.angle) * distance;

        // Move in current direction
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        // Bounce off edges
        if (star.x < 0 || star.x > canvas!.width) star.speed *= -1;
        if (star.y < 0 || star.y > canvas!.height) star.speed *= -1;

        // Simulate simple collisions
        stars.forEach(otherStar => {
          if (star !== otherStar) {
            const dx = star.x - otherStar.x;
            const dy = star.y - otherStar.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < star.radius + otherStar.radius) {
              star.speed *= -1;
              otherStar.speed *= -1;
            }
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default StarryBackground;
