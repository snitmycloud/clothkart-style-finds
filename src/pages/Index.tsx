
import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Truck, Shield, RefreshCw } from "lucide-react";

const Index = () => {
  const categories = [
    {
      id: 1,
      name: "Elegant Saris",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=400&fit=crop",
      description: "Traditional & Designer Saris"
    },
    {
      id: 2,
      name: "Kids Fashion",
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5d2?w=500&h=400&fit=crop",
      description: "Cute & Comfortable Kids Wear"
    },
    {
      id: 3,
      name: "Men's Collection",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
      description: "Stylish Men's Clothing"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Designer Silk Sari",
      price: 2499,
      originalPrice: 3299,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      name: "Boys Cotton T-Shirt",
      price: 499,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: "Men's Kurta Set",
      price: 1299,
      originalPrice: 1799,
      image: "https://images.unsplash.com/photo-1564001608542-6c17764810b3?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 234
    },
    {
      id: 4,
      name: "Banarasi Silk Sari",
      price: 3999,
      originalPrice: 5499,
      image: "https://images.unsplash.com/photo-1594736797933-d0fa2e2f4087?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 67
    },
    {
      id: 5,
      name: "Girls Party Dress",
      price: 899,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 123
    },
    {
      id: 6,
      name: "Men's Casual Shirt",
      price: 799,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 178
    }
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8 text-brand-teal" />,
      title: "Free Shipping",
      description: "On orders above ₹999"
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-teal" />,
      title: "Secure Payment",
      description: "100% secure transactions"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-brand-teal" />,
      title: "Easy Returns",
      description: "7-day return policy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-teal to-brand-orange text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-300">ClothKart</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Trendy Saris, Cute Kids Wear, Stylish Men's Wear — All in One Place!
          </p>
          <Button size="lg" className="bg-white text-brand-teal hover:bg-gray-100 text-lg px-8 py-3">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Shop Now
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600">Discover our curated collections</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">Handpicked favorites just for you</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-brand-orange to-brand-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in Style</h2>
          <p className="text-lg mb-8">Subscribe to get updates on new arrivals and exclusive offers</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-brand-teal hover:bg-gray-100 px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/lovable-uploads/809cad4e-56cc-42bc-b4eb-0ff24c286b1f.png" alt="ClothKart Logo" className="w-8 h-8 mr-2" />
                <span className="text-2xl font-bold">ClothKart</span>
              </div>
              <p className="text-gray-300">Your one-stop destination for trendy fashion.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Size Guide</a></li>
                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Saris</a></li>
                <li><a href="#" className="hover:text-white">Kids Wear</a></li>
                <li><a href="#" className="hover:text-white">Men's Wear</a></li>
                <li><a href="#" className="hover:text-white">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 ClothKart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
