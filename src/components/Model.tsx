import React from "react";

const Model: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black opacity-60 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow relative">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        ></button>
      </div>
    </div>
  );
};
export default Model;
