import React from "react";
import './Articles.css'
import imgone from '../assets/card-img1.png'
import imgtwo from '../assets/card-img2.png'
import imgthree from '../assets/card-img3.png'
import imgfour from '../assets/card-img4.png'
import imgfive from '../assets/card-img5.png'
import imgsix from '../assets/card-img6.png'
const Articles = () => {
  const article = [
    {
      img: imgone,
      title: "Grilled  Tomatoes at Home"
    },
    {
      img: imgtwo,
      title: "Snacks for Travel"
    },
    {
      img: imgthree,
      title: "Post-workout Recipes"
    },
    {
      img: imgfour,
      title: "How To Grill Corn"
    },
    {
      img: imgfive,
      title: "Crunchwrap Supreme"
    },
    {
      img: imgsix,
      title: "Broccoli Cheese Soup"
    }
  ]
  return (
    <div className="articles">
      <p className="header">Latest Articles</p>
      <div className="card-container">

        {
          article.map((art) => {
            return <MyCard key={art.title} art={art} />

          })
        }
      </div>

    </div>
  );
};

const MyCard = (props) => {
  return (
    <>
      <div className="img-card">
        <img src={props.art.img} alt="img" />
        <p>{props.art.title}</p>
        <p>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
        <button>Show more</button>
      </div>
    </>
  );
};

export default Articles;
