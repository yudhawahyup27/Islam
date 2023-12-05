<template>
    <div>
        <div class="border border-black border-4 bg-blue-950 p-4">
            <h1 class="text-center text-white">1</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 ">
            <div class="border border-black border-4 bg-blue-950 p-4">
                <h1 class="text-center text-white">2</h1>
            </div>
            <div class="border border-black border-4 bg-blue-950 p-4">
                <h1 class="text-center text-white">3</h1>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 text-white text-center">
            <div class="col-span-2 grid grid-rows-2 ">
                <div class="border border-black border-4 bg-blue-950 p-4">
                    <div class="bg-red-500 p-4">
                        <h1>4</h1>
                    </div>
                </div>
                <div class="grid grid-cols-3">
                    <div class="border border-black border-4 bg-blue-950 p-4">
                        <h1>5</h1>
                    </div>
                    <div class="border border-black border-4 bg-blue-950 p-4">
                        <h1>6</h1>
                    </div>
                    <div class="border border-black border-4 bg-blue-950 p-4">
                        <h1>7</h1>
                    </div>
                </div>
            </div>
            <div class="col-span-1">
                <div class="border border-black border-4 bg-blue-950 p-4">
                    <div class="grid grid-cols-3 md:grid-cols-1 ">
                        <div class="border border-black border-4 bg-red-500 p-4">
                            <h1>8</h1>
                        </div>
                        <div class="border border-black border-4 bg-red-500 p-4">
                            <h1>9</h1>
                        </div>
                        <div class="border border-black border-4 bg-red-500 p-4">
                            <h1>10</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:grid grid-cols-2  invisible md:visible mt-4 ">
            <div class="border border-black border-4 relative bg-blue-950 p-5 z-100">
                <div class="relative">
                    <!-- Box 1 -->
                    <div class="box bg-red-500 w-24 h-20  z-20"></div>

                    <!-- Box 2 -->
                    <div class="box bg-yellow-500 w-10 h-40 z-30"></div>

                    <!-- Box 3 -->
                    <div class="box bg-blue-500 w-40 h-10 z-0 absolute bottom-0 right-0"></div>
                </div>
                  <div class="box bg-red-500 absolute right-0 top-0 w-24 h-20"></div>
            </div>
            <div class="flex justify-center items-center">
                <div class="box bg-red-500 w-24 h-20"></div>
        </div>
    </div>
    <div class="relative invisible md:visible ">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"
            class="fill-current text-yellow-500 absolute top-20 right-20 transform translate-x-1/2 -translate-y-1/2 drop-shadow-2xl">
            <path
                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
            </path>
        </svg>
        <span
            class="absolute top-20 right-20 transform translate-x-1/3 -translate-y-1/5 origin-top-left rotate-12 uppercase text-red-500 font-bold text-lg drop-shadow-xl">Fighting!!!</span>
    </div>
    </div>
</template>


<script>
export default {

}
</script>

<style></style>