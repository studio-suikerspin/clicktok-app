<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

//Components
import Button from "@/components/ui/Button.vue";
import ButtonAnimated from "@/components/ui/ButtonAnimated.vue";
import MobileMenu from "./MobileMenu.vue";

// Stores
import { mobileMenu } from "@/lib/mobileMenuStore.js";

const route = useRoute();

// Header scroll functionality
const handleScroll = () => {
  const header = document.querySelector(".header");
  if (!header) return;

  // Add scrolling class when scrolled down, remove when at top
  if (window.scrollY > 0) {
    header.classList.add("is-scrolling");
  } else {
    header.classList.remove("is-scrolling");
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header class="header">
    <div class="header__inner container">
      <a href="/">
        <NuxtImg
          class="header__logo"
          src="/images/clicktok-logo.svg"
          height="100"
          alt="ClickTok"
        />
      </a>

      <a
        class="header__menu-trigger"
        href="javascript:;"
        title="Open menu"
        @click="mobileMenu.toggle()"
      >
        <i class="bx bx-menu" />
      </a>
    </div>
  </header>

  <MobileMenu />
</template>

<style>
.header {
  /* position: relative; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.header__inner {
  padding-block: 36px;
  padding-inline: 36px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 48px;

  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.header.is-scrolling {
  padding: 15px;
  transform: translateY(0);
}

.header__logo {
  width: 200px;
}

@media (max-width: 1024px) {
  .header__logo {
    width: 160px;
  }
}

@media (max-width: 767px) {
  .header__logo {
    width: 120px;
  }
  .header__inner {
    padding-block: 24px;
  }
}

.header__nav {
  flex: 1;

  display: none;

  align-items: center;
  justify-content: center;
  gap: 16px;
}

.header__nav-link {
  position: relative;

  color: var(--off-white);
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  text-wrap: nowrap;

  padding-inline: 16px;
  padding-block: 8px;

  border-radius: var(--button-border-radius);
  border: 1px solid var(--off-white);

  opacity: 0.7;

  transition: all 150ms ease;
}

.header__nav-link:hover {
  opacity: 0.9;
  transition: all 150ms ease;
}

.header__nav-link.active {
  font-weight: 600;
  opacity: 1;

  transition: all 150ms ease;
}

.header__cta {
  display: none !important;
}

.header__menu-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: var(--off-white);
}

@media screen and (min-width: 1024px) {
  .header__nav {
    display: flex;
  }

  .header__cta {
    display: flex !important;
  }
}

/* @media screen and (min-width: 1280px) {
    .header__nav {
        position: absolute;
        left: 50%;
        translate: -50%;
    }
} */
</style>
