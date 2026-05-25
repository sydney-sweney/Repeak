import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/components/MainLayout.vue'

import StartText from '@/components/StartText.vue'
import NotificationPage from '@/components/NotificationPage.vue'
import FriendsPage from '@/components/Friends.vue'
import AddFriendPage from '@/components/AddToFriend.vue'
import ChatPage from '@/components/ChatPage.vue'
import Profile from '@/components/Profile.vue'


const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: StartText },
      { path: 'notification', component: NotificationPage },
      { path: 'friends', component: FriendsPage },
      { path: 'addfriend', component: AddFriendPage },
      { path: 'profile', component: Profile}
      
    ]
  },

  {
    path: '/chat',
    
    component: ChatPage
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})