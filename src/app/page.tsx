// src/app/page.tsx
import StarryBackground from '../components/StarryBackground';
import Card from '../components/Card';

export default function HomePage() {
  return (
    <div className="relative text-white min-h-screen p-8">
      <StarryBackground />
      
      {/* Your existing content */}
      <h1 className="text-4xl font-bold mb-6">Image - Generation</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Image Generation Section */}
        <Card
          imageSrc="/images/MatisseLite.jpeg"
          altText="SD 1.5 models"
          title="SD 1.5 models"
          description="GenVR's Beginner level beautiful and powerful AI image generation..."
          link="https://app.genvrresearch.com/matisselite/generate"
        />
        <Card
          imageSrc="/images/MatisseXLLite.jpg"
          altText="SDXL models"
          title="SDXL models"
          description="GenVR's High Definition and HQ, AI image generation and editing toolkit."
          link="/link-to-sdxl-models"
        />
        <Card
          imageSrc="\images\MatisseXLTurbo.webp"
          altText="Flux Models"
          title="Flux Models"
          description="GenVR's fast and HQ image generation toolkit."
          link="/link-to-flux-models"
        />
      </div>

      <h1 className="text-4xl font-bold mt-12 mb-6">Image Makeover</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Image Makeover Section */}
        <Card
          imageSrc="/path-to-real-estate.jpg"
          altText="Real Estate"
          title="Real Estate"
          description="Reimagine your home interiors with our revolutionary makeover tool."
          link="/link-to-real-estate"
        />
        <Card
          imageSrc="/path-to-product.jpg"
          altText="Product"
          title="Product"
          description="Create stunning ad images of your product."
          link="/link-to-product"
        />
        <Card
          imageSrc="/path-to-photo.jpg"
          altText="Photo"
          title="Photo"
          description="Consistent photo creation toolkit by GenVR for reimaging you in stunning poses."
          link="/link-to-photo"
        />
        <Card
          imageSrc="/path-to-photo.jpg"
          altText="DeAging"
          title="DeAging"
          description="ReImagine yourself younger or older."
          link="/link-to-deaging"
        />
        <Card
          imageSrc="/path-to-photo.jpg"
          altText="Face Makeup"
          title="Face Makeup"
          description="Apply face makeup"
          link="/link-to-face-makeup"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6">Image Restoration</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Image Restoration Section */}
        <Card
          imageSrc="/path-to-image.jpg"
          altText="Face Restoration"
          title="Face Restoration"
          description="Restore faces in pics with SOTA GAN algorithms"
          link="/link-to-face-restoration"
        />
        <Card
          imageSrc="/path-to-image2.jpg"
          altText="Face Enhance"
          title="Face Enhance"
          description="Enhance face and upscale images"
          link="/link-to-face-enhance"
        />
        <Card
          imageSrc="/path-to-image3.jpg"
          altText="Style Transfer"
          title="Style Transfer"
          description="Transfer the style from one image to another image"
          link="/link-to-style-transfer"
        />
        <Card
          imageSrc="/path-to-image3.jpg"
          altText="Makeup Transfer"
          title="Makeup Transfer"
          description="Transfer the makeup from one image to another image"
          link="/link-to-makeup-transfer"
        />
        <Card
          imageSrc="/path-to-image3.jpg"
          altText="Outpainting"
          title="Outpainting"
          description="Outpaint images"
          link="/link-to-outpainting"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6">Chat (demo only)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Chat (demo only) */}
        <Card
          imageSrc="/path-to-image.jpg"
          altText="Impersonata"
          title="Impersonata"
          description="GenVR's persona toolkit for human like conversations with your favourite characters"
          link="/link-to-impersonata"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6">3D</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* 3D */}
        <Card
          imageSrc="/path-to-image.jpg"
          altText="Genorama"
          title="Genorama"
          description="GenVR's Beginner level beautiful and powerful AI image generation..."
          link="/link-to-genorama"
        />
        <Card
          imageSrc="/path-to-image2.jpg"
          altText="Gensight"
          title="Gensight"
          description="GenVR's High Definition and HQ, AI image generation and editing toolkit."
          link="/link-to-gensight"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6">Audio-Video</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Audio-Video */}
        <Card
          imageSrc="/path-to-image.jpg"
          altText="SD 1.5 models"
          title="SD 1.5 models"
          description="GenVR's Beginner level beautiful and powerful AI image generation..."
          link="/link-to-sd-1.5-models"
        />
        <Card
          imageSrc="/path-to-image2.jpg"
          altText="SDXL models"
          title="SDXL models"
          description="GenVR's High Definition and HQ, AI image generation and editing toolkit."
          link="/link-to-sdxl-models"
        />
        <Card
          imageSrc="/path-to-image3.jpg"
          altText="Flux Models"
          title="Flux Models"
          description="GenVR's fast and HQ image generation toolkit."
          link="/link-to-flux-models"
        />
        <Card
          imageSrc="/path-to-image3.jpg"
          altText="Flux Models"
          title="Flux Models"
          description="GenVR's fast and HQ image generation toolkit."
          link="/link-to-flux-models"
        />
        <Card
          imageSrc="/path-to-image3.jpg"
          altText="Flux Models"
          title="Flux Models"
          description="GenVR's fast and HQ image generation toolkit."
          link="/link-to-flux-models"
        />
      </div>
    </div>
  );
}