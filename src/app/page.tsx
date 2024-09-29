// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="text-white bg-blue-900 min-h-screen p-8">
      
      <h1 className="text-4xl font-bold mb-6">Image - Generation</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Image Generation Section */}
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/home/kaif9999/genvr/frontend-genvr/public/images/MatisseLite.jpeg" alt="SD 1.5 models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">SD 1.5 models</h2>
          <p className="text-sm">GenVR's Beginner level beautiful and powerful AI image generation...</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image2.jpg" alt="SDXL models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">SDXL models</h2>
          <p className="text-sm">GenVR's High Definition and HQ, AI image generation and editing toolkit.</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image3.jpg" alt="Flux Models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Flux Models</h2>
          <p className="text-sm">GenVR's fast and HQ image generation toolkit.</p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mt-12 mb-6">Image Makeover</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Image Makeover Section */}
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-real-estate.jpg" alt="Real Estate" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Real Estate</h2>
          <p className="text-sm">Reimagine your home interiors with our revolutionary makeover tool.</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-product.jpg" alt="Product" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Product</h2>
          <p className="text-sm">Create stunning ad images of your product.</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-photo.jpg" alt="Photo" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Photo</h2>
          <p className="text-sm">Consistent photo creation toolkit by GenVR for reimaging you in stunning poses.</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-photo.jpg" alt="Photo" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">DeAging</h2>
          <p className="text-sm">ReImagine yourself younger or older.</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-photo.jpg" alt="Photo" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Face Makeup</h2>
          <p className="text-sm">Apply face makeup</p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-6">Image Restoration</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Image Restoration Section */}
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image.jpg" alt="SD 1.5 models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Face Restoration</h2>
          <p className="text-sm">Restore faces in pics with SOTA GAN algorithms</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image2.jpg" alt="SDXL models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Face Enhance</h2>
          <p className="text-sm">Enhance face and upscale images</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image3.jpg" alt="Flux Models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Upscale</h2>
          <p className="text-sm">Upscale your images by 4x the resolution</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image3.jpg" alt="Flux Models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Colorization</h2>
          <p className="text-sm">Colorize your old black and white pics</p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-6">Image - Controlled Generation</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Image Controlled Generation */}
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image.jpg" alt="SD 1.5 models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Scribble 2 Img</h2>
          <p className="text-sm">Convert your scribble drawings into real life images</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image2.jpg" alt="SDXL models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Canny</h2>
          <p className="text-sm">Generate an image using reference edges</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image3.jpg" alt="Flux Models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Pose</h2>
          <p className="text-sm">Generate an image using reference pose</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image3.jpg" alt="Flux Models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Style</h2>
          <p className="text-sm">Generate an Image using reference style</p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-6">Image - Transfer</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Image - Transfer */}
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image.jpg" alt="SD 1.5 models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Face Transfer</h2>
          <p className="text-sm">Swap faces in images</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image2.jpg" alt="SDXL models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Garment Transfer</h2>
          <p className="text-sm">Put clothing on a person</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image3.jpg" alt="Flux Models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Material Transfer</h2>
          <p className="text-sm">Transfer material from one image to another</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image3.jpg" alt="Flux Models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Theme Transfer</h2>
          <p className="text-sm">Change theme of a photo using another image</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image3.jpg" alt="Flux Models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Style Transfer</h2>
          <p className="text-sm">Transfer the style from one image to another image</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image3.jpg" alt="Flux Models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Makeup Transfer</h2>
          <p className="text-sm">Transfer the makeup from one image to another image</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image3.jpg" alt="Flux Models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Outpainting</h2>
          <p className="text-sm">Outpaint images</p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-6">Chat (demo only)</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Chat (demo only) */}
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image.jpg" alt="SD 1.5 models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Impersonata</h2>
          <p className="text-sm">GenVR's persona toolkit for human like conversations with your favourite characters</p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-6">3D</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* 3D */}
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image.jpg" alt="SD 1.5 models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Genorama</h2>
          <p className="text-sm">GenVR's Beginner level beautiful and powerful AI image generation...</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image2.jpg" alt="SDXL models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Gensight</h2>
          <p className="text-sm">GenVR's High Definition and HQ, AI image generation and editing toolkit.</p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-6">Audio-Video</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Audio-Video */}
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image.jpg" alt="SD 1.5 models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">SD 1.5 models</h2>
          <p className="text-sm">GenVR's Beginner level beautiful and powerful AI image generation...</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image2.jpg" alt="SDXL models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">SDXL models</h2>
          <p className="text-sm">GenVR's High Definition and HQ, AI image generation and editing toolkit.</p>
        </div>
        <div className="card bg-gray-800 p-4 rounded">
          <img src="/path-to-image3.jpg" alt="Flux Models" className="rounded mb-4" />
          <h2 className="text-xl font-semibold">Flux Models</h2>
          <p className="text-sm">GenVR's fast and HQ image generation toolkit.</p>
        </div>
      </div>

    </div>

    
  );
}
