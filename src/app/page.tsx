export default function Home() {
  return (
    <div>
      <div className="h-16 flex flex-row justify-center items-center gap-8">
        <a href="#" className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-cyan-600">About Me</a>
        <a href="#" className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-cyan-500">Projects</a>
        <a href="#" className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-cyan-600">Experience</a>
      </div>
    </div>
  );
}
