// All car imgs have to be imported due to no database being used
import LimoImg from '../images/Cars/Limo.jpg';
import SUVImg from '../images/Cars/SUV.jpg';
import SedanImg from '../images/Cars/Sedan.jpg';
import ShuttleImg from '../images/Cars/Shuttle.jpg';
import SmallBusImg from '../images/Cars/SmallPartyBus.jpg';
import MediumBusImg from '../images/Cars/MediumPartyBus.jpeg';
import LargeBusImg from '../images/Cars/LargePartyBus.jpg';

export let carsArray = [
    {
        id: 1,
        name: "Black Limo",
        type: "Limo",
        carImg: LimoImg,
        reviewNum: 0,
        price: 100,
        peopleNum: 8 
    },
    {
        id: 2,
        name: "SUV For Your Needs",
        type: "SUV",
        carImg: SUVImg,
        reviewNum: 8,
        starNum: 5,
        price: 75,
        peopleNum: 7 
    },
    {
        id: 3,
        name: "Mercedes Sprinter",
        type: "party bus",
        carImg: SmallBusImg,
        reviewNum: 2,
        starNum: 5,
        price: 145,
        peopleNum: 14
    },
    {
        id: 4,
        name: "Black Passenger Party Bus",
        type: "party bus",
        carImg: MediumBusImg,
        reviewNum: 6,
        starNum: 4,
        price: 160,
        peopleNum: 18
    },
    {
        id: 5,
        name: "Luxury Party Bus",
        type: "party bus",
        carImg: LargeBusImg,
        reviewNum: 1,
        starNum: 5,
        price: 235,
        peopleNum: 25
    },
    {
        id: 6,
        name: "White Shuttle",
        type: "shuttle",
        carImg: ShuttleImg,
        reviewNum: 1,
        starNum: 5,
        price: 100,
        peopleNum: 8
    },
    {
        id: 7,
        name: "Sleek Sedan",
        type: "sedan",
        carImg: SedanImg,
        reviewNum: 2,
        starNum: 4,
        price: 65,
        peopleNum: 4
    }
]