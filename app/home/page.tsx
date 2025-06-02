import { ExternalLink, MessageCircle, ShoppingBag, Users, ArrowRightLeft, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Enhanced Geometric Background */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-red-500/20 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 border border-blue-500/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-5xl space-y-16">
          {/* Header */}
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-full border border-red-500/50">
                <Image src="/logo.webp" alt="WingBoost Logo" width={80} height={80} className="rounded-full" />
              </div>
            </div>

            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-red-400 to-white bg-clip-text text-transparent tracking-wider mb-3">
                WINGBOOST
              </h1>
              <p className="text-gray-400 text-sm font-light tracking-[0.3em] uppercase">
                PREMIUM DIGITAL SERVICES PLATFORM
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Shop Card */}
            <Link
              href="https://wingboost.sellpass.io/products"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 transition-all duration-500 hover:bg-slate-800/60 hover:border-red-500/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden backdrop-blur-sm">
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="bg-gradient-to-br from-red-600/80 to-red-700/80 p-4 rounded-2xl w-16 h-16 flex items-center justify-center border border-red-500/30">
                      <ShoppingBag className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-2xl tracking-wide mb-2">SHOP</h3>
                    <p className="text-gray-400 text-sm tracking-wider uppercase">PREMIUM PRODUCTS</p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 text-xs font-mono tracking-wider uppercase">SECURE</span>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-500 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Exchange Card */}
            <Link href="https://goldmm.one/" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 transition-all duration-500 hover:bg-slate-800/60 hover:border-red-500/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden backdrop-blur-sm">
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="bg-gradient-to-br from-red-600/80 to-red-700/80 p-4 rounded-2xl w-16 h-16 flex items-center justify-center border border-red-500/30">
                      <ArrowRightLeft className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-2xl tracking-wide mb-2">EXCHANGE</h3>
                    <p className="text-gray-400 text-sm tracking-wider uppercase">MIDDLEMAN SERVICES</p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-blue-400" />
                      <span className="text-blue-400 text-xs font-mono tracking-wider uppercase">INSTANT</span>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-500 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Telegram Card */}
            <Link href="https://t.me/wingboost" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 transition-all duration-500 hover:bg-slate-800/60 hover:border-red-500/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden backdrop-blur-sm">
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative text-center">
                  {/* Icon */}
                  <div className="mb-8 flex justify-center">
                    <div className="bg-gradient-to-br from-red-600/80 to-red-700/80 p-4 rounded-2xl w-16 h-16 flex items-center justify-center border border-red-500/30">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-white font-bold text-2xl tracking-wide mb-2">TELEGRAM</h3>
                    <p className="text-gray-400 text-sm tracking-wider uppercase">SUPPORT </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Discord Card */}
            <Link href="https://discord.gg/wingboost" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 transition-all duration-500 hover:bg-slate-800/60 hover:border-red-500/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden backdrop-blur-sm">
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative text-center">
                  {/* Icon */}
                  <div className="mb-8 flex justify-center">
                    <div className="bg-gradient-to-br from-red-600/80 to-red-700/80 p-4 rounded-2xl w-16 h-16 flex items-center justify-center border border-red-500/30">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-white font-bold text-2xl tracking-wide mb-2">DISCORD</h3>
                    <p className="text-gray-400 text-sm tracking-wider uppercase">SERVER ACCESS</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-700/30">
            <p className="text-gray-500 text-xs font-mono tracking-wider">
              © 2024 WINGBOOST SYSTEMS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
