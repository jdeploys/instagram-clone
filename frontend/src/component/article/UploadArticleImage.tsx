import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Button from '@/component/button/Button';
import { WriteArticleContainer } from '@/component/article/WriteArticleContainer';

const UploadArticleImage = () => {
  const { uploadImages, setUploadImages } = WriteArticleContainer.useContainer();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUploadImages([...uploadImages, ...event.target.files]);
    }
  };

  return (
    <div>
      <Carousel showThumbs={false} dynamicHeight>
        {uploadImages.map((row, index) => (
          <div key={index} className="min-w-full">
            <img src={URL.createObjectURL(row)} width="100%" />
          </div>
        ))}
      </Carousel>
      {/* 갤러리 대신 이미지 올리기 */}
      <div>
        <input
          className="hidden"
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <Button
          className="w-full h-10"
          onClick={() => {
            fileInputRef.current?.click();
          }}
        >
          이미지 올리기
        </Button>
      </div>
    </div>
  );
};

export default UploadArticleImage;
