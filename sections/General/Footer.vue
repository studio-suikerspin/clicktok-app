<script setup>
const items = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Diensten',
        href: '/services',
    },
    {
        title: 'Cases',
        href: '/cases',
    },
    {
        title: 'About us',
        href: '/about',
    },
    {
        title: 'Contact',
        href: '/contact',
    },
]
</script>
<template>
    <div class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__content">
                    <div class="footer__logo">
                        <NuxtImg src="/images/clicktok-logo.svg" alt="ClickTok logo" class="footer__logo_img" />
                    </div>
                    <div class="footer__socials">
                        <a href="https://www.tiktok.com/@clicktok" class="footer__social_link" title="ClickTok's TikTok profile" target="_blank">
                            <i class="bx bxl-tiktok"></i>
                        </a>
                        <a href="https://www.instagram.com/clicktok" class="footer__social_link" title="ClickTok's Instagram profile" target="_blank">
                            <i class="bx bxl-instagram"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/clicktok/?originalSubdomain=nl"
                            target="_blank"
                            class="footer__social_link"
                            title="ClickTok's LinkedIn profile"
                        >
                            <i class="bx bxl-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div class="footer__contact">
                    <div class="footer__contact_office">
                        <div class="footer__contact_office_title">Amsterdam Office</div>
                        <div class="footer__contact_address">
                            <div class="address">Keizersgracht 520</div>
                            <div class="postal">1017EK, Amsterdam</div>
                        </div>
                    </div>
                    <div class="footer__contact_office">
                        <div class="footer__contact_office_title">‘s-Hertogenbosch Office</div>
                        <div class="footer__contact_address">
                            <div class="address">Rietveldenweg 68b</div>
                            <div class="postal">5222 AS, ‘s-Hertogenbosch</div>
                        </div>
                    </div>
                </div>

                <div class="footer__links">
                    <a
                        v-for="item in items"
                        :key="item.title"
                        :href="item.href"
                        :class="`footer__links_link`"
                    >
                        <span class="title">{{ item.title }}</span>
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="container">
                    <div class="footer__bottom_wrapper">
                        <div class="footer__bottom_left">
                            <div class="footer__copyright_text">©2025 CLICKTOK™ ALL RIGHTS RESERVED</div>
                            <div class="footer__terms">
                                <a href="/privacy">Privacy Beleid</a>
                                <a href="/algemene-voorwaarden">Algemene voorwaarden</a>
                            </div>
                        </div>
                        <div class="footer__bottom_right">
                            <div class="footer__bottom_right_text">Website by Studio Suikerspin</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* BG STYLES */
.footer {
    position: relative;
    background-image: url('/images/gradient-vierkant-min.webp');
    background-size: cover;
    background-repeat: no-repeat;
    /* height: 300px; */

    /* CSS mask */
    mask-image: linear-gradient(to bottom, transparent, black 20%);
    -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%);
}

@media (max-width: 992px) {
    .footer {
        background-image: url('/images/gradient-vierkant-mobile-min.webp');
        mask-image: linear-gradient(to bottom, transparent, black 7%);
        -webkit-mask-image: linear-gradient(to bottom, transparent, black 7%);
    }
}

/* FLEX STYLES */
.footer__wrapper {
    display: flex;
    justify-content: space-between;
    padding-top: 150px;
    padding-bottom: 100px;
    gap: 40px;
}

@media (max-width: 992px) {
    .footer__wrapper {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 100px;
    }
}

@media (max-width: 768px) {
    .footer__wrapper {
        padding-bottom: 40px;
    }
}

/* LOGO AND SOCIALS STYLES */
.footer__content {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.footer__socials {
    display: flex;
    gap: 16px;
}

.footer__social_link {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: transparent;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.footer__social_link i {
    font-size: 24px;
    color: #fff;
    transition: all 0.3s ease;
}

.footer__social_link:hover {
    background: #fff;
    color: #000;
}

.footer__social_link:hover i {
    color: #000;
}

@media (max-width: 992px) {
    .footer__socials {
        justify-content: center;
    }
}

/* CONTACT STYLES */
.footer__contact {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.footer__contact_office {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.footer__contact_office_title {
    font-family: 'syne', sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-weight: 600;
    color: #fff;
    padding: 12px;
    border: 1px solid #fff;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer__contact_address {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #fff;
    font-size: 16px;
}

@media (max-width: 992px) {
    .footer__contact {
        flex-direction: row;
    }

    .footer__contact_office {
        align-items: center;
    }
}

@media (max-width: 768px) {
    .footer__contact {
        flex-direction: column;
    }
}

/* LINKS STYLES */
.footer__links {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 600px;
}

.footer__links_link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
    padding: 24px 0;
    border-bottom: 1px solid #fff;
    transition: all 0.3s ease;
    background: transparent;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    position: relative;
}

.footer__links_link.active::before {
    content: '';
    display: block;

    width: 6px;
    height: 6px;

    position: absolute;
    top: 55%;
    left: -16px;

    transform: translateY(-50%);

    background: var(--accent-blue);
    border-radius: 100%;
}

.footer__links_link:first-child {
    border-top: 1px solid #fff;
}

.footer__links_link:hover {
    background: #fff;
    color: #000;
}

.footer__links_link .icon {
    transition: all 0.3s ease;
    font-size: 32px;
}

.footer__links_link:hover .icon {
    transform: translateY(-10px);
}

@media (max-width: 992px) {
    .footer__links {
        max-width: 100%;
        width: 100%;
    }

    .footer__links_link {
        justify-content: space-between;
    }
}

/* BOTTOM STYLES */
.footer__bottom {
    padding: 16px 0;
    border-top: 1px solid #fff;
    color: #fff;
    font-size: 14px;
}

.footer__bottom_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer__bottom_left {
    display: flex;
    align-items: center;
    gap: 70px;
}

.footer__terms {
    display: flex;
    align-items: center;
    gap: 16px;
}

.footer__bottom_right_text {
    font-family: 'syne', sans-serif;
    font-size: 14px;
    font-weight: 600;
}

@media (max-width: 768px) {
    .footer__bottom {
        border-top: none;
    }

    .footer__bottom_wrapper {
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .footer__bottom_left {
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
}
</style>
