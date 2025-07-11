<script setup>
import { onMounted, onUnmounted } from 'vue'

import Button from '@/components/ui/Button.vue'
import SectionTitle from '@/components/SectionTitle.vue'

const props = defineProps({
    formType: {
        type: String,
        default: 'contact',
    },
    title: {
        type: String,
        default: 'You are ready to stay ahead',
    },
    subtitle: {
        type: String,
        default: 'Benieuwd wat TikTok voor jouw merk kan betekenen? Laat je gegevens achter en we plannen een (vrijblijvende) brainstormsessie in.',
    },
    ctaText: {
        type: String,
        default: "Let's get started",
    },
    isCreator: {
        type: Boolean,
        default: false,
    },
    isSollicitation: {
        type: Boolean,
        default: false,
    },
    withSectionTitle: {
        type: Boolean,
        default: true,
    },
})

let animationInterval
const form = {
    type: props.formType,
    name: null,
    company: null,
    username: null,
    email: null,
    phone: null,
    message: null,
    portfolio: null,
    cv: null,
}

function submitForm() {
    // form.post('/forms', {
    //     preserveScroll: true,
    //     onSuccess: () => {
    //         console.log('success')
    //     }
    // });
}

onMounted(() => {
    const desktopImages = document.querySelectorAll('.image__wrapper')
    let currentIndex = 0

    const animateImages = () => {
        // Hide all images
        desktopImages.forEach((image, index) => {
            if (index === currentIndex) {
                image.classList.add('active')
            } else {
                image.classList.remove('active')
            }
        })

        // Update index for next iteration
        currentIndex = (currentIndex + 1) % desktopImages.length
    }

    // Start the animation cycle
    animationInterval = setInterval(animateImages, 5000)
})

onUnmounted(() => {
    // Clean up the interval when component is unmounted
    if (animationInterval) {
        clearInterval(animationInterval)
    }
})
</script>

<template>
    <div class="contact__wrapper padding-bottom">
        <div class="container">
            <div class="contact__container">
                <SectionTitle title="Contact" />
                <div class="contact__inner">
                    <div class="contact__left border-radius">
                        <div class="contact__left_text">
                            <h2 class="contact__title" v-html="title"></h2>
                            <div class="contact__subtitle">
                                {{ subtitle }}
                            </div>
                        </div>
                        <div class="contact__left_form">
                            <form class="contact__form">
                                <div class="contact__form_row">
                                    <input type="text" name="name" placeholder="Naam" v-model="form.name" class="border-radius" />
                                    <input type="text" placeholder="Bedrijfsnaam" v-model="form.company" v-if="!isCreator && !isSollicitation" class="border-radius" />
                                    <input type="text" placeholder="Username" v-model="form.username" v-if="isCreator" class="border-radius" />
                                </div>
                                <div class="contact__form_row">
                                    <input type="email" name="email" v-model="form.email" placeholder="Email" class="border-radius" />
                                    <input type="tel" name="tel" v-model="form.phone" placeholder="Telefoon" class="border-radius" />
                                </div>
                                <div class="contact__form_row"  v-if="isSollicitation">
                                    <textarea placeholder="Motivatie" v-model="form.message" class="border-radius"></textarea>
                                </div>
                                <div class="contact__form_row" v-if="isSollicitation">
                                    <label class="upload-label" for="portfolio">
                                        Upload Portfolio
                                    </label>
                                    <input
                                        type="file"
                                        id="portfolio"
                                        @input="form.portfolio = $event.target.files[0]"
                                        class="file-upload border-radius"
                                        style="display: none"
                                    />
                                    <label class="upload-label" for="cv">
                                        Upload CV
                                    </label>
                                    <input type="file" id="cv" @input="form.cv = $event.target.files[0]" class="file-upload border-radius" style="display: none" />
                                    <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                        {{ form.progress.percentage }}%
                                    </progress>
                                </div>
                                <textarea placeholder="Schrijf hier je bericht" v-model="form.message" v-if="!isSollicitation" class="border-radius"></textarea>
                                <Button @click.prevent="() => submitForm()" variant="blue" href="" class="contact__form_button">{{ ctaText }}</Button>
                            </form>
                        </div>
                    </div>
                    <div class="contact__right">
                        <div class="image__wrapper active">
                            <img src="/images/contact-image1-min.webp" alt="Contact image" class="contact__right_image border-radius" loading="lazy" />
                        </div>
                        <div class="image__wrapper">
                            <img src="/images/contact-image2-min.webp" alt="Contact image" class="contact__right_image border-radius" loading="lazy" />
                        </div>
                        <div class="image__wrapper">
                            <img src="/images/contact-image3-min.webp" alt="Contact image" class="contact__right_image border-radius" loading="lazy" />
                        </div>
                        <div class="image__wrapper">
                            <img src="/images/contact-image5-min.webp" alt="Contact image" class="contact__right_image border-radius" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* CONTACT FORM */
.contact__container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    width: 100%;
}

.contact__inner {
    display: flex;
    align-items: stretch;
    width: 100%;
    max-width: 1220px;
}

@media (max-width: 992px) {
    .contact__inner {
        max-width: 100%;
        flex-direction: column;
    }
    .contact__container{
        gap: 40px;
    }
}

.contact__left {
    flex: 3;
    background-image: url('/images/gradient-ruis-vierkant-min.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 80px 40px;
    overflow: hidden;
    color: var(--off-white);

    display: flex;
    flex-direction: column;
    gap: 40px;
}

.contact__left_text {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.contact__title {
    font-size: 60px;
    font-weight: bold;
    font-family: 'syne', sans-serif;
    line-height: 60px;
    max-width: 600px;
}

.contact__subtitle {
    font-size: 16px;
    font-weight: 400;
    max-width: 450px;
}

.contact__form {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.contact__form_row {
    display: flex;
    gap: 24px;
}

.contact__form_row input,
.contact__form_row .upload-label {
    width: 100%;
    padding: 16px 24px;
    background-color: var(--color-white);
    color: var(--accent-dark-purple);
    font-size: 18px;
    font-weight: 500;
    font-family: 'syne', sans-serif;
}

.contact__form_row .upload-label {
    cursor: pointer;
}

.contact__form_row input:focus,
.contact__form textarea:focus {
    outline: none;
}

.contact__form textarea {
    width: 100%;
    padding: 16px 24px;
    background-color: var(--color-white);
    color: var(--accent-dark-purple);
    font-size: 18px;
    font-weight: 500;
    font-family: 'syne', sans-serif;
    min-height: 120px;
}

.contact__form textarea::placeholder,
.contact__form_row input::placeholder{
    color: var(--accent-dark-purple);
}

.contact__form_button {
    width: fit-content;
}


@media (max-width: 992px) {
    .contact__inner {
        flex-direction: column;
    }

    .contact__left {
        padding: 16px;
        gap: 40px;
        border-radius: 24px;
    }

    .contact__title {
        font-size: 32px;
        line-height: 40px;
    }

    .contact__subtitle {
        font-size: 16px;
    }

    .contact__form {
        gap: 16px;
    }

    .contact__form_row {
        flex-direction: column;
    }

    .contact__form_row input {
        padding: 12px 16px;
        font-size: 14px;
    }

    .contact__form textarea {
        padding: 12px 16px;
        font-size: 14px;
    }
}

/* CONTACT IMAGES */
.contact__right {
    flex: 2;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 40px;
}

.image__wrapper{
    display: none;
    align-items: center;
    justify-content: center;

    max-height: 600px;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 9/16;
}

.contact__right_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image__wrapper.active {
    display: flex;
}
</style>
