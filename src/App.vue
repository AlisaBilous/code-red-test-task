<script>
import moment from 'moment'

  export default {
    data() {
      return {
        category: ['news', 'essay'],
        result: this.getArticles()
      }
    },

    methods: {
      getArticles() {
        let filterArticlesByPublishDate = this.state.filter(item => moment(item.publishDate).isBefore(moment().subtract(7, 'days')))
        return filterArticlesByPublishDate.sort((item1, item2) => moment(item2.publishDate) - moment(item1.publishDate))        
      }
    }
  }
</script>

<template>
  <div class="articles">
    <div class="articles_wrapper">
      <h2>Latest Updates</h2>
      <div class="articles_border">
        <div class="articles_categories">
          <label class="articles_category"><input type="checkbox" v-model="category" value="news"/> News</label>
          <label class="articles_category"><input type="checkbox" v-model="category" value="essay"/> Essays</label>
        </div>
      </div>
    </div>
  </div>  
</template>

<style scoped>

</style>
