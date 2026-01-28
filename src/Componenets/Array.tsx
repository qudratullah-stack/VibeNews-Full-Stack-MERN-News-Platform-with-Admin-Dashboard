interface Typearray{
    text: string,
    image: string
}
import health  from  '../assets/health.mp4'
import science  from  '../assets/science.mp4'
import political from  '../assets/political.mp4'
import sport  from  '../assets/sport.mp4'




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