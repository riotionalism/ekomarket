'use client';

interface LoadingProps {
  fullScreen?: boolean;
}

const Loading = ({ fullScreen = false }: LoadingProps) => {
  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? 'fixed inset-0 bg-white bg-opacity-75 z-50' : 'p-4'
      }`}
    >
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
    </div>
  );
};

export default Loading;
