<template>
  <nav class="flex items-center justify-between flex-wrap bg-orange p-6 mb-4">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <svg 
        class="fill-current h-8 w-8 mr-2" 
        width="54" 
        height="54" 
        viewBox="0 0 54 54" 
        xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span class="font-semibold text-xl tracking-tight">Guillaume Briday Immobilier</span>
    </div>

    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <nuxt-link 
          to="/" 
          class="block mt-4 lg:inline-block lg:mt-0 text-orange-lighter hover:text-white mr-4">
          Home
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>
