import Fashion from "../../assets/images/fashion.jpg";
import Electronics from "../../assets/images/electronics.jpg"
import  Mobiles from "../../assets/images/mobiles.jpg"
import  Footware from "../../assets/images/footware.jpg"
import  Watches from "../../assets/images/watches.jpg"
import  Accessories from "../../assets/images/accessories.jpg"
import Home from "../../assets/images/homeAndLiving.jpg"
import  Beauty from "../../assets/images/beauty.jpg"
const Categories = () => {
  const category=[
    {
      image:Fashion,
      name:"Fashion",
    },
     {
      image:Electronics,
      name:"Electronics",
    },
     {
      image:Mobiles,
      name:"Mobiles",
    },
     {
      image:Footware,
      name:"Footware",
    },
     {
      image:Watches,
      name:"Watches",
    },
     {
      image:Accessories,
      name:"Accessories",
    },
     {
      image:Home,
      name:"Home And Living",
    },
     {
      image:Beauty,
      name:"Beauty",
    }
  ];
  return (
    <div className="flex gap-10">
     {category.map((items)=>(
      <div className="flex flex-col h-48 w-64 text-white bg-amber-300 items-center object-cover font-semibold hover:scale-120 transition:scale-250 rounded"
      key={items.name}
      >
      
        <img src={items.image} alt={items.name} className="w-full h-40 object-cover" />
        <h1>{items.name}</h1>

      </div>
    ))}
    </div>
    
  )
}

export default Categories