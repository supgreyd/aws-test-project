<script>
import { ref, computed } from "vue";

export default {
  props: {
    srcPath: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    let isValidImage = ref(true);
    const defaultImageSrc = "src/assets/images/no-photo.png";
    function handleError() {
      isValidImage.value = false;
    }

    const imagePath = computed(() =>
      isValidImage.value && props.srcPath ? props.srcPath : defaultImageSrc
    );
    return { ...props, isValidImage, handleError, defaultImageSrc, imagePath };
  },
};
</script>

<template>
  <img :src="imagePath" @error="handleError()" :alt="alt" />
</template>
