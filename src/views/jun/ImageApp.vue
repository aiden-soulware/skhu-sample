<template>
  <v-app>
    <v-container fluid style="width: 600px">
      <div class="mb-5">
      <h1>이미지 프로그레스바</h1>
      </div>

      <upload-images></upload-images>
    </v-container>
  </v-app>
</template>

<script>
import UploadImages from "./imagecomponent/UploadImages";

export default {
  name: "ImageApp",
  components: {
    UploadImages,
  },
};
</script>