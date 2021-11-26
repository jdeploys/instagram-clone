import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Content {
  content: string;
  tag: string;
  location: string;
}

const useWriteArticle = () => {
  const [uploadImages, setUploadImages] = useState<File[]>([]);
  const form = useForm<Content>({
    mode: 'onBlur',
    defaultValues: {
      content: '',
      tag: '',
      location: '',
    },
  });

  const getFormToContent = () => {
    const { content, tag, location } = form.getValues();
    return `${content}${tag ? `<br />${tag}` : ''}${location ? `<br />${location}` : ''}`;
  };

  return {
    uploadImages,
    setUploadImages,
    form,
    getFormToContent,
  };
};

export const WriteArticleContainer = createContainer(useWriteArticle);
