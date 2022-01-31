const TopPlaces = require('./models/topPlacesModel')
const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb://127.0.0.1:27017/travelDB'
const db = mongoose.connection
require('dotenv').config()


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Seeded the Database!')
})

TopPlaces.create([
    {
        name: 'South Island',
        location: 'New Zealand' ,
        img: 'https://travel.usnews.com/dims4/USNEWS/a798492/2147483647/resize/445x280^%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/edited_south_island_nz_getty_irma_ferreira_445x280_dxgXWlc.jpg',
        description: "New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to fjords to glaciers. Here, you can admire the mountains of Fiordland National Park, a UNESCO World Heritage Site, from hiking trails or a boat on Milford Sound. At night, journey to the University of Canterbury's Mount John Observatory to gaze at the starry skies. You can also indulge your inner daredevil in Queenstown, explore two of the most accessible glaciers in the world on the island's west coast or sample delicious food and wine in the Marlborough region.",
        likes: 1000,
        reviews: "Very Beautiful! Wish I could live there!", 
    },
    {
        name: 'The City of Love, Paris' ,
        location: 'Paris, France' ,
        img: 'https://travel.usnews.com/dims4/USNEWS/c5a8f6d/2147483647/resize/445x280^%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-532590277_2ZNe4ra.jpg',
        description: "The magnetic City of Light draws visitors from around the globe who come to see iconic attractions like the Eiffel Tower, the Louvre and the Arc de Triomphe. But what travelers really fall in love with are the city's quaint cafes, vibrant markets, trendy shopping districts and unmistakable je ne sais quoi charm. Get lost wandering along Paris' cobblestone streets, or grab a croissant and relax on the banks of the Seine for hours. If you're up for a quick daytrip, head about 15 miles southwest of the city center to another must-see attraction: the Palace of Versailles.",
        likes: 4200,
        reviews: "The view from the top of the Effiel Tower is mesmerizing, you can really appreciate the beauty of Paris from the top."
    },
    {
        name: 'Bora Bora',
        location: 'French Polynesia',
        img: 'https://travel.usnews.com/dims4/USNEWS/472cf27/2147483647/resize/445x280^%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/borabora_445x280_dtTOVY1.jpg',
        description: "What this small French Polynesian island may lack in size it makes up for in sheer tropical beauty. Here, you'll find picturesque beaches, lush jungles and luxurious resorts. The island's dormant volcano, Mount Otemanu, makes for a great photo-op or challenging hike, and the friendly Bora Bora locals can help you catch a glimpse of the island's best sights during an off-road excursion. To relax, head to Matira Beach for crystal-clear water and soft sand. Although a trip to Bora Bora is very expensive, most travelers say it's worth every penny.",
        likes: 6942,
        reviews: "This trip cost me an arm and a leg but I'm willing to give my other ones to go back."
    },
    {
        name: 'Maui',
        location: "Hawaii, United States ",
        img: 'https://travel.usnews.com/dims4/USNEWS/070489a/2147483647/resize/445x280^%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/GettyImages-117211856_TeGITRy.jpg',
        description: "Whether you're driving along the Road to Hana, enjoying a bird's-eye view of the lush coastline from a helicopter, snorkeling with sea turtles or simply relaxing on the Hawaiian island's honey- or black-colored beaches, you'll find that Maui is unlike any other tropical destination. Don't miss a chance to visit Haleakala National Park, which is home to the world's largest dormant volcano. You should also attend a luau for a dose of local culture and a taste of Hawaiian specialties like poi, poke and mahimahi.",
        likes: 4444,
        reviews: "Stunning views and wonderful local culture. Makes me want to stay forever."
    },
    {
        name: 'Tahiti',
        location: "French Polynesia",
        img: 'https://travel.usnews.com/dims4/USNEWS/a600cb2/2147483647/resize/445x280^%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/tahiti_main_getty_samantha_t_photography_edited_445x280_v43QKbF.jpg',
        description: "Travel to this island – the largest in French Polynesia – if you've been dreaming of a vacation spent lazing in a lavish overwater bungalow. Beyond the posh resorts, Tahiti boasts black sand beaches, a bustling capital and prime snorkeling and surfing conditions. If you're looking for more cultural experiences, check out some of the island's ancient temples or shop at its traditional covered markets. To save money, opt to stay in a vacation rental." ,
        likes: 8791,
        reviews: "I got to visit the place Dutch keep saying everyone would escape to... and I have to say. It's pretty good."
    },
    {
        name: 'London',
        location: "United Kingdom",
        img: 'https://travel.usnews.com/dims4/USNEWS/0e6734a/2147483647/resize/445x280^%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/482151882_HjS9rWb.jpg',
        description: "London is a world unto itself. The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If it's your first time in London, plan to visit the Tower of London, Tate Modern, Buckingham Palace or the British Museum before sitting down to a classic afternoon tea. The best time to travel to London is during the warmer months, but be warned that this is also the busiest and most expensive time of year" ,
        likes: 9612,
        reviews: "Her majesty the queen lives in a beautiful home."
    },
    {
        name: 'Rome',
        location: "Italy",
        img: 'https://travel.usnews.com/dims4/USNEWS/981979e/2147483647/resize/445x280^%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_image_cropped_rome_445x280_f0qQD4i.jpg',
        description: "When you visit the Eternal City, prepare to cross a few must-see attractions – including the Colosseum, the Trevi Fountain and the Pantheon – off of your bucket list. Additional treasures, such as St. Peter's Basilica and the Sistine Chapel, can be found in nearby Vatican City. Escape the tourist crowds by taking a twilight stroll along the cobblestone streets of Trastevere, or head to Mercato Centrale Roma to sample local delicacies like gelato and pizza. Before leaving, peruse some of Rome's lesser-known museums, art galleries and boutiques." ,
        likes: 5210,
        reviews: "The Eternal City lives up to its expectation. The food is much lighter compared its American counter part but to me its much preferrable."
    },
    {
        name: 'Tokyo',
        location: "Japan",
        img: 'https://travel.usnews.com/dims4/USNEWS/41b8fe6/2147483647/resize/445x280^%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-edited_445x280_13NCYXq.jpg',
        description: "Simply setting foot in Japan's cosmopolitan capital is an experience within itself. A city known for its bustling streets and flashing neon signs, Tokyo has an electric energy and plenty of attractions to discover. Foodies won't be let down by the city's fresh sushi and hearty ramen. Budding photographers and adrenaline junkies will love taking in the sweeping panoramas from the top of the Tokyo Skytree. Shopaholics will find plenty of must-have designer products in Ginza. And for history buffs, Tokyo offers centuries-old temples and shrines to explore. " ,
        likes: 99999,
        reviews: "A little different from how I pictured it in Fast and The Furious but none the less. The city contains tons of different places to see and things to do for tourists. For a weeb like me you can say I have acsended."
    },
    {
        name: 'Barcelona',
        location: "Spain",
        img: 'https://travel.usnews.com/dims4/USNEWS/1894bcf/2147483647/resize/445x280^%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gett1_445x280_S9ZiJnK.jpg',
        description: "This Spanish city is a feast for the eyes: Visitors can walk past medieval architecture in the Barri Gòtic, snap photos of the intricate Basilica de la Sagrada Família and marvel at Antoni Gaudí's whimsical creations in Park Güell. La Barceloneta beach and the Parc de la Ciutadella are perfect places to pass the time on a sunny day before checking out the restaurants and bars along Las Ramblas, which buzzes at all hours of the night. For travelers who want to see Barcelona from above, trek up Mount Tibidabo or to the Bunkers del Carmel." ,
        likes: 8791,
        reviews: "The sights, the beaches, the FOOD! What more can you ask for from a European city!"
    },
    {
        name: 'Glacier National Park',
        location: "Montana, USA",
        img: 'https://travel.usnews.com/dims4/USNEWS/49f7191/2147483647/resize/445x280^%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_getty_resized_445x280_b8LdAje.jpg',
        description: "Snow-capped peaks and azure lakes are just two reasons why Glacier National Park is one of America's most striking parks. There are more than 700 miles of hiking trails in this Montana park, plus 13 designated areas for camping. In winter, travelers can enjoy snowshoeing and skiing, while summer is when vacationers can go swimming and whitewater rafting, among other popular activities. For those who'd rather admire their surroundings from their car, a scenic drive along Going-to-the-Sun Road can't be missed." ,
        likes: 2665,
        reviews: "This place is jaw droppingly stunning. If you're one to take in the sights and you don't mind a bit of wild life then this is definitely a place you should visit. The beauty of Mother Earth is on full display here."
    },
])