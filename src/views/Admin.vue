<template>
  <div>
    <NavbarAdmin></NavbarAdmin>
    <h1>admin</h1>
    <CourseGallery typeGallery="admin"></CourseGallery>
  </div>
</template>

<script>
import NavbarAdmin from '@/components/AdminNavbar.vue'
import CourseGallery from '@/components/CoursesGallery.vue'
export default {
  name:'adminComponent',
  components:{
    NavbarAdmin,
    CourseGallery
  }
}
</script>

<style>

</style>