import React, { useEffect } from "react";
import { Popover, OverlayTrigger, Card, Col, Button } from "react-bootstrap";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Details = React.forwardRef(
  ({ popper, content, show: _, ...props }, ref) => {
    useEffect(() => {
      popper.scheduleUpdate();
    }, [content, popper]);

    return (
      <Popover ref={ref} content {...props}>
        {content.desc ? (
          <Popover.Title>
            {content.desc.split("\n").map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </Popover.Title>
        ) : null}
        <Popover.Content>
          <h5>Technology/Libraries:</h5>
          <ul>
            {content.tech.map((lib) => (
              <li dangerouslySetInnerHTML={{ __html: lib }} />
            ))}
          </ul>
        </Popover.Content>
        <Popover.Title>
          {content.links && (
            <ul style={{ marginBottom: 0 }}>
              {content.links.map((link, index) => (
                <li key={index}>
                  <a target="_blank" rel="noopener noreferrer" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Popover.Title>
      </Popover>
    );
  }
);

const Project = ({ img, title, content, imgStyle }) => (
  <Col align="center">
    <Card style={{ width: "18rem", marginBottom: "32px" }}>
      <Zoom wrapStyle={{margin: "0 auto"}}>
        <Card.Img style={imgStyle} variant="top" src={img} />
      </Zoom>
      <Card.Body style={{ borderTop: "1px black solid" }}>
        <Card.Title>
          <OverlayTrigger
            trigger="focus"
            overlay={<Details content={content} />}
            placement="bottom"
          >
            <Button variant="dark">{title}</Button>
          </OverlayTrigger>
        </Card.Title>
      </Card.Body>
    </Card>
  </Col>
);

export default Project;
