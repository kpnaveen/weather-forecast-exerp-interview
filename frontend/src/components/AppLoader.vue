<template>
  <Teleport to="body">
    <div class="fixed inset-0 flex justify-center items-center backdrop-brightness-50">
      <h2 class="text-white uppercase text-2xl">
        <slot></slot>
      </h2>
    </div>
  </Teleport>
</template>