"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowRight, Zap } from "lucide-react"

export default function LoadingPage() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [loadingText, setLoadingText] = useState("INITIALIZING")
  const router = useRouter()

  useEffect(() => {
    const texts = ["INITIALIZING", "CONNECTING", "AUTHENTICATING", "READY"]
    let textIndex = 0

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1.2

        // Update loading text based on progress
        if (newProgress > 25 && textIndex === 0) {
          setLoadingText(texts[1])
          textIndex = 1
        } else if (newProgress > 50 && textIndex === 1) {
          setLoadingText(texts[2])
          textIndex = 2
        } else if (newProgress > 75 && textIndex === 2) {
          setLoadingText(texts[3])
          textIndex = 3
        }

        if (newProgress >= 100) {
          setIsComplete(true)
          clearInterval(interval)
          return 100
        }
        return newProgress
      })
    }, 80)

    return () => clearInterval(interval)
  }, [])

  const handleEnter = () => {
    router.push("/home")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden flex items-center justify-center">
      {/* Enhanced Geometric Background */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>

        {/* Dynamic Geometric Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="rgb(239, 68, 68)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Animated geometric paths */}
          <path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animation: "pathDraw 8s ease-in-out infinite" }}
          />
          <path
            d="M0,600 Q400,300 800,600 T1200,200"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animation: "pathDraw 10s ease-in-out infinite reverse" }}
          />
          <path
            d="M200,0 Q600,400 1000,0"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animation: "pathDraw 12s ease-in-out infinite" }}
          />
        </svg>

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500/40 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-2xl px-6">
        {/* Centered Logo */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 bg-red-500/30 rounded-full blur-2xl animate-pulse scale-150"></div>

            {/* Rotating Orbital Ring */}
            <div
              className="absolute inset-0 w-32 h-32 border-2 border-red-500/40 rounded-full"
              style={{ animation: "spin 15s linear infinite" }}
            ></div>

            {/* Secondary Ring */}
            <div
              className="absolute inset-2 w-28 h-28 border border-red-400/30 rounded-full"
              style={{ animation: "spin 25s linear infinite reverse" }}
            ></div>

            {/* Logo Container */}
            <div className="relative w-32 h-32 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-full border-2 border-red-500/60 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent animate-pulse"></div>
              <Image
                src="/logo.webp"
                alt="WingBoost Logo"
                width={80}
                height={80}
                className="relative z-10 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Brand Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-red-400 to-white bg-clip-text text-transparent tracking-wider mb-4">
            WING<span className="text-red-500">BOOST</span>
          </h1>
          <p className="text-gray-400 text-sm font-light tracking-[0.3em] uppercase">NEXT-GEN DIGITAL SERVICES</p>
        </div>

        {/* Enhanced Progress Section */}
        <div className="space-y-8">
          {/* Status Display */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400 text-sm font-mono tracking-[0.2em] uppercase">{loadingText}</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>

          {/* Advanced Progress Bar */}
          <div className="relative">
            {/* Progress Container */}
            <div className="relative w-full h-4 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-full border border-gray-700/50 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-400/20 to-red-500/10 animate-pulse"></div>

              {/* Progress Fill */}
              <div
                className="relative h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              >
                {/* Animated Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>

                {/* Moving Highlight */}
                <div
                  className="absolute top-0 right-0 w-8 h-full bg-gradient-to-r from-transparent to-white/40 blur-sm"
                  style={{ animation: "shimmer 2s ease-in-out infinite" }}
                ></div>
              </div>
            </div>

            {/* Progress Info */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs text-gray-500 font-mono tracking-wider">LOADING</span>
              <span className="text-xs text-gray-400 font-mono tracking-wider">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>

        {/* Enhanced Enter Button */}
        {isComplete && (
          <div className="flex justify-center mt-12 animate-fade-in">
            <button
              onClick={handleEnter}
              className="group relative px-10 py-4 bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 border border-red-500/50 hover:border-red-400"
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              {/* Button Content */}
              <div className="relative flex items-center space-x-3">
                <Zap className="h-5 w-5 group-hover:animate-pulse" />
                <span className="tracking-[0.1em] uppercase">Access Platform</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.4; }
          50% { transform: translateY(-15px); opacity: 1; }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes pathDraw {
          0%, 100% { stroke-dasharray: 0, 1000; }
          50% { stroke-dasharray: 1000, 0; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}
