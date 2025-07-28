import { Image } from '@fluentui/react-components';
import { ImageProhibitedRegular } from '@fluentui/react-icons';
import { useRef, useState } from 'react';
import { useDetailStyles } from './styles';
import type { DishImageProps } from '../../types/DishImage';

export default function DishImage({ dishName, imageUrl }: DishImageProps) {
  const styles = useDetailStyles();
  const [src, setSrc] = useState(imageUrl || '');
  const [error, setError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => fileInputRef.current?.click();
  
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSrc(URL.createObjectURL(file));
      setError(false);
    }
  };

  return (
    <div style={{ cursor: 'pointer' }} onClick={handleUpload} className={styles.dishImageContainer}>
      { !error && src ? (
          <Image
            src={src}
            alt={dishName}
            onError={()=> setError(true)}
            className={styles.dishImage}
          />
        ) : (
          <div className={styles.noImage}>
            <ImageProhibitedRegular className={styles.errorIcon} />
            <p>No Image</p>
          </div>
        )   
      }
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        hidden={true}
        onChange={onFileChange}
      />
    </div>
  );
};