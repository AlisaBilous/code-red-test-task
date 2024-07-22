import { shallowMount } from '@vue/test-utils'
import App from './App.vue'
import moment from 'moment'

describe('App.vue', () => {
  let wrapper

  const app = {
    config: {
      globalProperties: {
        state: [
          { title: "Essay July 10", publishDate: "2024-07-10T13:51:50.417Z", category: "essay", url: "1.html" },
          { title: "News July 18", publishDate: "2024-07-18T13:51:50.417Z", category: "news", url: "2.html" },
          { title: "Essay June 1", publishDate: "2024-06-01T12:18:10.317Z", category: "essay", url: "3.html" },
          { title: "News June 3", publishDate: "2024-06-03T09:00:32.200Z", category: "news", url: "4.html" },
          { title: "News May 10", publishDate: "2024-05-10T17:12:13.102Z", category: "news", url: "5.html" },
          { title: "News May 29", publishDate: "2024-05-29T00:23:15.276Z", category: "news", url: "6.html" },
          { title: "Essay May 31", publishDate: "2024-05-31T11:12:43.003Z", category: "essay", url: "7.html" }
        ]
      }
    }
  }

  beforeEach(() => {
    wrapper = shallowMount(App, {
      global: {
        config: app.config,
      },
      data() {
        return {
          category: ['news', 'essay']
        }
      }      
    })
  })

  it('should filter and sort articles by publish date', () => {
    const articles = wrapper.vm.getArticles()

    expect(articles.length).toBe(6)
    expect(articles[0].title).toBe('Essay July 10')
    expect(articles[1].title).toBe('News June 3')
    expect(articles[2].title).toBe('Essay June 1')
    expect(articles[3].title).toBe('Essay May 31')
    expect(articles[4].title).toBe('News May 29')
    expect(articles[5].title).toBe('News May 10')
  })

  it('should format date correctly', () => {
    const date = wrapper.vm.formatDate(moment().toISOString())

    expect(date).toBe(moment().format('D MMMM'))
  })

  it('should truncate title correctly', () => {
    const longTitle = 'This is a very long title that should be truncated at 50 characters'
    const truncatedTitle = wrapper.vm.truncateTitle(longTitle)

    expect(truncatedTitle).toBe('This is a very long title that should be truncated...')
  })

  it('should filter articles by category news', () => {
    wrapper.setData({ category: ['news'] })

    expect(wrapper.vm.filterArticles.length).toBe(3)
    expect(wrapper.vm.filterArticles[0].category).toBe('news')
  })

  it('should filter articles by category essay', () => {
    wrapper.setData({ category: ['essay'] })

    expect(wrapper.vm.filterArticles.length).toBe(3)
    expect(wrapper.vm.filterArticles[0].category).toBe('essay')
  })

  it('should filter articles by both categories', () => {
    wrapper.setData({ category: ['news', 'essay'] })

    expect(wrapper.vm.filterArticles.length).toBe(6)
  })

  it('should filter articles without categories', () => {
    wrapper.setData({ category: [] })

    expect(wrapper.vm.filterArticles.length).toBe(0)
  })

  it('should render articles correctly', () => {
    wrapper.setData({ category: ['news', 'essay'] })
    const articles = wrapper.findAll('.articles_list')

    expect(articles.length).toBe(5)
  })
})
