import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Phone, Mail, Building2, Sparkles, Users, ArrowRight, Star, CheckCircle, Leaf, Recycle, Shield, Heart } from 'lucide-react'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      setIsVisible(prev => ({
        ...prev,
        [entry.target.id]: entry.isIntersecting
      }))
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    })

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-slate-50/20 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-400 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-105">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-blue-400 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Ryzo Cleaning
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#eco-friendly" className="text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 relative group">
                Eco-Friendly
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#work" className="text-gray-600 hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                Our Work
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Button className="bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/8 to-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100/15 to-primary/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" data-animate id="hero-text">
              <div className={`space-y-6 transition-all duration-1000 ${
                isVisible['hero-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-100/30 rounded-full border border-primary/20 backdrop-blur-sm">
                    <Star className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-primary">Premium Cleaning Services</span>
                  </div>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-50 to-green-50 rounded-full border border-emerald-200 backdrop-blur-sm">
                    <Leaf className="w-4 h-4 text-emerald-600 mr-2" />
                    <span className="text-sm font-medium text-emerald-600">Eco-Friendly</span>
                  </div>
                </div>
                <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-tight">
                  Professional
                  <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent font-medium">
                    Cleaning
                  </span>
                </h1>
                <p className="text-xl text-gray-600 font-light">Detailed & done right, naturally</p>
              </div>
              
              <p className={`text-lg text-gray-600 leading-relaxed max-w-lg transition-all duration-1000 delay-200 ${
                isVisible['hero-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                We provide reliable, high-quality cleaning services using eco-friendly products that are safe for your family, pets, and the environment. With a strong focus on sustainability and customer satisfaction, we deliver exceptional results you can trust.
              </p>
              
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-400 ${
                isVisible['hero-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90 text-white px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 group">
                  Request a Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 hover:border-primary hover:text-primary px-8 backdrop-blur-sm bg-white/50 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative" data-animate id="hero-image">
              <div className={`transition-all duration-1000 delay-600 ${
                isVisible['hero-image'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="relative aspect-[4/3] bg-gradient-to-br from-white/80 via-blue-50/30 to-white/60 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/20 shadow-2xl shadow-black/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-blue-50/20"></div>
                  <div className="w-full h-full flex items-center justify-center relative z-10">
                    <div className="text-center space-y-6">
                      <div className="relative">
                        <div className="flex items-center justify-center space-x-4">
                          <Building2 className="w-16 h-16 text-primary drop-shadow-lg" />
                          <Leaf className="w-12 h-12 text-emerald-500 drop-shadow-lg" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-emerald-500/15 rounded-full blur-xl scale-150"></div>
                      </div>
                      <p className="text-gray-700 font-medium text-lg">Clean spaces. Clean planet.</p>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-primary/30 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 left-6 w-1.5 h-1.5 bg-emerald-400/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Section */}
      <section id="eco-friendly" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-white/80 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 mb-16" data-animate id="eco-header">
            <div className={`transition-all duration-1000 ${
              isVisible['eco-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-full border border-emerald-200 mb-4">
                <Leaf className="w-5 h-5 text-emerald-600 mr-2" />
                <span className="text-emerald-700 font-medium">Environmentally Conscious</span>
              </div>
              <h2 className="text-5xl font-light bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Eco-Friendly Cleaning
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're committed to protecting your health and our planet with sustainable cleaning practices and non-toxic, biodegradable products.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Natural Products",
                description: "Plant-based, biodegradable cleaning solutions",
                color: "emerald"
              },
              {
                icon: Shield,
                title: "Safe for Family",
                description: "Non-toxic formulas safe for children and pets",
                color: "blue"
              },
              {
                icon: Recycle,
                title: "Sustainable Practices",
                description: "Eco-friendly methods and recyclable packaging",
                color: "green"
              },
              {
                icon: Heart,
                title: "Health Focused",
                description: "Improving indoor air quality and wellness",
                color: "rose"
              }
            ].map((feature, index) => (
              <div key={index} data-animate id={`eco-feature-${index}`}>
                <Card className={`border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group delay-${(index + 1) * 200} ${
                  isVisible[`eco-feature-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <CardContent className="p-6 text-center space-y-4 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-50/30 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className={`w-14 h-14 bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-50 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
                      </div>
                      <div className="space-y-2">
                        <h3 className={`text-lg font-semibold text-gray-900 group-hover:text-${feature.color}-700 transition-colors duration-300`}>
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white/80 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 mb-20" data-animate id="services-header">
            <div className={`transition-all duration-1000 ${
              isVisible['services-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-5xl font-light bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive eco-friendly cleaning solutions for every space and occasion
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Commercial Cleaning",
                description: "Professional office and commercial space cleaning services using eco-friendly products to maintain a pristine, healthy work environment.",
                gradient: "from-blue-50/50 to-white/80",
                delay: "delay-200",
                features: ["Green certified products", "HEPA filtration", "Waste reduction"]
              },
              {
                icon: Sparkles,
                title: "Event Cleaning",
                description: "Pre and post-event cleaning services with sustainable practices to ensure your venue is spotless while minimising environmental impact.",
                gradient: "from-primary/5 to-blue-50/30",
                delay: "delay-400",
                features: ["Biodegradable supplies", "Recycling programs", "Energy efficient"]
              },
              {
                icon: Users,
                title: "Residential Cleaning",
                description: "Thorough home cleaning services using natural, non-toxic products to keep your living space comfortable, healthy, and environmentally safe.",
                gradient: "from-emerald-50/40 to-white/60",
                delay: "delay-600",
                features: ["Pet & child safe", "Allergen reduction", "Natural ingredients"]
              }
            ].map((service, index) => (
              <div key={index} data-animate id={`service-${index}`}>
                <Card className={`border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group ${service.delay} ${
                  isVisible[`service-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <CardContent className="p-8 text-center space-y-6 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/15 to-blue-100/30 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center justify-center text-sm text-emerald-600">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-blue-50/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-50/15 to-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 mb-20" data-animate id="work-header">
            <div className={`transition-all duration-1000 ${
              isVisible['work-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-5xl font-light bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Our Work
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Take a look at our sustainable cleaning projects and transformations
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Green Office Space",
                icon: Building2,
                gradient: "from-gray-100/60 to-blue-50/40",
                delay: "delay-200",
                badge: "Carbon Neutral"
              },
              {
                title: "Eco-Luxury Residence",
                icon: Users,
                gradient: "from-primary/8 to-blue-100/30",
                delay: "delay-400",
                badge: "100% Natural"
              },
              {
                title: "Sustainable Event Venue",
                icon: Sparkles,
                gradient: "from-emerald-50/60 to-green-50/40",
                delay: "delay-600",
                badge: "Zero Waste"
              }
            ].map((project, index) => (
              <div key={index} data-animate id={`project-${index}`} className="group cursor-pointer">
                <div className={`transition-all duration-1000 ${project.delay} ${
                  isVisible[`project-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 relative`}>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      {project.badge}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-blue-50/20 group-hover:from-blue-50/10 group-hover:to-white/30 transition-all duration-500"></div>
                    <div className="w-full h-full flex items-center justify-center relative z-10">
                      <div className="text-center space-y-4 transform group-hover:scale-110 transition-transform duration-500">
                        <div className="relative">
                          <project.icon className="w-12 h-12 text-primary mx-auto drop-shadow-lg" />
                          <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <p className="text-gray-700 font-medium">{project.title}</p>
                        <div className="flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <span className="text-sm">View Project</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                    {/* Floating particles */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
                    <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-emerald-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-white/90 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-12" data-animate id="contact-section">
            <div className={`space-y-6 transition-all duration-1000 ${
              isVisible['contact-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-5xl font-light bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Ready to experience eco-friendly cleaning? Contact us for a customised, sustainable solution tailored to your needs.
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center transition-all duration-1000 delay-200 ${
              isVisible['contact-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <a 
                href="tel:0470334004" 
                className="flex items-center space-x-4 text-gray-700 hover:text-primary transition-all duration-300 group p-4 rounded-2xl bg-white/70 backdrop-blur-sm hover:bg-white/90 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-blue-100/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">0470 334 004</span>
              </a>
              
              <a 
                href="mailto:admin@ryzocleaning.com" 
                className="flex items-center space-x-4 text-gray-700 hover:text-primary transition-all duration-300 group p-4 rounded-2xl bg-white/70 backdrop-blur-sm hover:bg-white/90 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-blue-100/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">admin@ryzocleaning.com</span>
              </a>
            </div>
            
            <div className={`pt-8 transition-all duration-1000 delay-400 ${
              isVisible['contact-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90 text-white px-12 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group">
                Get Your Free Eco Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-white/90 via-blue-50/30 to-white/80 backdrop-blur-sm border-t border-white/20 py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-blue-50/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-400 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-105">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-blue-400 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Ryzo Cleaning
              </span>
            </div>
            <div className="text-center md:text-right space-y-2">
              <p className="text-gray-600 text-sm">
                © 2024 Ryzo Cleaning. Sustainable cleaning services you can trust.
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4 text-xs text-emerald-600">
                <span className="flex items-center">
                  <Leaf className="w-3 h-3 mr-1" />
                  Eco-Certified
                </span>
                <span className="flex items-center">
                  <Shield className="w-3 h-3 mr-1" />
                  Family Safe
                </span>
                <span className="flex items-center">
                  <Recycle className="w-3 h-3 mr-1" />
                  Carbon Neutral
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

