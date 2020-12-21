<template>
  <div class="home">
    <CoursesGallery></CoursesGallery>
  </div>
</template>

<script>
// @ is an alias to /src
import CoursesGallery from "@/components/CoursesGallery.vue"

export default {
  name: 'Home',
  components: {
    CoursesGallery
  }
}
</script>
