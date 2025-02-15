"use client";
import { Html } from "@react-three/drei";

// semua yang dirender didalam canvas harus berupa 3d, jadi kita gunakan @react-threed/drei dan membungkusnya dengan tag <Html></Html>

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
