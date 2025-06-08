import React from "react";
import { ChevronRight, Truck, Calendar, Shield, Check } from "lucide-react";
import type { Skip } from "../types/skip";

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  const totalPrice =
    skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        isSelected ? "ring-4 ring-white ring-opacity-50 scale-105" : ""
      }`}
      onClick={onSelect}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-5" />

      {/* Glowing effect for selected card */}
      {isSelected && (
        <div className="absolute inset-0 bg-white opacity-5 animate-pulse" />
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Top badges */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 text-white backdrop-blur-sm">
              {skip.hire_period_days} Days
            </span>
            {skip.size >= 12 && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                Popular
              </span>
            )}
          </div>
          {skip.allowed_on_road && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500 bg-opacity-20">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-400">Road OK</span>
            </div>
          )}
        </div>

        {/* Skip Visual */}
        <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Truck className="w-32 h-32 text-gray-500 transform -rotate-12" />
              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-10 rounded-full blur-xl" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <span className="text-6xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {skip.size}
            </span>
            <span className="text-xl ml-2 text-gray-300">Yard</span>
          </div>
          {!skip.allowed_on_road && (
            <div className="absolute top-4 right-4 bg-orange-500 bg-opacity-80 px-2 py-1 rounded-full">
              <span className="text-xs text-white font-medium">
                Off Road Only
              </span>
            </div>
          )}
        </div>

        {/* Title and Description */}
        <h3 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {skip.size} Yard Skip
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {skip.size <= 6
            ? "Ideal for household clear-outs and small DIY projects"
            : skip.size <= 12
            ? "Perfect for home renovations and garden landscaping"
            : "Built for major construction and commercial projects"}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center text-gray-300 text-xs bg-white bg-opacity-5 rounded-lg p-2">
            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
            <span>{skip.hire_period_days} days</span>
          </div>
          <div className="flex items-center text-gray-300 text-xs bg-white bg-opacity-5 rounded-lg p-2">
            <Truck className="w-4 h-4 mr-2 text-gray-400" />
            <span>Free delivery</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-end justify-between pt-4 border-t border-gray-800">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider">
              Total price
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-gray-400 text-lg">£</span>
              <span className="text-4xl font-black text-white">
                {totalPrice.toFixed(0)}
              </span>
            </div>
          </div>
          <button className="group px-6 py-3 bg-gradient-to-r from-white to-gray-200 text-black rounded-full font-bold flex items-center gap-2 hover:from-gray-200 hover:to-white transition-all duration-300 shadow-lg hover:shadow-xl">
            <span>Select</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Success indicator */}
        {isSelected && (
          <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SkipCard;
