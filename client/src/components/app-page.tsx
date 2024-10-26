import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart3, DollarSign, TrendingUp } from "lucide-react";
import Spline from "@splinetool/react-spline/next";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen px-10 bg-[#0c0a09] text-[#f2f2f2] flex flex-col">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={"/logo.png"} width={120} height={120} alt="logo" />
        </Link>
        <Link href={"/sign-in"}>
          <Button
            size="sm"
            className="border-[#45d196] text-[#45d196] hover:bg-[#45d196] hover:text-[#0c0a09]"
          >
            Sign In
          </Button>
        </Link>
      </header>

      <main className="flex-grow container  px-4 py-8 sm:py-12 flex justify-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4 text-[#f2f2f2]">
              Manage Your Finances with Ease
            </h1>
            <p className="text-lg sm:text-xl text-[#a4a4a4] mb-6">
              Take control of your financial future with our powerful and
              intuitive finance management tools.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href={"/sign-up"}>
                <Button
                  size="lg"
                  className="bg-[#45d196] text-[#0c0a09] hover:bg-[#3ab780]"
                >
                  Get Started
                  <TrendingUp className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                className="border-[#45d196] text-[#45d196] hover:bg-[#45d196] hover:text-[#0c0a09]"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-[#45d196]" />
                <span className="text-sm font-medium">Advanced Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-[#45d196]" />
                <span className="text-sm font-medium">Budget Tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-[#45d196]" />
                <span className="text-sm font-medium">Investment Insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-[#45d196]" />
                <span className="text-sm font-medium">Real-time Reports</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 max-w-2xl mx-auto">
            <div className="bg-[#1e1b1b] rounded-lg aspect-square w-full flex items-center justify-center overflow-hidden">
              <Spline scene="https://prod.spline.design/gu5K42FpQhzNMrnp/scene.splinecode" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
