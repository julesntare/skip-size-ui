import React, { useState, useEffect } from "react";
import { ChevronRight, AlertTriangle, Loader2 } from "lucide-react";
import SkipCard from "./components/SkipCard";
import SkipCardSkeleton from "./components/SkipCardSkeleton";
import type { Skip } from "./types/skip";
import { fetchSkipsByLocation } from "./services/api";

const App: React.FC = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [postcode] = useState("NR32");
  const [area] = useState("Lowestoft");

  // Add animation styles
  const fadeInAnimation = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  useEffect(() => {
    loadSkips();
  }, []);

  const loadSkips = async () => {
    try {
      setLoading(true);
      const data = await fetchSkipsByLocation(postcode, area);
      const sortedData = data.sort((a, b) => a.size - b.size);
      setSkips(sortedData);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching skips:", err);
      setLoading(false);
    }
  };

  const fetchSkips = async () => {
    const API_BASE_URL =
      import.meta.env.VITE_API_BASE_URL || "https://app.wewantwaste.co.uk/api";

    setError(null);
    setSelectedSkip(null);
    setSkips([]);
    setLoading(true);

    try {
      setLoading(true);
      const response = await fetch(
        `${API_BASE_URL}/skips/by-location?postcode=${postcode}&area=${area}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch skips");
      }

      const data: Skip[] = await response.json();

      // Sort by size
      const sortedData = data.sort((a, b) => a.size - b.size);
      setSkips(sortedData);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching skips:", err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Choose Your Skip Size
            </h1>
            <p className="text-gray-400 text-lg flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Loading available skips...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <SkipCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={fetchSkips}
            className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const selectedSkipData = skips.find((s) => s.id === selectedSkip);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4">
      <style>{fadeInAnimation}</style>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Choose Your Skip Size
          </h1>
          <p className="text-gray-400 text-lg">
            Select the skip size that best suits your needs
          </p>
        </div>

        {/* Skip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-32">
          {skips.map((skip, index) => (
            <div
              key={skip.id}
              style={{
                opacity: 0,
                animation: `fadeIn 0.6s ease-out ${index * 100}ms forwards`,
              }}
            >
              <SkipCard
                skip={skip}
                isSelected={selectedSkip === skip.id}
                onSelect={() => setSelectedSkip(skip.id)}
              />
            </div>
          ))}
        </div>

        {/* Selected Skip Action */}
        {selectedSkipData && (
          <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-gray-900 to-transparent p-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <p className="text-sm text-gray-400 mb-1">Selected skip</p>
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedSkipData.size} Yard Skip
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span>
                        £
                        {(
                          selectedSkipData.price_before_vat +
                          (selectedSkipData.price_before_vat *
                            selectedSkipData.vat) /
                            100
                        ).toFixed(0)}{" "}
                        total
                      </span>
                      <span>•</span>
                      <span>{selectedSkipData.hire_period_days} days hire</span>
                      {selectedSkipData.allowed_on_road && (
                        <>
                          <span>•</span>
                          <span className="text-green-400">Road permitted</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedSkip(null)}
                      className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full font-semibold transition-colors duration-200 flex items-center gap-2"
                    >
                      <ChevronRight className="w-5 h-5 rotate-180" />
                      <span>Back</span>
                    </button>
                    <button className="group px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-black rounded-full font-bold text-lg hover:from-gray-200 hover:to-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3">
                      <span>Continue</span>
                      <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
