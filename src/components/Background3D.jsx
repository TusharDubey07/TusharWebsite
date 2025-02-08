import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create animated lines
    const createLines = () => {
      const lines = [];
      const lineCount = 50;
      const points = 100;
      const amplitude = 1;
      const frequency = 0.02;

      for (let i = 0; i < lineCount; i++) {
        const geometry = new THREE.BufferGeometry();
        const linePoints = [];
        
        for (let j = 0; j < points; j++) {
          const x = (j / points) * 10 - 5;
          const y = Math.sin(x * frequency) * amplitude;
          const z = (i / lineCount) * 2 - 1;
          linePoints.push(x, y, z);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
        
        const material = new THREE.LineBasicMaterial({
          color: new THREE.Color().setHSL(0.6, 0.8, 0.5 + i / lineCount * 0.2),
          transparent: true,
          opacity: 0.3,
        });

        const line = new THREE.Line(geometry, material);
        lines.push({ line, initialPoints: [...linePoints] });
        scene.add(line);
      }

      return lines;
    };

    // Create floating particles
    const createParticles = () => {
      const geometry = new THREE.BufferGeometry();
      const particleCount = 200;
      const positions = new Float32Array(particleCount * 3);
      const velocities = [];

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = Math.random() * 10 - 5;
        positions[i + 1] = Math.random() * 6 - 3;
        positions[i + 2] = Math.random() * 4 - 2;

        velocities.push({
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01,
        });
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x60A5FA,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });

      const points = new THREE.Points(geometry, material);
      return { points, velocities };
    };

    const lines = createLines();
    const particles = createParticles();
    camera.position.z = 5;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Animate lines
      lines.forEach((lineObj, index) => {
        const positions = lineObj.line.geometry.attributes.position.array;
        const initialPoints = lineObj.initialPoints;

        for (let i = 0; i < positions.length; i += 3) {
          const x = initialPoints[i];
          const phase = time + index * 0.1;
          
          // Create wave effect
          positions[i + 1] = Math.sin(x + phase) * (1 + Math.sin(phase * 0.5) * 0.5);
          
          // Add mouse interaction
          const distanceToMouse = Math.abs(x - mouseX * 5);
          if (distanceToMouse < 1) {
            positions[i + 1] += (1 - distanceToMouse) * mouseY;
          }
        }

        lineObj.line.geometry.attributes.position.needsUpdate = true;
        
        // Subtle rotation based on mouse position
        lineObj.line.rotation.x = mouseY * 0.1;
        lineObj.line.rotation.y = mouseX * 0.1;
      });

      // Animate particles
      const positions = particles.points.geometry.attributes.position.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const index = i / 3;
        
        positions[i] += particles.velocities[index].x;
        positions[i + 1] += particles.velocities[index].y;
        positions[i + 2] += particles.velocities[index].z;

        // Wrap particles around when they go out of bounds
        if (Math.abs(positions[i]) > 5) positions[i] *= -0.9;
        if (Math.abs(positions[i + 1]) > 3) positions[i + 1] *= -0.9;
        if (Math.abs(positions[i + 2]) > 2) positions[i + 2] *= -0.9;

        // Add wave motion
        positions[i + 1] += Math.sin(time + positions[i] * 0.5) * 0.003;
      }

      particles.points.geometry.attributes.position.needsUpdate = true;
      particles.points.rotation.y = time * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      
      lines.forEach(lineObj => {
        lineObj.line.geometry.dispose();
        lineObj.line.material.dispose();
      });
      particles.points.geometry.dispose();
      particles.points.material.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/90 via-[#0B1120]/80 to-[#0B1120]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5" />
    </div>
  );
};

export default Background3D;