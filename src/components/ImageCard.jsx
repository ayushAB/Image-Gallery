import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden hover:shadow-2xl trasition-all duration-300 ease-in transform hover:z-10 hover:-translate-y-10 bg-gray-900 text-white ring-4 ring-green-500 outline-none focus:outline-none">
      <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-teal-700 text rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #{tag}
        </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard;