<script>
import moment from 'moment'

  export default {
    data() {
      return {
        category: ['news', 'essay'],
        result: this.getArticles()
      }
    },

    computed: {
      filterArticles() {
        if (this.category.includes('essay') && this.category.includes('news')) {
          return this.result;
        } else if (this.category.includes('news')) {
          return this.filterArticlesByCategory('news');
        } else if (this.category.includes('essay')) {
          return this.filterArticlesByCategory('essay');
        }
        return [];
      }
    },

    methods: {
      getArticles() {
        let filterArticlesByPublishDate = this.state.filter(item => moment(item.publishDate).isBefore(moment().subtract(7, 'days')))
        return filterArticlesByPublishDate.sort((item1, item2) => moment(item2.publishDate) - moment(item1.publishDate))        
      },

      formatDate(date) {
        return moment(date).format('D MMMM')
      },

      truncateTitle(title) {
        if (title === null || title === undefined) {
          return '';
        }
        return title.length > 50 ? title.substring(0, 50) + '...' : title
      },

      filterArticlesByCategory(category) {
        return this.result.filter(item => item.category === category)
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
        <div class="articles_content">
          <div v-if="filterArticles.length > 0">
            <div class="articles_list" v-for="item in filterArticles.slice(0, 5)">
              <a class="articles_title" :href="item.url">{{ truncateTitle(item.title) }}</a>
              {{ formatDate(item.publishDate) }}
            </div>
          </div>          
        </div>
      </div>
    </div>
  </div>  
</template>

<style scoped>
  .articles {
    width: 500px;
    height: 250px;
  }

  .articles_wrapper {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    padding: 20px;
    background-color: rgb(228, 222, 210);
    text-align: center;
    color: rgb(225, 20, 160);
  }

  .articles_border {
    height: 70%;
    border: 1px solid;
    border-radius: 25px;
  }

  .articles_categories {
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0;
  }

  .articles_content {
    text-align: justify;
    margin: 0 40px;
  }

  .articles_list {
    display: flex;
    justify-content: space-between;
  }

  .articles_title {
    font-size: 16px;
  }

  .articles_category {
    font-size: 18px;
  }

  .articles h2 {
    margin: 10px 0;
  }
</style>
