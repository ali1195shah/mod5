# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.destroy_all
User.destroy_all

movie_arr = ['tt3896198', 
  'tt2015381',
  'tt0848228', 
  'tt4154756',
  'tt2395427', 
  'tt4154796', 
  'tt2076298', 
  'tt2888046', 
  'tt1386932', 
  'tt1220719', 
  'tt2911666', 
  'tt4425200', 
  'tt6146586',
  'tt0458339',
  'tt1843866',
  'tt3498820',
  'tt0371746',
  'tt1228705',
  'tt1300854',
  'tt0800369',
  'tt1981115',
  'tt3501632',
  'tt1825683',
  'tt4154664',
  'tt0114709',
  'tt0120363',
  'tt0435761',
  'tt1979376',
  'tt0448115',
  'tt0831387',
  'tt3741700',
  'tt0451279',
  'tt2250912',
  'tt6320628',
  'tt4633694',
  'tt0076759',
  'tt0080684',
  'tt0086190'
]

User.create(username: 'ali123', password: '123456')


puts 'Getting movies...'
movie_arr.each do |imdb_id|
      request_url = "http://www.omdbapi.com/?i=#{imdb_id}&apikey=48a92fd6"
      request = RestClient::Request.execute(
        method: :get,
        url: request_url)
      movie = JSON.parse(request)

      Movie.create(title: movie['Title'],
      year: movie['Year'],
      rated: movie['Rated'],
      released: movie['Released'],
      runtime: movie['Runtime'],
      genre: movie['Genre'],
      director: movie['Director'],
      writer: movie['Writer'],
      actor: movie['Actors'],
      plot: movie['Plot'],
      language: movie['Language'],
      country: movie['Country'],
      awards: movie['Awards'],
      poster_img: movie['Poster'],
      rating_metascore: movie['Metascore'],
      imdb_rating: movie['imdbRating'],
      imdb_votes: movie['imdbVotes'],
      production: movie['Production']
    )
    puts (imdb_id)
end 

puts 'seeded!'

