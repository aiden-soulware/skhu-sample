import http from "../http-common.js";

class UploadFilesService {
  upload(file, onUploadProgress) {
    console.log("안녕")
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  getFiles() {
    return http.get("/jun/ImageApp/files");
  }
}

export default new UploadFilesService();