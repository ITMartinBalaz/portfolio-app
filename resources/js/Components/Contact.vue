<template>
    <section id="contact" class="h-screen flex flex-col justify-center my-10 p-10">
        <h2 class="font-bold text-4xl text-gray-700 text-center mb-16">Contact Me</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 md:pace-x-10 space-y-10">
            <div class="flex flex-col justify-center items-center md:items-start gap-9">
                <SpanIcon class="w-52">
                    <small>Email</small>
                    <br>
                    info@kinger.tech
                </SpanIcon>
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
            </div>
            <form action="" class="flex flex-col space-y-5 justify-around">
                <input type="text" placeholder="Name" class="input">
                <input type="text" placeholder="Subject" class="input">
                <input type="email" placeholder="Email" class="input">
                <textarea class="input" rows="5" placeholder="Message"></textarea>
                <button type="button" class="btn-primary">Submit</button>
            </form>
        </div>
    </section>
</template>
<script setup>
import SpanIcon from "./UI/SpanIcon.vue";
</script>
