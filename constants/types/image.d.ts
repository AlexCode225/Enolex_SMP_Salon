// Allow TypeScript to import image files directly.
// no errors when using `require()` or `import` for assets now

// PNG files
declare module "*.png" {
  const value: any; // Represents  imported image asset
  export default value;
}

// JPG files
declare module "*.jpg" {
  const value: any;
  export default value;
}

// JPEG files
declare module "*.jpeg" {
  const value: any;
  export default value;
}

// GIF files
declare module "*.gif" {
  const value: any;
  export default value;
}

// SVG files
declare module "*.svg" {
  const value: any;
  export default value;
}
