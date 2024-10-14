import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <Image
        className="mb-4"
        src="https://nextjs.org/icons/next.svg" // You can replace this with your image
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>

      <p className="max-w-xl text-center">
        Hello! I'm Aaron, a passionate frontend developer, who utilises React and Next.js for development. I enjoy building user-friendly interfaces and optimizing web applications for performance. 
        With a background in [Your Background/Skills], I strive to create efficient and scalable web solutions. 
        In my spare time, I explore new technologies and contribute to open-source projects.
      </p>
    </div>
  );
};

export default HomePage;
