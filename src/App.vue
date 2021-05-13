<template>
    <div :class="($store.state.darkMode) ? 'dark-mode' : ''">
        <router-view />
    </div>
</template>

<script>
export default {
    created(){
        console.log(localStorage.getItem('dark_mode'))
    }
}
</script>