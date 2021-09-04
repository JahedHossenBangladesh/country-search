import React from 'react'
import '../App.css'

export default function Countries(props) {
    const { name, flag, capital, region, subregion, population,borders,languages} = props.item;
    return (
      <div class="overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto p-4 bg-indigo-50 transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl mb-4">
        <a href="#" class="w-full block h-full ">
          <img
            alt="blog photo"
            src={flag}
            class="max-h-60 w-full object-cover"
          />
          <div class="w-full">
            <p class="text-indigo-500 text-md font-medium">
              Country Name: {name.toUpperCase()}
            </p>
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
              Capital : {capital}
            </p>
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
              region: {region}
            </p>
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
              Subregion: {subregion}
            </p>
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
              population:  {population}
            </p>
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
              Borders:
                {
                 borders.map(txt => <p>  {txt}</p>)
                }
            </p>
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {languages.map((language) => (
                <p>Language:  {language.name}</p>
                ))}
            </p>
          </div>
        </a>
      </div>
    );
}

