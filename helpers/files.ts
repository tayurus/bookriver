// конвертируте из Blob в base64
export const convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = reject;
  reader.onload = () => {
    resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});

// проверяет, что файл является изображением
export const isImage = (file: File) => file.type === "image/jpeg"
  || file.type === "image/png"
  || file.type === "image/tiff"
  || file.type === "application/pdf";
