/// <reference types="vite-plugin-svgr/client" />
declare module "*.css";
declare module "*.module.css";

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.jpeg";
declare module "*.jpg";
