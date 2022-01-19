<template>
    <b-navbar-nav class="sidebar sidebar-white accordion" id="accordionSidebar">
        <a href="/" class="sidebar-brand d-flex align-items-center justify-content-center border-bottom">
            <div class="sidebar-brand-icon">
                <img src="@/assets/images/logo.svg" class="site-logo"/>
            </div>
        </a>
        <li class="nav-item ">
            <router-link :to="{ name: 'Overviews' }" class="nav-link">
                <font-awesome-icon :icon="['fas', 'chart-area']" />
                <span> Charts</span></router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'ModelList' }" class="nav-link">
                <font-awesome-icon :icon="['fas', 'table']" />
                <span> Tables</span></router-link>
        </li>
    </b-navbar-nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
</style>