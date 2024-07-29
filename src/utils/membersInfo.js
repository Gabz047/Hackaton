import { ref } from "vue";
import photo from '@/assets/media/2.jpg'

// Add your photos like this first example i did. Steps:
// 1 - Import your photo from the folder
// 2 - Add to the image filed in the object that represents you.

export const members = ref([
    {image: photo, name: 'Gabriel_Lucas', amountPr: 3, languages: [
        'js', 'python', 'html', 'css'
    ] },
    {image: '', name: 'João_Souza', amountPr: 3, languages: [
        'js', 'python', 'html', 'css'
    ] },
    {image: '', name: 'Luan_Tiola', amountPr: 3, languages: [
        'js', 'python', 'html', 'css'
    ] },
    {image: '', name: 'Renato_Moraes', amountPr: 3, languages: [
        'js', 'python', 'html', 'css'
    ] },
    {image: '', name: 'Maria_Lotin', amountPr: 3, languages: [
        'js', 'html', 'css'
    ] }
])