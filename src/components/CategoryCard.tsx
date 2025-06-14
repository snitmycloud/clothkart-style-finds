
import { Button } from "@/components/ui/button";

interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="aspect-[4/3] relative">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
          <p className="text-sm mb-4 opacity-90">{category.description}</p>
          <Button 
            className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform group-hover:scale-105"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
