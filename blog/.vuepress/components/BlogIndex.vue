<template>
<div>
    <div v-for="post in posts">
        <div v-if="post.frontmatter.image" align=center class="post-pic">
            <img 
                class="post-pic-img"
                :src="post.frontmatter.image" />
        </div>
        <div class="post-detail">
            <h2>
                <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
            </h2>
            
            <p>{{ post.frontmatter.description }}</p>

            <p align=right><router-link :to="post.path">Read more</router-link></p>
        </div>
    </div>
</div>
</template>

<style>
  .post-detail {
  }
  .post-pic {
    float: left;
    display: block;
    padding: auto;
    width: 8.6rem;
    height: 8.6rem; 
    margin-right: 1em;
    overflow: hidden;
  }
  .post-pic-img:hover {
    opacity: 0.5;
  }
  .post-pic-img {
    display: block;
    opacity: 0.8; 
    height: 8.6rem;
    position: absolute;
    clip: rect(0px, 8.6rem, 8.6rem, 0px);
  }
</style>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/posts/') && !x.frontmatter.blog_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>
