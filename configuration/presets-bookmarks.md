---
description:
  Presets store the state of a Collection Page. They can be used to set layout defaults or define bookmarks to specific
  datasets.
readTime: 3 min read
---

# Collection Presets

> Presets are items which store the state of a Collection Page. This allows you to set layout defaults or define
> bookmarks to specific datasets.

:::tip Before You Begin

We recommend you read through the [Quickstart Guide](/getting-started/quickstart.md) to get an overview of the platform
first, then see our guide on the [Collection Page](/app/content/collections.md) so you're familiar with its features and
functionalities.

:::

:::tip Learn More

To manage Presets and Bookmarks programmatically, see our [API guide on Presets](/reference/system/presets.md).

:::

## Overview

<video title="Presets and Bookmarks Overview" autoplay playsinline muted loop controls>
	<source src="" type="video/mp4" />
</video>

Remember, a [Collection Page](/app/content/collections.md) enables you to customize how its items are presented. That
is, you can sort, search, or filter items and even change [Layouts](/app/layouts.md). In some cases, you may need to
sort, filter, or otherwise modify how items are displayed again and again. Presets save these adjustments, like a
snapshot that you can quickly go back to.

All presets are accessed and managed under **Settings > Presets and Bookmarks**.

There are two types of presets, Defaults and Bookmarks. A _Default_ determines how a user will initially view the
Collection Page. In other words, these adjustments will take effect the moment the user lands on the collection page. A
_Bookmark_ creates a named dataset that can be recalled at any point from the
[Navigation Bar](/app/overview#_2-navigation-bar).

You can adjust the Defaults and Bookmarks for all project collections, as well as `directus_activity`, `directus_files`
and `directus_users`.

## Create a Preset

<video title="Create a Preset" autoplay playsinline muted loop controls>
	<source src="" type="video/mp4" />
</video>

To create a preset, follow these steps.

1. Navigate to **Settings > Presets & Bookmarks**.
2. Click <span mi btn>add</span> in the header.
3. Configure your preset item's values as desired:
   - **Collection** — Sets the collection this preset will apply to. Notice the layout preview below, which populates
     with live data from the selected collection.
   - **Scope** — Defines which users have access to this preset.
   - **Layout** — Selects a [Layout](/app//layouts.md) for the preset.
   - **Name** — Sets a name, making the preset a Bookmark. If left blank, it will be a Default. Note that this field
     supports [Translation Strings](/configuration/translation-strings.md).
4. Under the **Layout Preview** section, make any other adjustments or configurations as desired. Each preset saves all
   of the information needed to recreate this Layout Preview, just as it is shown.
5. Click <span mi btn>check</span> to confirm.

::: tip Order of Defaults

Multiple Defaults can be configured for a user, either for different layouts or even the same layout. In this case, the
preset priority is: User, then Role, then Global.

:::

## Edit a Preset

<video title="Edit a Preset" autoplay playsinline muted loop controls>
	<source src="" type="video/mp4" />
</video>

1. Navigate to **Settings > Presets & Bookmarks > [preset]**.
2. Reconfigure your preset as desired.
3. Click <span mi btn>check</span> to confirm.

## Delete a Preset

<video title="Delete a Preset" autoplay playsinline muted loop controls>
	<source src="" type="video/mp4" />
</video>

1. Navigate to **Settings > Presets & Bookmarks > [preset]**.
2. Click <span mi btn dngr>delete</span> in the page header and a popup will appear. Click **Confirm**.

::: danger Irreversible Change

This action is permanent and cannot be undone. Please proceed with caution.

:::
