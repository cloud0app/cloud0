export const uploadFile = async (file: File, path?: string) => {
   const formData = new FormData();
   formData.append("file", file);
   if (path) {
      formData.append("path", path);
   }
   const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
   });
   const data: {
      name: string;
      contentType: string;
      url: string;
      size: number;
   } = await response.json();
   return data;
};
