<template>
  <div class="sm:py-10">
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Navbar />
    <Suspense>
      <NuxtPage />
      <template #fallback>
        <p>loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>
