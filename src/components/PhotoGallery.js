import React, { useState } from 'react';
import { FaHeart, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([
    {
      id: 1,
      url: 'https://i.pinimg.com/736x/1b/c6/06/1bc606fc7cca3b0226ee419f4340b7eb.jpg',
      title: 'Our First Date',
      date: 'January 15, 2023',
      description: 'The day it all began...'
    },
    {
      id: 2,
      url: 'https://i.pinimg.com/736x/cf/b9/00/cfb9008b6dd7fe6e3caccf644ea8f763.jpg',
      title: 'Beach Sunset',
      date: 'March 20, 2023',
      description: 'Watching the sunset together'
    },
    {
      id: 3,
      url: 'https://i.pinimg.com/736x/a2/99/6b/a2996bc8b7ffdf0a823906b2810ad1c0.jpg',
      title: 'Mountain Adventure',
      date: 'June 5, 2023',
      description: 'Exploring nature together'
    },
   
  ]);

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => setSelectedPhoto(null);

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedPhoto(photos[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevPhoto = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-5xl font-bold text-center text-rose-600 mb-12">
        Memory Card
      </h2>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openLightbox(photo, index)}
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 rounded-3xl">
              <div className="text-white">
                <h3 className="text-xl font-semibold">{photo.title}</h3>
                <p className="text-sm opacity-90">{photo.date}</p>
              </div>
            </div>
            <div className="absolute top-3 right-3">
              <FaHeart className="text-rose-500 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-3xl z-10 hover:text-rose-500 transition-colors"
          >
            <FaTimes />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-5 text-white text-3xl z-10 bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-5 text-white text-3xl z-10 bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
          >
            <FaChevronRight />
          </button>

          <div className="flex flex-col items-center justify-center">
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="rounded-2xl shadow-2xl max-h-[80vh] object-contain"
            />
            <div className="text-white mt-6 text-center">
              <h3 className="text-3xl font-bold">{selectedPhoto.title}</h3>
              <p className="text-lg opacity-90">{selectedPhoto.date}</p>
              <p className="mt-2 opacity-80">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
