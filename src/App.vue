<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  head: {
    title: {
      inner: 'It will be a pleasure'
    },
    // Meta tags
    meta: [
      { name: 'application-name', content: 'Name of my application' },
      { name: 'description', content: 'A description of the page', id: 'desc' }, // id to replace intead of create element
      // ...
      // Twitter
      { name: 'twitter:title', content: 'Content Title' },
      // with shorthand
      { n: 'twitter:description', c: 'Content description less than 200 characters'},
      // ...
      // Google+ / Schema.org
      { itemprop: 'name', content: 'Content Title' },
      { itemprop: 'description', content: 'Content Title' },
      // ...
      // Facebook / Open Graph
      { property: 'fb:app_id', content: '123456789' },
      { property: 'og:title', content: 'Content Title' },
      // with shorthand
      { p: 'og:image', c: 'https://example.com/image.jpg' },
      // ...
    ],
    script: [
      IS_DEV ? { type: 'text/javascript', src: '/conf.dev.js', async: true, body: true} : null,
      IS_DEV ? { type: 'text/javascript', src: '/conf.local.js', async: true, body: true} : null,
      { type: 'text/javascript', src: '/conf.js', async: true, body: true},
    ],
    style: [
      { type: 'text/css', inner: 'body { background-color: #000; color: #fff}', undo: false },
      // ...
    ]
  }
}
</script>

<style lang="scss" src="./styles/common.scss"></style>
