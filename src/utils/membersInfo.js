import { ref } from "vue";
import photo from '@/assets/media/2.jpg'

// Add your photos like this first example i did. Steps:
// 1 - Import your photo from the folder
// 2 - Add to the image filed in the object that represents you.

export const members = ref([
    {image: photo, name: 'Gabriel_Lucas', amountPr: 3, languages: [
        'language-javascript', 'language-python', 'language-html5', 'language-css3'
    ] },
    {image: '', name: 'João_Souza', amountPr: 3,languages: [
        'language-javascript', 'language-python', 'language-html5', 'language-css3'
    ] },
    {image: '', name: 'Luan_Tiola', amountPr: 3, languages: [
        'language-javascript', 'language-python', 'language-html5', 'language-css3'
    ] },
    {image: '', name: 'Renato_Moraes', amountPr: 3, languages: [
        'language-javascript', 'language-python', 'language-html5', 'language-css3'
    ] },
    {image: '', name: 'Maria_Lotin', amountPr: 3, languages: [
        'language-javascript', 'language-html5', 'language-css3'
    ] }
])

export const membersDetails = ref([
    {image: photo, name: 'Gabriel_Lucas', about: 'texto breve apresentando o membro', languages: [
        'language-javascript', 'language-python', 'language-html5', 'language-css3'
    ], prjs: [
        'mooner', 'biblioteca Alexandria', 'form de edição'
    ] },
    {image: '', name: 'João_Souza', about: 'texto breve apresentando o membro',languages: [
        'language-javascript', 'language-python', 'language-html5', 'language-css3'
    ], prjs: [
        'mooner', 'biblioteca Alexandria', 'form de edição'
    ] },
    {image: '', name: 'Luan_Tiola', about: 'texto breve apresentando o membro', languages: [
        'language-javascript', 'language-python', 'language-html5', 'language-css3'
    ], prjs: [
        'mooner', 'biblioteca Alexandria', 'form de edição'
    ] },
    {image: '', name: 'Renato_Moraes', about: 'texto breve apresentando o membro', languages: [
        'language-javascript', 'language-python', 'language-html5', 'language-css3'
    ] },
    {image: '', name: 'Maria_Lotin', about: 'texto breve apresentando o membro', languages: [
        'language-javascript', 'language-html5', 'language-css3'
    ], prjs: [
        'mooner', 'biblioteca Alexandria', 'form de edição'
    ] }
])