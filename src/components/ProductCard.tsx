
import { Button } from "@/components/ui/button";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
          {discountPercentage}% OFF
        </div>
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <Heart
            className={`h-5 w-5 transition-colors duration-300 ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>
        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold py-2 rounded-full">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Quick Add
          </Button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-brand-teal transition-colors duration-300">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700 ml-1">
              {product.rating}
            </span>
          </div>
          <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-brand-teal">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
