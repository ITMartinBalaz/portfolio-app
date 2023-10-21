<template>
    <section id="resume" class="h-screen flex flex-col justify-center my-10 p-10">
        <h2 class="font-bold text-4xl text-gray-700 text-center mb-16">My Resume</h2>
        <div class="flex flex-wrap justify-center lg:justify-between space-y-10 space-x-10">
            <div class="flex flex-col space-y-10 justify-center max-w-lg">
                <p class="text-gray-700 tracking-wide text-md lg:mb-24 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt iure maxime, nostrum numquam quae sunt?
                </p>
                <div class="flex flex-wrap space-y-5 sm:space-y-0 justify-center sm:justify-between">
                    <button class="btn-primary" @click="downloadCV">
                        <i class="fa-solid fa-download text-gray-50"></i>
                        Download my CV
                    </button>
                    <button class="btn-secondary" @click="viewCVInNewTab">
                        <i class="fa-solid fa-eye"></i>
                        View my CV in another tab
                    </button>
                </div>
            </div>
            <div>
                <img src="../../../public/images/resume.jpg" alt="resume" class="h-96 rounded-md">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        downloadCV() {
            // Replace with your download CV logic
            // For example, you can open a new window with the CV file for download
            const downloadLink = document.createElement('a');
            downloadLink.href = 'resume.pdf'; // Replace with the actual path to your CV file
            downloadLink.target = '_blank';
            downloadLink.download = 'my_cv.pdf';
            downloadLink.click();
        },
        viewCVInNewTab() {
            // Replace with your view CV in another tab logic
            // For example, you can open a new window or tab with your CV
            window.open('resume.pdf', '_blank'); // Replace with the actual path to your CV file
        },
    },
};
</script>
