import React, { useState } from 'react';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import MemoryTimeline from './components/MemoryTimeline';
import LoveStory from './components/LoveStory';
import AnniversaryCounter from './components/AnniversaryCounter';

function App() {
  const [activeSection, setActiveSection] = useState('gallery');

  const renderSection = () => {
    switch (activeSection) {
      case 'gallery':
        return <PhotoGallery />;
      case 'timeline':
        return <MemoryTimeline />;
      case 'story':
        return <LoveStory />;
      default:
        return <PhotoGallery />;
    }
  };

  return (
    <div className="min-h-screen bg-romantic-pink">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {/* <AnniversaryCounter /> */}
      <main className="container mx-auto px-4 py-8">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;