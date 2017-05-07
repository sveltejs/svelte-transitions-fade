# svelte-transitions-fade

Fade transition plugin for [Svelte](https://svelte.technology).


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

{{#if visible}}
  <div transition:fade>hello!</div>
{{/if}}

<script>
  import fade from 'svelte-transitions-fade';

  export default {
    transitions: { fade }
  };
</script>
```


## License

[MIT](LICENSE)