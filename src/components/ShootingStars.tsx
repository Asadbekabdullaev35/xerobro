import React, { useEffect, useRef, useCallback } from 'react';

interface Star {
  id: string;
  element: HTMLDivElement;
  depth: number;
  scale: number;
  duration: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  controlX1: number;
  controlY1: number;
  controlX2: number;
  controlY2: number;
}

const ShootingStars: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<Map<string, Star>>(new Map());
  const animationFrameRef = useRef<number>();
  const lastLaunchRef = useRef<number>(0);
  const cleanupTimeoutsRef = useRef<Set<NodeJS.Timeout>>(new Set());

  // Generate random Bézier curve control points for graceful paths
  const generateBezierPath = useCallback(() => {
    // Start in top-left 20% area
    const startX = Math.random() * 20;
    const startY = Math.random() * 20;
    
    // End in bottom-right 80% area
    const endX = 80 + Math.random() * 20;
    const endY = 80 + Math.random() * 20;
    
    // Control points for smooth curve with slight oscillation
    const midX = startX + (endX - startX) * 0.5;
    const midY = startY + (endY - startY) * 0.5;
    
    // Add vertical oscillation
    const oscillation = (Math.random() - 0.5) * 30;
    
    const controlX1 = midX + (Math.random() - 0.5) * 20;
    const controlY1 = midY + oscillation;
    const controlX2 = midX + (Math.random() - 0.5) * 20;
    const controlY2 = midY - oscillation * 0.5;
    
    return { startX, startY, endX, endY, controlX1, controlY1, controlX2, controlY2 };
  }, []);

  // Create CSS keyframes for Bézier path animation
  const createBezierKeyframes = useCallback((star: Star) => {
    const keyframeName = `shooting-star-${star.id}`;
    
    // Calculate intermediate points for smooth Bézier curve
    const steps = 20;
    let keyframeRules = '';
    
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const invT = 1 - t;
      
      // Cubic Bézier formula
      const x = Math.pow(invT, 3) * star.startX +
                3 * Math.pow(invT, 2) * t * star.controlX1 +
                3 * invT * Math.pow(t, 2) * star.controlX2 +
                Math.pow(t, 3) * star.endX;
                
      const y = Math.pow(invT, 3) * star.startY +
                3 * Math.pow(invT, 2) * t * star.controlY1 +
                3 * invT * Math.pow(t, 2) * star.controlY2 +
                Math.pow(t, 3) * star.endY;
      
      // Calculate rotation based on direction
      let rotation = 0;
      if (i < steps) {
        const nextT = (i + 1) / steps;
        const nextInvT = 1 - nextT;
        
        const nextX = Math.pow(nextInvT, 3) * star.startX +
                      3 * Math.pow(nextInvT, 2) * nextT * star.controlX1 +
                      3 * nextInvT * Math.pow(nextT, 2) * star.controlX2 +
                      Math.pow(nextT, 3) * star.endX;
                      
        const nextY = Math.pow(nextInvT, 3) * star.startY +
                      3 * Math.pow(nextInvT, 2) * nextT * star.controlY1 +
                      3 * nextInvT * Math.pow(nextT, 2) * star.controlY2 +
                      Math.pow(nextT, 3) * star.endY;
        
        const deltaX = nextX - x;
        const deltaY = nextY - y;
        rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      }
      
      // Opacity easing: ease-out entry, linear mid, ease-in exit
      let opacity;
      if (t < 0.1) {
        // Ease-out entry
        const localT = t / 0.1;
        opacity = star.scale * (1 - Math.pow(1 - localT, 3)) * 0.9;
      } else if (t > 0.85) {
        // Ease-in exit
        const localT = (t - 0.85) / 0.15;
        opacity = star.scale * (1 - Math.pow(localT, 2)) * 0.9;
      } else {
        // Linear mid-flight
        opacity = star.scale * 0.9;
      }
      
      const percentage = (i / steps * 100).toFixed(1);
      keyframeRules += `
        ${percentage}% {
          left: ${x}%;
          top: ${y}%;
          opacity: ${opacity};
          transform: scale(${star.scale}) rotate(${rotation}deg) translate3d(0, 0, 0);
        }
      `;
    }
    
    const keyframeCSS = `
      @keyframes ${keyframeName} {
        ${keyframeRules}
      }
    `;
    
    return { keyframeName, keyframeCSS };
  }, []);

  // Create and launch a new shooting star
  const createStar = useCallback(() => {
    if (!containerRef.current || starsRef.current.size >= 7) return;
    
    const id = `star-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const depth = Math.random();
    const scale = 0.4 + depth * 0.8; // 0.4x to 1.2x based on depth
    const duration = 1.2 + (1 - depth) * 0.6; // Deeper stars move slower (1.2-1.8s)
    
    const path = generateBezierPath();
    
    const star: Star = {
      id,
      element: document.createElement('div'),
      depth,
      scale,
      duration,
      ...path
    };
    
    // Configure star element
    star.element.className = 'shooting-star-premium';
    star.element.style.cssText = `
      position: absolute;
      width: 60px;
      height: 2px;
      opacity: 0;
      z-index: ${Math.floor(depth * 10) + 1};
      pointer-events: none;
      will-change: transform, opacity;
      transform: translate3d(0, 0, 0);
      background: linear-gradient(90deg,
        rgba(255, 255, 255, ${0.9 * scale}) 0%,
        rgba(255, 255, 255, ${0.7 * scale}) 30%,
        rgba(255, 255, 255, ${0.4 * scale}) 60%,
        transparent 100%
      );
      border-radius: 1px;
      filter: blur(${depth < 0.3 ? '0.5px' : '0px'});
      box-shadow: 
        0 0 ${4 + scale * 4}px rgba(255, 255, 255, ${0.8 * scale}),
        0 0 ${8 + scale * 8}px rgba(255, 255, 255, ${0.4 * scale}),
        0 0 ${12 + scale * 12}px rgba(255, 255, 255, ${0.2 * scale});
    `;
    
    // Add gradient trail and core glow
    star.element.innerHTML = `
      <div style="
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg,
          rgba(147, 51, 234, ${0.6 * scale}) 0%,
          rgba(59, 130, 246, ${0.4 * scale}) 50%,
          transparent 100%
        );
        transform: translateY(-50%);
        border-radius: 1px;
      "></div>
      <div style="
        position: absolute;
        top: 50%;
        left: -8px;
        width: 16px;
        height: 4px;
        background: radial-gradient(ellipse,
          rgba(255, 255, 255, ${0.9 * scale}) 0%,
          rgba(255, 255, 255, ${0.5 * scale}) 40%,
          rgba(147, 51, 234, ${0.3 * scale}) 70%,
          transparent 100%
        );
        transform: translateY(-50%);
        border-radius: 50%;
        filter: blur(1px);
      "></div>
    `;
    
    // Generate and inject keyframes
    const { keyframeName, keyframeCSS } = createBezierKeyframes(star);
    const styleElement = document.createElement('style');
    styleElement.textContent = keyframeCSS;
    document.head.appendChild(styleElement);
    
    // Apply animation
    star.element.style.animation = `${keyframeName} ${duration}s ease-out forwards`;
    
    // Add to container and tracking
    containerRef.current.appendChild(star.element);
    starsRef.current.set(id, star);
    
    // Setup cleanup
    const cleanup = () => {
      if (star.element.parentNode) {
        star.element.parentNode.removeChild(star.element);
      }
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
      starsRef.current.delete(id);
    };
    
    // Cleanup on animation end
    star.element.addEventListener('animationend', cleanup, { once: true });
    
    // Fallback cleanup
    const timeoutId = setTimeout(cleanup, duration * 1000 + 200);
    cleanupTimeoutsRef.current.add(timeoutId);
    
    setTimeout(() => {
      cleanupTimeoutsRef.current.delete(timeoutId);
    }, duration * 1000 + 200);
    
  }, [generateBezierPath, createBezierKeyframes]);

  // Animation loop for launching stars
  const animationLoop = useCallback((currentTime: number) => {
    const timeSinceLastLaunch = currentTime - lastLaunchRef.current;
    
    // Random interval between 0.8-1.5 seconds (800-1500ms)
    const nextLaunchDelay = 800 + Math.random() * 700;
    
    if (timeSinceLastLaunch >= nextLaunchDelay) {
      createStar();
      lastLaunchRef.current = currentTime;
    }
    
    animationFrameRef.current = requestAnimationFrame(animationLoop);
  }, [createStar]);

  // Initialize and cleanup
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Start with immediate stars for visual impact
    const initialDelays = [100, 400, 800, 1300, 1900];
    initialDelays.forEach(delay => {
      setTimeout(createStar, delay);
    });
    
    // Start animation loop
    lastLaunchRef.current = performance.now();
    animationFrameRef.current = requestAnimationFrame(animationLoop);
    
    return () => {
      // Cleanup animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      // Cleanup all timeouts
      cleanupTimeoutsRef.current.forEach(timeoutId => {
        clearTimeout(timeoutId);
      });
      cleanupTimeoutsRef.current.clear();
      
      // Cleanup all stars
      starsRef.current.forEach(star => {
        if (star.element.parentNode) {
          star.element.parentNode.removeChild(star.element);
        }
      });
      starsRef.current.clear();
      
      // Cleanup all injected styles
      const styles = document.querySelectorAll('style');
      styles.forEach(style => {
        if (style.textContent?.includes('shooting-star-')) {
          style.remove();
        }
      });
    };
  }, [createStar, animationLoop]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
};

export default ShootingStars;