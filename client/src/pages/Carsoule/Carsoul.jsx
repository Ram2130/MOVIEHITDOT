import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel  data-bs-theme="dark">
      <Carousel.Item>
        <img
        style={{Border: "1px solid #ddd",
          BorderRadius: "4px",
          Padding: "5px",
          height:"500px",
          width:"300px",
        }}
          className="d-block w-100"
          src="./images/saree/fashion.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{Border: "1px solid #ddd",
          BorderRadius: "4px",
          Padding: "5px",
          height:"500px",
        }}
          className="d-block w-100"
         src="./images/saree/fashion1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{Border: "1px solid #ddd",
          BorderRadius: "4px",
          Padding: "5px",
          height:"500px",
        }}
          className="d-block w-100"
         src="./images/saree/fashion3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{Border: "1px solid #ddd",
          BorderRadius: "4px",
          Padding: "5px",
          height:"500px",
        }}
          className="d-block w-100"
         src="./images/saree/fashion4.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{Border: "1px solid #ddd",
          BorderRadius: "4px",
          Padding: "5px",
          height:"500px",
        }}
          className="d-block w-100"
         src="./images/saree/fashion5.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{Border: "1px solid #ddd",
          BorderRadius: "4px",
          Padding: "5px",
          height:"500px",
        }}
          className="d-block w-100"
         src="./images/saree/fashion6.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{Border: "1px solid #ddd",
          BorderRadius: "4px",
          Padding: "5px",
          height:"500px",
        }}
          className="d-block w-100"
         src="./images/saree/background1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;