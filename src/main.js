import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.config.globalProperties.state = [
    {
        title: "Alisa in Wonderland",
        publishDate: "2024-07-10T13:51:50.417Z",
        category: "essay",
        url: "/articles/7777.html"
    },
    {
        title: "Find new ways to travel north",
        publishDate: "2024-07-18T13:51:50.417Z",
        category: "news",
        url: "/articles/4738.html"
    },
    {
        title: "When will it become possible to use time travel in order to fix your earlier mistakes?",
        publishDate: "2024-06-01T12:18:10.317Z",
        category: "essay",
        url: "/articles/7256.html"
    },
    {
        title: "10 ways to write better text",
        publishDate: "2024-06-03T09:00:32.200Z",
        category: "news",
        url: "/articles/7247.html"
    },
    {
        title: "Announcement: we have a new website category",
        publishDate: "2024-05-10T17:12:13.102Z",
        category: "news",
        url: "/articles/1749.html"
    },
    {
        title: "Weekly news",
        publishDate: "2024-05-29T00:23:15.276Z",
        category: "news",
        url: "/articles/1538.html"
    },
    {
        title: "In-depth travel guide for Tanzania",
        publishDate: "2024-05-31T11:12:43.003Z",
        category: "essay",
        url: "/articles/2594.html"
    }
];

app.mount('#app');
