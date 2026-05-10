'use client';

import React, { useEffect } from 'react';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  useEffect(() => {
    // Disable right-click functionality
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };
    
    document.addEventListener('contextmenu', handleContextMenu);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* 3D Robot Background */}
      <InteractiveRobotSpline
        scene={ROBOT_SCENE_URL}
        className="absolute inset-0 z-0" 
      />

      {/* Back to Home Button - Top Left */}
      <div className="absolute top-8 left-8 z-10">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <style jsx global>{`
        /* Custom text selection style - white background, black text */
        ::selection {
          background-color: #ffffff;
          color: #000000;
        }

        ::-moz-selection {
          background-color: #ffffff;
          color: #000000;
        }
      `}</style>
    </div>
  );
}
