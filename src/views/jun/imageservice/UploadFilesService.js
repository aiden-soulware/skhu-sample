 import axios from "axios";
//  import http from "../http-common.js";

class UploadFilesService {
  upload(file, onUploadProgress) {
    console.log("안녕");
    let formData = new FormData();

    formData.append("file", file);
    console.log(formData);
    return axios
      .post('/jun/ImageApp/', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      })
      .then((res) => {
        this.result = res.formData;
      })
      .catch((ex) => {
        console.log("사진업로드 실패", ex);
      });
  }

  getFiles() {
    return axios.get('/jun/ImageApp/');
  }
}

export default new UploadFilesService();
