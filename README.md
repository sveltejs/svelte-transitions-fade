# svelte-transitions-fade

Fade transition plugin for [Svelte](https://svelte.technology). [Demo](https://svelte.technology/repl?version=2.5.0&gist=0bd4023626fe4256472e209dcdfac39f)

![fade-hello](https://cloud.githubusercontent.com/assets/1162160/25777721/d32984aa-32b3-11e7-9312-2e4582b86926.gif)

## Usage

Recommended usage is via [svelte-transitions](https://github.com/sveltejs/svelte-transitions), but you can use this module directly if you prefer. Note that it assumes an ES module or CommonJS environment.

Install with npm or yarn:

```bash
npm install --save svelte-transitions-fade
```

Then add the plugin to your Svelte component's exported definition:

```html
<label>
  <input type='checkbox' bind:checked='visible'> visible
</label>

{#if visible}
  <!-- use `in`, `out`, or `transition` (bidirectional) -->
  <div transition:fade>hello!</div>
{/if}

<script>
  import fade from 'svelte-transitions-fade';

  export default {
    transitions: { fade }
  };
</script>
```


## Parameters

You can specify `delay` and `duration` parameters, which default to `0` and `400` respectively:

```html
<div in:fade='{delay: 250, duration: 1000}'>
  fades in slowly after a short delay
</div>
```


## License

[MIT](LICENSE)
