<template>
  <div>
    <slot name="header">
      <Header />
      <BreadCrumbs />
    </slot>
    <slot />
  </div>
</template>
