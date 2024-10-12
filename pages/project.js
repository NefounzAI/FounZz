/* eslint-disable @next/next/no-img-element */
import React from 'react';

const projects = [
  {
    title: 'Celia Claire Bot Discord',
    description: 'Celia-BotDiscord is a Discord bot built using Node.js that helps enhance community engagement. It offers features like moderation, custom commands, and fun interactions to keep users engaged. This bot is designed to be easy to set up and customize for various Discord servers, making it a valuable tool for community management.',
    link: 'https://github.com/NefounzAI/Celia-BotDiscord.git', // Replace with your project link
    image: 'https://i.pinimg.com/736x/47/f4/64/47f464522a1a1a9a534b7936171a8796.jpg', // Replace with your project image URL
  },
  {
    title: 'Website Simple',
    description: 'This project is a simple template website created using HTML and CSS. It serves as a starting point for developing responsive and visually appealing web pages.',
    link: 'https://github.com/NefounzAI/Bot-discord.githttps://github.com/NefounzAI/Website-Simple.git', // Replace with your project link
    image: 'https://cdn.discordapp.com/attachments/1294515375458877615/1294708334536163398/web.png?ex=670bfe99&is=670aad19&hm=fae82daba95af9c24cf78a51b4e8fc56b53e38aff66c392d5c5d2ea7413137dd&', // Replace with your project image URL
  },
  {
     title: 'Project Two',
     description: 'This bot is designed to display the current player count of a Minecraft server directly within your Discord server. It provides real-time updates, allowing users to see how many players are currently online and playing in the Minecraft world.',
     link: 'https://github.com/NefounzAI/Bot-discord.git', // Replace with your project link
     image: 'https://cdn.discordapp.com/attachments/1294515375458877615/1294709765003542640/image.png?ex=670bffee&is=670aae6e&hm=55ac3e0c3c3f47e24262011de63e8abb3fdadc7aec70ad8b2259f3b6c97152cf&', // Replace with your project image URL
  },
  // Add more projects as needed
];

export default function Project() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-10 text-white">My Projects: </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4 bg-gray-950 text-white">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-md mb-2"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}



// {
    // title: 'Project Two',
    // description: 'Description of Project Two. This project focuses on...',
    // link: 'https://example.com/project-two', // Replace with your project link
    // image: 'https://via.placeholder.com/150', // Replace with your project image URL
//   },