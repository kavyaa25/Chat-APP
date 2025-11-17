export default function LoadingDots() {
  return (
    <div className="flex gap-1 text-gray-500 mt-2">
      <span className="animate-bounce">●</span>
      <span className="animate-bounce delay-150">●</span>
      <span className="animate-bounce delay-300">●</span>
    </div>
  );
}
