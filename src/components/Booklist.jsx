import React from 'react'
import Book from './Book'
import img1 from "../assets/saidumlokundzuli.jpg"
import img2 from "../assets/metro.png"
import img3 from "../assets/heartbones.jpg"


const data = [
  {
  id:1,
  name: "საიდუმლო კუნძული - ჟიულ ვერნი",
  description: "ჟიულ ვერნის კლასიკად ქცეული, საინტერესო და საოცარითავგადასავლებით სავსე რომანი „საიდუმლო კუნძული“ მრავალითაობის მკითხველის უსაყვარლესი საბავშვო წიგნია. შეუძლებელია, , გულგრილად წაიკითხო ტყვეობიდან აეროსტატით გამოქცეული, უკაცრიელ კუნძულზე გამორიყული მამაცი ინჟინერი სმიტისა და მისი ოთხი მეგობრის ამაღელვებელი ამბავი.",
  image: img1
  },
  {
    id:2,
    name: "მეტრო 2034",
    description: "ამბავი 'მეტრო 2033-ით' დაიწყო. ადამიანებმა ომის შემდეგაც ვერაფერი ისწავლეს და მიწის ქვეშ კვლავაც დაუნდობლად განაგრძობენ ერთმანეთის განადგურებას. ციკლის მეორე ნაწილში მთავარი გმირი ჰანტერია, პირველივე წიგნიდან გამორჩეული თითქმის ზებუნებრივი უნარების მქონე გმირი, რომელიც კვლავ იბრძვის, თუმცა საკითხავია, ამჯერად რის მხარეზეა - სიკეთისა თუ ბოროტებს",
    image: img2
    },

    {
      id:3,
      name: "HEARTBONES",
      description: "After a childhood filled with poverty and neglect, Beyah Grim finally has her hard-earned ticket out of Kentucky with a full ride to Penn State. But two months before she's finally free to change her life for the better, an unexpected death leaves her homeless and forced to spend the remainder of her summer in Texas with a father she barely knows.",
      image: img3
      },
]


const booklist = () => {
  function action(name) {
    console.log (`წიგნის სახელია ${name}`)
  }
  return (
    <div>
        <div className="container">
          {data.map((book) => <Book key={book.id} name={book.name} description={book.description} image={book.image} action={action} />)}

        </div>
    </div>
  )
}

export default booklist