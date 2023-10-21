<template>
    <div class="fixed left-0 right-0 max-w-6xl mx-auto z-10">
        <nav class="flex justify-between items-center py-6 bg-white">
            <Link href="/">
                <img src="../../../public/images/logo.jpg" alt="logo" class="w-36">
            </Link>
            <div class="flex justify-between items-center space-x-6 font-semibold text-gray-800">
                <a
                    @click="scrollTo('home', -100)"
                    href="#home"
                    :class="sectionClass('home')"
                >
                    HOME
                </a>
                <a
                    @click="scrollTo('portfolio', -100)"
                    href="#portfolio"
                    :class="sectionClass('portfolio')"
                >
                    PORTFOLIO
                </a>
                <a
                    @click="scrollTo('resume', -20)"
                    href="#resume"
                    :class="sectionClass('resume')"
                >
                    RESUME
                </a>
                <a
                    @click="scrollTo('contact', 100)"
                    href="#contact"
                    :class="sectionClass('contact')"
                >
                    CONTACT
                </a>
            </div>
        </nav>
    </div>
    <slot>Default</slot>
</template>

<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import VueScrollTo from 'vue-scrollto';
import { ref, computed, onMounted } from "vue";

let currentSection = ref('');

function scrollTo(where, offset) {
    VueScrollTo.scrollTo('#' + where, 500, { offset: offset });
    currentSection.value = where;
}

const sectionClass = (section) => {
    return {
        'text-teal-400': currentSection.value === section,
        'underline': currentSection.value === section,
        'underline-offset-4': currentSection.value === section,
    };
};

// Add a scroll event listener to update the current section
onMounted(() => {
    window.addEventListener('scroll', updateCurrentSection);
});

function updateCurrentSection() {
    const sections = ['home', 'portfolio', 'resume', 'contact'];
    let visibleSection = '';

    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 100) {
                visibleSection = section;
                break;
            }
        }
    }

    // Update the current section
    currentSection.value = visibleSection;
}
</script>
