import { reactive } from 'vue'

export const mobileMenu = reactive({
    menuOpen: false,
    toggle() {
        this.menuOpen = !this.menuOpen
    },
    navigate(to) {
       this.menuOpen = false
       console.log('navigating to: ' + to)
       window.location = to
   }
})

