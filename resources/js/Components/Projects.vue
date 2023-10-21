<template>
    <section id="portfolio" class="my-10">
        <h2 class="font-bold text-4xl text-gray-700 text-center mb-24">Projects</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-40">
            <div class="flex flex-col justify-between pt-5 border-l-2 border-teal-400 pl-6">
                <div>
                    <h3 class="font-bold mb-5 text-gray-900 text-xl">JobFinder</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquam corporis dolor ea eius ex excepturi exercitationem explicabo hic neque officia,
                        optio placeat quae reiciendis repellendus sed tempora vel? Facilis, odio.
                    </p>
                </div>
                <div class="pb-5 mt-5">
                    <h6 class="uppercase mb-4 text-gray-700 font-semibold text-md">technology used</h6>
                    <div class="flex space-x-4">
                        <SpanIcon>
                            <i class="fa-brands fa-laravel text-2xl text-[#F9322C]"></i>
                        </SpanIcon>
                        <SpanIcon>
                            <i class="fa-brands fa-vuejs text-2xl text-[#42b883]"></i>
                        </SpanIcon>
                        <SpanIcon>
                            <svg fill="#38bdf9" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" stroke="#38bdf9">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path></g>
                            </svg>
                        </SpanIcon>
                    </div>
                </div>
            </div>
            <img src="../../../public/images/projects/jobfinder.png" alt="jobfinder-image" class="rounded-md">
            <img src="../../../public/images/projects/bookreviews.png" alt="bookreviews-image" class="rounded-md order-2">
            <div class="flex flex-col justify-between pt-5 border-r-2 border-teal-400 pr-6 lg:order-3">
                <div>
                    <h3 class="font-bold mb-5 text-gray-900 text-xl">BookReviews</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquam corporis dolor ea eius ex excepturi exercitationem explicabo hic neque officia,
                        optio placeat quae reiciendis repellendus sed tempora vel? Facilis, odio.
                    </p>
                </div>
                <div class="pb-5 mt-5">
                    <h6 class="uppercase mb-4 text-gray-700 font-semibold text-md">technology used</h6>
                    <div class="flex space-x-4">
                        <SpanIcon>
                            <i class="fa-brands fa-laravel text-2xl text-[#F9322C]"></i>
                        </SpanIcon>
                        <SpanIcon>
                            <i class="fa-brands fa-vuejs text-2xl text-[#42b883]"></i>
                        </SpanIcon>
                        <SpanIcon>
                            <svg fill="#38bdf9" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" stroke="#38bdf9">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path></g>
                            </svg>
                        </SpanIcon>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import SpanIcon from "./UI/SpanIcon.vue";
</script>
