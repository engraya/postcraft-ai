import React from 'react'
import Image from "next/image"
function AboutPage() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="sm:flex items-center max-w-screen-xl">
  <div className="sm:w-1/2 p-10">
    <div className="image object-center text-center">
      <Image src="https://i.imgur.com/WbQnbas.png" height={100} width={100} alt='about-img'/>
    </div>
  </div>
  <div className="sm:w-1/2 p-5">
    <div className="text">
      <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About</span>
      <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Postcraft-AI</span>
      </h2>
      <p className="dark:text-gray-300">
      At PostCraft AI, we believe that content creation should be accessible and stress-free for everyone. We built PostCraft AI with a mission to empower creators, marketers, and businesses with the tools to quickly generate and customize social media content that resonates with their audiences. Using state-of-the-art AI technology, we analyze current trends and user preferences to deliver personalized, relevant content that helps boost your online presence. Whether you are a busy entrepreneur or an influencer looking to grow your audience, PostCraft AI is designed to make your content stand out—without spending hours brainstorming.
      </p>
    </div>
  </div>
</div>
</div>
    </section>
  )
}

export default AboutPage
