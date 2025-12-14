"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun, Menu, Search, ShoppingCart, Star, ArrowRight, Play, Zap, Shield, Truck } from "lucide-react";
import { useTheme } from "next-themes";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                TechVault
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium hover:text-green-400 transition-colors">Smartphones</a>
              <a href="#" className="text-sm font-medium hover:text-green-400 transition-colors">Laptops</a>
              <a href="#" className="text-sm font-medium hover:text-green-400 transition-colors">Audio</a>
              <a href="#" className="text-sm font-medium hover:text-green-400 transition-colors">Gaming</a>
              <a href="#" className="text-sm font-medium hover:text-green-400 transition-colors">Smart Home</a>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,136,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,102,255,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-green-400/50 text-green-400">
                  <Zap className="h-3 w-3 mr-1" />
                  The Future is Here
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Premium{" "}
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    Electronics
                  </span>{" "}
                  for Tomorrow
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Discover cutting-edge technology that transforms your digital lifestyle. 
                  From flagship smartphones to revolutionary smart home devices.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-border hover:bg-accent">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-muted-foreground">2-Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-muted-foreground">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm text-muted-foreground">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {/* Featured Product Cards */}
                <Card className="group hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg mb-4 flex items-center justify-center">
                      <img 
                        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bbd04178-86ff-4643-bd3f-1f7b71e25329.png" 
                        alt="Premium smartphone with titanium design and advanced camera system"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">iPhone 15 Pro Max</h3>
                    <p className="text-sm text-muted-foreground mb-3">Titanium. So strong. So light.</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">$1,199</span>
                      <Badge variant="secondary">New</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 mt-8">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg mb-4 flex items-center justify-center">
                      <img 
                        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e1bf7a60-37d4-4e37-a4ad-feadea7f505b.png" 
                        alt="Professional laptop with M3 chip in space black finish"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">MacBook Pro M3</h3>
                    <p className="text-sm text-muted-foreground mb-3">Supercharged by M3 chip</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">$1,999</span>
                      <Badge variant="secondary">Pro</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 -mt-4">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg mb-4 flex items-center justify-center">
                      <img 
                        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1dd0fd56-c2d6-4537-a02d-1ca417a02fb5.png" 
                        alt="Wireless earbuds with active noise cancelling technology"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">AirPods Pro</h3>
                    <p className="text-sm text-muted-foreground mb-3">Adaptive Audio technology</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">$249</span>
                      <Badge variant="secondary">Hot</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-2 mt-4">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg mb-4 flex items-center justify-center">
                      <img 
                        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/18450400-c1e6-4d05-afd8-5b0037d824e0.png" 
                        alt="Premium smartwatch with titanium case for adventure sports"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">Apple Watch Ultra</h3>
                    <p className="text-sm text-muted-foreground mb-3">Built for adventure</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">$799</span>
                      <Badge variant="secondary">Ultra</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories Preview */}
      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated collection of premium electronics across all major categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Smartphones", icon: "📱", count: "120+ Products" },
              { name: "Laptops", icon: "💻", count: "85+ Products" },
              { name: "Audio", icon: "🎧", count: "200+ Products" },
              { name: "Gaming", icon: "🎮", count: "150+ Products" },
              { name: "Smart Home", icon: "🏠", count: "90+ Products" }
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Preview */}
      <footer className="border-t border-border/40 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                TechVault
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Premium electronics for the digital future
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">About</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}