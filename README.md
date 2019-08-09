# Josh Peak

## Blogging as a release valve for my caffeine consumption

I drink coffee, I like running. So I have a tendency to go from thinking fast to thinking deep. Let's hope for your sake some of it is of value.

## Blog maintenance

Development is on `vuepress` branch.
Production is on `master` branch.

This blog is written using [VuePress](https://vuepress.vuejs.org/). Shrink wraps
VueJS, Nuxt and Webpack to consume markdown and give a VueJS SPA.

Chosen because it is simple and adds better support for technical documentation
and the abillity to expand capabilities for embedding custom components.

Which is what I'd like to do more of with embedding D3 visualisations in components.

### Developing

```bash
yarn install
yarn run dev
```

On Windows Git Bash:
```bash
env PYTHON=/c/Python27/ winpty yarn.cmd install
winpty yarn.cmd run dev
```

### Publishing

```bash
./deploy.sh
```
