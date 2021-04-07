# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

About.create(
    tagline: "I'm a software developer based in the SF Bay Area. I get a kick out of building tools to help us reshape our inner and outer worlds.",
    hobbies: "In my spare time I paint and turn leftovers into gold with vermiculture.",
    firstname: "Cam",
    lastname: "Bui"
)

Contact.create(
    site: 'GitHub',
    url: 'https://github.com/ncbui'
)
Contact.create(
    site: 'LinkedIn',
    url: 'https://www.linkedin.com/in/cambui/'
)
Contact.create(
    site: 'CodePen',
    url: 'https://codepen.io/cambui'
)

Project.create(
    name:'',
    description:'',
    github:'',
    demo:''
)
