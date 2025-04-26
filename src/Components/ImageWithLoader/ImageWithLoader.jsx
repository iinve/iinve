import { Spinner } from "@heroui/react";
import Loader from "Components/Loader";
import Image from "next/image";
import { ProSkeleton } from "ProUI/Common/Common";
import { useState } from "react";

export default function ImageWithLoader({ src, alt, objectFit }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          colorScheme: 'dark'
        }}
        className={`antialiased dark w-full h-full`}
        >
          <ProSkeleton height={400} />  
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        onLoad={() => setIsLoading(false)}
        style={{
          objectFit: objectFit,
          borderRadius: "10px",
          transition: 'opacity 0.3s ease',
          opacity: isLoading ? 0 : 1,
        }}
      />
    </>
  );
}
