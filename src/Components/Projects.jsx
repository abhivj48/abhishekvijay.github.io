import { Card, Carousel } from 'react-bootstrap';
import './Projects.css'
import searchHome from '../search-home.PNG';
import searchIMG from '../search-img.PNG';
import searchNews from '../search-news.PNG';
import searchRecipe from '../search-recipe.PNG';

export default function Projects() {
    return (
        <>
            <div className="topProjects">
                <div className="headLine">
                    <img src="https://i.postimg.cc/BvMgrq3x/output-onlinegiftools.gif" alt="Portfolio" className="portFolioGiff" />
                    <span className="headingOfGiff">Have A Cup of <span className="clrChng">coffee</span> And see My <span className="clrChng">Portfolio</span></span>
                </div>
                <div className="cards">
                    <Card className="card1" >

                        <Card.Body>
                            <Card.Title className="cardTitle">Watch IT Out!</Card.Title>
                            <hr />
                            <Card.Text className="cardParaMobi">
                                <strong>Watch IT Out </strong>is A cinema website. where user find their choice of movies. For More Information/code About This Project See github
                            </Card.Text>
                            <Card.Text className="cardPara">
                                <strong>Watch IT Out </strong>is A cinema website. where user find their choice of movies. For More Information/code About This Project See github
                            </Card.Text>
                            <body>
                                <span className="Demo">Demo:-</span>
                                <br />
                                <br />
                                <embed src="https://crisscross-flowers.000webhostapp.com/" className="embed" />
                                <span className="btnGit"><a href="https://github.com/abhivj48/Watch-it-out"></a></span>
                            </body>
                        </Card.Body>
                    </Card>
                    <Card className="card2" >

                        <Card.Body>
                            <Card.Title className="cardTitle">Search It Quik</Card.Title>
                            <hr />
                            <Card.Text className="cardPara">
                                <strong>Search It Quik </strong>is A web Search engine.Where users get Search result According to their need. Results Will be shown as diffrent reletable links as keyword input which contains images, videos etc..., For More Information/code About This Project See github
                            </Card.Text>
                            <Card.Text className="cardParaMobi">
                                <strong>Search It Quik </strong>is A web Search engine.Where users get Search result According to their need. For More Information/code About This Project See github
                            </Card.Text>
                            <body>
                                <span className="Demo">Project Images:-</span>
                                <br />
                                <br />
                                <Carousel fade variant="dark">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={searchNews}
                                            alt="News Search"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={searchIMG}
                                            alt="img"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={searchRecipe}
                                            alt="recipe"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={searchHome}
                                            alt="home"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                                <span className="btnGit"><a href="https://github.com/abhivj48/"></a></span>
                            </body>
                        </Card.Body>
                    </Card>
                </div>

                <div className="soon">
                    <span className="soonText">More Cool <strong><span className="clrChng"> Projects</span></strong> Coming Soon...</span>
                    <br /><br />
                </div>
            </div>
        </>
    )
}