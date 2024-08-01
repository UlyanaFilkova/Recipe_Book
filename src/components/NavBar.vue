<template>
  <header
    class="bg-white shadow-md h-12 flex justify-between items-stretch px-8"
  >
    <RouterLink :to="{ name: 'home' }" class="inline-flex h-full items-center"
      >Home</RouterLink
    >
    <nav class="flex items-center gap-1">
      <RouterLink
        :to="{ name: 'byName' }"
        class="inline-flex px-3 h-full items-center hover:bg-stone-300 transition-colors"
        >Search Meals</RouterLink
      >
      <RouterLink
        :to="{ name: 'byLetter' }"
        class="inline-flex px-3 h-full items-center hover:bg-stone-300 transition-colors"
        >Meals by Letter</RouterLink
      >
      <RouterLink
        :to="{ name: 'byIngredient' }"
        class="inline-flex px-3 h-full items-center hover:bg-stone-300 transition-colors"
        >Meals by Ingredients</RouterLink
      >
    </nav>
  </header>
</template>
