<script setup>
import DefaultTheme from 'vitepress/theme';
import { useHead } from '@vueuse/head';
import { useData } from 'vitepress';
import { ref, unref, watch } from 'vue';
import getImageUrl from '@thumbsmith/url';
const { Layout } = DefaultTheme;
const { page, frontmatter, theme } = useData();

// Compute props for meta
function getMetaTags(_page, _frontmatter, _theme) {
    // === 1. Compute props for thumbnail
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

    // find page in sidebar structure
    let path = '/';
    function walkTree(pages, crumbs) {
        for (const page of pages) {
            if (page.text === _page.title) {
                path = page.link;
                return crumbs;
            }
            if (Array.isArray(page.items)) {
                const itemCrumbs = walkTree(page.items, [...crumbs, page.text]);
                if (Array.isArray(itemCrumbs)) {
                    return itemCrumbs;
                }
            }
        }
        return null;
    }
    const breadcrumb = walkTree(_theme.sidebar, []);

    // === 2. Build thumbnail url
    const imageUrl = getImageUrl({
        account: 'directus',
        template: 'docs',
        data: { title, lastUpdated, readTime, breadcrumb },
        type: 'png',
    });

    // === 3. Build dynamic meta tags
    const pageUrl = `https://docs.directus.io${path}`;
    return [
        // Open Graph meta tags (facebook, linkedin, discord, slack, etc...)
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: pageUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: imageUrl },
        { property: 'og:image:width', content: 1200 },
        { property: 'og:image:height', content: 630 },

        // Twitter meta tags
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:url', content: pageUrl },
        { name: 'twitter:site', content: '@directus' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: imageUrl },
        { name: 'twitter:image:width', content: 1200 },
        { name: 'twitter:image:height', content: 630 },
    ];
}
// set refs
const initialMeta = getMetaTags(unref(page), unref(frontmatter), unref(theme));
const meta = ref(initialMeta);

// watch for pageChange
watch([page, frontmatter, theme], ([_page, _fm, _theme]) => {
    const newTags = getMetaTags(_page, _fm, _theme);
    meta.value = newTags;
});
// update head with dynamic meta tags
useHead({ meta });
</script>
<template>
  <Layout></Layout>
</template>