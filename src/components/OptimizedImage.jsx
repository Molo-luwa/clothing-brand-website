import React, { useState, useEffect, useRef } from 'react';

const OptimizedImage = ({ src, alt, className, loading = "lazy", onLoad }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Create image with optimized srcset
          const img = new Image();
          
          img.onload = () => {
            setImageSrc(src);
            setIsLoading(false);
            if (onLoad) onLoad();
          };
          
          img.onerror = () => {
            setImageSrc(src);
            setIsLoading(false);
          };
          
          // Load the image
          img.src = src;
          
          // Stop observing
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '50px' // Start loading 50px before image enters viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, onLoad]);

  return (
    <img
      ref={imgRef}
      src={imageSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23000" width="400" height="400"/%3E%3C/svg%3E'}
      alt={alt}
      className={`${className} ${isLoading ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}
      loading={loading}
    />
  );
};

export default OptimizedImage;
