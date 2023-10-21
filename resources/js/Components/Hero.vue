<template>
    <section id="home" class="grid grid-cols-1 lg:grid-cols-2 items-center lg:space-x-36 h-screen">
        <div class="flex flex-col order-2">
            <h1 class="text-4xl font-bold tracking-wider text-gray-900 mb-7">
                Hi, I'm <span class="text-teal-400">Kinger</span> a
                <span class="text-teal-400">Software Developer</span>
            </h1>
            <p class="text-gray-700 tracking-wide text-md mb-24">
                Your project, your rules! Let's turn your ideas into reality, one line of code at a time. Explore my work, learn more about my skills, and let's collaborate to achieve greatness together.
            </p>
            <div class="flex flex-wrap justify-center sm:justify-between gap-10">
                <div>
                    <h6 class="uppercase mb-4 text-gray-700 font-semibold text-md">find me</h6>
                    <div class="flex space-x-4">
                        <SpanIcon>
                            <i class="fa-brands fa-github text-2xl text-gray-800"></i>
                        </SpanIcon>
                        <SpanIcon>
                            <i class="fa-brands fa-linkedin text-2xl text-gray-800"></i>
                        </SpanIcon>
                        <SpanIcon>
                            <i class="fa-brands fa-instagram text-2xl text-gray-800"></i>
                        </SpanIcon>
                    </div>
                </div>
                <div>
                    <h6 class="uppercase mb-4 text-gray-700 font-semibold text-md">currently using</h6>
                    <div class="flex space-x-4">
                        <SpanIcon>
                            <i class="fa-brands fa-laravel text-2xl text-[#F9322C]"></i>
                        </SpanIcon>
                        <SpanIcon>
                            <i class="fa-brands fa-vuejs text-2xl text-[#42b883]"></i>
                        </SpanIcon>
                        <SpanIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0,0,256,256" class="text-2xl">
                                <g fill="#0476e8" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M27,3c-0.2652,0.00005 -0.51952,0.10543 -0.70703,0.29297l-21,21c-0.39037,0.39053 -0.39037,1.02353 0,1.41406l6,6c0.39053,0.39037 1.02353,0.39037 1.41406,0l27,-27c0.28583,-0.28603 0.37129,-0.71604 0.21656,-1.08963c-0.15474,-0.37359 -0.51922,-0.61724 -0.92359,-0.6174zM27.41406,5h9.17188l-24.58594,24.58594l-4.58594,-4.58594zM28,22c-0.2652,0.00005 -0.51952,0.10543 -0.70703,0.29297l-12,12c-0.39037,0.39053 -0.39037,1.02353 0,1.41406l6,6l6,6c0.18751,0.18754 0.44183,0.29292 0.70703,0.29297h12c0.40437,-0.00016 0.76885,-0.24381 0.92359,-0.6174c0.15474,-0.37359 0.06927,-0.8036 -0.21656,-1.08963l-11.29297,-11.29297l11.29297,-11.29297c0.28583,-0.28603 0.37129,-0.71604 0.21656,-1.08963c-0.15474,-0.37359 -0.51922,-0.61724 -0.92359,-0.6174zM28.41406,24h9.17188l-15.58594,15.58594l-4.58594,-4.58594zM28,36.41406l9.58594,9.58594h-9.17188l-5,-5z"></path></g></g>
                            </svg>
                        </SpanIcon>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-1 lg:order-2 mx-auto my-20 lg:my-0">
            <div class="relative max-w-sm">
                <div class="bg-teal-400 text-white p-4 rounded-full flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3023&q=80" alt="Avatar" class="rounded-full">
                </div>
                <div class="absolute w-4 h-4 bg-teal-400 transform rotate-45 -bottom-1 left-5"></div>
            </div>
        </div>
    </section>
</template>
<script setup>
import SpanIcon from "./UI/SpanIcon.vue";
</script>
