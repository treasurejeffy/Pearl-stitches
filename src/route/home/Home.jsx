import React, { useEffect, useState }  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,  Row, Col, Button, Form} from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../home/home.css';
import Footer from "../../components/footer/Footer";
import Navabar from "../../components/Navbar/Navbar";

import Banner from '../../assets/banners.png';
import { ReactTyped } from "react-typed";
import { ArrowBarDown, ArrowDown, Download, Facebook, Instagram, Linkedin, Quote, Star, StarFill, Stars, Tiktok, TwitterX, Whatsapp, X } from "react-bootstrap-icons";
// category_Images
import children_img from '../../assets/children.png';
import Jacket_img from '../../assets/jacket.png';
import brides_img from '../../assets/brides.png';
import party_img from '../../assets/party.png';
import causal_img from '../../assets/Casual.png';
import office_img from '../../assets/office.png';
// end of category images

// team images
import CEO from '../../assets/team.png';
import team1 from '../../assets/team1.png';
import team2 from '../../assets/team2.png';
import team3 from '../../assets/team3.png';
import team4 from '../../assets/team4.png';


export default function Home(props) {
    const { deviceType } = props;
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    let key_characters = [
        {
            key: 'Attention to Detail',
            content: 'We have an impeccable eye for detail, ensuring every stitch is perfect and every seam aligns flawlessly.'
        },
        {
            key: 'Creativity',
            content: 'We use our creative attitude for designing unique garments and solving unexpected design challenges with innovative solutions.'
        },
        {
            key: 'Technical Skills',
            content: 'Mastery of sewing techniques, fabric types, and garment construction is our crucial point.Which includes proficiency with both hand sewing and sewing machines.'
        },
        {
            key: 'Patience and Precision',
            content: 'We have the ability to work meticulously and patiently, especially when dealing with intricate patterns and delicate fabrics.'
        },
        {
            key: 'Strong Communication',
            content: 'We use Excellent-communication-skills to understand client requirements and to provide clear guidance on garment care and alterations.'
        },
        {
            key: 'Adaptability',
            content: 'Because of our goal to be the best seamstresses, we adapt to new trends, techniques, and tools, staying updated with the latest in fashion and sewing technology.'
        },
        {
            key: 'Customer Service',
            content: 'A friendly and professional demeanor helps us in building strong relationships with clients, ensuring repeat business and positive word-of-mouth.'
        },
        {
            key: 'Problem-Solving Abilities',
            content: ' Quick thinking and problem-solving skills are the main characters we use for addressing unexpected issues during garment creation or alteration.'
        },
        {
            key: 'Time Management',
            content: 'Efficiently managing time to meet deadlines while maintaining high-quality work makes us different from other seamstress and tailor.'
        },
        {
            key: 'Passion for Fashion',
            content: 'A genuine passion for fashion and garment making drives us continuous improvement and dedication to the craft.'
        }
    ]

    let category_Images = [
        {
            img: children_img, 
            description: 'Beautiful Children Dress'
        },
        {
            img: causal_img, 
            description: 'Casual Dress'
        },
        {
            img: office_img,
            description: 'Office Dress'
        },
        {
            img: party_img,
            description: 'Party Dress'
        },
        {
            img: brides_img,
            description: 'Awesome Wedding Dress'
        },
        {
            img: Jacket_img,
            description: 'Well Fitted Jacket'
        }
    ]

    let team_Images = [
        {
            img: CEO, 
            description: 'Pearl Simdi Japheth "CEO"'
        },
        {
            img: team1, 
            description: 'Chidinma Ubah'
        },
        {
            img: team2,
            description: 'Nmesoma Johnson'
        },
        {
            img: team3,
            description: 'Precious Ejima'
        },
        {
            img: team4,
            description: 'Amarachi Micheal'
        }
    ]

    let customer_feedback = [
        {
            name: 'Mrs Precious J.',
            text: '"The attention to detail is unmatched. My wedding dress fit perfectly and was everything I dreamed of. Highly recommend!"'
        },
        {
            name: 'Miracle V.',
            text: `"Exceptional service and craftsmanship. They transformed my old suit into something that looks brand new. Will definitely return for more alterations."`
        },
        {
            name: 'Sophia L.',
            text: `"Fantastic experience from start to finish. The custom dress they made for my daughter was stunning. The seamstress was professional and so accommodating."`
        },
        {
            name: 'Madam Okorie',
            text: `"Quick, efficient, and top-quality work. My go-to place for any tailoring needs. The team is friendly and always delivers on time."`
        },
        {
            name: 'Mrs Oluchi O.',
            text: `"Impressed with the level of skill and creativity. The bespoke jacket they created for me has become a favorite in my wardrobe."`
        },
        {
            name: 'Mrs Ngozi O.',
            text: `"Amazing customer service. They listened to my ideas and brought them to life perfectly. Great value for such high-quality work."`
        },
        {
            name: 'Isabella K.',
            text: `"They altered my evening gown beautifully. It fit like a glove and was done in record time. Very pleased with the result!"`
        },
        {
            name: 'Ethan P.',
            text: `"Professional and skilled. I had a complicated alteration, and they handled it with ease. The end result was fantastic."`
        },
        {
            name: 'Claire I.',
            text: `"Personalized service at its best. They made sure every detail of my custom dress was perfect. I couldn't be happier!"`
        },
        {
            name: 'Blessing W.',
            text: `"Reliable and talented. I 've taken several pieces here, and they always exceed my expectations. Highly skilled and courteous."`
        }
    ]
        
        
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };

    return(
        <>
            {/* Navbar and banner */}
            <section className="myHomebanner">
                <Navabar/>
                {/* this is the Banner section  start*/}
                <Container>
                    <Row lg={2} sm={2} md={1} xs={1} >
                        <Col className="banner mt-5">
                            <div className={`banner-content ${isLoaded ? 'loaded' : ''}` } >                
                                <h1 className="banner_Headline fs-2">
                                    <ReactTyped strings={[`Elevate Your Style with Custom Tailoring, Experience the Perfect Fit and Unmatched Craftsmanship.`]} typeSpeed={200} />                            
                                </h1>
                                <ul className="my-3">
                                    <li className="fs-6 d-flex  banner_list "> <StarFill className="fs-6 stars mx-2 mt-2"/> Custom Dresses & Jackets</li>
                                    <li className="fs-6 d-flex banner_list"> <StarFill className="fs-6  stars  mx-2 mt-2"/> Expert Alterations</li>
                                    <li className="fs-6 d-flex banner_list"> <StarFill className="fs-6  stars  mx-2 mt-2"/> Bridal & Evening Wear</li>
                                    <li className="fs-6 d-flex banner_list"> <StarFill className="fs-6  stars  mx-2 mt-2"/>Personalized Service</li>
                                </ul> 
                                <Button className="btn  my-5 btn-lg banner_btn d-flex border-0 rounded-0">See More <ArrowDown className="mx-2 mt-2 fs-5 fw-bolder"/> </Button>
                            </div>    
                        </Col>
                        <Col className="banner_col_img d-flex align-items-center pb-5">
                            <img src={Banner} alt="Banner" className="img-fluid banner_img "/>
                        </Col>
                    </Row>
                </Container>
                {/* Banner section end */}                
            </section>

            {/* Key characters section */}
            <section>
                <Container className="key_character_container px-3">
                    <article className="text-center">
                        <h3 className="fs-2">Our Key Characters</h3>
                        <p className="fs-6">"We <span className="text-danger">Pearl-Stitches</span> company try our best not lose these fine characters, Because we are known with them." </p>
                    </article>
                    <Row className="key_character_row mt-5"  xl={5} lg={5} sm={1} md={2} xs={1} >
                        {
                            key_characters.map((key_character,index)=>{
                                return(
                                    <Col key={index} className="mb-3 ">
                                        <article>
                                            <h4 className="d-flex fs-6 fw-bold mb-2"> <Stars className="fs-5 me-1 text-danger"/> {key_character.key}</h4>
                                            <span className="key_content  ">{key_character.content}</span>
                                        </article>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>

            {/* Category section */}
            <section className="category">
                <Container className="px-2 categories_container">
                    <article className="text-center mb-5">
                        <h3 className="fs-2">Our Categories</h3>
                        <p className="fs-6">"Explore our diverse categories to find tailored solutions and premium services designed to meet your unique needs."</p>
                    </article>
                    <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={3500}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={1750}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    >
                        {category_Images.map((images,index)=>{
                            return(
                                <div key={index} className="image-container">
                                    <img src={images.img} alt="Example Image" className="img-fluid cat_img rounded-3"/>
                                    <div className="overlay rounded-2">
                                        <h1 className="text fs-3">{images.description}</h1>
                                        <Button className="hover-button btn btn-light rounded-0 border-0">Order Now!</Button>
                                    </div>
                                </div> 
                            )
                        })}                                             
                    </Carousel>
                </Container>
            </section>

            {/* Our team section */}
            <section>
                <Container className="px-3 our_team_container">
                    <article className="text-center mb-5">
                        <h3 className="fs-3">Our Team</h3>
                        <p>"These are our industrious team members who are working hard to meet our customer need."</p>
                    </article>
                    <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={3500}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={1750}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    >
                        {team_Images.map((images,index)=>{
                            return(
                                <div key={index} className="team-image-container">
                                    <img src={images.img} alt="Example Image" className="img-fluid team_img rounded-2"/>
                                    <div className="team-overlay rounded-2">
                                        <h1 className="text fs-3">{images.description}</h1>
                                    </div>
                                </div> 
                            )
                        })}                                             
                    </Carousel>
                </Container>
            </section>

            {/* customer feedback section */}
            <section className="customer-section">
                <Container className="px-3 customers-container">            
                    <h3 className="text-center mb-5 fs-3">Customer's Feedback!</h3>                       
                    <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={4500}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={1750}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    >
                        {customer_feedback.map((customer,index)=>{
                            return(
                                <div key={index} className="customer-container">
                                    <Quote/>                                
                                    <article className="rounded-2">
                                        <h4 className="fs-6">{customer.name}</h4>
                                        <p>{customer.text}</p>
                                    </article>                                    
                                </div> 
                            )
                        })}                                             
                    </Carousel>
                </Container>
            </section>

            {/* newsletters  section */}
            <section className="px-3 newsletter-section">
                <Container className=" newsletter-container text-center">
                    <h2 className="fs-3">Subscribe To Our NewsLetters</h2>
                    <Row>
                        <Form className='newsletter_form'>
                            <Form.Control type="email" className="form-input rounded-0" placeholder='Enter your Email Address'/>
                            <Button className="border-0 newsletter-btn rounded-0 shadow-none">Subscribe Now!</Button>
                        </Form>
                    </Row>
                </Container>
            </section>

            {/* footer section  */}
           <Footer/>
        </>
    )
}