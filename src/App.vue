<template>
  <div id="wrapper">
    <Navbar/>
    <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Searchbar/>
          <div class="container-fluid">
            <router-view />
          </div>
          <!-- /.container-fluid -->
        </div>
      <!-- End of Main Content -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
export default {
  name: 'App',
  components: {
    Navbar,
    Searchbar
  }
}
</script>

<style>
 @import './assets/css/sb-admin-2.css';
</style>
