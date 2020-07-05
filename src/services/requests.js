import { updatedPosts } from 'utils'
import api from './api'

async function getAuthors() {
  try {
    return await api.post('5be5e3ae2f00005b000fc3f6')
  } catch (err) {
    return err
  }
}

export async function getPosts() {
  try {
    const posts = await api.post('5be5e3fa2f000082000fc3f8')

    const authors = await getAuthors()

    return updatedPosts(authors, posts)
  } catch (err) {
    return err
  }
}
