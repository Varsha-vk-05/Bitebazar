import React from 'react';
import { ExternalLink, Users, Heart, Play } from 'lucide-react';

interface SocialPageProps {
  platform: 'facebook' | 'twitter' | 'instagram' | 'youtube';
}

export const SocialPage: React.FC<SocialPageProps> = ({ platform }) => {
  const platformData = {
    facebook: {
      name: 'Facebook',
      handle: '@bitebazar',
      followers: '2.5M',
      description: 'Connect with us on Facebook for the latest updates, food trends, and exclusive offers!',
      color: 'bg-blue-600',
      icon: '📘',
      posts: [
        { id: 1, content: 'New restaurants added in your area! 🍕🍔', likes: '1.2K', time: '2h ago' },
        { id: 2, content: 'Weekend special: 50% off on all orders above ₹500! 🎉', likes: '3.5K', time: '1d ago' },
        { id: 3, content: 'Thank you for 2.5M followers! ❤️', likes: '15K', time: '3d ago' }
      ]
    },
    twitter: {
      name: 'Twitter',
      handle: '@bitebazar',
      followers: '1.8M',
      description: 'Follow us for real-time updates, customer support, and food delivery insights!',
      color: 'bg-blue-400',
      icon: '🐦',
      posts: [
        { id: 1, content: 'Quick bite? We\'ve got you covered! Order now and get it delivered in 20 mins ⚡', likes: '892', time: '1h ago' },
        { id: 2, content: 'Rainy day = Perfect day for hot food delivery 🌧️🍜', likes: '1.5K', time: '4h ago' },
        { id: 3, content: 'Customer satisfaction is our top priority! 📞 24/7 support available', likes: '654', time: '1d ago' }
      ]
    },
    instagram: {
      name: 'Instagram',
      handle: '@bitebazar',
      followers: '3.2M',
      description: 'Discover mouth-watering food photography and behind-the-scenes content!',
      color: 'bg-pink-600',
      icon: '📸',
      posts: [
        { id: 1, content: 'Fresh sushi platter from Tokyo Kitchen 🍣✨', likes: '5.2K', time: '3h ago' },
        { id: 2, content: 'Pizza perfection delivered to your door 🍕❤️', likes: '8.1K', time: '1d ago' },
        { id: 3, content: 'Behind the scenes: Our delivery heroes in action 🚴‍♂️', likes: '12K', time: '2d ago' }
      ]
    },
    youtube: {
      name: 'YouTube',
      handle: '@bitebazar',
      followers: '850K',
      description: 'Watch cooking tutorials, restaurant tours, and delivery stories!',
      color: 'bg-red-600',
      icon: '📺',
      posts: [
        { id: 1, content: 'How to make restaurant-style biryani at home | 15 min recipe', likes: '25K', time: '1w ago' },
        { id: 2, content: 'Day in the life of a BiteBazar delivery partner', likes: '18K', time: '2w ago' },
        { id: 3, content: 'Top 10 trending restaurants in Bangalore this month', likes: '32K', time: '3w ago' }
      ]
    }
  };

  const data = platformData[platform];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className={`${data.color} w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-3xl sm:text-4xl`}>
              {data.icon}
            </div>
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                BiteBazar on {data.name}
              </h1>
              <p className="text-orange-600 font-medium text-lg mb-2">{data.handle}</p>
              <p className="text-gray-600 mb-4">{data.description}</p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {data.followers} followers
                  </span>
                </div>
                <a
                  href={`https://${platform}.com/bitebazar`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${data.color} hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium transition-all flex items-center`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit {data.name}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Recent Posts</h2>
          <div className="space-y-6">
            {data.posts.map((post) => (
              <div key={post.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-4">
                  <div className={`${data.color} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl flex-shrink-0`}>
                    {data.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <span className="font-bold text-gray-800">BiteBazar</span>
                      <span className="text-gray-500 text-sm">{data.handle}</span>
                      <span className="text-gray-400 text-sm">• {post.time}</span>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm sm:text-base">{post.content}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <button className="flex items-center hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes} likes
                      </button>
                      {platform === 'youtube' && (
                        <button className="flex items-center hover:text-blue-500 transition-colors">
                          <Play className="w-4 h-4 mr-1" />
                          Watch
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`${data.color} text-white rounded-xl p-6 sm:p-8 mt-8 text-center`}>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6 text-sm sm:text-base">
            Follow us on {data.name} for exclusive offers, food updates, and community engagement!
          </p>
          <a
            href={`https://${platform}.com/bitebazar`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Follow on {data.name}
          </a>
        </div>
      </div>
    </div>
  );
};