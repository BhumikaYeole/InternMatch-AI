"use client"

import Footer from "@/components/Footer";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock, 
  Star,
  CheckCircle,
  Building2,
  Briefcase,
  UserCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Employers = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Access Top Talent",
      description: "Connect with pre-screened, motivated students from leading universities worldwide."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Targeted Recruitment",
      description: "Use advanced filters to find candidates that match your specific requirements."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Boost Your Pipeline",
      description: "Build a strong talent pipeline with interns who can become full-time employees."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Verified Profiles",
      description: "All student profiles are verified with academic credentials and portfolio reviews."
    }
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Quick Posting",
      description: "Post internship opportunities in under 5 minutes"
    },
    {
      icon: <UserCheck className="h-6 w-6 text-primary" />,
      title: "Smart Matching",
      description: "AI-powered candidate recommendations based on your requirements"
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Quality Candidates",
      description: "Access to top-performing students from premier institutions"
    },
    {
      icon: <Building2 className="h-6 w-6 text-primary" />,
      title: "Company Branding",
      description: "Showcase your company culture and attract the right talent"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Students" },
    { number: "95%", label: "Match Success Rate" },
    { number: "500+", label: "Partner Companies" },
    { number: "48hrs", label: "Average Response Time" }
  ];

  return (
    <div className="min-h-screen bg-background">
        <Navbar/>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              Hire Tomorrow's Leaders Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with exceptional students and build your future workforce. 
              Post internships, discover talent, and grow your team with InternHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-6 text-lg bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary/90 transition">
                <Briefcase className="mr-2 h-5 w-5" />
                Post Your First Internship
              </button>
              <button className="px-8 py-6 text-lg border rounded-lg hover:bg-muted transition">
                Browse Talent Pool
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Why Top Companies Choose InternHub
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join industry leaders who trust us to find exceptional intern talent
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl border bg-card text-center hover:shadow-lg transition"
              >
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Everything You Need to Hire Great Interns
            </h2>
            <p className="text-xl text-muted-foreground">
              Powerful tools designed to streamline your recruitment process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-6 bg-card rounded-lg border"
              >
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Start hiring exceptional interns in minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {["Post Your Internship", "Review Applications", "Hire & Onboard"].map((title, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-muted-foreground">
                  {idx === 0 && "Create a detailed job posting with requirements, benefits, and company information."}
                  {idx === 1 && "Browse qualified candidates and use our smart filters to find the perfect match."}
                  {idx === 2 && "Connect with your chosen interns and start building your future workforce."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Next Intern?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of companies already using InternHub to build their teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-6 text-lg bg-primary text-white rounded-lg hover:bg-primary/90 transition">
              Start Hiring Today
            </button>
            <button className="px-8 py-6 text-lg border rounded-lg hover:bg-muted transition">
              Schedule a Demo
            </button>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-primary mr-2" />
              Free to post
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-primary mr-2" />
              No setup fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-primary mr-2" />
              24/7 support
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Employers;
