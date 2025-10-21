import React from 'react';
import { FaQuoteLeft, FaHeart } from 'react-icons/fa';

const LoveStory = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-romantic text-center text-romantic-rose mb-12">
        Our Love Story
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <FaQuoteLeft className="text-romantic-rose text-3xl mx-auto mb-4" />
          <p className="text-xl text-gray-700 italic mb-4">
            "In your smile, I see something more beautiful than the stars."
          </p>
          <div className="flex items-center justify-center space-x-4">
            <FaHeart className="text-romantic-rose animate-pulse" />
            <span className="text-gray-600">Our journey together</span>
            <FaHeart className="text-romantic-rose animate-pulse" />
          </div>
        </div>

        {/* Story Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-romantic text-romantic-rose mb-4">How We Met</h3>
            <p className="text-gray-600 leading-relaxed">
              It was a beautiful day when our paths crossed for the first time. 
              The moment we met, something special sparked between us. 
              Little did we know that this chance encounter would blossom into a beautiful love story.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-romantic text-romantic-rose mb-4">First Date</h3>
            <p className="text-gray-600 leading-relaxed">
              Our first date was magical. We talked for hours, laughed together, 
              and discovered how much we had in common. That night, we both knew 
              this was the beginning of something extraordinary.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-romantic text-romantic-rose mb-4">Special Moments</h3>
            <p className="text-gray-600 leading-relaxed">
              From sunset walks to spontaneous adventures, every moment with you 
              feels like a dream come true. Your laughter is my favorite sound, 
              and your smile brightens even the darkest days.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-romantic text-romantic-rose mb-4">Our Future</h3>
            <p className="text-gray-600 leading-relaxed">
              I look forward to creating more beautiful memories together, 
              facing challenges hand in hand, and building a future filled 
              with love, laughter, and endless happiness.
            </p>
          </div>
        </div>

        {/* Love Quote */}
        <div className="bg-gradient-to-r from-romantic-rose to-romantic-purple rounded-2xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-romantic mb-4">Forever Yours</h3>
          <p className="text-lg opacity-90">
            "I love you not only for what you are, but for what I am when I am with you."
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoveStory;