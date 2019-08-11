<template>
  <Page class="page">
    <StackLayout>
      <ShadowedLabel textShadow="4 4 4 green" text="shadow in attribute" />
      <ShadowedLabel style="text-shadow: 4 4 4 blue" text="shadow in style" />
      <ShadowedLabel class="shadow" text="shadow in css" />
    </StackLayout>
  </Page>
</template>

<style>
.shadow {
  text-shadow: 4 4 4 red;
}
</style>
