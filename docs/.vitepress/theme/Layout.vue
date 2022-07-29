<script setup>
import DefaultTheme from 'vitepress/theme';
import { useHead } from '@vueuse/head';
import { useData } from 'vitepress';
import { ref, toRaw,unref, watch } from 'vue';
import getImageUrl from '@thumbsmith/url';
const { Layout } = DefaultTheme;
const data = useData();
const { page, frontmatter, site, theme } = data;
// Compute props for meta
function getMetaInfo(_page, _frontmatter) {
    console.log(toRaw(unref(_page)));
    // Page title
    const title = _frontmatter.title || _page.title;
    const description = _frontmatter.description || _page.description;

    // Last updated date in a human readable format, ex: December 16, 2021
    const lastUpdated = new Date(_page.lastUpdated)
        .toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    // Approximate page read time, ex: 12 min read
    // const readTime = page._content ? readingTime(page._content).text : undefined;
    // we don't have access to the text itself so falling back to frontmatter
    const readTime = _frontmatter.readTime || '';

    const imageUrl = getImageUrl({
        account: 'directus',
        template: 'docs',
        data: { title, lastUpdated, readTime, breadcrumb: null },
        type: 'png',
    });
    console.log(unref(site), unref(theme));

    return { title, description, lastUpdated, imageUrl };
}
// set refs
const initialPage = getMetaInfo(unref(page), unref(frontmatter));
const title = ref(initialPage.title);
const description = ref(initialPage.description);
const lastUpdated = ref(initialPage.lastUpdated);

// watch for pageChange
watch([page, frontmatter], ([_page, _fm]) => {
    const newPage = getMetaInfo(_page, _fm);
    title.value = newPage.title;
    description.value = newPage.description;
    lastUpdated.value = newPage.lastUpdated;
    console.log(newPage);
});

useHead({
    meta: [
        { name: `description`, content: description },
    ],
})
</script>
<template>
  <Layout></Layout>
</template>