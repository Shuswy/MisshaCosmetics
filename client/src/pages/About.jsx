import React from 'react'
import HeroAbout from '../components/HeroAbout'
import BrandStory from '../assets/missha_brand_story.mp4'
import VideoPoster from '../assets/video_poster.png'
import TextDivider from '../components/TextDivider'
import InfoBubbleBanner from '../components/InfoBubbleBanner' 

const About = () => {
  return (
    <div>
      <HeroAbout />
      <div className='flex flex-col justify-center items-center my-20 w-full'>
        <div className='flex flex-col items-end w-[60%]'>
          <video controls poster={VideoPoster} src={BrandStory}></video>
            <p className='text-primary text-lg font-semibold mt-3'>Beauty that begins with the customer</p>
        </div>
      </div>
      <TextDivider />
      <InfoBubbleBanner />
    </div>
  )
}

export default About
