interface Typearray{
    text: string,
    image: string
}
import health  from  '../assets/health2.jpg'
import science  from  '../assets/science.jpg'
import political from  '../assets/political.jpg'
import sport  from  '../assets/sport.jpg'




export const homeImagearray:Typearray[] = [
    {
        text: '🏥 HealthLatest health research and medical insights improving lives across the globe.',
        image: health
       
    },
    {
        text: '🏛️ PoliticalKey political decisions shaping the future of nations and global leadership',
        image: political
       
    },
     {
        text: '🔬 ScienceBreaking scientific discoveries that are transforming the way we understand the world.',
        image: science
       
    },
     {
        text: '⚽ SportsTop sports headlines, historic moments, and performances that define champions.',
        image: sport
       
    }
]