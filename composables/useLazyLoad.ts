// composables/useLazyLoad.ts
import { onMounted } from 'vue'

export function useLazyLoad() {
    // Just use native lazy loading - much simpler!
    const initLazyLoading = () => {
        // Add loading="lazy" to any images/iframes that don't have it
        document.querySelectorAll('img:not([loading]), iframe:not([loading])').forEach((el) => {
            el.setAttribute('loading', 'lazy')
        })
    }

    onMounted(() => {
        initLazyLoading()
    })

    return {
        reinitLazyLoading: initLazyLoading
    }
}

// Utility function for preloading critical images only
export function preloadCriticalImages(urls: string[]): Promise<void[]> {
    const promises = urls.map((url) => {
        return new Promise<void>((resolve, reject) => {
            const img = new Image()
            img.onload = () => resolve()
            img.onerror = reject
            img.src = url
        })
    })

    return Promise.all(promises)
}
